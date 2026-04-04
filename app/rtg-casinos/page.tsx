import Link from "next/link";
import { LandingHero } from "@/components/landing/LandingHero";
import { TopRankingPremium } from "@/components/casino/TopRankingPremium";
import { CASINOS } from "@/lib/casino-data";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { FinalCTA } from "@/components/casino/FinalCTA";
import { StickyMobileCTA } from "@/components/casino/StickyMobileCTA";

export const metadata = {
  title: "Best RTG Casinos for US Players",
  description: "Top RealTime Gaming casinos for US players. Verified RTG slot libraries, exclusive bonus codes, and progressive jackpots at trusted sites. 21+.",
  alternates: { canonical: "https://www.dailymediacasino.com/rtg-casinos" },
};

const rtgCasinos = CASINOS.filter((c) => c.rtgGames).map((c, i) => ({ ...c, rank: i + 1 }));

const pros = [
  "Casinos powered by RealTime Gaming software",
  "Verified RTG slot libraries with proven RTP data",
  "Exclusive RTG bonus codes and promotions",
] as const;

const faqs = [
  { q: "What is RealTime Gaming (RTG)?", a: "RealTime Gaming is one of the longest-running online casino software providers, known for classic slots, progressive jackpots, and table games. RTG has powered online casinos since 1998 and is trusted for fair, audited gameplay." },
  { q: "Are RTG casinos safe for US players?", a: "Yes. RTG casinos listed on our site are licensed and use SSL encryption. We verify each operator's licensing, payout history, and player feedback before recommending them." },
  { q: "What are the best RTG slots?", a: "Popular RTG slots include Megasaur, Achilles, Cash Bandits 3, Bubble Bubble, and Asgard. Many feature progressive jackpots that can reach six figures." },
  { q: "Do RTG casinos accept cryptocurrency?", a: "Most RTG casinos accept Bitcoin, Litecoin, and Ethereum for both deposits and withdrawals, often with faster processing times than traditional methods." },
  { q: "What bonuses are available at RTG casinos?", a: "RTG casinos typically offer generous welcome bonuses (200-400% match), no-deposit free chips, and reload bonuses. Many also have loyalty programs with cashback and comp points." },
];

export default function RTGNiche() {
  return (
    <>
      <LandingHero
        title="Best RTG Casinos for US Players"
        highlightWord="RTG Casinos"
        subtitle="Expert-reviewed RealTime Gaming casinos with verified payouts and exclusive bonus codes."
        pros={pros}
        heroImage="/images/slots-image.webp"
        heroImageAlt="RTG casino slots"
        category="rtg"
      />

      <div className="hidden lg:block">
        <TopRankingPremium category="rtg" />
      </div>

      <section className="bg-background">
        <div className="container py-12 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Why Choose an RTG Casino?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            RealTime Gaming has been a cornerstone of the online casino industry for over 25 years. Their software powers hundreds of games including video slots, table games, video poker, and specialty games. RTG is known for progressive jackpots that have paid out millions, reliable gameplay across devices, and consistent updates to their game library.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            For US players, RTG casinos remain among the most accessible options. They offer generous bonuses, accept multiple payment methods including cryptocurrency, and provide instant-play browser access without downloads. Our team evaluates each RTG casino on game fairness, bonus terms, payout speed, and customer support quality.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            RTG Game Library Highlights
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            RTG's catalog spans classic 3-reel slots to feature-rich video slots with free spins, multipliers, and bonus rounds. Their Real Series slots are among the most popular, offering random progressive jackpots on every spin. Table game fans will find multiple variants of blackjack, roulette, craps, and baccarat, along with video poker with paytables exceeding 99% RTP.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Progressive Jackpots</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                RTG's progressive network includes titles like Megasaur and Spirit of the Inca with jackpots regularly exceeding $500,000.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Instant Play Access</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                All RTG games run directly in your browser — no downloads required. Works on desktop, tablet, and mobile devices.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Looking for other casino categories? Check out our{" "}
            <Link href="/crypto-casino" className="text-casino-magenta hover:underline">crypto casinos</Link>,{" "}
            <Link href="/best-online-casinos" className="text-casino-magenta hover:underline">best online casinos</Link>, or{" "}
            <Link href="/slots" className="text-casino-magenta hover:underline">online slots</Link> guides.
          </p>
        </div>
      </section>

      <ComparisonTable casinos={rtgCasinos} title="RTG Casino Comparison" />
      <LandingFAQ faqs={faqs} />
      <FinalCTA />
      <StickyMobileCTA href={rtgCasinos[0]?.ctaUrl ?? "#"} label="Claim RTG Bonus" />
    </>
  );
}
