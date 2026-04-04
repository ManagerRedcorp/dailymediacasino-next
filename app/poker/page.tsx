import Link from "next/link";
import { LandingHero } from "@/components/landing/LandingHero";
import { TopRankingPremium } from "@/components/casino/TopRankingPremium";
import { getCasinosByCategory } from "@/lib/casino-data";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { FinalCTA } from "@/components/casino/FinalCTA";
import { StickyMobileCTA } from "@/components/casino/StickyMobileCTA";

export const metadata = {
  title: "Best Online Poker Sites in the US",
  description: "Top online poker sites for US players. Video poker with 99%+ RTP, Caribbean Stud, live dealer poker, and fair casino bonuses. 21+.",
  alternates: { canonical: "https://www.dailymediacasino.com/poker" },
};

const pokerCasinos = getCasinosByCategory("poker");

const pros = [
  "Video poker with 99%+ RTP on optimal play",
  "Caribbean Stud, Three Card, and Texas Hold'em tables",
  "Live dealer poker with real-time streaming",
] as const;

const faqs = [
  { q: "What poker games are available online?", a: "Online casinos offer video poker (Jacks or Better, Deuces Wild, Joker Poker), table poker (Caribbean Stud, Three Card Poker, Texas Hold'em Bonus), and live dealer poker games. Video poker offers some of the best RTP in any casino game." },
  { q: "What is the best video poker game?", a: "Jacks or Better with full-pay tables (9/6) offers a 99.54% RTP with optimal strategy, making it one of the highest-return casino games available. Deuces Wild full-pay can exceed 100% RTP." },
  { q: "Can I play poker for real money online?", a: "Yes. All casinos in our ranking offer real-money poker games. You can play video poker from $0.25 per hand and table poker from $1 minimum bets." },
  { q: "Is online poker fair?", a: "Yes. Casino poker games use certified random number generators. The odds are mathematically identical to physical casino games. Look for eCOGRA or iTech Labs certification for extra assurance." },
  { q: "Are poker bonuses different from slot bonuses?", a: "Most welcome bonuses apply to poker, though wagering contributions may be reduced (often 10-20% vs 100% for slots). Some casinos offer poker-specific bonuses with better terms for table game players." },
];

export default function Poker() {
  return (
    <>
      <LandingHero
        title="Best Online Poker Sites in the US"
        highlightWord="Poker"
        subtitle="Video poker, table poker, and live dealer — all with verified fair odds."
        pros={pros}
        heroImage="/images/blackjack-image.webp"
        heroImageAlt="Online poker"
        category="poker"
      />

      <div className="hidden lg:block">
        <TopRankingPremium category="poker" />
      </div>

      <section className="bg-background">
        <div className="container py-12 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Online Poker Guide
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Poker remains one of the most strategic and rewarding casino games available online. Unlike pure chance games, video poker and certain table poker variants reward skill and optimal strategy with some of the highest return-to-player rates in the casino.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Our recommended casinos offer extensive poker game libraries including classic video poker machines, casino table poker games, and live dealer poker rooms. Whether you're a strategic player seeking high-RTP video poker or prefer the social aspect of live tables, our rankings cover the best options for US players.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Popular Poker Variants
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Jacks or Better</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The classic video poker game with up to 99.54% RTP. Simple strategy charts make this one of the most approachable high-return games.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Caribbean Stud Poker</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Play against the dealer with a progressive jackpot side bet. Royal flush pays 100% of the progressive pool.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Explore related games:{" "}
            <Link href="/blackjack" className="text-casino-magenta hover:underline">blackjack</Link>,{" "}
            <Link href="/baccarat" className="text-casino-magenta hover:underline">baccarat</Link>, or{" "}
            <Link href="/live-dealer" className="text-casino-magenta hover:underline">live dealer</Link>.
          </p>
        </div>
      </section>

      <ComparisonTable casinos={pokerCasinos} title="Poker Casino Comparison" />
      <LandingFAQ faqs={faqs} />
      <FinalCTA />
      <StickyMobileCTA href={pokerCasinos[0]?.ctaUrl ?? "#"} label="Play Poker Now" />
    </>
  );
}
