"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Star, X, Check } from "lucide-react";

/**
 * ✅ This modal now pulls its brand data from TopRankingPremium.tsx
 * so updating that file updates this modal automatically.
 *
 * Requirement:
 * - Export your datasets from TopRankingPremium.tsx:
 *   export const CASINOS: CasinoItem[] = [...]
 *   export const SPORTSBOOKS: CasinoItem[] = [...]
 *
 * If your TopRankingPremium.tsx currently keeps them non-exported,
 * just change `const` to `export const`.
 */

// ✅ Import the source-of-truth datasets (adjust the path!)
import { CASINOS, SPORTSBOOKS } from "@/components/casino/TopRankingPremium";

type SpecialLabel = "EDITOR'S PICK" | "TRENDING" | "NEW" | "HOT" | null;
type PaymentType = "visa" | "mastercard" | "paypal" | "applepay" | "googlepay";

type CasinoItem = {
  id: number;
  rank: number;
  name: string;
  logoSrc?: string;
  offerTitle: string;
  offerSubtitle?: string;
  score: number;
  starRating: 1 | 2 | 3 | 4 | 5;
  features: string[];
  ctaUrl: string;
  termsText: string;
  specialLabel?: SpecialLabel;
  payments?: PaymentType[];
};

function labelStyle(label?: SpecialLabel) {
  switch (label) {
    case "EDITOR'S PICK":
      return "trp_label trp_label--pick";
    case "TRENDING":
      return "trp_label trp_label--trending";
    case "HOT":
      return "trp_label trp_label--hot";
    case "NEW":
      return "trp_label trp_label--new";
    default:
      return "trp_label trp_label--neutral";
  }
}

