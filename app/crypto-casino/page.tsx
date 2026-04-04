import Link from "next/link";
import { LandingHero } from "@/components/landing/LandingHero";
import { TopRankingPremium } from "@/components/casino/TopRankingPremium";
import { getCasinosByCategory } from "@/lib/casino-data";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { FinalCTA } from "@/components/casino/FinalCTA";
import { StickyMobileCTA } from "@/components/casino/StickyMobileCTA";

export const metadata = {
  title: "Best Crypto Casinos in 2026",
  description: "Play at the best Bitcoin and crypto casinos. Faster withdrawals, bigger bonuses, and enhanced privacy for US players. BTC, ETH, LTC accepted. 21+.",
  alternates: { canonical: "https://www.dailymediacasino.com/crypto-casino" },
};

const cryptoCasinos = getCasinosByCategory("crypto");

const pros = [
  "Bitcoin, Ethereum, and Litecoin deposits accepted",
  "Faster withdrawals than traditional banking methods",
  "Enhanced privacy and lower transaction fees",
] as const;

const faqs = [
  { q: "Which cryptocurrencies can I use at online casinos?", a: "Most crypto casinos accept Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), and Bitcoin Cash (BCH). Some also accept Ripple (XRP), Dogecoin, and stablecoins like USDT." },
  { q: "Are crypto casino deposits instant?", a: "Bitcoin deposits typically confirm within 10-30 minutes. Litecoin and Ethereum are usually faster, often under 10 minutes. Once confirmed on the blockchain, funds appear in your casino account immediately." },
  { q: "How fast are crypto withdrawals?", a: "Crypto withdrawals are processed within 1-24 hours at most reputable casinos, compared to 3-7 days for bank transfers. Some casinos offer same-day crypto payouts." },
  { q: "Is it safe to gamble with cryptocurrency?", a: "Yes, as long as you use a licensed and reputable casino. Blockchain transactions are transparent and verifiable. The casinos we recommend use SSL encryption and are independently audited." },
  { q: "Do crypto casinos offer bonuses?", a: "Yes. Many crypto casinos offer enhanced bonuses for cryptocurrency deposits, including higher match percentages and exclusive free spins. Some offer crypto-specific no-deposit bonuses." },
];

export default function CryptoCasino() {
  return (
    <>
      <LandingHero
        title="Best Crypto Casinos in 2026"
        highlightWord="Crypto Casinos"
        subtitle="Play with Bitcoin, Ethereum, and more. Faster payouts, bigger bonuses, and enhanced privacy."
        pros={pros}
        heroImage="/images/slots-image.webp"
        heroImageAlt="Crypto casino"
        category="crypto"
      />

      <div className="hidden lg:block">
        <TopRankingPremium category="crypto" />
      </div>

      <section className="bg-background">
        <div className="container py-12 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Why Play at a Crypto Casino?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Cryptocurrency casinos have transformed online gambling by offering faster transactions, lower fees, and greater privacy. Unlike traditional payment methods that can take days to process, crypto withdrawals are typically completed within hours. This makes them ideal for US players who want quick access to their winnings.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Beyond speed, crypto casinos often provide exclusive bonuses for digital currency deposits. Higher match percentages, reduced wagering requirements, and no-fee transactions are common perks. Our team tests each crypto casino for deposit reliability, withdrawal speed, and bonus fairness before recommending them.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            How to Get Started with Crypto Gambling
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Step 1: Get a Wallet</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Set up a crypto wallet like Coinbase, Trust Wallet, or Exodus. Purchase Bitcoin or your preferred cryptocurrency through the exchange.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Step 2: Choose a Casino</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Select a verified crypto casino from our rankings. Register, navigate to the cashier, and select your cryptocurrency as the deposit method.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Step 3: Deposit & Play</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Send crypto to the casino's wallet address. Funds arrive once the blockchain confirms the transaction — usually within minutes.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Step 4: Withdraw Winnings</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Request a withdrawal to your personal wallet. Crypto payouts are faster than bank transfers, with most processed same-day.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Explore more options:{" "}
            <Link href="/fast-payout-casino" className="text-casino-magenta hover:underline">fast payout casinos</Link>,{" "}
            <Link href="/rtg-casinos" className="text-casino-magenta hover:underline">RTG casinos</Link>, or{" "}
            <Link href="/best-online-casinos" className="text-casino-magenta hover:underline">best online casinos</Link>.
          </p>
        </div>
      </section>

      <ComparisonTable casinos={cryptoCasinos} title="Crypto Casino Comparison" />
      <LandingFAQ faqs={faqs} />
      <FinalCTA />
      <StickyMobileCTA href={cryptoCasinos[0]?.ctaUrl ?? "#"} label="Claim Crypto Bonus" />
    </>
  );
}
