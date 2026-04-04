import Link from "next/link";
import { LandingHero } from "@/components/landing/LandingHero";
import { TopRankingPremium } from "@/components/casino/TopRankingPremium";
import { getCasinosByCategory } from "@/lib/casino-data";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { FinalCTA } from "@/components/casino/FinalCTA";
import { StickyMobileCTA } from "@/components/casino/StickyMobileCTA";

export const metadata = {
  title: "Best Casino Apps & Mobile Sites",
  description: "Top mobile casino apps for US players. Play 300+ games on iOS and Android with no downloads. Touch-optimized, fast-loading, and secure. 21+.",
  alternates: { canonical: "https://www.dailymediacasino.com/casino-apps" },
};

const appCasinos = getCasinosByCategory("mobile-app");

const pros = [
  "Mobile-optimized casinos that work on any device",
  "Instant-play browser access — no app download required",
  "Full game libraries available on iOS and Android",
] as const;

const faqs = [
  { q: "Do I need to download an app to play?", a: "No. All casinos in our ranking offer browser-based instant play that works on any smartphone or tablet. Simply visit the casino in Safari or Chrome and play directly — no downloads needed." },
  { q: "Which mobile platform is best for casino gaming?", a: "Both iOS and Android work equally well. Modern online casinos use responsive HTML5 technology that adapts to any screen size. Performance is comparable on both platforms." },
  { q: "Can I deposit and withdraw on mobile?", a: "Yes. All banking features are fully available on mobile, including deposits, withdrawals, bonus claims, and account management. Crypto transactions can also be completed from your mobile wallet." },
  { q: "Are mobile casino games different from desktop?", a: "The games are identical — same odds, same payouts, same bonus features. The interface is adapted for touch controls with larger buttons and optimized layouts. Some casinos offer mobile-exclusive bonuses." },
  { q: "Is mobile casino play safe?", a: "Yes, as long as you use a secure connection and play at licensed casinos. All recommended casinos use SSL encryption that works the same on mobile and desktop. Avoid playing on public Wi-Fi networks." },
];

export default function Apps() {
  return (
    <>
      <LandingHero
        title="Best Casino Apps & Mobile Sites"
        highlightWord="Casino Apps"
        subtitle="Play anywhere on your phone. No downloads needed — instant access to 300+ games."
        pros={pros}
        heroImage="/images/slots-image.webp"
        heroImageAlt="Casino mobile apps"
        category="mobile-app"
      />

      <div className="hidden lg:block">
        <TopRankingPremium category="mobile-app" />
      </div>

      <section className="bg-background">
        <div className="container py-12 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Mobile Casino Gaming
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Mobile casino gaming now accounts for over 70% of all online gambling activity. Modern casinos are built mobile-first, with responsive designs that deliver the full desktop experience on your phone. Touch-optimized controls, adaptive layouts, and fast loading times make playing on the go seamless.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Our team tests every casino on multiple devices — iPhone, Android phones, and tablets — to ensure games load quickly, interfaces are intuitive, and banking works flawlessly. The casinos in our ranking deliver a premium mobile experience without compromising on game selection or functionality.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            What Makes a Great Mobile Casino
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Fast Loading</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Games should load in under 3 seconds on a standard mobile connection. Our top picks are optimized for speed without sacrificing visual quality.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
              <h4 className="text-sm font-semibold text-foreground">Touch-Optimized</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Buttons, menus, and game controls designed for touch interaction. No pinching, zooming, or accidental taps on tiny buttons.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Related:{" "}
            <Link href="/best-online-casinos" className="text-casino-magenta hover:underline">best online casinos</Link>,{" "}
            <Link href="/slots" className="text-casino-magenta hover:underline">online slots</Link>, or{" "}
            <Link href="/casino-bonuses" className="text-casino-magenta hover:underline">casino bonuses</Link>.
          </p>
        </div>
      </section>

      <ComparisonTable casinos={appCasinos} title="Mobile Casino Comparison" />
      <LandingFAQ faqs={faqs} />
      <FinalCTA />
      <StickyMobileCTA href={appCasinos[0]?.ctaUrl ?? "#"} label="Play on Mobile" />
    </>
  );
}
