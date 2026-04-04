import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, Shield, Star, ArrowRight, AlertTriangle, Zap } from "lucide-react";
import { StickyPromoCTA } from "@/components/casino/StickyPromoCTA";

export const metadata: Metadata = {
  title: "DraftKings Promo Code April 2026 - Get $2,000 Casino Bonus",
  description:
    "Use the latest DraftKings promo code for April 2026. Get up to $2,000 casino bonus for new players. Available in NJ, MI, PA, WV, CT, CO. 21+ only.",
  alternates: { canonical: "https://www.dailymediacasino.com/draftkings-promo-code" },
  openGraph: {
    title: "DraftKings Promo Code April 2026 - $2,000 Casino Bonus",
    description:
      "Claim the latest DraftKings promo code. Up to $2,000 casino bonus for new players in eligible US states.",
    url: "https://www.dailymediacasino.com/draftkings-promo-code",
  },
};

const PROMO_LINK = "#";

const steps = [
  {
    num: "1",
    title: "Visit DraftKings Casino",
    desc: "Click the link below to go to the official DraftKings Casino registration page.",
  },
  {
    num: "2",
    title: "Create your account",
    desc: "Enter your details, verify your identity, and confirm you are 21+ in an eligible state.",
  },
  {
    num: "3",
    title: "Make your first deposit",
    desc: "Deposit $10 or more. Your casino bonus is applied automatically -- no promo code entry needed.",
  },
  {
    num: "4",
    title: "Start playing",
    desc: "Use your bonus funds on slots, table games, or live dealer. Meet the 15x wagering requirement within 30 days.",
  },
];

const bonusDetails = [
  { label: "Bonus type", value: "Casino Bonus" },
  { label: "Max bonus", value: "$2,000" },
  { label: "Min deposit", value: "$10" },
  { label: "Wagering", value: "15x bonus amount" },
  { label: "Time limit", value: "30 days to meet requirements" },
  { label: "Eligible games", value: "Slots (100%), Table games (varies)" },
];

const availableStates = [
  { name: "New Jersey", abbr: "NJ" },
  { name: "Michigan", abbr: "MI" },
  { name: "Pennsylvania", abbr: "PA" },
  { name: "West Virginia", abbr: "WV" },
  { name: "Connecticut", abbr: "CT" },
  { name: "Colorado", abbr: "CO" },
];

const faqs = [
  {
    q: "Do I need to enter a DraftKings promo code?",
    a: "No. The current DraftKings Casino welcome offer is applied automatically when you register through an eligible link and make your first deposit. No manual code entry is required.",
  },
  {
    q: "What is the DraftKings Casino bonus?",
    a: "DraftKings offers new casino players up to $2,000 in bonus funds. The minimum qualifying deposit is $10. Bonus funds are subject to a 15x wagering requirement before they can be withdrawn.",
  },
  {
    q: "Can I use my DraftKings Sportsbook account for the casino?",
    a: "Yes. If you already have a DraftKings Sportsbook account, you can access DraftKings Casino through the same app. However, the casino welcome bonus is only available to players who have not previously made a casino deposit.",
  },
  {
    q: "What are DK Dollars and how do I earn them?",
    a: "DK Dollars are DraftKings' loyalty currency earned through gameplay across both casino and sportsbook. They can be used as real money on the platform. You earn DK Dollars based on your wagering activity through the Dynasty Rewards program.",
  },
  {
    q: "Which states is DraftKings Casino available in?",
    a: "DraftKings Casino is licensed and available in New Jersey, Michigan, Pennsylvania, West Virginia, Connecticut, and Colorado. You must be physically located in one of these states to play.",
  },
  {
    q: "How long do I have to meet the wagering requirements?",
    a: "You have 30 days from when the bonus is credited to meet the 15x wagering requirement on the bonus amount. Slots contribute 100% toward wagering. Some table games contribute at reduced rates.",
  },
];

