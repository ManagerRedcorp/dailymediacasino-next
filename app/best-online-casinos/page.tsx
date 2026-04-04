import Link from "next/link";
import { LandingHero } from "@/components/landing/LandingHero";
import { TopRankingPremium } from "@/components/casino/TopRankingPremium";
import { CASINOS } from "@/lib/casino-data";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { FinalCTA } from "@/components/casino/FinalCTA";
import { StickyMobileCTA } from "@/components/casino/StickyMobileCTA";

export const metadata = {
  title: "Best Online Casinos in 2026",
  description: "Expert-ranked best online casinos for US players. Tested with real deposits, verified payouts, and updated monthly. Find your ideal casino. 21+.",
  alternates: { canonical: "https://www.dailymediacasino.com/best-online-casinos" },
};

const pros = [
  "Every casino independently tested with real deposits",
  "Rankings updated monthly based on ongoing evaluations",
  "Only licensed, verified operators with proven payouts",
] as const;

const faqs = [
  { q: "How do you determine the best online casinos?", a: "Our team evaluates casinos on six criteria: licensing and safety, bonus value and terms, game selection, payout speed, customer support quality, and mobile experience. Each casino is tested with real deposits over multiple weeks before ranking." },
  { q: "Are all listed casinos safe?", a: "Yes. Every casino in our ranking holds a valid gaming license, uses SSL encryption, and has a verified track record of paying players. We continuously monitor for complaints and remove any casino that fails our standards." },
  { q: "How often are rankings updated?", a: "Rankings are reviewed and updated monthly. We re-test withdrawal times, check for new bonus offers, and incorporate recent player feedback into every update." },
  { q: "Can I play from any US state?", a: "Most casinos listed accept players from all US states. However, some state-regulated markets have restrictions. Check each casino's terms for state-specific availability." },
  { q: "What is the minimum deposit?", a: "Most casinos require a minimum deposit of $10-$25. Some offer no-deposit bonuses that let you play and win without any upfront payment." },
  { q: "Do I have to download software?", a: "No. All recommended casinos offer instant-play browser access on desktop and mobile. No downloads or installations required." },
];

const categories = [
  { name: "Online Slots", path: "/slots", desc: "Best slot machine casinos with 200+ games" },
  { name: "Blackjack", path: "/blackjack", desc: "Low house edge blackjack tables" },
  { name: "Roulette", path: "/roulette", desc: "American and European roulette" },
  { name: "Crypto Casinos", path: "/crypto-casino", desc: "Bitcoin and crypto-friendly sites" },
  { name: "Live Dealer", path: "/live-dealer", desc: "Real dealers streaming in HD" },
  { name: "Fast Payouts", path: "/fast-payout-casino", desc: "Withdrawals within 24 hours" },
  { name: "RTG Casinos", path: "/rtg-casinos", desc: "RealTime Gaming powered sites" },
  { name: "Craps", path: "/craps", desc: "Best odds craps tables online" },
  { name: "Poker", path: "/poker", desc: "Video poker and casino poker games" },
  { name: "Baccarat", path: "/baccarat", desc: "Punto Banco and mini baccarat" },
  { name: "Casino Bonuses", path: "/casino-bonuses", desc: "Welcome offers and free spins" },
  { name: "Casino Apps", path: "/casino-apps", desc: "Mobile-optimized casino gaming" },
  { name: "New Casinos", path: "/new-casinos", desc: "Freshly launched casino sites" },
  { name: "Offshore", path: "/offshore-casino", desc: "International casinos for US players" },
];

export default function BestTopLists() {
  return (
    <>
      <LandingHero
        title="Best Online Casinos in 2026"
        highlightWord="Best Online Casinos"
        subtitle="Expert-ranked US casinos updated monthly. Tested with real deposits, verified payouts."
        pros={pros}
        heroImage="/images/slots-image.webp"
        heroImageAlt="Best online casinos"
        category="bonus"
      />

      <div className="hidden lg:block">
        <TopRankingPremium category="bonus" />
      </div>

      <section className="bg-background">
        <div className="container py-12 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            How We Rank Online Casinos
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Our ranking methodology is straightforward: we deposit real money, play real games, request real withdrawals, and contact customer support with real questions. Every casino is evaluated across six weighted criteria over multiple weeks before earning a spot on our list.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            We prioritize player safety above everything else. No amount of bonus generosity compensates for unreliable payouts or questionable licensing. The casinos in our ranking have consistently demonstrated fair play, transparent terms, and reliable banking over sustained periods.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Browse by Category
          </h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.path}
                href={cat.path}
                className="rounded-xl border border-border/40 bg-card/30 p-4 hover:border-casino-magenta/40 hover:bg-card/50 transition-all group"
              >
                <h4 className="text-sm font-semibold text-foreground group-hover:text-casino-magenta transition-colors">
                  {cat.name}
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ComparisonTable casinos={CASINOS} title="Full Casino Comparison" />
      <LandingFAQ faqs={faqs} />
      <FinalCTA />
      <StickyMobileCTA href={CASINOS[0]?.ctaUrl ?? "#"} label="Claim #1 Bonus" />
    </>
  );
}
