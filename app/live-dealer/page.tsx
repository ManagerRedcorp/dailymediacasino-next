import Link from "next/link";
import { LandingHero } from "@/components/landing/LandingHero";
import { TopRankingPremium } from "@/components/casino/TopRankingPremium";
import { getCasinosByCategory } from "@/lib/casino-data";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { FinalCTA } from "@/components/casino/FinalCTA";
import { StickyMobileCTA } from "@/components/casino/StickyMobileCTA";

export const metadata = {
  title: "Best Live Dealer Casinos in the US",
  description: "Play with real dealers in HD. Live blackjack, roulette, baccarat, and poker at top US casinos. Interactive tables and authentic action. 21+.",
  alternates: { canonical: "https://www.dailymediacasino.com/live-dealer" },
};

const liveCasinos = getCasinosByCategory("live-dealer");

const pros = [
  "Real dealers streaming in HD from professional studios",
  "Live blackjack, roulette, baccarat, and poker tables",
  "Interactive chat and authentic casino atmosphere",
] as const;

const faqs = [
  { q: "What is a live dealer casino?", a: "A live dealer casino streams real table games from professional studios. You interact with actual dealers via video feed, place bets through your screen, and watch results happen in real time — combining the convenience of online play with the authenticity of a physical casino." },
  { q: "Which live dealer games are available?", a: "Most live casinos offer blackjack, roulette, baccarat, and poker. Some also feature game shows, craps, and specialty games. Table limits range from $1 minimums to $10,000+ for VIP players." },
  { q: "Is live dealer play fair?", a: "Yes. Live dealer games use real cards and wheels — the same equipment as physical casinos. Games are monitored by pit bosses and recorded for transparency. Licensed casinos are also audited by independent testing agencies." },
  { q: "Can I play live dealer games on mobile?", a: "Yes. All recommended casinos offer mobile-optimized live dealer streaming. Games work on iOS and Android through the browser, with adaptive video quality based on your connection speed." },
  { q: "Are live dealer bonuses different?", a: "Welcome bonuses generally apply to live dealer games, but wagering contributions may vary. Some casinos offer live-dealer-specific promotions with cashback on losses or enhanced reload bonuses." },
];

export default function LiveDealer() {
  return (
    <>
      <LandingHero
        title="Best Live Dealer Casinos in the US"
        highlightWord="Live Dealer"
        subtitle="Play with real dealers in real time. HD streaming, interactive tables, and authentic casino action."
        pros={pros}
        heroImage="/images/blackjack-image.webp"
        heroImageAlt="Live dealer casino"
        category="live-dealer"
      />

      <div className="hidden lg:block">
        <TopRankingPremium category="live-dealer" />
      </div>

      <section className="bg-background">
        <div className="container py-12 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            The Live Dealer Experience
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Live dealer casinos bridge the gap between online convenience and the social atmosphere of a real casino floor. Professional dealers run games from purpose-built studios using real cards, wheels, and dice — all streamed in HD directly to your device. You can chat with dealers and other players, creating an experience that RNG games simply can't match.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            The best live casinos offer multiple table variants with different betting limits, fast streaming with minimal lag, and mobile compatibility. Our ranking focuses on stream quality, dealer professionalism, game variety, and the overall user experience.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Popular Live Dealer Games
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Live Blackjack</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Multiple table options with bet-behind features. Standard rules plus variants like Infinite Blackjack that never run out of seats.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Live Roulette</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                European and American wheels with special camera angles. Lightning Roulette and other enhanced versions add multipliers for bigger wins.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Live Baccarat</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Speed Baccarat, squeeze tables, and VIP rooms. One of the simplest live games with a low house edge.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Live Game Shows</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Dream Catcher, Crazy Time, and Monopoly Live offer unique entertainment with massive multiplier potential.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Want to explore more?{" "}
            <Link href="/blackjack" className="text-casino-magenta hover:underline">Online blackjack</Link>,{" "}
            <Link href="/roulette" className="text-casino-magenta hover:underline">online roulette</Link>, or{" "}
            <Link href="/baccarat" className="text-casino-magenta hover:underline">baccarat</Link>.
          </p>
        </div>
      </section>

      <ComparisonTable casinos={liveCasinos} title="Live Dealer Casino Comparison" />
      <LandingFAQ faqs={faqs} />
      <FinalCTA />
      <StickyMobileCTA href={liveCasinos[0]?.ctaUrl ?? "#"} label="Play Live Now" />
    </>
  );
}
