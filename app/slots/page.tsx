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
  title: "Best US Online Slots Casinos Compared",
  description: "Find the best online slots casinos for US players. Hundreds of games, verified payouts, and fair bonuses at licensed operators. 21+ only.",
  alternates: { canonical: "https://www.dailymediacasino.com/slots" },
};

const pros = [
  "Every slots casino on our list holds an active US state gaming license",
  "Hundreds of titles across multiple studios, themes, and volatility levels",
  "Game quality, bonus fairness, and payout reliability all assessed before listing",
] as const;

const badges = [
  { icon: USFlagIcon, label: "US LICENSED" },
  { icon: Lock, label: "SECURED AND SAFE" },
  { icon: Coin, label: "QUICK CASHOUT" },
] as const;

export default function Slots() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden casino-pattern">
        {/* Background glows */}
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
            {/* Left */}
            <div className="lg:col-span-7">
              <div className="mb-3 flex flex-wrap items-center gap-2 sm:mb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/30 px-3 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur-sm sm:text-xs">
                  21+ Only
                </span>
              </div>

              <h1 className="text-balance text-3xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                Best US Online{" "}
                <span className="text-casino-magenta">Slots</span> Casinos
                Compared
              </h1>

              {/* MOBILE ONLY: Top ranking directly under H1 */}
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

            {/* Right image (desktop/tablet only) */}
            <div className="hidden md:block lg:col-span-5">
              <div className="relative">
                <img
                  src="/images/slots-image.webp"
                  alt="Online slots hero"
                  className="relative w-full max-w-[360px]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESKTOP ONLY: Top ranking stays here */}
      <div className="hidden lg:block">
        <div className="gd" />
        <TopRankingPremium />
        <div className="gd" />
      </div>

      {/* TEXT SECTION */}
      <section className="bg-background">
        <div className="container py-12 sm:py-16">
          <div className="w-full ">
            <h2 className="text-2xl font-bold tracking-wide text-foreground sm:text-3xl">
              Finding the Right Online Slots Casino
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We review US-facing casino platforms specifically to assess the
              depth and quality of their slot libraries. Our focus goes beyond
              the number of titles on offer and examines game providers, RTP
              transparency, bonus feature variety, and the standards each
              platform maintains for security and fair play. All content is
              intended for adults aged 21 and above.
            </p>

            <h3 className="mt-10 text-xl font-bold text-foreground">
              Online Slots in the US
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Slot games account for a large share of online casino activity in
              the United States. Their accessibility, the diversity of available
              themes, and the presence of features like free spins and bonus
              rounds continue to attract new players. The volume of competing
              casinos, however, makes finding a consistently good platform more
              time-consuming than it should be.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The challenge is not a shortage of options. Promotions across
              platforms frequently look similar, while meaningful differences in
              game quality, payout speeds, and bonus terms are buried in the
              details. Our comparisons are designed to surface those differences
              so you can make a more informed choice without having to do
              extensive research yourself.
            </p>
            <PromoBannerExact
              bgImageUrl="/images/bg-cta.webp"
              brandLogoUrl="/images/betmgm.webp"
              ctaHref="#"
            />

            <h3 className="mt-10 text-xl font-bold text-foreground">
              Are online slots legal for US players?
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Online slots are legal for players aged 21 and over in states that
              have established licensed online casino markets. The regulated
              environment requires operators to meet standards around game
              fairness, payment security, and responsible gambling tools.
              Competition between licensed casinos is strong, which benefits
              players through better game libraries, improved bonuses, and
              faster cashout processing.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The practical challenge is the sheer number of available
              platforms, many of which present similarly at first glance. Our
              ranked list filters the field down to operators that demonstrate
              real quality across the criteria that matter most for slot
              players.
            </p>

            <h3 className="mt-10 text-xl font-bold text-foreground">
              Key factors in choosing a slot casino
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Evaluating slot casinos does not require checking dozens of
              variables. A small number of signals reliably indicate whether a
              platform offers genuine long-term value or is primarily built
              around marketing.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">
                  Game depth and provider variety
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Quality platforms offer a range of slot studios, bet sizes,
                  and volatility options. Transparent RTP figures for individual
                  games are a mark of a platform that treats players as informed
                  adults.
                </p>
              </div>

              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">
                  Cashout speed and payment coverage
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Reliable withdrawals within stated timelines are a baseline
                  requirement. Confirm that the payment methods you use are
                  supported for both depositing and cashing out before signing
                  up.
                </p>
              </div>

              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">
                  Achievable bonus conditions
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  The headline bonus amount is less important than the terms
                  that accompany it. Offers with straightforward playthrough
                  requirements, clearly stated eligible games, and realistic
                  time windows are the ones actually worth claiming.
                </p>
              </div>

              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">
                  Support quality and response times
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Issues with accounts or payments need fast resolution.
                  Platforms with live chat available during peak hours and a
                  functioning help center reduce the frustration that comes with
                  slow or absent support.
                </p>
              </div>
            </div>
            <PromoBanner_CTA_LeftCountdown />

            <h3 className="mt-10 text-xl font-bold text-foreground">
              How online slot machines actually work
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Every online slot uses a random number generator to determine each
              spin outcome independently. No previous result influences the next
              one, and no pattern or betting system can change the underlying
              odds. What you can control is your game selection based on the
              characteristics that matter to you.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              RTP, or return to player, describes the theoretical long-run
              percentage a game returns to players. Volatility describes the
              payment pattern: low-volatility slots pay smaller amounts more
              regularly, while high-volatility titles pay out less often but in
              larger sums when they do. Matching these characteristics to your
              session goals and budget is a more practical approach than chasing
              any specific title. Set clear limits beforehand and treat slots as
              entertainment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
