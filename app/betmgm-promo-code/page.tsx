import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, Shield, Star, ArrowRight, AlertTriangle, Trophy } from "lucide-react";
import { StickyPromoCTA } from "@/components/casino/StickyPromoCTA";

export const metadata: Metadata = {
  title: "BetMGM Promo Code April 2026 - Get $1,000 Deposit Match",
  description:
    "Use the latest BetMGM promo code for April 2026. Get up to $1,000 deposit match bonus for new players. Available in NJ, MI, PA, WV, CO. 21+ only.",
  alternates: { canonical: "https://www.dailymediacasino.com/betmgm-promo-code" },
  openGraph: {
    title: "BetMGM Promo Code April 2026 - $1,000 Deposit Match",
    description:
      "Claim the latest BetMGM promo code. Up to $1,000 deposit match for new casino players in eligible US states.",
    url: "https://www.dailymediacasino.com/betmgm-promo-code",
  },
};

const PROMO_LINK = "#";

const steps = [
  {
    num: "1",
    title: "Visit BetMGM Casino",
    desc: "Click the link below to go to the official BetMGM Casino registration page.",
  },
  {
    num: "2",
    title: "Create your account",
    desc: "Enter your details, verify your identity, and confirm you are 21+ in an eligible state.",
  },
  {
    num: "3",
    title: "Make your first deposit",
    desc: "Deposit $10 or more. Your deposit match bonus is applied automatically -- no promo code entry needed.",
  },
  {
    num: "4",
    title: "Start playing",
    desc: "Use your bonus funds on slots, table games, or live dealer. Wagering requirements apply.",
  },
];

const bonusDetails = [
  { label: "Bonus type", value: "100% Deposit Match" },
  { label: "Max bonus", value: "$1,000" },
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
  { name: "Colorado", abbr: "CO" },
];

const faqs = [
  {
    q: "Do I need to enter a BetMGM promo code?",
    a: "No. The current BetMGM welcome offer is applied automatically when you register through an eligible link and make your first deposit. No manual code entry is required.",
  },
  {
    q: "What is the BetMGM deposit match bonus?",
    a: "BetMGM offers new players a 100% deposit match up to $1,000. If you deposit $500, you get $500 in bonus funds to play with. The minimum qualifying deposit is $10.",
  },
  {
    q: "How long do I have to meet the wagering requirements?",
    a: "You have 30 days from when the bonus is credited to meet the 15x wagering requirement on the bonus amount. Slots contribute 100% toward wagering. Some table games contribute at reduced rates.",
  },
  {
    q: "Which states is BetMGM Casino available in?",
    a: "BetMGM Casino is licensed and available in New Jersey, Michigan, Pennsylvania, West Virginia, and Colorado. You must be physically located in one of these states to play.",
  },
  {
    q: "Can I withdraw my bonus immediately?",
    a: "No. Bonus funds are subject to a 15x wagering requirement. Once you have wagered the required amount, any remaining bonus balance and winnings become withdrawable.",
  },
  {
    q: "Is BetMGM Casino safe and licensed?",
    a: "Yes. BetMGM is operated by Entain Holdings and MGM Resorts International. It holds valid licenses from state gaming commissions in every state where it operates. Player funds are segregated and protected.",
  },
];

