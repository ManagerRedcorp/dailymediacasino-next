import Link from "next/link";
import { LandingHero } from "@/components/landing/LandingHero";
import { TopRankingPremium } from "@/components/casino/TopRankingPremium";
import { getCasinosByCategory } from "@/lib/casino-data";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { FinalCTA } from "@/components/casino/FinalCTA";
import { StickyMobileCTA } from "@/components/casino/StickyMobileCTA";

export const metadata = {
  title: "Best Online Baccarat Sites in the US",
  description: "Play baccarat online with the lowest house edge. Punto Banco, live dealer squeeze tables, and VIP rooms at licensed US casinos. 21+.",
  alternates: { canonical: "https://www.dailymediacasino.com/baccarat" },
};

const baccaratCasinos = getCasinosByCategory("baccarat");

const pros = [
  "Online baccarat with one of the lowest house edges",
  "Punto Banco, mini baccarat, and speed versions",
  "Live dealer baccarat with squeeze and VIP tables",
] as const;

const faqs = [
  { q: "What is online baccarat?", a: "Baccarat is a card game where you bet on the Player hand, Banker hand, or a Tie. Cards are dealt according to fixed rules — no decisions needed after placing your bet. It's one of the simplest and lowest house edge games in any casino." },
  { q: "What is the house edge in baccarat?", a: "Banker bets have a 1.06% house edge, Player bets have 1.24%, and Tie bets have 14.36%. The Banker bet is statistically the best bet in the game, even after the standard 5% commission." },
  { q: "Can I play baccarat online for real money?", a: "Yes. All casinos in our ranking offer real-money baccarat tables. Minimum bets start as low as $1 at standard tables, with VIP rooms offering $500+ per hand." },
  { q: "Is live dealer baccarat available?", a: "Yes. Most recommended casinos offer live baccarat with real cards and professional dealers. Speed Baccarat, Squeeze Baccarat, and VIP tables are commonly available." },
  { q: "What baccarat strategy should I use?", a: "Always bet on Banker — it has the lowest house edge. Avoid Tie bets despite the attractive 8:1 payout. Set a loss limit and stick to it. Baccarat is a negative-expectation game, so bankroll management is key." },
];

export default function Baccarat() {
  return (
    <>
      <LandingHero
        title="Best Online Baccarat Sites in the US"
        highlightWord="Baccarat"
        subtitle="Play baccarat with the lowest house edge. Punto Banco, live dealer, and VIP tables."
        pros={pros}
        heroImage="/images/blackjack-image.webp"
        heroImageAlt="Online baccarat"
        category="baccarat"
      />

      <div className="hidden lg:block">
        <TopRankingPremium category="baccarat" />
      </div>

      <section className="bg-background">
        <div className="container py-12 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Playing Baccarat Online
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Baccarat is one of the most elegant casino games, and it also happens to offer some of the best odds. With a Banker bet house edge of just 1.06%, baccarat gives players a better chance than nearly any other table game. The rules are simple — no complex strategies to learn — making it perfect for both beginners and experienced players.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Online baccarat comes in several variants. Standard Punto Banco follows the traditional rules, mini baccarat offers faster hands with lower minimums, and live dealer baccarat provides the full VIP experience with real cards and professional dealers streaming in HD.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Baccarat Bet Options
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Banker Bet (1.06% Edge)</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The best bet in baccarat. Pays 1:1 minus 5% commission. Statistically wins slightly more often than the Player bet.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Player Bet (1.24% Edge)</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Pays 1:1 with no commission. Slightly higher house edge than Banker, but still one of the best bets in the casino.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Explore more table games:{" "}
            <Link href="/blackjack" className="text-casino-magenta hover:underline">blackjack</Link>,{" "}
            <Link href="/craps" className="text-casino-magenta hover:underline">craps</Link>, or{" "}
            <Link href="/live-dealer" className="text-casino-magenta hover:underline">live dealer</Link>.
          </p>
        </div>
      </section>

      <ComparisonTable casinos={baccaratCasinos} title="Baccarat Casino Comparison" />
      <LandingFAQ faqs={faqs} />
      <FinalCTA />
      <StickyMobileCTA href={baccaratCasinos[0]?.ctaUrl ?? "#"} label="Play Baccarat Now" />
    </>
  );
}
