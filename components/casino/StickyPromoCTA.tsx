"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

interface StickyPromoCTAProps {
  href: string;
  label: string;
  scrollThreshold?: number;
}

export function StickyPromoCTA({
  href,
  label,
  scrollThreshold = 400,
}: StickyPromoCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden">
      <div className="border-t border-border/40 bg-background/95 backdrop-blur-md px-4 py-3 flex items-center gap-3">
        <a
          href={href}
          rel="noopener noreferrer sponsored"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-casino-green py-3 text-center text-sm font-bold text-white shadow-lg shadow-casino-green/25 transition-all hover:brightness-110 active:scale-[0.98]"
        >
          {label}
          <ArrowRight className="h-4 w-4" />
        </a>
        <span className="text-[10px] leading-tight text-muted-foreground max-w-[90px]">
          21+ T&Cs apply
        </span>
      </div>
    </div>
  );
}
