import Link from "next/link";
import { Check } from "lucide-react";
import { USFlagIcon } from "@/components/icons/USFlagIcon";
import { Lock } from "@/components/icons/Lock";
import { Coin } from "@/components/icons/Coin";
import { TopRankingPremium } from "@/components/casino/TopRankingPremium";

export const metadata = {
  title: "Best US Online Bingo Sites Reviewed",
  description: "Top online bingo sites for US players. 75-ball, 90-ball, speed bingo, and live-hosted rooms at licensed platforms with real payouts. 21+.",
  alternates: { canonical: "https://www.dailymediacasino.com/bingo" },
};

const pros = [
  "State-licensed US bingo platforms verified for player safety and fair play",
  "75-ball, 90-ball, speed bingo, and live-hosted formats all included",
  "Each platform selected for bonus transparency, game quality, and payout reliability",
] as const;

const badges = [
  { icon: USFlagIcon, label: "US LICENSED" },
  { icon: Lock, label: "SECURED AND SAFE" },
  { icon: Coin, label: "QUICK CASHOUT" },
] as const;

export default function Bingo() {
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
                <span className="text-casino-magenta">Bingo</span> Sites
                Reviewed
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
                <img src="/images/bingo-image.webp" alt="Online bingo hero" className="relative w-full max-w-[520px]" loading="eager" />
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
            <h2 className="text-2xl font-bold tracking-wide text-foreground sm:text-3xl">Online Bingo for US Players</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Online bingo has evolved well beyond the numbered card format most players grew up with. Today's digital platforms combine classic draw mechanics with varied room types, themed events, and social features that make the experience significantly more engaging than a traditional hall. Formats range from fast-paced speed bingo to live-hosted sessions with real callers and interactive chat.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The sheer number of platforms, however, makes finding a reliable one more work than it should be. Differences in game variety, bonus terms, and cashout reliability often only become clear after signing up. Our goal is to surface those differences upfront so you can choose with confidence.
            </p>

            <h3 className="mt-10 text-xl font-bold text-foreground">Online bingo regulations in the US</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Online bingo is available to US players aged 21 and above at licensed platforms operating within states that permit online gaming. State licensing requirements cover game integrity, fund security, and responsible gambling provisions. Playing on an unlicensed site carries significant risks around fair play and the security of your funds.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Within the regulated market, competition between operators is active. Platforms differentiate through game variety, promotional generosity, and the quality of the player experience. Identifying which sites make the most of that competition in ways that genuinely benefit players is what our reviews focus on.
            </p>

            <h3 className="mt-10 text-xl font-bold text-foreground">How we assess US online bingo platforms</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Our evaluations focus on a practical set of criteria that reflect what matters most during regular play, not just at the point of sign-up.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">Bingo room variety</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Beyond 75-ball and 90-ball bingo, better platforms include speed rooms, progressive jackpot bingo, Slingo-style hybrids, and live-hosted events. Game variety is a strong signal of an operator investing in player experience.</p>
              </div>
              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">Welcome offers and ongoing promotions</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Free tickets, deposit matches, and pre-funded cards are common bingo incentives. The ones worth taking are those with clearly stated conditions, manageable requirements, and terms that actually let you enjoy the bonus rather than just chase clearance.</p>
              </div>
              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">Deposits and withdrawals</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">A player-focused platform handles both funding and cashouts without unnecessary friction. Look for sites that support your preferred payment method and publish realistic processing timelines for withdrawals.</p>
              </div>
              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">Support quality</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">When account or payment issues arise, quick resolution matters. Platforms with accessible live chat, a working email channel, and a detailed FAQ section handle problems more effectively than those relying on slow-response support alone.</p>
              </div>
            </div>

            <h3 className="mt-10 text-xl font-bold text-foreground">Online bingo versus bingo halls</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The social element that makes bingo halls appealing is not lost in the online format. Live bingo rooms stream real callers with in-room chat, giving players the interactive quality of a physical session from anywhere with an internet connection.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Digital platforms add layers that halls cannot: no fixed schedule, simultaneous participation in multiple rooms, and access to variants and themed events that traditional venues rarely offer. For many players, online bingo provides the full range of what they value about the game in a more accessible format.
            </p>

            <h3 className="mt-10 text-xl font-bold text-foreground">Matching a bingo site to your preferences</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The most suitable bingo platform depends on how you enjoy playing. Players who prefer low-stakes social sessions have different requirements from those who focus on jackpot rooms or bonus volume. Our rankings cover licensed platforms across these categories, with each evaluated against consistent standards rather than promotional claims.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              If you are new to online bingo, beginning with a well-established operator provides a more predictable introduction. Once familiar with how different room types work, exploring more specialized platforms often reveals options better suited to your specific playing style.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
