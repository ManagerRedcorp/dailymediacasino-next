import Link from "next/link";
import { LandingHero } from "@/components/landing/LandingHero";
import { TopRankingPremium } from "@/components/casino/TopRankingPremium";
import { getCasinosByCategory } from "@/lib/casino-data";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { FinalCTA } from "@/components/casino/FinalCTA";
import { StickyMobileCTA } from "@/components/casino/StickyMobileCTA";

export const metadata = {
  title: "Best Online Craps Sites in the US",
  description: "Play craps online at top US casinos. Low house edge bets, live dealer tables, and fair odds at licensed operators. Expert-reviewed. 21+.",
  alternates: { canonical: "https://www.dailymediacasino.com/craps" },
};

const crapsCasinos = getCasinosByCategory("craps");

const pros = [
  "Best online craps tables with authentic gameplay",
  "Low house edge bets available at every casino",
  "Live dealer craps with real-time streaming",
] as const;

const faqs = [
  { q: "Can I play craps online for real money in the US?", a: "Yes. All casinos in our ranking offer real-money craps tables. They are licensed, use random number generators for fair outcomes, and accept US players with standard deposit methods." },
  { q: "What is the best craps bet?", a: "The Pass Line bet and Don't Pass bet both have a house edge under 1.5%, making them the best value bets in craps. Combined with free odds bets, the overall house edge drops even further." },
  { q: "Is online craps fair?", a: "Yes. Online craps uses certified random number generators (RNG) that are independently audited. Results are statistically equivalent to physical dice rolls." },
  { q: "Do online casinos offer live dealer craps?", a: "Several casinos in our ranking offer live dealer craps with real dice rolls streamed in HD. These provide the most authentic craps experience online." },
  { q: "What bonuses can I use for craps?", a: "Most welcome bonuses can be used on craps, though wagering contributions may be reduced (typically 5-10% of bets count toward requirements). Check each casino's terms for craps-specific conditions." },
];

export default function Craps() {
  return (
    <>
      <LandingHero
        title="Best Online Craps Sites in the US"
        highlightWord="Craps"
        subtitle="Play craps online with the lowest house edge. Expert-picked casinos with authentic table games."
        pros={pros}
        heroImage="/images/blackjack-image.webp"
        heroImageAlt="Online craps"
        category="craps"
      />

      <div className="hidden lg:block">
        <TopRankingPremium category="craps" />
      </div>

      <section className="bg-background">
        <div className="container py-12 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Playing Craps Online
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Craps is one of the most exciting table games in any casino, and online versions capture that energy with realistic graphics and authentic odds. The game offers some of the best odds in the house, with Pass Line bets carrying a house edge of just 1.41% — making it a favorite among knowledgeable players.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Online craps lets you play at your own pace, learn the bets without pressure, and take advantage of welcome bonuses. Whether you prefer RNG-based digital tables or live dealer craps with real dice, our recommended casinos offer both options with fair gameplay and quick payouts.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Understanding Craps Bets
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Pass / Don't Pass</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The foundation of craps betting. Pass Line has a 1.41% house edge, Don't Pass is slightly better at 1.36%. Both are excellent starting points.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Free Odds Bets</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The only bet in the casino with zero house edge. Place behind your Pass/Don't Pass bet after the point is established. Most casinos allow 3x-5x odds.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Also explore:{" "}
            <Link href="/blackjack" className="text-casino-magenta hover:underline">online blackjack</Link>,{" "}
            <Link href="/roulette" className="text-casino-magenta hover:underline">online roulette</Link>, or{" "}
            <Link href="/live-dealer" className="text-casino-magenta hover:underline">live dealer casinos</Link>.
          </p>
        </div>
      </section>

      <ComparisonTable casinos={crapsCasinos} title="Craps Casino Comparison" />
      <LandingFAQ faqs={faqs} />
      <FinalCTA />
      <StickyMobileCTA href={crapsCasinos[0]?.ctaUrl ?? "#"} label="Play Craps Now" />
    </>
  );
}
