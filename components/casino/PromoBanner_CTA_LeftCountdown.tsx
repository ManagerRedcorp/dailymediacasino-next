"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Check } from "lucide-react";

const PROMO_HREF = "#";

const STORAGE_KEY = "promo2_cta_24h_end_ts_v1";
const CYCLE_MS = 24 * 60 * 60 * 1000;

const MONTH_START_KEY_PREFIX = "promo2_month_start_v1_";
const MONTH_SEED_PREFIX = "promo2_month_seed_v1_";

function format2(n: number) {
  return String(Math.max(0, Math.floor(n))).padStart(2, "0");
}

function getOrCreateEndTs(): number {
  const now = Date.now();
  const raw = window.localStorage.getItem(STORAGE_KEY);
  const parsed = raw ? Number(raw) : NaN;

  if (!Number.isFinite(parsed) || parsed <= now) {
    const next = now + CYCLE_MS;
    window.localStorage.setItem(STORAGE_KEY, String(next));
    return next;
  }
  return parsed;
}

function hashStringToUint32(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function monthKey(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  return `${y}-${m}`;
}

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1, 0, 0, 0, 0);
}

function daysBetween(a: Date, b: Date) {
  const a0 = new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime();
  const b0 = new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime();
  return Math.max(0, Math.floor((b0 - a0) / 86400000));
}

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getOrCreateMonthStartValue(now: Date) {
  const mk = monthKey(now);
  const key = `${MONTH_START_KEY_PREFIX}${mk}`;
  const raw = window.localStorage.getItem(key);
  const parsed = raw ? Number(raw) : NaN;

  if (Number.isFinite(parsed)) return { mk, start: parsed };

  const start = randomInt(50, 80);
  window.localStorage.setItem(key, String(start));
  return { mk, start };
}

function getOrCreateMonthSeed(now: Date) {
  const mk = monthKey(now);
  const key = `${MONTH_SEED_PREFIX}${mk}`;
  const raw = window.localStorage.getItem(key);

  if (raw && raw.length > 0) return { mk, seed: raw };

  const seed = `${mk}:${randomInt(100000, 999999)}`;
  window.localStorage.setItem(key, seed);
  return { mk, seed };
}

function computeMonthlyJoiners(now: Date) {
  const { start } = getOrCreateMonthStartValue(now);
  const { seed } = getOrCreateMonthSeed(now);

  const mStart = startOfMonth(now);
  const d = daysBetween(mStart, now);

  let total = start;

  for (let day = 1; day <= d; day++) {
    const rng = mulberry32(hashStringToUint32(`${seed}:${day}`));
    const inc = 20 + Math.floor(rng() * 31);
    total += inc;
  }

  return { value: total };
}

function TwoDigitSlide({ value }: { value: string }) {
  const v = value.length === 2 ? value : format2(Number(value || 0));
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <span className="promo2t_value">
      <span
        className="promo2t_track"
        style={
          reducedMotion
            ? undefined
            : {
                transform: `translateY(calc(-1 * var(--promo2t-index) * 100%))`,
              }
        }
      >
        {Array.from({ length: 100 }).map((_, i) => {
          const label = String(i).padStart(2, "0");
          return (
            <span key={label} className="promo2t_row">
              {label}
            </span>
          );
        })}
      </span>

      {reducedMotion ? <span className="promo2t_static">{v}</span> : null}
    </span>
  );
}

