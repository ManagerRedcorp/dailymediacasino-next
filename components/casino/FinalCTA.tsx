"use client";

import { ArrowRight, Shield } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#3c00b1] via-[#5b21b6] to-casino-magenta p-8 md:p-12 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />

          <div className="relative">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
              <Shield className="h-6 w-6 text-white" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ready to Start Playing?
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/70 max-w-lg mx-auto">
              All casinos listed are verified by our expert team. Choose your
              preferred platform above and claim your welcome bonus today.
            </p>

            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-casino-green px-8 py-3 font-bold text-background text-sm md:text-base hover:brightness-110 transition-all"
            >
              View Top Picks
              <ArrowRight className="h-4 w-4" />
            </a>

            <p className="mt-4 text-xs text-white/50">
              21+ only. Please gamble responsibly. T&Cs apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
