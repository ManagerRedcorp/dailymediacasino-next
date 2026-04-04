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
  title: "Best US Online Roulette Casinos Ranked",
  description: "Top-ranked online roulette casinos for US players. European, American, and live dealer tables at licensed sites with fast cashouts. 21+.",
  alternates: { canonical: "https://www.dailymediacasino.com/roulette" },
};

const pros = [
  "Only state-licensed roulette casinos make our list — no unlicensed operators",
  "Multiple roulette formats covered, from single-zero tables to live dealer rooms",
  "Each pick evaluated for game quality, fair bonus terms, and payout reliability",
] as const;

const badges = [
  { icon: USFlagIcon, label: "US LICENSED" },
  { icon: Lock, label: "SECURED AND SAFE" },
  { icon: Coin, label: "QUICK CASHOUT" },
] as const;

export default function Roulette() {
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
                Best US Online{" "}
                <span className="text-casino-magenta">Roulette</span> Casinos
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
                <img src="/images/roulette-image.webp" alt="Online roulette hero" className="relative w-full max-w-[360px]" loading="eager" />
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
        <div className="container py-10 sm:py-16">
          <div className="w-full">
            <h2 className="text-2xl font-bold tracking-wide text-foreground sm:text-3xl">Playing Roulette Online in the US</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Roulette has made the transition to online play seamlessly. US players now have access to dozens of licensed casinos offering multiple table formats, live dealer studios, and varied betting ranges. The breadth of choice is a genuine advantage, but it also makes it harder to identify platforms that consistently deliver on game quality and fair cashouts.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Our approach is to evaluate roulette casinos on a defined set of practical criteria rather than headline figures. Licensing status, table variety, withdrawal speed, bonus terms, and support quality all factor into which sites appear in our rankings. If you want a faster shortcut, the list above is your starting point.
            </p>

            <h3 className="mt-10 text-xl font-bold text-foreground">Can I legally play roulette online in the US?</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Yes, provided you are aged 21 or older and using a casino that holds an active license from a recognized US state regulator. Multiple states have established licensed online casino markets, and the number continues to grow. Competition between operators drives improvements in game variety, payout speeds, and the quality of welcome offers.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The main challenge for players is cutting through the noise. Many casinos look identical on the surface, which is why we prioritize the practical signals below when building our recommended shortlist.
            </p>

            <PromoBannerExact bgImageUrl="/images/bg-cta.webp" brandLogoUrl="/images/betmgm.webp" ctaHref="#" />

            <h3 className="mt-10 text-xl font-bold text-foreground">How to identify a roulette site that delivers genuine value</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              When assessing roulette casinos, shift attention away from flashy visuals and toward what actually shapes the playing experience. Four factors consistently separate good platforms from mediocre ones.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">Range of roulette formats</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">A strong roulette library should include European tables, live dealer options with real croupiers, and faster-play variants for shorter sessions. Broader variety generally signals a more developed overall platform.</p>
              </div>
              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">Clarity of welcome offers</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Read beyond the headline figure. The most valuable bonus is one with transparent terms: a manageable playthrough requirement, a reasonable time window, and no hidden restrictions that make clearing it impractical.</p>
              </div>
              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">Banking and cashout reliability</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Before depositing, confirm your preferred payment method is available for both funding and withdrawals. Platforms with clean payout records and stated processing timelines are a safer bet than those that are vague about cashout schedules.</p>
              </div>
              <div className="info-card p-5">
                <h4 className="text-sm font-semibold text-foreground">Accessible customer support</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Responsive support reduces stress when issues arise with payments or account verification. Prioritize casinos that offer live chat alongside email assistance and maintain clear resolution timelines.</p>
              </div>
            </div>
            <PromoBanner_CTA_LeftCountdown />

            <h3 className="mt-10 text-xl font-bold text-foreground">Roulette table formats you will encounter online</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Licensed US casinos typically offer several roulette variations. European roulette, with its single zero wheel, is the most common starting point for players looking for better odds. Live dealer roulette replicates a physical table experience with a real croupier, streamed in real time. Speed variants and multi-ball formats offer a faster pace for players who prefer shorter sessions with more decisions per hour.
            </p>

            <h3 className="mt-10 text-xl font-bold text-foreground">Keeping roulette sessions manageable</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Roulette provides a wide range of betting options, from even-money bets on red or black through to single-number wagers that pay 35 to 1. Players focused on extending session time often favor the lower-variance options, which produce more frequent smaller returns rather than rare high-value hits. Regardless of which style suits you, establish a session budget before you begin and treat roulette as a form of entertainment with a predetermined cost.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