function Stars({ value }: { value: number }) {
  const v = Math.max(0, Math.min(5, value));
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={["h-4 w-4", i < v ? "trp_starOn" : "trp_starOff"].join(
            " "
          )}
          fill={i < v ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

export default function TopRankingPremiumTop3Modal() {
  // ✅ Detect sportsbooks page
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";
  const isSportsbooksPage = pathname === "/sportsbooks";

  // ✅ Choose the same dataset logic as TopRankingPremium
  const dataset = (isSportsbooksPage ? SPORTSBOOKS : CASINOS) as CasinoItem[];

  const top3 = useMemo(
    () => [...dataset].sort((a, b) => a.rank - b.rank).slice(0, 3),
    [dataset]
  );

  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [active, setActive] = useState(0);
  const openedRef = useRef(false);

  // autoplay
  const autoTimerRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);

  // swipe (mobile)
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  // 🔧 reduce/raise autoplay delay here
  const AUTOPLAY_MS = 4000;

  // ✅ keep active index valid if dataset changes
  useEffect(() => {
    setActive(0);
  }, [isSportsbooksPage]);

  const isMobileNow = () => {
    if (typeof window === "undefined") return false;
    const mq = window.matchMedia?.("(max-width: 640px)");
    return mq ? mq.matches : window.innerWidth <= 640;
  };

  const stopAutoplay = () => {
    if (autoTimerRef.current) window.clearInterval(autoTimerRef.current);
    autoTimerRef.current = null;
  };

  const startAutoplay = () => {
    stopAutoplay();
    if (!open) return;
    if (!isMobileNow()) return;

    autoTimerRef.current = window.setInterval(() => {
      if (isPausedRef.current) return;
      setActive((p) => (p + 1) % Math.max(1, top3.length));
    }, AUTOPLAY_MS);
  };

  const pauseAutoplayTemporarily = (ms = 8000) => {
    isPausedRef.current = true;
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => {
      isPausedRef.current = false;
    }, ms);
  };

  const goPrev = () => {
    setActive((p) => (p - 1 + top3.length) % top3.length);
    pauseAutoplayTemporarily(9000);
  };

  const goNext = () => {
    setActive((p) => (p + 1) % top3.length);
    pauseAutoplayTemporarily(9000);
  };

  // open at 75% scroll, only once per session
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (dismissed) return;

    openedRef.current = false;

    const onScroll = () => {
      if (openedRef.current || dismissed) return;

      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
      const progress = scrollTop / maxScroll;

      if (progress >= 0.75) {
        openedRef.current = true;
        setOpen(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  // esc close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); setDismissed(true); };
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // autoplay lifecycle
  useEffect(() => {
    if (!open) return;

    startAutoplay();
    const onResize = () => startAutoplay();
    window.addEventListener("resize", onResize);

    return () => {
      stopAutoplay();
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, top3.length]);

  // swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    pauseAutoplayTemporarily(9000);
    const t = e.touches?.[0];
    if (!t) return;
    touchStartXRef.current = t.clientX;
    touchStartYRef.current = t.clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const t = e.changedTouches?.[0];
    if (!t) return;

    const sx = touchStartXRef.current;
    const sy = touchStartYRef.current;
    touchStartXRef.current = null;
    touchStartYRef.current = null;

    if (sx == null || sy == null) return;

    const dx = t.clientX - sx;
    const dy = t.clientY - sy;

    // only treat it as a swipe if mostly horizontal
    if (Math.abs(dy) > Math.abs(dx)) return;

    if (dx > 45) goPrev();
    if (dx < -45) goNext();
  };

  if (!open) return null;

  const modalTitle = isSportsbooksPage
    ? "Top 3 US Sportsbook Bonuses"
    : "Top 3 US Casino Bonuses";

  return (
    <div
      className="trp_modalRoot"
      role="complementary"
      aria-label="Top 3 casino bonuses"
    >
      <div className="trp_panelWrap">
        <div className="trp_panel">
          <button
            className="trp_close"
            onClick={() => { setOpen(false); setDismissed(true); }}
            aria-label="Close popup"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="trp_header">
            <div className="trp_kicker">Limited picks</div>
            <h3 className="trp_title">{modalTitle}</h3>
            <p className="trp_sub">
              Premium welcome deals, clearer terms, and faster cashouts. Compare
              quickly and pick your bonus.
            </p>
          </div>

          <div
            className="trp_carouselWrap"
            onPointerDown={() => pauseAutoplayTemporarily(8000)}
            onWheel={() => pauseAutoplayTemporarily(8000)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="trp_cards">
              {top3.map((casino, i) => {
                const isActive = i === active;
                return (
                  <a
                    key={casino.id}
                    href={casino.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      "trp_card",
                      "trp_cardLink",
                      isActive ? "is-active" : "",
                    ].join(" ")}
                    aria-label={`${casino.name} bonus`}
                  >
                    <div className="trp_cardTop">
                      <div className="trp_rankPill" data-rank={casino.rank}>#{casino.rank}</div>
                      <div className={labelStyle(casino.specialLabel)}>
                        {casino.specialLabel ?? "TOP PICK"}
                      </div>
                    </div>

                    <div className="trp_logoWrap">
                      <img
                        src={casino.logoSrc ?? "/images/brand-placeholder.svg"}
                        alt={casino.name}
                        className="trp_logo"
                        loading="lazy"
                      />
                      <div className="trp_logoShade" />
                    </div>

                    <div className="trp_offer mb-2">
                      <div className="trp_offerTitle">
                        {casino.offerTitle}
                        {casino.offerSubtitle ? (
                          <span className="trp_offerSubInline">
                            {" "}
                            {casino.offerSubtitle}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <div className="trp_ratingRow">
                      <div className="trp_score">
                        <Star
                          className="h-3.5 w-3.5 trp_scoreStar"
                          fill="currentColor"
                        />
                        {casino.score.toFixed(1)} / 10
                      </div>
                    </div>

                    {/* ✅ stacked pros with check icon */}
                    <div className="trp_features">
                      {casino.features.slice(0, 4).map((f) => (
                        <div key={f} className="trp_proItem">
                          <Check className="trp_proIcon" />
                          <span className="trp_proText">{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="trp_cta">
                      <span className="trp_btn">Get Bonus</span>
                      <div className="trp_terms">
                        21+. T&amp;Cs apply. Gamble responsibly.
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="trp_dots" aria-label="Carousel pagination">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                className={["trp_dot", i === active ? "is-active" : ""].join(
                  " "
                )}
                onClick={() => {
                  setActive(i);
                  pauseAutoplayTemporarily(9000);
                }}
                aria-label={`Show card ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Palette tuned to match your screenshot */
        .trp_modalRoot{
          --trp-bg-0: #07091f;         /* deep navy */
          --trp-bg-1: #0d1530;         /* panel navy */
          --trp-bg-2: #111d3e;         /* card navy */
          --trp-line: rgba(255,255,255,.12);
          --trp-line-2: rgba(255,255,255,.16);
          --trp-text: rgba(255,255,255,.92);
          --trp-text-2: rgba(255,255,255,.74);
          --trp-text-3: rgba(255,255,255,.60);

          --trp-green: #26ff5a;        /* neon green accents */
          --trp-green-2: rgba(38,255,90,.18);

          --trp-cta-1: #f0a020;        /* amber CTA */
          --trp-cta-2: #f5b840;        /* amber highlight */

          --trp-chip-bg: rgba(255,255,255,.08);
          --trp-chip-line: rgba(255,255,255,.12);
        }

        .trp_modalRoot{
          position: fixed; bottom: 0; left: 0; right: 0;
          z-index: 9999; pointer-events: none;
        }

        .trp_panelWrap{
          width: min(1100px, calc(100% - 24px));
          margin: 0 auto 12px;
          pointer-events: auto;
        }

        .trp_panel{
          position: relative; overflow: hidden;
          border-radius: 22px;
          border: 1px solid var(--trp-line);
          background: linear-gradient(180deg, rgba(13,21,48,.97) 0%, rgba(7,11,28,.97) 100%);
          box-shadow: 0 24px 80px rgba(0,0,0,.65);
          padding: 14px 16px 12px;
          animation: trp_in .4s cubic-bezier(.2,.9,.2,1) both;
        }

        /* neon casino glow behind panel */
        .trp_panel::before{
          content:""; position:absolute; inset:-120px; pointer-events:none;
          background:
            radial-gradient(680px 380px at 14% 12%, rgba(249, 184, 28, .18) 0%, rgba(249, 184, 28, 0) 60%),
            radial-gradient(620px 420px at 86% 36%, rgba(118, 67, 248, .16) 0%, rgba(118, 67, 248, 0) 60%);
          opacity: .85;
        }

        @keyframes trp_in{
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }

        .trp_close{
          position: absolute; top: 12px; right: 12px;
          height: 34px; width: 34px; border-radius: 12px;
          border: 1px solid var(--trp-line);
          background: rgba(255,255,255,.08);
          color: rgba(255,255,255,.92);
          display: grid; place-items: center;
          cursor: pointer; z-index: 6;
        }
        .trp_close:hover{ background: rgba(255,255,255,.12); border-color: var(--trp-line-2); }

        .trp_header{ padding-right: 44px; position: relative; z-index: 1; }
        .trp_kicker{
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 900;
          letter-spacing: .12em; text-transform: uppercase;
          color: rgba(255,255,255,.78);
        }
        .trp_title{
          margin: 6px 0 4px;
          color: var(--trp-text);
          font-size: 20px; font-weight: 950;
          letter-spacing: -0.02em;
        }
        .trp_sub{
          margin: 0; color: var(--trp-text-2);
          font-size: 13px; line-height: 1.35; max-width: 760px;
        }

        .trp_carouselWrap{ position: relative; margin-top: 12px; z-index: 1; }

        .trp_cards{
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .trp_cardLink{ text-decoration: none; color: inherit; }
        .trp_card{
          position: relative; overflow: hidden;
          border-radius: 18px;
          border: 1px solid var(--trp-line);
          background: linear-gradient(180deg, rgba(17,29,62,.72) 0%, rgba(13,21,48,.68) 100%);
          box-shadow: 0 18px 50px rgba(0,0,0,.35);
          transition: transform .18s ease, border-color .18s ease;
        }
        .trp_card:hover{ transform: translateY(-2px); border-color: var(--trp-line-2); }

        /* neon casino glow inside cards */
        .trp_card::before{
          content: ""; position: absolute; inset: -2px; pointer-events: none;
          background:
            radial-gradient(80% 80% at 30% 20%, rgba(249, 184, 28, .14) 0%, rgba(0,0,0,0) 62%),
            radial-gradient(80% 80% at 80% 40%, rgba(118, 67, 248, .16) 0%, rgba(0,0,0,0) 60%);
          opacity: .9;
        }

        .trp_cardTop{
          position: relative; z-index: 1;
          display: flex; align-items: center; justify-content: space-between;
          gap: 10px; padding: 10px 10px 8px;
        }
        .trp_rankPill{
          display: inline-flex; align-items: center; justify-content: center;
          height: 24px; padding: 0 10px; border-radius: 999px;
          border: 1px solid var(--trp-line);
          background: rgba(0,0,0,.22);
          color: var(--trp-text);
          font-size: 12px; font-weight: 950;
        }

        .trp_label{
          display: inline-flex; align-items: center;
          height: 24px; padding: 0 10px; border-radius: 999px;
          font-size: 11px; font-weight: 950;
          letter-spacing: .08em; text-transform: uppercase; white-space: nowrap;
          border: 1px solid var(--trp-line);
          background: rgba(0,0,0,.18);
          color: var(--trp-text);
        }
        .trp_label--pick{
          border-color: rgba(38,255,90,.45);
          background: var(--trp-green-2);
          color: var(--trp-green);
        }
        .trp_label--trending{
          border-color: rgba(106,147,255,.45);
          background: rgba(106,147,255,.18);
          color: rgba(185,205,255,.95);
        }
        .trp_label--hot{
          border-color: rgba(255,184,72,.45);
          background: rgba(255,184,72,.16);
          color: rgba(255,214,150,.96);
        }
        .trp_label--new{
          border-color: rgba(196,120,255,.45);
          background: rgba(196,120,255,.16);
          color: rgba(235,205,255,.96);
        }
        .trp_label--neutral{
          border-color: var(--trp-line);
          background: rgba(255,255,255,.08);
          color: rgba(255,255,255,.78);
        }

        .trp_logoWrap{
          position: relative; z-index: 1; margin: 0 10px;
          height: 80px; border-radius: 14px;
          border: 1px solid var(--trp-line);
          background: rgba(0,0,0,.16);
          overflow: hidden;
        }
        .trp_logo{ height: 100%; width: 100%; object-fit: cover; display: block; }
        .trp_logoShade{
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,.08) 0%, rgba(0,0,0,.38) 100%);
          pointer-events: none;
        }

        .trp_offer{ position: relative; z-index: 1; padding: 10px 12px 6px; }
        .trp_offerTitle{ color: var(--trp-text); font-weight: 950; font-size: 14px; line-height: 1.2; }
        .trp_offerSub{ margin-top: 4px; color: rgba(255,255,255,.82); font-weight: 900; font-size: 12px; }

        .trp_ratingRow{
          position: relative; z-index: 1;
          padding: 0 12px 8px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 10px;
        }
        .trp_score{
          display: inline-flex; align-items: center; gap: 6px;
          border-radius: 999px; padding: 6px 10px;
          border: 1px solid var(--trp-line);
          background: rgba(0,0,0,.18);
          color: rgba(255,255,255,.94);
          font-size: 12px; font-weight: 950;
        }
        .trp_scoreStar{ color: hsl(42, 96%, 58%); }

        /* stars */
        .trp_starOn{ color: hsl(42, 96%, 58%); }
        .trp_starOff{ color: rgba(255,255,255,.24); }

        /* rank pill: gold / silver / bronze */
        .trp_rankPill[data-rank="1"]{ border-color: rgba(249,184,28,.55); background: rgba(249,184,28,.12); color: hsl(42,96%,62%); }
        .trp_rankPill[data-rank="2"]{ border-color: rgba(192,192,192,.45); background: rgba(192,192,192,.08); color: #d8d8d8; }
        .trp_rankPill[data-rank="3"]{ border-color: rgba(205,127,50,.45); background: rgba(205,127,50,.08); color: #cd7f32; }

        /* ✅ UPDATED: pros list */
        .trp_features{
          position: relative; z-index: 1;
          padding: 4px 12px 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .trp_proItem{
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .trp_proIcon{
          height: 16px;
          width: 16px;
          color: var(--trp-green);
          flex: 0 0 auto;
          margin-top: 1px;
        }
        .trp_proText{
          color: rgba(255,255,255,.84);
          font-size: 12px;
          font-weight: 900;
          line-height: 1.35;
        }

        .trp_cta{ position: relative; z-index: 1; padding: 0 12px 12px; }
        .trp_btn{
          display: inline-flex; width: 100%;
          align-items: center; justify-content: center;
          border-radius: 999px; padding: 12px 14px;
          font-weight: 950; color: black;
          background: linear-gradient(180deg, #45FF32 0%, #45FF32 100%);
          box-shadow: 0 18px 46px rgba(77,123,255,.30);
          position: relative; overflow: hidden;
        }
        .trp_btn::after{
          content: ""; position: absolute; inset: -40%;
          transform: translateX(-60%) rotate(18deg);
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,.34) 45%,
            rgba(255,255,255,0) 70%
          );
          animation: trp_shine 2.4s ease-in-out infinite;
          opacity: .85;
        }
        @keyframes trp_shine{
          0% { transform: translateX(-60%) rotate(18deg); }
          55% { transform: translateX(140%) rotate(18deg); }
          100% { transform: translateX(140%) rotate(18deg); }
        }

        .trp_terms{
          margin-top: 8px; text-align: center;
          font-size: 10px; font-weight: 800;
          color: var(--trp-text-3);
          line-height: 1.2;
        }

        .trp_dots{
          display: none;
          margin-top: 10px;
          justify-content: center;
          gap: 8px;
          position: relative;
          z-index: 1;
        }
        .trp_dot{
          height: 8px; width: 22px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,.18);
          background: rgba(255,255,255,.10);
          cursor: pointer;
        }
        .trp_dot.is-active{
          background: rgba(38,255,90,.95);
          border-color: rgba(38,255,90,.60);
          box-shadow: 0 10px 22px rgba(38,255,90,.18);
        }

        @media (max-width: 640px){
          .trp_panelWrap{ width: calc(100% - 18px); }

          .trp_cards{
            grid-template-columns: 1fr;
            gap: 0;
          }

          /* only the active card is in normal flow => natural height */
          .trp_card{
            position: absolute;
            left: 0; right: 0; top: 0;
            opacity: 0;
            transform: translateX(10px);
            transition: opacity .25s ease, transform .25s ease;
            pointer-events: none;
          }

          .trp_card.is-active{
            position: relative;
            opacity: 1;
            transform: translateX(0px);
            pointer-events: auto;
          }

          .trp_dots{ display: flex; }
        }
      `}</style>
    </div>
  );
}
