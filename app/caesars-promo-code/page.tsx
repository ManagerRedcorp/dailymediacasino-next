import type { Metadata } from "next";
import { CheckCircle2, Clock, Shield, Star, ArrowRight, AlertTriangle, Crown } from "lucide-react";
import { StickyPromoCTA } from "@/components/casino/StickyPromoCTA";

export const metadata: Metadata = {
  title: "Caesars Casino Promo Code April 2026 - $1,000 Deposit Match + Bonus Play",
  description:
    "Use the latest Caesars Casino promo code for April 2026. Get up to $1,000 deposit match + bonus play for new players. Available in NJ, MI, PA, WV, CO. 21+ only.",
  alternates: { canonical: "https://www.dailymediacasino.com/caesars-promo-code" },
  openGraph: {
    title: "Caesars Casino Promo Code April 2026 - $1,000 Deposit Match + Bonus Play",
    description:
      "Claim the latest Caesars Casino promo code. Up to $1,000 deposit match + bonus play for new casino players in eligible US states.",
    url: "https://www.dailymediacasino.com/caesars-promo-code",
  },
};

const PROMO_LINK = "#";

const steps = [
  {
    num: "1",
    title: "Visit Caesars Online Casino",
    desc: "Click the link below to go to the official Caesars Casino registration page.",
  },
  {
    num: "2",
    title: "Create your account",
    desc: "Enter your details, verify your identity, and confirm you are 21+ in an eligible state.",
  },
  {
    num: "3",
    title: "Make your first deposit",
    desc: "Deposit $10 or more. Your deposit match + bonus play is applied automatically -- no promo code entry needed.",
  },
  {
    num: "4",
    title: "Start playing",
    desc: "Use your bonus funds on slots, table games, or live dealer. Wagering requirements apply.",
  },
];

const bonusDetails = [
  { label: "Bonus type", value: "Deposit Match + Bonus Play" },
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
    q: "Do I need to enter a Caesars Casino promo code?",
    a: "No. The current Caesars Casino welcome offer is applied automatically when you register through an eligible link and make your first deposit. No manual code entry is required.",
  },
  {
    q: "What is the Caesars deposit match bonus?",
    a: "Caesars Casino offers new players up to $1,000 in deposit match + bonus play. If you deposit $500, you receive $500 in bonus funds. The minimum qualifying deposit is $10.",
  },
  {
    q: "How does Caesars Rewards work with the online casino?",
    a: "Caesars Rewards is a cross-platform loyalty program. Points earned playing online can be redeemed at physical Caesars resorts, hotels, restaurants, and entertainment venues across the country. Your online and in-person tiers are linked.",
  },
  {
    q: "Which states is Caesars Online Casino available in?",
    a: "Caesars Online Casino is licensed and available in New Jersey, Michigan, Pennsylvania, West Virginia, and Colorado. You must be physically located in one of these states to play.",
  },
  {
    q: "Can I withdraw my bonus immediately?",
    a: "No. Bonus funds are subject to a 15x wagering requirement. Once you have wagered the required amount, any remaining bonus balance and winnings become withdrawable.",
  },
  {
    q: "Is Caesars Online Casino safe and legitimate?",
    a: "Yes. Caesars is one of the most recognized names in the casino industry, operating since 1966. The online platform holds valid licenses from state gaming commissions in every state where it operates. Player funds are segregated and protected.",
  },
];

