"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import { X, Star, ArrowRight } from "lucide-react";
import { CASINOS, SPORTSBOOKS } from "@/components/casino/TopRankingPremium";

type Props = {
  open: boolean;
  onClose: () => void;
  dataset?: "casinos" | "sportsbooks";
};

export default function SpecialOffersSidebar({ open, onClose, dataset = "casinos" }: Props) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  const data = dataset === "sportsbooks" ? SPORTSBOOKS : CASINOS;

  const top5 = useMemo(
    () => [...data].sort((a, b) => a.rank - b.rank).slice(0, 5),
    [data]
  );

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const onBackdropMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!panelRef.current) return;
    if (panelRef.current.contains(e.target as Node)) return;
    onClose();
  };

  if (!open) return null;

  const mountNode = typeof document !== "undefined" ? document.body : null;
  if (!mountNode) return null;

  return createPortal(
    <div className="so_root" onMouseDown={onBackdropMouseDown}>
      <div className="so_backdrop" aria-hidden="true" />

      <aside
        ref={panelRef}
        className="so_panel"
        role="dialog"
        aria-modal="true"
        aria-label="Special offers"
      >
        <div className="so_header">
          <div className="so_titleRow">
            <h3 className="so_title">TODAY&apos;S TOP DEALS</h3>

            <button className="so_close" onClick={onClose} aria-label="Close">
              <X className="h-5 w-5" />
            </button>
          </div>

          <p className="so_sub">
            Side-by-side view of leading welcome offers. Spot your pick in seconds.
          </p>
        </div>

        <div className="so_list">
          {top5.map((casino) => (
            <a
              key={casino.id}
              href={casino.ctaUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="so_box"
              aria-label={`${casino.name} offer`}
            >
              <div className="so_media">
                <div className="so_logoFrame">
                  <img
                    src={casino.logoSrc ?? "/images/brand-placeholder.svg"}
                    alt={casino.name}
                    className="so_logo"
                    loading="lazy"
                  />
                </div>

                <div className="so_meta">
                  <div className="so_offerTitle">
                    {casino.offerTitle}
                    {casino.offerSubtitle ? (
                      <span className="so_offerSubInline">
                        {" "}
                        {casino.offerSubtitle}
                      </span>
                    ) : null}
                  </div>

                  <div className="so_ratingLine">
                    <div className="so_score">
                      <Star
                        className="so_star h-3.5 w-3.5"
                        fill="currentColor"
                      />
                      {casino.score.toFixed(1)} / 10
                    </div>
                  </div>
                </div>
              </div>

              <div className="so_ctaRow">
                <span className="so_ctaBtn">
                  Claim Offer
                  <ArrowRight className="h-4 w-4" />
                </span>
                <div className="so_terms">21+ only. Terms & conditions apply.</div>
              </div>
            </a>
          ))}
        </div>
      </aside>

      <style>{`
        .so_root{
          position: fixed;
          inset: 0;
          z-index: 2147483647;
        }

        .so_backdrop{
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,.55);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }

        .so_panel{
          --so-bg: #0d1530;
          --so-bg-deep: #070d1e;
          --so-blue: #f0a020;
          --so-blue-hover: #d4880c;
          --so-green: #3AE33B;
          --so-border: rgba(255,255,255,.14);

          position: absolute;
          top: 0;
          right: 0;
          height: 100vh;
          width: min(440px, calc(100vw - 56px));
          border-left: 1px solid rgba(255,255,255,.12);
          background:
            radial-gradient(120% 70% at 20% 10%, rgba(255,255,255,.10) 0%, rgba(255,255,255,0) 55%),
            radial-gradient(90% 70% at 85% 30%, rgba(0,0,0,.20) 0%, rgba(0,0,0,0) 60%),
            linear-gradient(180deg, var(--so-bg) 0%, var(--so-bg-deep) 100%);
          box-shadow: -30px 0 90px rgba(0,0,0,.45);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: so_in .22s cubic-bezier(.2,.9,.2,1) both;
        }

        @keyframes so_in{
          from { transform: translateX(16px); opacity: .0; }
          to   { transform: translateX(0px); opacity: 1; }
        }

        .so_header{
          padding: 16px 16px 12px;
          border-bottom: 1px solid rgba(255,255,255,.12);
        }

        .so_titleRow{
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .so_title{
          margin: 0;
          color: #fff;
          font-size: 18px;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .so_close{
          height: 38px;
          width: 38px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.18);
          background: rgba(255,255,255,.10);
          color: rgba(255,255,255,.92);
          display: grid;
          place-items: center;
          cursor: pointer;
          flex: 0 0 auto;
          transition: background .15s ease, transform .15s ease;
        }
        .so_close:hover{
          background: rgba(255,255,255,.16);
          transform: translateY(-1px);
        }

        .so_sub{
          margin: 10px 0 0;
          color: rgba(255,255,255,.80);
          font-size: 12px;
          line-height: 1.35;
        }

        .so_list{
          padding: 14px 12px 18px;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        .so_box{
          display: block;
          text-decoration: none;
          color: inherit;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.08);
          box-shadow: 0 18px 50px rgba(0,0,0,.22);
          padding: 12px;
          margin-bottom: 12px;
          position: relative;
          overflow: hidden;
          transition: transform .18s ease, border-color .18s ease, background .18s ease;
        }

        .so_box:hover{
          transform: translateY(-2px);
          border-color: rgba(255,255,255,.22);
          background: rgba(255,255,255,.10);
        }

        .so_box::before{
          content:"";
          position:absolute;
          inset:-2px;
          pointer-events:none;
          background:
            radial-gradient(100% 70% at 10% 20%, rgba(255,255,255,.10) 0%, rgba(0,0,0,0) 55%),
            radial-gradient(90% 70% at 95% 45%, rgba(0,0,0,.12) 0%, rgba(0,0,0,0) 60%);
          opacity: .9;
        }

        .so_media{
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 118px 1fr;
          gap: 12px;
          align-items: center;
        }

        .so_logoFrame{
          height: 74px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(0,0,0,.18);
          overflow: hidden;
        }

        .so_logo{
          height: 100%;
          width: 100%;
          object-fit: cover;
          display: block;
        }

        .so_offerTitle{
          color: #fff;
          font-weight: 900;
          font-size: 13px;
          line-height: 1.2;
        }

        .so_offerSub{
          margin-top: 4px;
          color: rgba(255,255,255,.78);
          font-weight: 800;
          font-size: 12px;
        }

        .so_ratingLine{
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .so_score{
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-radius: 999px;
          padding: 6px 10px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(0,0,0,.14);
          color: rgba(255,255,255,.95);
          font-size: 12px;
          font-weight: 900;
          white-space: nowrap;
        }

        .so_star{
          color: hsl(42, 96%, 58%);
          filter: drop-shadow(0 10px 18px rgba(249,184,28,.25));
        }

        .so_ctaRow{
          position: relative;
          z-index: 1;
          margin-top: 12px;
          display: grid;
          gap: 8px;
        }

        .so_ctaBtn{
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 999px;
          padding: 14px 16px;
          font-weight: 900;
          color: black;
          background: #45FF32;
          box-shadow: 0 18px 45px rgba(0,0,0,.28);
          position: relative;
          overflow: hidden;
          transition: transform .15s ease, background .15s ease;
        }
        .so_box:hover .so_ctaBtn{
          background: #45FF32;
          transform: translateY(-1px);
        }

        .so_ctaBtn::after{
          content: "";
          position: absolute;
          inset: -40%;
          transform: translateX(-60%) rotate(20deg);
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,.26) 45%,
            rgba(255,255,255,0) 70%
          );
          animation: so_shine 2.3s ease-in-out infinite;
          opacity: .85;
        }

        @keyframes so_shine{
          0% { transform: translateX(-60%) rotate(20deg); }
          55% { transform: translateX(140%) rotate(20deg); }
          100% { transform: translateX(140%) rotate(20deg); }
        }

        .so_terms{
          text-align: center;
          font-size: 10px;
          font-weight: 800;
          color: rgba(255,255,255,.70);
        }

        @media (max-width: 420px){
          .so_media{ grid-template-columns: 1fr; }
          .so_logoFrame{ height: 92px; }
          .so_ratingLine{
            justify-content: flex-start;
            gap: 10px;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>,
    mountNode
  );
}
