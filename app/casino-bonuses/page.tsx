import Link from "next/link";
import { LandingHero } from "@/components/landing/LandingHero";
import { TopRankingPremium } from "@/components/casino/TopRankingPremium";
import { getCasinosByCategory } from "@/lib/casino-data";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { FinalCTA } from "@/components/casino/FinalCTA";
import { StickyMobileCTA } from "@/components/casino/StickyMobileCTA";

export const metadata = {
  title: "Best Casino Bonuses & Welcome Offers",
  description: "Biggest casino bonuses for US players. No-deposit offers, free spins, and match deposits with fair wagering terms at verified casinos. 21+.",
  alternates: { canonical: "https://www.dailymediacasino.com/casino-bonuses" },
};

const bonusCasinos = getCasinosByCategory("bonus");

const pros = [
  "Welcome bonuses up to $8,888 at verified casinos",
  "No-deposit free spins and free chip offers",
  "Transparent wagering requirements — no hidden terms",
] as const;

const faqs = [
  { q: "What types of casino bonuses are available?", a: "Common bonuses include deposit match bonuses (100-500% of your deposit), no-deposit bonuses (free chips or spins without depositing), free spins (typically 10-100 on selected slots), reload bonuses (ongoing deposit matches), and cashback offers (refund on losses)." },
  { q: "What are wagering requirements?", a: "Wagering requirements specify how many times you must bet the bonus amount before withdrawing. For example, a $100 bonus with 35x wagering means you need $3,500 in total bets before you can cash out. Lower wagering requirements are better." },
  { q: "Can I withdraw bonus money immediately?", a: "No. Bonuses come with wagering requirements that must be completed first. However, some casinos offer 'no wagering' bonuses where you keep what you win without playthrough requirements — these are rare but valuable." },
  { q: "Are casino bonuses worth it?", a: "Yes, when the terms are fair. Look for wagering requirements under 40x, reasonable time limits (30+ days), and high or no maximum withdrawal caps. Avoid bonuses with 60x+ wagering or $100 withdrawal limits." },
  { q: "How do no-deposit bonuses work?", a: "No-deposit bonuses give you free playing money (typically $10-$75) or free spins just for registering — no deposit required. Winnings are usually subject to wagering requirements and a maximum withdrawal cap." },
];

export default function BonusSignup() {
  return (
    <>
      <LandingHero
        title="Best Casino Bonuses & Welcome Offers"
        highlightWord="Casino Bonuses"
        subtitle="Maximize your bankroll with verified bonus offers. No-deposit bonuses, free spins, and match deposits."
        pros={pros}
        heroImage="/images/slots-image.webp"
        heroImageAlt="Casino bonuses"
        category="bonus"
      />

      <div className="hidden lg:block">
        <TopRankingPremium category="bonus" />
      </div>

      <section className="bg-background">
        <div className="container py-12 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Understanding Casino Bonuses
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Casino bonuses can significantly extend your playing time and increase your chances of winning — but only if you understand the terms. A $5,000 welcome bonus sounds impressive, but 60x wagering requirements make it nearly impossible to cash out. We evaluate every bonus on its real-world value, not its headline number.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Our rankings prioritize bonuses with fair wagering requirements (under 40x), reasonable time limits, high or no maximum withdrawal caps, and transparent terms. We've played through each bonus ourselves to verify that the offers are legitimate and achievable.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Bonus Types Explained
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Match Deposit Bonus</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The casino matches your deposit by a percentage. A 200% match on $100 gives you $300 to play with. Look for low wagering requirements.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">No-Deposit Bonus</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Free money or free spins just for signing up. No deposit needed. Perfect for testing a casino before committing real funds.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Free Spins</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Free plays on selected slot games. Winnings from free spins may have their own wagering requirements. Best value when offered with no wagering.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Cashback Offers</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Get a percentage of your net losses back. Usually 10-25% with 1x wagering. One of the fairest bonus types available.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Browse more:{" "}
            <Link href="/best-online-casinos" className="text-casino-magenta hover:underline">best online casinos</Link>,{" "}
            <Link href="/new-casinos" className="text-casino-magenta hover:underline">new casinos</Link>, or{" "}
            <Link href="/slots" className="text-casino-magenta hover:underline">online slots</Link>.
          </p>
        </div>
      </section>

      <ComparisonTable casinos={bonusCasinos} title="Bonus Comparison" />
      <LandingFAQ faqs={faqs} />
      <FinalCTA />
      <StickyMobileCTA href={bonusCasinos[0]?.ctaUrl ?? "#"} label="Claim Bonus" />
    </>
  );
}
