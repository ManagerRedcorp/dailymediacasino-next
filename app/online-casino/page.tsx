import Link from "next/link";
import { LandingHero } from "@/components/landing/LandingHero";
import { TopRankingPremium } from "@/components/casino/TopRankingPremium";
import { CASINOS } from "@/lib/casino-data";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { FinalCTA } from "@/components/casino/FinalCTA";
import { StickyMobileCTA } from "@/components/casino/StickyMobileCTA";

export const metadata = {
  title: "Online Casino Sites for US Players",
  description: "Play real-money casino games online. Verified US casino sites with slots, blackjack, roulette, live dealer, and fast payouts. 21+.",
  alternates: { canonical: "https://www.dailymediacasino.com/online-casino" },
};

const pros = [
  "Trusted online casinos verified for US players",
  "Real-money games with fair odds and fast payouts",
  "Welcome bonuses up to $8,000+ at top sites",
] as const;

const faqs = [
  { q: "Is online casino gambling legal in the US?", a: "Online gambling legality varies by state. Many US players use licensed offshore casinos that accept US players. We recommend only licensed operators with verified track records of fair play and reliable payouts." },
  { q: "How do I start playing at an online casino?", a: "Choose a casino from our ranking, click the sign-up button, create an account, and make your first deposit. Most casinos offer instant-play access through your browser — no downloads needed." },
  { q: "What games can I play online?", a: "Online casinos offer slots, blackjack, roulette, poker, baccarat, craps, live dealer games, and specialty games. Most casinos have 200-400+ titles from multiple game providers." },
  { q: "How do casino bonuses work?", a: "Welcome bonuses match your deposit by a percentage (e.g., 200% up to $2,000). You receive bonus funds to play with, but must meet wagering requirements before withdrawing winnings. Always read the terms." },
  { q: "Can I win real money?", a: "Yes. All casinos in our ranking pay real money to winning players. We verify payout reliability before recommending any casino." },
];

export default function GenericCasino() {
  return (
    <>
      <LandingHero
        title="Online Casino Sites for US Players"
        highlightWord="Online Casino"
        subtitle="Play real-money casino games from home. Verified sites with fast payouts and big bonuses."
        pros={pros}
        heroImage="/images/slots-image.webp"
        heroImageAlt="Online casino"
      />

      <div className="hidden lg:block">
        <TopRankingPremium />
      </div>

      <section className="bg-background">
        <div className="container py-12 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Online Casino Gaming in 2026
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Online casinos have grown into a multi-billion dollar industry, offering US players thousands of games from the convenience of their homes. From classic table games to cutting-edge video slots and live dealer experiences, today's online casinos deliver quality that rivals physical venues.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Choosing the right casino matters. Bonus terms, payout speeds, game selection, and security vary significantly between operators. Our team tests each casino with real money to help you find platforms that deliver genuine value.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Explore Casino Categories
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link href="/slots" className="rounded-2xl border border-border/60 bg-secondary/20 p-5 hover:border-casino-magenta/40 transition-all">
              <h4 className="text-sm font-semibold text-foreground">Online Slots</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Hundreds of slot games with free spins, bonus rounds, and progressive jackpots.
              </p>
            </Link>
            <Link href="/blackjack" className="rounded-2xl border border-border/60 bg-secondary/20 p-5 hover:border-casino-magenta/40 transition-all">
              <h4 className="text-sm font-semibold text-foreground">Blackjack</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Beat the dealer with strategy. Multiple variants available with low house edges.
              </p>
            </Link>
            <Link href="/live-dealer" className="rounded-2xl border border-border/60 bg-secondary/20 p-5 hover:border-casino-magenta/40 transition-all">
              <h4 className="text-sm font-semibold text-foreground">Live Dealer</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Real dealers, real cards, streamed live. The closest thing to a physical casino.
              </p>
            </Link>
            <Link href="/crypto-casino" className="rounded-2xl border border-border/60 bg-secondary/20 p-5 hover:border-casino-magenta/40 transition-all">
              <h4 className="text-sm font-semibold text-foreground">Crypto Casinos</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Deposit and withdraw with Bitcoin. Faster payouts and enhanced privacy.
              </p>
            </Link>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            See our complete guide:{" "}
            <Link href="/best-online-casinos" className="text-casino-magenta hover:underline">best online casinos</Link> or explore{" "}
            <Link href="/casino-bonuses" className="text-casino-magenta hover:underline">casino bonuses</Link>.
          </p>
        </div>
      </section>

      <ComparisonTable casinos={CASINOS} title="Online Casino Comparison" />
      <LandingFAQ faqs={faqs} />
      <FinalCTA />
      <StickyMobileCTA href={CASINOS[0]?.ctaUrl ?? "#"} label="Play Now" />
    </>
  );
}
