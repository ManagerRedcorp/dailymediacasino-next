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
  title: "Best Boxing Betting Sites in the US",
  description: "Top boxing betting sites for US bettors. KO, decision, and round betting markets at licensed sportsbooks with competitive odds. 21+.",
  alternates: { canonical: "https://www.dailymediacasino.com/boxing" },
};

const pros = [
  "Dedicated boxing markets with sharp knockout, decision, and round betting odds",
  "State-licensed US sportsbooks covering headline domestic and international bouts",
  "Every platform assessed for market depth, payout reliability, and licensing",
] as const;

const badges = [
  { icon: USFlagIcon, label: "US LICENSED" },
  { icon: Lock, label: "SECURED AND SAFE" },
  { icon: Coin, label: "QUICK CASHOUT" },
] as const;

export default function Boxing() {
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
                Best <span className="text-casino-magenta">Boxing</span> Betting
                Sites in the US
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
                <img src="/images/boxing-image.webp" alt="Online boxing hero" className="relative w-full max-w-[520px]" loading="eager" />
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
            <h2 className="text-2xl font-bold tracking-wide text-foreground sm:text-3xl">Boxing Betting in the United States</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Boxing has seen a surge in wagering activity across the US, driven by high-profile title fights, rematch cards, and crossover events that attract mainstream attention. American bettors are increasingly looking for platforms that offer strong boxing coverage alongside the mainstream sports they already bet on.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Not every sportsbook invests equally in boxing markets. Some platforms carry only headline bouts while others provide round betting, method-of-victory markets, and live wagering on fight night. Our recommendations focus on sites that treat boxing as a genuine priority and back it with competitive pricing.
            </p>

            <h3 className="mt-10 text-xl font-bold text-foreground">How professional boxing is structured</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Unlike team sports, professional boxing is a one-on-one contest between two fighters. Championship bouts are typically scheduled for twelve rounds, with each round running three minutes followed by a sixty-second rest interval.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Fights conclude by knockout, technical stoppage by the referee or corner, or judges' scorecards if the full distance is completed. Each judge scores rounds individually based on effective punching, aggression, defense, and ring control. Fouls can result in point deductions, and serious violations may lead to disqualification.
            </p>

            <h3 className="mt-10 text-xl font-bold text-foreground">Boxing wagering markets for US bettors</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The betting menu for boxing is more focused than for team sports but covers a meaningful range of outcomes. Markets are built around fight results rather than team statistics, which makes deep knowledge of individual fighters especially valuable.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <h4 className="text-sm font-semibold text-foreground">To win the fight</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">The most straightforward option: select the fighter you expect to win by any method — knockout, stoppage, or points decision. Your return is based on the odds at the time you placed the bet.</p>
              </div>
              <PromoBannerExact bgImageUrl="/images/bg-cta.webp" brandLogoUrl="/images/betmgm.webp" ctaHref="#" />
              <div>
                <h4 className="text-sm font-semibold text-foreground">Win by judges' decision</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">This bet requires the fight to complete the full scheduled distance. A knockout or early referee stoppage voids the bet, even if the fighter you backed wins the bout overall.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Win by stoppage or KO</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Your selected fighter must end the bout inside the distance. Any victory that goes to the cards will not pay out. The higher risk translates to more favorable odds on most cards.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Round-specific betting</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">You predict the precise round in which the fight ends. Getting this right requires strong insight into fighters' stamina, punch output, and previous stoppages — but the potential returns are significantly higher as a result.</p>
              </div>
            </div>

            <h3 className="mt-10 text-xl font-bold text-foreground">Research-based approaches to boxing betting</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Boxing betting is more dependent on individual fighter knowledge than most sports. Understanding each combatant's record, style, and how they have performed against different opponent types gives you a more reliable foundation than general betting systems.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground sm:text-base">
              <li>Review each fighter's last several bouts, paying attention to whether wins came by stoppage or decision.</li>
              <li>Weight class history can reveal patterns — some fighters move poorly after significant weight changes.</li>
              <li>Fight context matters: title unification bouts, rematches, and high-stakes career moments can affect a fighter's approach and performance under pressure.</li>
            </ul>
            <PromoBanner_CTA_LeftCountdown />

            <h3 className="mt-10 text-xl font-bold text-foreground">Selecting a boxing-friendly betting platform</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Boxing coverage quality varies considerably from one sportsbook to another. The strongest platforms combine state licensing, reliable payments, and a market schedule that extends beyond just the top-billed events.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground sm:text-base">
              <li>Verify that the sportsbook is licensed and authorized to operate in your state.</li>
              <li>Confirm that your preferred deposit and withdrawal method is available and that turnaround times are clearly stated.</li>
              <li>Check how many fights are covered beyond headline cards — depth of boxing coverage is a useful indicator of platform quality.</li>
            </ul>

            <h3 className="mt-10 text-xl font-bold text-foreground">Summary: boxing betting done well</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The combination of fighter research, a well-chosen platform, and disciplined bankroll management gives you the best setup for enjoying boxing betting responsibly. When you understand the fighters involved and work with a licensed, reliable sportsbook, major fight nights become both more engaging and more rewarding.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
