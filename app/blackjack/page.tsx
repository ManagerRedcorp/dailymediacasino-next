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
  title: "Best US Online Blackjack Casinos Ranked",
  description: "Ranked US online blackjack casinos with fair table rules, live dealer options, and reliable payouts. Strategy-friendly play at licensed sites. 21+.",
  alternates: { canonical: "https://www.dailymediacasino.com/blackjack" },
};

const pros = [
  "Only state-licensed US operators appear in our blackjack rankings",
  "Classic, European, and live dealer blackjack variants all represented",
  "Each site assessed for table rules, bonus usability, and withdrawal reliability",
] as const;

const badges = [
  { icon: USFlagIcon, label: "US LICENSED" },
  { icon: Lock, label: "SECURED AND SAFE" },
  { icon: Coin, label: "QUICK CASHOUT" },
] as const;

export default function Blackjack() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden casino-pattern">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: "url(/images/bg-hero-us.webp)" }}
          />
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
                Best US Online{" "}
                <span className="text-casino-magenta">Blackjack</span> Casinos
                Ranked
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
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {p}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:mt-7 sm:flex sm:flex-wrap sm:items-center sm:gap-8">
                {badges.map((b) => (
                  <div key={b.label} className="flex items-center gap-3">
                    <b.icon className="h-5 w-5 text-casino-cyan" />
                    <span className="text-xs font-semibold tracking-wide text-foreground/90">
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 max-w-3xl text-xs leading-relaxed text-muted-foreground sm:mt-6">
                Some links on this page are affiliate links. We may earn a
                referral fee when you register through them, at no cost to you.{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Learn more
                </Link>
                .
              </p>
            </div>

            <div className="hidden md:block lg:col-span-5">
              <div className="relative">
                <img
                  src="/images/blackjack-image.webp"
                  alt="Online Blackjack hero"
                  className="relative w-full max-w-[520px]"
                  loading="eager"
                />
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
            <h2 className="text-2xl font-bold tracking-wide text-foreground sm:text-3xl">
              Online Blackjack in the United States
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Blackjack holds a strong position among US online casino players.
              Its blend of straightforward rules and genuine decision-making
              gives it an appeal that pure chance games cannot replicate.
              Licensed online casinos now offer more blackjack options than
              ever, from single-deck tables to multi-hand formats and live
              dealer rooms with real-time interaction.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Access to blackjack is no longer the obstacle it once was. The
              current challenge is determining which platforms actually offer
              fair table rules, useful bonuses, and reliable payouts, rather
              than glossy interfaces backed by poor terms. Our comparisons exist
              to answer that question efficiently.
            </p>
            <PromoBannerExact
              bgImageUrl="/images/bg-cta.webp"
              brandLogoUrl="/images/betmgm.webp"
              ctaHref="#"
            />

            <h3 className="mt-10 text-xl font-bold text-foreground">
              What to understand before playing blackjack online
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Online blackjack is legal for adults aged 21 and over at casinos
              holding a valid US state gaming license. Because regulated markets
              are competitive, operators invest in better table rules, larger
              game selections, and faster payout infrastructure to attract and
              retain players.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The game itself is built around drawing cards to reach a hand
              total of 21 without exceeding it. Unlike most casino games, the
              decisions you make — whether to hit, stand, double down, or split
              — influence the expected outcome meaningfully. Learning basic
              strategy reduces the house edge to its lowest point and makes
              extended sessions more sustainable.
            </p>

            <h3 className="mt-10 text-xl font-bold text-foreground">
              What we look for in a blackjack casino
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Assessing blackjack platforms requires looking at variables that
              do not always surface in headline comparisons. Table rules,
              available variants, bonus compatibility with table games, and the
              actual speed of withdrawals all affect whether a site is worth
              your time and money.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">
                  Table variety and rule sets
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A strong blackjack offering should include multiple rule
                  variations, different stake ranges, and live dealer tables
                  with real croupiers. Players who care about specific rule sets
                  need flexibility in what is available.
                </p>
              </div>

              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">
                  Bonuses that work for table game players
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Many casino bonuses are designed around slots, with blackjack
                  contributing a lower percentage toward playthrough. We look
                  for offers where table game wagering is fairly credited and
                  terms do not make the bonus impractical to use.
                </p>
              </div>

              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">
                  Withdrawals and payment clarity
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Operators with defined cashout timelines and popular US
                  payment methods on both the deposit and withdrawal side are a
                  stronger indicator of a trustworthy platform than a large game
                  catalogue alone.
                </p>
              </div>

              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">
                  Support availability and responsiveness
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Account and payment queries need timely answers. Platforms
                  offering live chat during regular hours, an email channel, and
                  a comprehensive help section reduce the friction associated
                  with account management.
                </p>
              </div>
            </div>
            <PromoBanner_CTA_LeftCountdown />

            <h3 className="mt-10 text-xl font-bold text-foreground">
              Getting started with online blackjack
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Before committing to a table, spend time with different rule
              variants to find the format you prefer. Learning basic strategy is
              the single most impactful step you can take — it covers the
              mathematically correct decision for every hand combination and
              brings the house edge to near its minimum possible value. Approach
              each session with pre-set stake sizes and resist adjusting them
              based on how the session is going.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Establish a hard session limit before you begin. Blackjack
              requires concentration, and fatigue or frustration leads to worse
              decisions at the table. When the session stops being enjoyable,
              step away and return fresh another time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