export default function CaesarsPromoCode() {
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
                  <Crown className="h-3 w-3" />
                  Best Rewards
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
                Deposit Match + Bonus Play
              </p>

              <h1 className="mt-4 text-balance text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
                Caesars Casino Promo Code{" "}
                <span className="text-gradient-primary">{currentMonth}</span>
              </h1>

              <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                Get up to <strong className="text-foreground">$1,000 deposit match + bonus play</strong> as
                a new Caesars Online Casino player. No promo code needed -- the offer applies automatically.
              </p>

              {/* Hero CTA */}
              <a
                href={PROMO_LINK}
                rel="noopener noreferrer sponsored"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-casino-green px-8 py-4 text-base font-bold text-white shadow-lg shadow-casino-green/30 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
              >
                Claim $1,000 Deposit Match + Bonus Play
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
                  src="/images/caesars.webp"
                  alt="Caesars Online Casino"
                  className="h-12 w-20 rounded-lg border border-border/40 object-cover"
                />
                <div>
                  <p className="text-lg font-bold text-foreground">Caesars Online Casino</p>
                  <div className="flex items-center gap-1.5 text-sm text-casino-gold">
                    <Crown className="h-3.5 w-3.5" />
                    Best Rewards
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-2xl font-bold text-foreground sm:text-3xl">
                  Up to $1,000 Deposit Match + Bonus Play
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Make your first deposit of $10+ and Caesars matches it up to $1,000 with bonus play included.
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
                  Claim $1,000 Deposit Match + Bonus Play
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
            How to Claim the Caesars Casino Bonus
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
            Follow these four steps to activate your deposit match + bonus play. The entire process takes under 5 minutes.
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
              Get Started with Caesars
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
            Where Is Caesars Online Casino Available?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
            Caesars Online Casino is licensed and regulated in these US states. You must be physically located
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
              Online casino availability depends on state law. Caesars may expand to additional states
              in the future. Check the Caesars Casino website for the most current list of eligible states.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="bg-secondary/5">
        <div className="container py-10 sm:py-14">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground">
              Caesars Online Casino Review: What You Need to Know
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Caesars Online Casino is the digital extension of one of the most iconic names in the
                casino industry. The Caesars brand dates back to 1966, and the online platform brings
                decades of hospitality and gaming expertise to the regulated US market.
              </p>
              <p>
                What sets Caesars apart is the Caesars Rewards loyalty program. Unlike standalone online
                casinos, points earned playing online can be redeemed at physical Caesars resorts, hotels,
                dining venues, spas, and entertainment shows across the country. Your online tier status
                carries over to in-person visits, unlocking VIP treatment at properties like Caesars Palace,
                Paris Las Vegas, and Harrah&apos;s.
              </p>
              <p>
                The game library features 1,200+ titles from top providers including exclusive Caesars-branded
                games. The premium live dealer studio offers blackjack, roulette, baccarat, and game shows
                with professional dealers streaming in HD. Caesars has invested heavily in its live dealer
                experience, rivaling any competitor in the US market.
              </p>
              <p>
                As a brand that has operated physical casinos for nearly 60 years, Caesars brings MGM-level
                trust and reliability to online gaming. The platform is backed by Caesars Entertainment, Inc.,
                one of the largest casino companies in the world, with a strong regulatory track record across
                all operating states.
              </p>
            </div>

            <h3 className="mt-8 text-xl font-bold text-foreground">
              What We Like About Caesars Casino
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                "Caesars Rewards cross-platform loyalty (earn online, redeem at resorts)",
                "1,200+ games including exclusive Caesars titles",
                "Premium live dealer studio with HD streaming",
                "Trusted brand operating since 1966",
                "15x wagering requirement (lower than industry average)",
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
                Claim Your Caesars Bonus Now
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
                "Smaller game library than BetMGM (1,200 vs 2,000+)",
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

      {/* Caesars Rewards Empire callout */}
      <section className="bg-background">
        <div className="container py-10 sm:py-14">
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-casino-gold/30 bg-casino-gold/5 p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-casino-gold/20 ring-1 ring-casino-gold/40">
                <Crown className="h-6 w-6 text-casino-gold" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Caesars Rewards Empire
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Caesars Rewards is one of the most powerful loyalty programs in the casino industry.
                  With 50+ resort destinations across the country, online play directly converts into
                  real-world benefits that no purely digital casino can match.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Earn Reward Credits at 50+ Caesars resort destinations nationwide",
                    "Redeem points for hotel stays, fine dining, spa access, and live shows",
                    "Your Tier Status (Gold, Platinum, Diamond, Diamond Plus) carries over in-person",
                    "Exclusive Diamond-tier experiences: priority check-in, resort fee waivers, lounge access",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-casino-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
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
              The Caesars deposit match + bonus play is one of the strongest welcome offers in the US market.
              No promo code required.
            </p>
            <a
              href={PROMO_LINK}
              rel="noopener noreferrer sponsored"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-casino-green px-8 py-4 text-base font-bold text-white shadow-lg shadow-casino-green/25 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            >
              Visit Caesars Online Casino
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
