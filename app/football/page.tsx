import Link from "next/link";
import { Check } from "lucide-react";
import { USFlagIcon } from "@/components/icons/USFlagIcon";
import { Lock } from "@/components/icons/Lock";
import { Coin } from "@/components/icons/Coin";
import { TopRankingPremium } from "@/components/casino/TopRankingPremium";
import PromoBannerExact from "@/components/casino/PromoBannerExact";
import PromoBanner_CTA_LeftCountdown from "@/components/casino/PromoBanner_CTA_LeftCountdown";
import TopRankingPremiumTop3Modal from "@/components/casino/TopRankingPremiumTop3Modal";

export const metadata = {
  title: "Best Football Betting Sites in the US",
  description: "Top football betting sites for US players. NFL, college football, and international markets with sharp odds at licensed sportsbooks. 21+.",
  alternates: { canonical: "https://www.dailymediacasino.com/football" },
};

const pros = [
  "Every football betting site on our list is state-licensed and independently reviewed",
  "NFL, college football, and international league coverage all included",
  "Odds pricing, withdrawal reliability, and security verified for each listing",
] as const;

const badges = [
  { icon: USFlagIcon, label: "US LICENSED" },
  { icon: Lock, label: "SECURED AND SAFE" },
  { icon: Coin, label: "QUICK CASHOUT" },
] as const;

