import Link from "next/link";
import { CheckCircle2, Shield } from "lucide-react";
import { Lock } from "@/components/icons/Lock";
import { Coin } from "@/components/icons/Coin";
import { TopRankingPremium } from "@/components/casino/TopRankingPremium";
import type { CasinoCategory } from "@/lib/types";
import TopRankingPremiumTop3Modal from "@/components/casino/TopRankingPremiumTop3Modal";

interface LandingHeroProps {
  title: string;
  highlightWord: string;
  subtitle?: string;
  pros: readonly string[];
  heroImage?: string;
  heroImageAlt?: string;
  category?: CasinoCategory;
}

export function LandingHero({
  title,
  highlightWord,
  subtitle,
  pros,
  heroImage,
  heroImageAlt = "Casino hero image",
  category,
}: LandingHeroProps) {
  const titleParts = title.split(highlightWord);

  return (
    <section className="relative overflow-hidden casino-pattern">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url(/images/bg-hero-us.webp)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/95" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(124,58,237,0.30),transparent_60%),radial-gradient(55%_55%_at_80%_25%,rgba(217,70,239,0.22),transparent_60%),radial-gradient(60%_60%_at_55%_75%,rgba(34,211,238,0.14),transparent_60%)]" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-casino-purple/15 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-casino-magenta/15 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-casino-cyan/10 blur-3xl" />
      </div>
      <TopRankingPremiumTop3Modal />

      <div className="container relative py-8 sm:py-12 lg:py-18">
        <div className="grid items-start gap-6 md:gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          {/* Left */}
          <div className="lg:col-span-7">
            <div className="mb-3 flex flex-wrap items-center gap-2 sm:mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/30 px-3 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur-sm sm:text-xs">
                21+ Only
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-casino-gold/30 bg-casino-gold/10 px-3 py-1 text-[11px] font-medium text-casino-gold backdrop-blur-sm sm:text-xs">
                <Shield className="h-3 w-3" />
                Expert Reviewed
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/30 px-3 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur-sm sm:text-xs">
                Updated March 2026
              </span>
            </div>

            <h1 className="text-balance text-3xl font-bold leading-[1.05] tracking-tight text-[#3c00b1] sm:text-5xl lg:text-6xl">
              {titleParts[0]}
              <span className="text-casino-magenta">{highlightWord}</span>
              {titleParts[1] ?? ""}
            </h1>

            {subtitle && (
              <p className="mt-3 text-base text-muted-foreground sm:text-lg max-w-xl">
                {subtitle}
              </p>
            )}

            {/* MOBILE ONLY: Top ranking directly under H1 */}
            <div className="mt-5 lg:hidden">
              <div className="-mx-4 sm:mx-0">
                <TopRankingPremium category={category} />
              </div>
            </div>

            <div className="mt-5 space-y-3 sm:mt-6">
              {pros.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-casino-magenta/15 ring-1 ring-casino-magenta/25">
                    <CheckCircle2 className="h-4 w-4 text-casino-magenta" />
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/90">{p}</p>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="mt-6 grid gap-3 sm:mt-7 sm:flex sm:flex-wrap sm:items-center sm:gap-8">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-casino-cyan" />
                <span className="text-xs font-semibold tracking-wide text-foreground/90">
                  SECURED AND SAFE
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Coin className="h-5 w-5 text-casino-cyan" />
                <span className="text-xs font-semibold tracking-wide text-foreground/90">
                  QUICK CASHOUT
                </span>
              </div>
            </div>

            <p className="mt-5 max-w-3xl text-xs leading-relaxed text-muted-foreground sm:mt-6">
              This page contains affiliate links. If you sign up through our
              links, we may earn a commission at no extra cost to you.{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Read our terms and conditions
              </Link>
              .
            </p>
          </div>

          {/* Right image (desktop/tablet only) */}
          {heroImage && (
            <div className="hidden md:block lg:col-span-5">
              <div className="relative">
                <img
                  src={heroImage}
                  alt={heroImageAlt}
                  className="relative w-full max-w-[360px]"
                  width={360}
                  height={360}
                  loading="eager"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