export default function DraftKingsPromoCode() {
  const currentMonth = "April 2026";

  return (
    <>
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      {/* Hero — 2-col layout, left-aligned */}
      <section className="relative overflow-hidden casino-pattern">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/95" />
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-casino-purple/15 blur-3xl" />
          <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-casino-magenta/15 blur-3xl" />
        </div>

        <div className="container relative py-10 sm:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left: copy + CTA */}
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-casino-green/30 bg-casino-green/10 px-3 py-1 text-xs font-semibold text-casino-green">
                  <Clock className="h-3 w-3" />
                  Updated {currentMonth}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-casino-magenta/30 bg-casino-magenta/10 px-3 py-1 text-xs font-semibold text-casino-magenta">
                  <Zap className="h-3 w-3" />
                  Best App
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary/30 px-3 py-1 text-xs font-medium text-muted-foreground">
                  21+ Only
                </span>
              </div>

              {/* Bonus amount -- most dominant text element */}
              <p className="text-5xl font-black text-casino-gold sm:text-6xl lg:text-7xl">
                $2,000
              </p>
              <p className="mt-1 text-base font-semibold text-muted-foreground sm:text-lg">
                Casino Bonus
              </p>

              <h1 className="mt-4 text-balance text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
                DraftKings Promo Code{" "}
                <span className="text-gradient-primary">{currentMonth}</span>
              </h1>

              <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                Get up to <strong className="text-foreground">$2,000 in casino bonus funds</strong> as
                a new DraftKings Casino player. No promo code needed -- the offer applies automatically.
              </p>

              {/* Hero CTA */}
              <a
                href={PROMO_LINK}
                rel="noopener noreferrer sponsored"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-casino-green px-8 py-4 text-base font-bold text-white shadow-lg shadow-casino-green/30 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
              >
                Claim $2,000 Casino Bonus
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-2 text-xs text-muted-foreground">
                21+. New players only. Eligible states only. T&Cs apply.
              </p>

              {/* Trust badges */}
              <div className="mt-5 flex flex-wrap gap-3">
                {["Licensed & Regulated", "No Code Needed", "15x Wagering"].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-secondary/20 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    <CheckCircle2 className="h-3 w-3 text-casino-green" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: offer card */}
            <div className="overflow-hidden rounded-2xl border border-casino-gold/30 bg-secondary/10">
              <div className="flex items-center gap-3 border-b border-casino-gold/20 bg-casino-gold/10 px-6 py-4">
                <img
                  src="/images/draftkings.webp"
                  alt="DraftKings Casino"
                  className="h-12 w-20 rounded-lg border border-border/40 object-cover"
                />
                <div>
                  <p className="text-lg font-bold text-foreground">DraftKings Casino</p>
                  <div className="flex items-center gap-1.5 text-sm text-casino-magenta">
                    <Zap className="h-3.5 w-3.5" />
                    Best App
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-2xl font-bold text-foreground sm:text-3xl">
                  Up to $2,000 Casino Bonus
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Make your first deposit of $10+ and receive up to $2,000 in casino bonus funds to play with.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {bonusDetails.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-2 rounded-xl border border-border/40 bg-background/30 px-4 py-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-casino-green" />
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-semibold text-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href={PROMO_LINK}
                  rel="noopener noreferrer sponsored"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-casino-green px-6 py-4 text-base font-bold text-white shadow-lg shadow-casino-green/25 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                >
                  Claim $2,000 Casino Bonus
                  <ArrowRight className="h-5 w-5" />
                </a>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  21+. New players only. Eligible states only. T&Cs apply. Gambling problem? Call 1-800-GAMBLER.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Claim */}
      <section className="bg-secondary/5">
        <div className="container py-10 sm:py-14">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            How to Claim the DraftKings Bonus
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
            Follow these four steps to activate your casino bonus. The entire process takes under 5 minutes.
          </p>

          <div className="mx-auto mt-8 grid max-w-2xl gap-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex items-start gap-4 rounded-xl border border-border/40 bg-background/50 p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-casino-purple/20 text-sm font-bold text-casino-gold ring-1 ring-casino-purple/30">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA after steps */}
          <div className="mx-auto mt-8 max-w-sm text-center">
            <a
              href={PROMO_LINK}
              rel="noopener noreferrer sponsored"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-casino-green bg-transparent px-6 py-3.5 text-sm font-bold text-casino-green transition-all duration-200 hover:bg-casino-green hover:text-white active:scale-[0.98]"
            >
              Get Started with DraftKings
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-2 text-xs text-muted-foreground">
              21+. T&Cs apply. Gambling problem? Call 1-800-GAMBLER.
            </p>
          </div>
        </div>
      </section>

      {/* State Availability */}
      <section className="bg-background">
        <div className="container py-10 sm:py-14">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Where Is DraftKings Casino Available?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
            DraftKings Casino is licensed and regulated in these US states. You must be physically located
            in an eligible state to create an account and play.
          </p>

          <div className="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-3">
            {availableStates.map((state) => (
              <div
                key={state.abbr}
                className="flex items-center gap-2 rounded-full border border-casino-green/30 bg-casino-green/10 px-4 py-2"
              >
                <Shield className="h-4 w-4 text-casino-green" />
                <span className="text-sm font-semibold text-foreground">{state.name}</span>
                <span className="text-xs text-muted-foreground">({state.abbr})</span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-6 flex max-w-lg items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
            <p className="text-xs leading-relaxed text-muted-foreground">
              Online casino availability depends on state law. DraftKings may expand to additional states
              in the future. Check the DraftKings website for the most current list of eligible states.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="bg-secondary/5">
        <div className="container py-10 sm:py-14">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground">
              DraftKings Casino Review: What You Need to Know
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                DraftKings started as a daily fantasy sports platform and has evolved into one of the
                largest online gaming companies in the US. DraftKings Casino launched alongside the
                sportsbook and benefits from the same robust technology infrastructure and user experience.
              </p>
              <p>
                The DraftKings app is one of the highest-rated casino apps on both iOS and Android, with
                seamless switching between casino games, sports betting, and daily fantasy -- all within
                a single wallet. This integration makes it uniquely convenient for players who enjoy
                multiple forms of online gaming.
              </p>
              <p>
                The Dynasty Rewards loyalty program lets you earn DK Dollars and Crowns through gameplay.
                DK Dollars can be used as real money on the platform, while Crowns unlock tier upgrades
                with increasing benefits like faster withdrawals, exclusive promotions, and priority support.
              </p>
              <p>
                Withdrawals are processed within 1-5 business days depending on the method. DraftKings
                supports bank transfers, PayPal, Visa, Mastercard, and Play+ prepaid cards. VIP members
                enjoy expedited processing times.
              </p>
            </div>

            <h3 className="mt-8 text-xl font-bold text-foreground">
              What We Like About DraftKings
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                "Seamless sportsbook and casino integration in one app",
                "DK Dollars rewards usable as real money on the platform",
                "1,000+ casino games with new titles added weekly",
                "15x wagering requirement (competitive with industry average)",
                "Available in 6 US states with strong regulatory compliance",
                "Highly rated mobile app on iOS and Android",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-casino-green" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA after pros list */}
            <div className="mt-8 text-center">
              <a
                href={PROMO_LINK}
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 rounded-xl bg-casino-green px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-casino-green/25 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
              >
                Claim Your DraftKings Bonus Now
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-2 text-xs text-muted-foreground">
                21+. T&Cs apply. Gambling problem? Call 1-800-GAMBLER.
              </p>
            </div>

            <h3 className="mt-8 text-xl font-bold text-foreground">
              What Could Be Better
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                "Not available in all US states",
                "Withdrawal times can be slower than some competitors (up to 5 days)",
                "No cryptocurrency payment options",
                "Some table games contribute less toward wagering requirements",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sportsbook + Casino in One callout */}
      <section className="bg-background">
        <div className="container py-10 sm:py-14">
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-casino-magenta/30 bg-casino-magenta/5 p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-casino-magenta/20 ring-1 ring-casino-magenta/40">
                <Zap className="h-6 w-6 text-casino-magenta" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Sportsbook + Casino in One
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  DraftKings is the only major platform where your casino play and sports betting
                  share a single wallet and unified rewards program. No juggling separate balances
                  or accounts -- everything is in one place.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "One unified wallet: deposit once, play casino and bet sports freely",
                    "Earn DK Dollars and Crowns across every vertical -- casino, sportsbook, DFS",
                    "Switch from slots to the NFL lines in seconds within the same app",
                    "DK Dollars earned in the casino can be used on sportsbook bets, and vice versa",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-casino-magenta" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  Wondering how DraftKings stacks up against the competition?{" "}
                  <Link href="/compare/betmgm-vs-draftkings" className="text-casino-magenta underline hover:text-casino-magenta/80">
                    See the full BetMGM vs DraftKings comparison
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/5">
        <div className="container py-10 sm:py-14">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-8 max-w-2xl divide-y divide-border/40">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-foreground">
                  {faq.q}
                  <span className="ml-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-background">
        <div className="container py-10 sm:py-14">
          <div className="mx-auto max-w-lg rounded-2xl border border-casino-gold/30 bg-secondary/10 p-8 text-center">
            <h2 className="text-xl font-bold text-foreground">
              Ready to Claim Your $2,000 Bonus?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The DraftKings Casino bonus is one of the largest welcome offers in the US market.
              No promo code required.
            </p>
            <a
              href={PROMO_LINK}
              rel="noopener noreferrer sponsored"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-casino-green px-8 py-4 text-base font-bold text-white shadow-lg shadow-casino-green/25 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            >
              Visit DraftKings Casino
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="mt-3 text-xs text-muted-foreground">
              21+. New players only. T&Cs apply. Gambling problem? Call 1-800-GAMBLER.
            </p>
          </div>
        </div>
      </section>

      <StickyPromoCTA href={PROMO_LINK} label="Claim $2,000 Bonus" />
    </>
  );
}