export default function Football() {
  return (
    <>
      <section className="relative overflow-hidden casino-pattern">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" style={{ backgroundImage: "url(/images/bg-hero-us.webp)" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/95" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(249,184,28,0.18),transparent_60%),radial-gradient(55%_55%_at_80%_25%,rgba(118,67,248,0.15),transparent_60%),radial-gradient(60%_60%_at_55%_75%,rgba(16,196,226,0.12),transparent_60%)]" />
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-casino-purple/15 blur-3xl" />
          <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-casino-magenta/15 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-casino-cyan/10 blur-3xl" />
        </div>
        <TopRankingPremiumTop3Modal />

        <div className="container relative py-8 sm:py-12 lg:py-18">
          <div className="grid items-start gap-6 md:gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="lg:col-span-7">
              <div className="mb-3 flex flex-wrap items-center gap-2 sm:mb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/30 px-3 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur-sm sm:text-xs">
                  21+ Only
                </span>
              </div>

              <h1 className="text-balance text-3xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                Best <span className="text-casino-magenta">Football</span>{" "}
                Betting Sites in the US
              </h1>

              <div className="mt-5 lg:hidden">
                <div className="-mx-4 sm:mx-0">
                  <TopRankingPremium />
                </div>
              </div>

              <div className="mt-5 space-y-3 sm:mt-6">
                {pros.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-casino-magenta/15 ring-1 ring-casino-magenta/25">
                      <Check className="h-4 w-4 text-casino-magenta" />
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/90">{p}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:mt-7 sm:flex sm:flex-wrap sm:items-center sm:gap-8">
                {badges.map((b) => (
                  <div key={b.label} className="flex items-center gap-3">
                    <b.icon className="h-5 w-5 text-casino-cyan" />
                    <span className="text-xs font-semibold tracking-wide text-foreground/90">{b.label}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 max-w-3xl text-xs leading-relaxed text-muted-foreground sm:mt-6">
                Some links on this page are affiliate links. We may earn a referral fee when you register through them, at no cost to you.{" "}
                <Link href="/terms" className="text-primary hover:underline">Learn more</Link>.
              </p>
            </div>

            <div className="hidden md:block lg:col-span-5">
              <div className="relative">
                <img src="/images/football-image.webp" alt="Online football hero" className="relative w-full max-w-[520px]" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hidden lg:block">
        <div className="gd" />
        <TopRankingPremium />
        <div className="gd" />
      </div>

      <section className="bg-background">
        <div className="container py-12 sm:py-16">
          <div className="w-full">
            <h2 className="text-2xl font-bold tracking-wide text-foreground sm:text-3xl">Football Betting for US Players</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              American football is one of the most wagered-on sports in the United States. From regular-season NFL matchups to college bowl games and the playoffs, bettors have access to a wide range of markets year-round. The challenge is identifying a licensed platform that offers competitive lines, trustworthy payouts, and a clear, consistent experience.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              This page covers the football betting markets you will encounter most frequently, what to look for in a platform, the competitions that draw the highest wagering activity, and how to approach betting in a way that keeps it enjoyable long-term.
            </p>

            <h3 className="mt-10 text-xl font-bold text-foreground">Football betting markets available to US bettors</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              A betting market is a defined outcome within a game that you can stake money on. Football offers one of the deepest menus of any sport, from simple game winners to highly specific player statistics. Below are the formats you will see most often on US sportsbooks.
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-foreground">Futures and outrights</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Futures bets are placed on season-long outcomes, such as which team will win the Super Bowl or a conference title. Odds are often more favorable early in the season when the result is less predictable.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Exact final score</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Predicting the precise final scoreline is one of the harder markets to land, but the returns reflect that difficulty. It rewards deep knowledge of team scoring patterns and defensive tendencies.</p>
              </div>
              <PromoBannerExact bgImageUrl="/images/bg-cta.webp" brandLogoUrl="/images/betmgm.webp" ctaHref="#" />
              <div>
                <h4 className="text-sm font-semibold text-foreground">Halftime result</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">This market focuses purely on which team is leading at the end of the first half. It can be useful when one team is strong out of the gate but tends to fade late in games.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Touchdown scorer markets</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">You wager on which player will score a touchdown — either at any point in the game, as the first scorer, or in a specific quarter. Anytime scorer bets offer more realistic odds than first-scorer picks.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Combo bets</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">These bets bundle two separate predictions into a single wager, such as a player scoring and a final score result. The potential payout is higher, but both parts must be correct for a win.</p>
              </div>
            </div>

            <h3 className="mt-10 text-xl font-bold text-foreground">What to prioritize when choosing a football betting site</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Our ranked list above covers sites that have already been evaluated for the criteria below. If you prefer to assess platforms independently, these are the areas worth examining most closely.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">State licensing</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Confirm the platform holds a license issued by a gaming authority in your state. Licensed operators are required to meet financial, security, and responsible gambling standards.</p>
              </div>
              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">Cashout and payment methods</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Check that your preferred deposit and withdrawal method is supported before creating an account. Processing times vary, so review the typical payout timeline for each option.</p>
              </div>
              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">Pricing and odds competitiveness</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Better odds mean better returns on winning bets. Even small pricing differences matter across a season of regular wagering.</p>
              </div>
              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">Breadth of market coverage</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">A well-rounded sportsbook provides options beyond the main game line. Look for platforms that cover NFL, college football, and specialty markets without restricting access to popular game types.</p>
              </div>
            </div>
            <PromoBanner_CTA_LeftCountdown />

            <h3 className="mt-10 text-xl font-bold text-foreground">Most popular football competitions for US bettors</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              US sportsbooks carry an extensive schedule of domestic and international football. The NFL generates the largest betting volumes, with every regular-season game, playoff matchup, and the Super Bowl drawing massive wagering interest across the country.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              College football runs alongside the professional game and offers some of the most competitive lines of any sport. International competitions including the FIFA World Cup and UEFA tournaments attract significant attention from US bettors looking for broader market options during the offseason.
            </p>

            <h3 className="mt-10 text-xl font-bold text-foreground">Practical habits for smarter football betting</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Informed betting starts with preparation. Tracking injury reports, reviewing recent form, and understanding how weather conditions affect outdoor games are all factors that can influence a result and help you identify value in the lines.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Discipline matters as much as knowledge. Comparing lines across platforms, sticking to a pre-set unit size, and resisting emotionally driven bets after a loss are the habits that protect your bankroll over a full season. Football betting is most rewarding when treated as structured entertainment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
