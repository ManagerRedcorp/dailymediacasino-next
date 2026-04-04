import Link from "next/link";
import { LandingHero } from "@/components/landing/LandingHero";
import { TopRankingPremium } from "@/components/casino/TopRankingPremium";
import { CASINOS } from "@/lib/casino-data";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { FinalCTA } from "@/components/casino/FinalCTA";
import { StickyMobileCTA } from "@/components/casino/StickyMobileCTA";

export const metadata = {
  title: "New Online Casinos in 2026",
  description: "Freshly launched online casinos for US players. Modern platforms, bigger welcome bonuses, and the latest games. Expert-verified and safe. 21+.",
  alternates: { canonical: "https://www.dailymediacasino.com/new-casinos" },
};

const pros = [
  "Recently launched casinos with fresh bonus offers",
  "Modern platforms built with latest technology",
  "Aggressive welcome packages to attract new players",
] as const;

const faqs = [
  { q: "Are new casinos safe to play at?", a: "New casinos can be safe if they hold a valid gaming license and use SSL encryption. We only recommend new casinos that meet our safety standards, including verified licensing, secure payment processing, and fair game auditing." },
  { q: "Why choose a new casino over an established one?", a: "New casinos often offer more generous bonuses to attract players, feature the latest game releases, and use modern technology for faster and smoother experiences. However, they lack the long track record of established brands." },
  { q: "How do you evaluate new casinos?", a: "We apply the same criteria as established casinos: licensing, security, bonus fairness, payout speed, game selection, and support quality. New casinos must demonstrate reliability in each area before making our list." },
  { q: "Do new casinos have good game selections?", a: "Most new casinos launch with 200+ games from major providers. They often secure partnerships with top developers and may offer exclusive titles not found at older sites." },
  { q: "What bonuses do new casinos typically offer?", a: "New casinos tend to offer higher match percentages (300-500%), more free spins, and larger maximum bonus amounts compared to established competitors. These aggressive offers are designed to build a player base quickly." },
];

export default function NewCasinos() {
  return (
    <>
      <LandingHero
        title="New Online Casinos in 2026"
        highlightWord="New Online Casinos"
        subtitle="Fresh casino launches with bigger bonuses and modern platforms. Verified and expert-reviewed."
        pros={pros}
        heroImage="/images/slots-image.webp"
        heroImageAlt="New casinos"
        category="new"
      />

      <div className="hidden lg:block">
        <TopRankingPremium category="new" />
      </div>

      <section className="bg-background">
        <div className="container py-12 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            New Casino Sites Worth Playing
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            The online casino industry evolves rapidly, with new operators launching regularly. While established brands offer proven reliability, new casinos bring fresh competition with bigger bonuses, modern interfaces, and the latest game releases. Our team evaluates each new casino as it launches to identify the most promising options.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            We monitor new casino launches continuously and only add sites that pass our full evaluation process. This includes verifying their gaming license, testing deposit and withdrawal procedures, evaluating bonus terms, and checking customer support responsiveness.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            What to Check Before Joining a New Casino
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Valid License</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Verify the casino holds a license from a recognized authority. Look for the license number in the footer and check it on the regulator's website.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Operator Background</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Check if the operator runs other established casinos. Experienced operators launching new brands typically deliver more reliable service from day one.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Compare with:{" "}
            <Link href="/best-online-casinos" className="text-casino-magenta hover:underline">best online casinos</Link>,{" "}
            <Link href="/casino-bonuses" className="text-casino-magenta hover:underline">casino bonuses</Link>, or{" "}
            <Link href="/casino-apps" className="text-casino-magenta hover:underline">casino apps</Link>.
          </p>
        </div>
      </section>

      <ComparisonTable casinos={CASINOS} title="New Casino Comparison" />
      <LandingFAQ faqs={faqs} />
      <FinalCTA />
      <StickyMobileCTA href={CASINOS[0]?.ctaUrl ?? "#"} label="Try New Casino" />
    </>
  );
}
