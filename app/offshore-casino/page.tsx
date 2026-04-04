import Link from "next/link";
import { LandingHero } from "@/components/landing/LandingHero";
import { TopRankingPremium } from "@/components/casino/TopRankingPremium";
import { getCasinosByCategory } from "@/lib/casino-data";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { FinalCTA } from "@/components/casino/FinalCTA";
import { StickyMobileCTA } from "@/components/casino/StickyMobileCTA";

export const metadata = {
  title: "Best Offshore Casinos for US Players",
  description: "Trusted offshore casinos accepting US players. Bigger bonuses, crypto support, and fast payouts at internationally licensed operators. 21+.",
  alternates: { canonical: "https://www.dailymediacasino.com/offshore-casino" },
};

const offshoreCasinos = getCasinosByCategory("offshore");

const pros = [
  "Licensed offshore casinos accepting US players",
  "Higher bonuses than domestically regulated sites",
  "Crypto and traditional banking options available",
] as const;

const faqs = [
  { q: "Are offshore casinos legal for US players?", a: "Offshore casinos operate under international licenses (Curacao, Panama, etc.) and accept US players. While federal law does not prohibit individuals from playing at offshore sites, regulations vary by state. We only recommend licensed, reputable operators with established track records." },
  { q: "Why do players choose offshore casinos?", a: "Offshore casinos typically offer larger bonuses, more game variety, crypto support, and fewer restrictions than state-regulated alternatives. Many US players prefer them for the wider selection and faster payouts." },
  { q: "How do I know an offshore casino is trustworthy?", a: "Look for valid licensing, SSL encryption, positive player reviews, and consistent payout history. Our team verifies all these factors before listing any casino. We also test deposits and withdrawals with real money." },
  { q: "What payment methods do offshore casinos accept?", a: "Most accept credit cards, Bitcoin, Ethereum, Litecoin, bank wire transfers, and e-wallets. Cryptocurrency generally offers the fastest processing times for both deposits and withdrawals." },
  { q: "How fast are offshore casino payouts?", a: "Crypto withdrawals are typically processed within 24-48 hours. Credit card and wire transfer payouts may take 3-7 business days depending on the casino and your bank." },
];

export default function OffshoreAlt() {
  return (
    <>
      <LandingHero
        title="Best Offshore Casinos for US Players"
        highlightWord="Offshore Casinos"
        subtitle="Trusted international casinos with bigger bonuses, more games, and fast crypto payouts."
        pros={pros}
        heroImage="/images/slots-image.webp"
        heroImageAlt="Offshore casino"
        category="offshore"
      />

      <div className="hidden lg:block">
        <TopRankingPremium category="offshore" />
      </div>

      <section className="bg-background">
        <div className="container py-12 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Offshore Casino Guide
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Offshore casinos have served US players for decades, offering access to thousands of games, generous promotional packages, and flexible banking. These sites operate under international gaming licenses and are regulated by foreign authorities. The best ones maintain high standards for fairness, security, and player protection.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Our editorial team evaluates offshore casinos on the same criteria as any other operator: licensing validity, payout reliability, bonus fairness, game selection, and customer support quality. Only platforms that consistently deliver positive player experiences make our ranking.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            What to Look For
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Valid Licensing</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Legitimate offshore casinos hold licenses from recognized jurisdictions like Curacao, Panama, or Kahnawake. Verify the license number on the regulator's website.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Payout Track Record</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The most important factor is consistent payouts. We check player forums, review withdrawal complaints, and test payouts ourselves before recommending any casino.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            See also:{" "}
            <Link href="/crypto-casino" className="text-casino-magenta hover:underline">crypto casinos</Link>,{" "}
            <Link href="/fast-payout-casino" className="text-casino-magenta hover:underline">fast payout casinos</Link>, or{" "}
            <Link href="/best-online-casinos" className="text-casino-magenta hover:underline">best online casinos</Link>.
          </p>
        </div>
      </section>

      <ComparisonTable casinos={offshoreCasinos} title="Offshore Casino Comparison" />
      <LandingFAQ faqs={faqs} />
      <FinalCTA />
      <StickyMobileCTA href={offshoreCasinos[0]?.ctaUrl ?? "#"} label="Claim Bonus Now" />
    </>
  );
}
