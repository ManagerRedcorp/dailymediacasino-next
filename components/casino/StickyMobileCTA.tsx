"use client";

import { useEffect, useState } from "react";

interface StickyMobileCTAProps {
  href: string;
  label?: string;
}

// Top-ranked casino data for the desktop bar
const TOP_CASINO = {
  name: "BetMGM Casino",
  logoSrc: "/images/betmgm.webp",
  offer: "$1,000 Deposit Match",
  ctaUrl: "#",
};

export function StickyMobileCTA({
  href,
  label = "Claim Bonus",
}: StickyMobileCTAProps) {
  const [visible, setVisible] = useState(false);
  const [desktopDismissed, setDesktopDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Mobile bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden">
        <div className="bg-background/95 backdrop-blur border-t border-border/40 px-4 py-3 flex items-center gap-3">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex-1 rounded-xl bg-casino-green py-3 text-center font-bold text-background text-sm hover:brightness-110 transition-all"
          >
            {label} →
          </a>
          <span className="text-[10px] text-muted-foreground leading-tight max-w-[100px]">
            21+ T&Cs apply
          </span>
        </div>
      </div>

      {/* Desktop slim bar */}
      {!desktopDismissed && (
        <div className="hidden lg:block fixed bottom-0 inset-x-0 z-40">
          <div className="bg-background/95 backdrop-blur border-t border-border/40 h-12 px-6 flex items-center gap-4 max-w-7xl mx-auto">
            {/* Casino logo */}
            <img
              src={TOP_CASINO.logoSrc}
              alt={TOP_CASINO.name}
              className="h-6 w-auto object-contain flex-shrink-0"
            />

            {/* Offer text */}
            <span className="text-sm text-muted-foreground flex-shrink-0">
              <span className="text-foreground font-semibold">
                {TOP_CASINO.offer}
              </span>
              {" "}— New players only. 21+ T&Cs apply.
            </span>

            {/* Spacer */}
            <div className="flex-1" />

            {/* CTA button */}
            <a
              href={TOP_CASINO.ctaUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="rounded-lg bg-casino-green px-5 h-8 flex items-center font-bold text-background text-sm hover:brightness-110 transition-all flex-shrink-0"
            >
              Get Bonus →
            </a>

            {/* Dismiss button */}
            <button
              onClick={() => setDesktopDismissed(true)}
              aria-label="Dismiss bonus bar"
              className="ml-1 flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-border/40 transition-colors text-base leading-none"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