export default function BetMGMPromoCode() {
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
                <span className="inline-flex items-center gap-1.5 rounded-full border border-casino-gold/40 bg-casino-gold/10 px-3 py-1 text-xs font-semibold text-casino-gold">
                  <Trophy className="h-3 w-3" />
                  Top Pick
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary/30 px-3 py-1 text-xs font-medium text-muted-foreground">
                  21+ Only
                </span>
              </div>

              {/* Bonus amount -- most dominant text element */}
              <p className="text-5xl font-black text-casino-gold sm:text-6xl lg:text-7xl">
                $1,000
              </p>
              <p className="mt-1 text-base font-semibold text-muted-foreground sm:text-lg">
                Deposit Match Bonus
              </p>

              <h1 className="mt-4 text-balance text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
                BetMGM Promo Code{" "}
                <span className="text-gradient-primary">{currentMonth}</span>
              </h1>

              <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                Get a <strong className="text-foreground">100% deposit match up to $1,000</strong> as
                a new BetMGM Casino player. No promo code needed -- the offer applies automatically.
              </p>

              {/* Hero CTA */}
              <a
                href={PROMO_LINK}
                rel="noopener noreferrer sponsored"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-casino-green px-8 py-4 text-base font-bold text-white shadow-lg shadow-casino-green/30 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
              >
                Claim $1,000 Deposit Match
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
                  src="/images/betmgm.webp"
                  alt="BetMGM Casino"
                  className="h-12 w-20 rounded-lg border border-border/40 object-cover"
                />
                <div>
                  <p className="text-lg font-bold text-foreground">BetMGM Casino</p>
                  <div className="flex items-center gap-1.5 text-sm text-casino-gold">
                    <Trophy className="h-3.5 w-3.5" />
                    Top Pick
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-2xl font-bold text-foreground sm:text-3xl">
                  100% Deposit Match up to $1,000
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Make your first deposit of $10+ and BetMGM matches it dollar-for-dollar up to $1,000.
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
                  Claim $1,000 Deposit Match
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
            How to Claim the BetMGM Bonus
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
            Follow these four steps to activate your deposit match. The entire process takes under 5 minutes.
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
              Get Started with BetMGM
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
            Where Is BetMGM Casino Available?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
            BetMGM Casino is licensed and regulated in these US states. You must be physically located
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
              Online casino availability depends on state law. BetMGM may expand to additional states
              in the future. Check the BetMGM website for the most current list of eligible states.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="bg-secondary/5">
        <div className="container py-10 sm:py-14">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground">
              BetMGM Casino Review: What You Need to Know
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                BetMGM Casino is backed by two of the largest names in gambling: MGM Resorts
                International and Entain Holdings. The platform launched in 2020 and has quickly
                become one of the most popular online casinos in the regulated US market.
              </p>
              <p>
                The game library includes over 2,000 titles from providers like NetEnt, IGT,
                Evolution Gaming, and exclusive MGM-branded games. Live dealer options cover
                blackjack, roulette, baccarat, and game shows with real dealers streaming in HD.
              </p>
              <p>
                Withdrawals are processed within 1-3 business days for most methods. BetMGM
                supports bank transfers, PayPal, Visa, Mastercard, and Play+ prepaid cards.
                There are no withdrawal fees.
              </p>
              <p>
                The BetMGM Rewards program is integrated with the M life Rewards loyalty
                program used at MGM properties nationwide. Points earned online can be redeemed
                at physical MGM resorts for hotel stays, dining, and entertainment.
              </p>
            </div>

            <h3 className="mt-8 text-xl font-bold text-foreground">
              What We Like About BetMGM
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                "2,000+ games including exclusive MGM titles",
                "M life Rewards integration across MGM resorts",
                "15x wagering requirement (lower than industry average)",
                "Fast PayPal and bank withdrawals (1-3 days)",
                "Licensed in 5 US states with strong regulatory track record",
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
                Claim Your BetMGM Bonus Now
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

      {/* M life Rewards Integration callout */}
      <section className="bg-background">
        <div className="container py-10 sm:py-14">
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-casino-gold/30 bg-casino-gold/5 p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-casino-gold/20 ring-1 ring-casino-gold/40">
                <Star className="h-6 w-6 text-casino-gold" fill="currentColor" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  M life Rewards Integration
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  BetMGM is uniquely connected to the M life Rewards program -- the same loyalty
                  system used across all MGM Resorts properties. Every dollar you wager online
                  earns Tier Credits and Reward Credits that can be redeemed at physical MGM
                  destinations nationwide.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Redeem points for hotel stays at MGM Grand, Bellagio, Aria, and more",
                    "Use credits toward dining, shows, spa treatments, and resort experiences",
                    "Your online Tier Status unlocks VIP treatment during in-person resort visits",
                    "One loyalty program spanning both online play and physical properties",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-casino-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  Not sure if BetMGM is the right choice?{" "}
                  <Link href="/compare/betmgm-vs-draftkings" className="text-casino-gold underline hover:text-casino-gold/80">
                    See how BetMGM compares to DraftKings
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
              Ready to Claim Your $1,000 Bonus?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The BetMGM deposit match is one of the strongest welcome offers in the US market.
              No promo code required.
            </p>
            <a
              href={PROMO_LINK}
              rel="noopener noreferrer sponsored"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-casino-green px-8 py-4 text-base font-bold text-white shadow-lg shadow-casino-green/25 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            >
              Visit BetMGM Casino
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="mt-3 text-xs text-muted-foreground">
              21+. New players only. T&Cs apply. Gambling problem? Call 1-800-GAMBLER.
            </p>
          </div>
        </div>
      </section>

      <StickyPromoCTA href={PROMO_LINK} label="Claim $1,000 Bonus" />
    </>
  );
}
