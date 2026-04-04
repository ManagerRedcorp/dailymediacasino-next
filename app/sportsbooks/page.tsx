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
  title: "Highest-Rated Sportsbooks for US Bettors",
  description: "Compare top-rated US sportsbooks with competitive NFL, NBA, and MLB odds. Licensed platforms with fast payouts and transparent bonuses. 21+.",
  alternates: { canonical: "https://www.dailymediacasino.com/sportsbooks" },
};

const pros = [
  "Every sportsbook on our list carries a valid US state license and is safety-checked",
  "NFL, NBA, MLB, NHL, NCAA, and international markets all covered in depth",
  "Odds competitiveness, payout speed, and bonus clarity assessed before listing",
] as const;

const badges = [
  { icon: USFlagIcon, label: "US LICENSED" },
  { icon: Lock, label: "SECURED AND SAFE" },
  { icon: Coin, label: "QUICK CASHOUT" },
] as const;

export default function Sportsbook() {
  return (
    <>
      {/* HERO */}
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
                Highest-Rated{" "}
                <span className="text-casino-magenta">Sportsbooks</span> for US
                Bettors
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
                <img src="/images/sportsbooks image.webp" alt="Online sportsbook hero" className="relative w-full max-w-[520px]" loading="eager" />
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
            <h2 className="text-2xl font-bold tracking-wide text-foreground sm:text-3xl">US Sports Betting: What You Need to Know</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              State-by-state legalization has opened the US sports betting market significantly over the past several years. More licensed operators are competing for your business, which is good news for bettors — but it also means wading through a crowded field to find the platform that actually delivers on its promises.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              A quality sportsbook goes well beyond a flashy welcome promo. This guide covers the factors that consistently separate worthwhile platforms from the rest, the betting markets you will encounter, and how to approach wagering in a sustainable way.
            </p>

            <h3 className="mt-10 text-xl font-bold text-foreground">The qualities that define a strong sportsbook</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Whether you are new to online betting or switching from another platform, the same fundamentals apply. These are the areas that affect your experience on every single bet you place.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">Licensing and player protection</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Only use platforms licensed within the state where you are betting. State-licensed operators are bound by consumer protection rules, responsible gambling requirements, and oversight from local gaming authorities.</p>
              </div>
              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">Withdrawal speed and payment options</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">How quickly you can get your winnings matters. Look for platforms with clear processing timelines, your preferred payment method, and no excessive fees on cashouts.</p>
              </div>
              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">Line sharpness and market depth</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Competitive odds directly affect your returns. A few percentage points across dozens of bets adds up quickly. The strongest books offer tight lines across all major sports, not just flagship matchups.</p>
              </div>
              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">Promotions with transparent conditions</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Bonus offers should be legible. Key details like minimum odds, rollover requirements, and expiry windows should be visible upfront. Avoid offers that bury important limits in lengthy terms documents.</p>
              </div>
            </div>
            <PromoBannerExact bgImageUrl="/images/bg-cta.webp" brandLogoUrl="/images/betmgm.webp" ctaHref="#" />

            <h3 className="mt-10 text-xl font-bold text-foreground">Betting markets available on US sportsbooks</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              A betting market describes a specific outcome within a game or event that you can wager on. Most US sportsbooks cover the same core markets, though depth and pricing vary between platforms. Build familiarity with straightforward formats before moving into more specialized options.
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-foreground">Moneyline</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">A straight win bet. You select the team or player you expect to win the contest. Odds reflect the perceived gap between the two sides.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Point spread</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Spread betting adjusts for lopsided matchups. Your selected team must win by more than the spread or lose by fewer points than the line, depending on which side you take.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Over/Under totals</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Rather than picking a winner, you wager on whether the combined final score or stat total for both teams will land above or below the bookmaker's posted number.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Player and team props</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Prop bets target individual performances: rushing yards, strikeouts, rebounds, or touchdowns by a specific player. They add variety but should be kept within a structured bankroll allocation.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Parlays and SGPs</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">A parlay links several selections into a single ticket with amplified odds. All legs must win for the bet to pay out. Same-game parlays draw multiple outcomes from one event onto the same ticket.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">In-game wagering</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Lines shift in real time as play unfolds. In-game betting can be reactive and fast-moving. Establish your session limit before a game starts and resist the urge to chase early losses with bigger in-play stakes.</p>
              </div>
            </div>

            <h3 className="mt-10 text-xl font-bold text-foreground">State-by-state licensing matters</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Online sports betting operates under individual state frameworks. A platform licensed in one state may not be authorized to accept bets from residents of another. Before funding an account, verify that the operator holds a license from your state's gaming regulator and that the service is available in your location.
            </p>
            <PromoBanner_CTA_LeftCountdown />

            <h3 className="mt-10 text-xl font-bold text-foreground">Keeping sports betting enjoyable and sustainable</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Betting works best as a recreational activity with defined boundaries. The most effective approach is deciding on limits before you place your first bet and committing to them regardless of how the session is going.
            </p>

            <ul className="mt-5 list-disc list-inside space-y-2 text-muted-foreground">
              <li>Allocate a fixed weekly amount and do not go beyond it.</li>
              <li>Avoid placing bets when you are emotionally charged or tired.</li>
              <li>Resist increasing your stakes to recover a losing session.</li>
              <li>Take advantage of deposit caps and cooling-off periods.</li>
              <li>If wagering stops feeling enjoyable, step away and reach out to a problem gambling support line.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