export default function PromoBanner_CTA_LeftCountdown() {
  const [endTs, setEndTs] = useState<number>(() => Date.now() + CYCLE_MS);
  const [nowTs, setNowTs] = useState<number>(() => Date.now());
  const rolledRef = useRef(false);

  const [joiners, setJoiners] = useState<number>(0);

  useEffect(() => {
    const ensured = getOrCreateEndTs();
    setEndTs(ensured);

    setJoiners(computeMonthlyJoiners(new Date()).value);

    const t = window.setInterval(() => {
      const now = Date.now();
      setNowTs(now);

      if (now % 30000 < 260) {
        setJoiners(computeMonthlyJoiners(new Date()).value);
      }
    }, 250);

    return () => window.clearInterval(t);
  }, []);

  useEffect(() => {
    if (nowTs >= endTs && !rolledRef.current) {
      rolledRef.current = true;
      const next = Date.now() + CYCLE_MS;
      window.localStorage.setItem(STORAGE_KEY, String(next));
      setEndTs(next);
      window.setTimeout(() => (rolledRef.current = false), 500);
    }
  }, [nowTs, endTs]);

  const timeLeft = useMemo(() => {
    const ms = Math.max(0, endTs - nowTs);
    const totalSeconds = Math.floor(ms / 1000);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      hoursStr: format2(hours),
      minutesStr: format2(minutes),
      secondsStr: format2(seconds),
    };
  }, [endTs, nowTs]);

  const hoursIndex = Number(timeLeft.hoursStr);
  const minutesIndex = Number(timeLeft.minutesStr);
  const secondsIndex = Number(timeLeft.secondsStr);
  return (
    <section className="promo2_wrap" aria-label="Limited-time casino offer">
      <a
        className="promo2_bg promo2_clickWrap"
        href={PROMO_HREF}
        target="_blank"
        rel="noopener noreferrer sponsored"
        style={{ backgroundImage: `url(/images/cta-hero-2.webp)` }}
        aria-label="Visit BetMGM Casino - limited time offer"
      >
        <div className="promo2_overlay" />
        <div className="promo2_overlayMd" />

        <div className="promo2_inner">
          <div className="promo2_content">
            <h3 className="promo2_title">
              Join the #1 Online casino in the US{" "}
              <span className="promo2_titleAccent">
                and get 100% Deposit match up to $1000 + $25
              </span>
            </h3>

            <div className="promo2_prosInline" aria-label="Top benefits">
              <div className="promo2_proItem">
                <Check className="promo2_proCheck" size={16} />
                <span>Fast payouts</span>
              </div>
              <div className="promo2_proItem">
                <Check className="promo2_proCheck" size={16} />
                <span>Mobile-friendly</span>
              </div>
              <div className="promo2_proItem">
                <Check className="promo2_proCheck" size={16} />
                <span>Weekly free rewards</span>
              </div>
            </div>

            <div className="promo2_timerRow3" aria-label="Countdown timer">
              <div
                className="promo2t_value"
                style={{ ["--promo2t-index" as string]: hoursIndex }}
              >
                <TwoDigitSlide value={timeLeft.hoursStr} />
                <span className="promo2t_unit">HRS</span>
              </div>

              <div
                className="promo2t_value"
                style={{ ["--promo2t-index" as string]: minutesIndex }}
              >
                <TwoDigitSlide value={timeLeft.minutesStr} />
                <span className="promo2t_unit">MIN</span>
              </div>

              <div
                className="promo2t_value"
                style={{ ["--promo2t-index" as string]: secondsIndex }}
              >
                <TwoDigitSlide value={timeLeft.secondsStr} />
                <span className="promo2t_unit">SEC</span>
              </div>
            </div>

            <div className="promo2_actionRow">
              <span className="promo2_ctaLink" aria-hidden="true">
                <span
                  className="
                    btn-light-sweep inline-flex w-full items-center justify-center
                    rounded-full
                    promo2_greenCta
                    px-6 py-4
                    text-base font-semibold
                    text-white
                    shadow-lg
                    transition-transform
                    hover:scale-[1.02]
                    active:scale-[0.98]
                  "
                >
                  Play now
                </span>
              </span>

              <span className="promo2_sep" aria-hidden="true" />

              <div
                className="promo2_joinedText"
                aria-label="New players joined"
              >
                <span className="promo2_liveDot" aria-hidden="true" />
                <span className="promo2_joinedValue">{joiners}</span>{" "}
                <span className="promo2_joinedRest">
                  New players joined this month
                </span>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .promo2_wrap{ width: 100%; }

          .promo2_clickWrap{
            display: block;
            text-decoration: none;
            color: inherit;
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
          }

          .promo2_bg{
  position: relative;
  width: 100%;
  min-height: 220px;
  border-radius: 18px;
  overflow: hidden;
  margin: 20px 0;

  background-repeat: no-repeat;

  background-position: right center;
  background-size: auto 100%;

  background-color: hsl(var(--casino-darker));
}


          .promo2_overlay{
            position: absolute;
            inset: 0;
            pointer-events: none;
            background:
              radial-gradient(120% 90% at 30% 45%, rgb(51 73 231 / 68%) 0%, rgb(219 219 255 / 0%) 45%, rgb(241 36 178 / 0%) 100%),
              linear-gradient(90deg, rgb(241 12 223 / 78%) 0%, rgb(255 90 226 / 0%) 60%, rgb(0 0 0 / 0%) 100%);
          }

          .promo2_inner{
            position: relative;
            z-index: 1;
            width: 100%;
            height: 100%;
            padding: 18px;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            pointer-events: none;
          }

          .promo2_content{
            max-width: 840px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            text-align: left;
          }

          .promo2_title{
            margin: 0;
            color: white;
            font-size: 26px;
            font-weight: 800;
            line-height: 105%;
            text-shadow: 0 10px 30px rgba(0,0,0,.55);
          }

          .promo2_titleAccent{ color: #61e100 }

          .promo2_prosInline{
            display: flex;
            align-items: center;
            gap: 18px;
            flex-wrap: wrap;
            margin: 10px 0;
          }

          .promo2_proItem{
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: white;
            font-size: 14px;
            font-weight: 700;
            line-height: 1;
            white-space: nowrap;
          }

          .promo2_proCheck{
            color: #22c55e;
            flex: 0 0 auto;
            filter: drop-shadow(0 6px 18px rgba(34,197,94,.25));
          }

          .promo2_timerRow3{
            width: 100%;
            max-width: 320px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
          }

          .promo2_timerRow3 > .promo2t_value{
            position: relative;
            overflow: hidden;
            isolation: isolate;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;

            height: 40px;
            border-radius: 5px;
            border: 1px solid rgba(255,255,255,.14);
            backdrop-filter: blur(8px);
            padding: 0 12px;
          }

          .promo2_timerRow3 > .promo2t_value::after{
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 3;
            background:
              linear-gradient(180deg, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 60%),
              linear-gradient(90deg, rgba(255,255,255,.06) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,.04) 70%, rgba(255,255,255,0) 100%);
            opacity: .85;
          }
          .promo2_greenCta{
  background: #45ff32;
  color:black
}

.promo2_greenCta{
  box-shadow:
    0 14px 30px rgba(69,255,50,.28),
    0 6px 14px rgba(0,0,0,.25);
}

          .promo2t_unit{
            position: relative;
            z-index: 2;
            font-size: 11px;
            font-weight: 900;
            letter-spacing: 1px;
            color: rgba(255,255,255,.75);
            line-height: 1;
            transform: translateY(1px);
          }

          .promo2_timerRow3 > .promo2t_value > .promo2t_value{
            position: relative;
            z-index: 2;
            width: 44px;
            height: 28px;
            background: transparent;
            border: none;
            box-shadow: none;
            border-radius: 0;
            overflow: hidden;
          }

          .promo2t_track{
            position: absolute;
            inset: 0;
            display: grid;
            grid-auto-rows: 28px;
            will-change: transform;
            transition: transform 520ms cubic-bezier(.2,.9,.2,1);
          }

          .promo2t_row{
            height: 28px;
            display: grid;
            place-items: center;
            color: white;
            font-size: 20px;
            font-weight: 900;
            letter-spacing: 1px;
            line-height: 1;
          }

          .promo2t_static{
            position: absolute;
            inset: 0;
            display: grid;
            place-items: center;
            color: hsl(var(--foreground));
            font-size: 20px;
            font-weight: 900;
            letter-spacing: 1px;
            line-height: 1;
          }

          .promo2_actionRow{
            display: flex;
            align-items: center;
            gap: 14px;
            margin-top: 4px;
            max-width: 680px;
          }

          .promo2_ctaLink{
            display: block;
            width: 210px;
            max-width: 100%;
            text-decoration: none;
            flex: 0 0 auto;
          }

          .promo2_sep{
            width: 1px;
            height: 42px;
            background: rgba(255,255,255,.22);
            flex: 0 0 auto;
          }

          .promo2_joinedText{
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: rgba(255,255,255,.86);
            font-size: 13px;
            font-weight: 700;
            line-height: 1.2;
            text-shadow: 0 10px 24px rgba(0,0,0,.45);
            flex-wrap: wrap;
          }

          .promo2_liveDot{
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: #22c55e;
            box-shadow: 0 0 0 0 rgba(34,197,94,.65);
            animation: promo2_pulse 1.35s ease-in-out infinite;
            flex: 0 0 auto;
          }

          @keyframes promo2_pulse{
            0%   { transform: scale(.95); box-shadow: 0 0 0 0 rgba(34,197,94,.55); }
            70%  { transform: scale(1);   box-shadow: 0 0 0 10px rgba(34,197,94,0); }
            100% { transform: scale(.95); box-shadow: 0 0 0 0 rgba(34,197,94,0); }
          }

          .promo2_joinedValue{
            color: #fff;
            font-weight: 900;
          }

          .promo2_joinedRest{
            color: rgba(255,255,255,.78);
            font-weight: 700;
          }

          @media (max-width: 900px){
            .promo2_bg{ min-height: 240px; }
            .promo2_inner{ padding: 16px; }
            .promo2_title{ font-size: 22px; }
            .promo2_timerRow3{ max-width: 100%; }
            .promo2_actionRow{ max-width: 100%; }
          }

          @media (max-width: 640px){
            .promo2_bg{
              border-radius: 16px;

              background-position: 55% center;
            }

            .promo2_inner{ padding: 14px; }
            .promo2_title{ font-size: 20px; }

            .promo2_prosInline{ gap: 12px; }
            .promo2_proItem{ font-size: 13px; }

            .promo2_timerRow3{
              width: 100%;
              gap: 8px;
            }

            .promo2_timerRow3 > .promo2t_value{
              height: 48px;
              padding: 0 10px;
              border-radius: 14px;
              gap: 8px;
            }

            .promo2_timerRow3 > .promo2t_value > .promo2t_value{
              width: 42px;
              height: 26px;
            }

            .promo2t_track{ grid-auto-rows: 26px; }

            .promo2t_row, .promo2t_static{
              height: 26px;
              font-size: 18px;
            }

            .promo2t_unit{ font-size: 10px; }

            .promo2_actionRow{
              flex-direction: column;
              align-items: stretch;
              gap: 10px;
            }

            .promo2_ctaLink{ width: 100%; }

            .promo2_sep{
              width: 100%;
              height: 1px;
            }

            .promo2_joinedText{
              justify-content: flex-start;
              font-size: 13px;
            }
          }

.promo2_overlayMd{
  display: none;
}

@media (max-width: 900px){
  .promo2_overlayMd{
    display: block;
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;

    background:
      linear-gradient(
        90deg,
        rgba(0,0,0,.70) 0%,
        rgba(0,0,0,.70) 40%,
        rgba(0,0,0,.70) 70%,
        rgba(0,0,0,0) 100%
      );
  }
}

@media (max-width: 640px){
  .promo2_overlayMd{
    background:
      linear-gradient(
        90deg,
        rgba(0,0,0,.70) 0%,
        rgba(0,0,0,.70) 42%,
        rgba(0,0,0,.72) 74%,
        rgba(0,0,0,0) 100%
      );
  }
}

        `}</style>
      </a>
    </section>
  );
}
