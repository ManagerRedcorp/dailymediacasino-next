import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Trophy, Shield, Zap, Star, Crown } from "lucide-react";
import { StickyPromoCTA } from "@/components/casino/StickyPromoCTA";

export const metadata: Metadata = {
  title: "BetMGM vs DraftKings Casino 2026 - Full Comparison",
  description:
    "BetMGM vs DraftKings Casino compared side by side. Bonuses, games, payouts, mobile apps, and loyalty programs. Find which US casino is best for you. 21+.",
  alternates: {
    canonical: "https://www.dailymediacasino.com/compare/betmgm-vs-draftkings",
  },
  openGraph: {
    title: "BetMGM vs DraftKings Casino 2026 - Full Comparison",
    description:
      "BetMGM vs DraftKings Casino compared side by side. Bonuses, games, payouts, mobile apps, and loyalty programs. Find which US casino is best for you. 21+.",
    url: "https://www.dailymediacasino.com/compare/betmgm-vs-draftkings",
  },
};

const CTA_LINK = "#";

const comparisonRows = [
  {
    label: "Welcome Bonus",
    betmgm: "100% Deposit Match up to $1,000",
    draftkings: "Up to $2,000 Casino Bonus",
    winner: "draftkings" as const,
  },
  {
    label: "Wagering Requirements",
    betmgm: "15x bonus amount",
    draftkings: "15x bonus amount",
    winner: "tie" as const,
  },
  {
    label: "Min Deposit",
    betmgm: "$10",
    draftkings: "$10",
    winner: "tie" as const,
  },
  {
    label: "Game Count",
    betmgm: "2,000+",
    draftkings: "1,200+",
    winner: "betmgm" as const,
  },
  {
    label: "Live Dealer",
    betmgm: "Yes -- Evolution, Ezugi",
    draftkings: "Yes -- Evolution",
    winner: "betmgm" as const,
  },
  {
    label: "Mobile App Rating",
    betmgm: "4.6 / 5",
    draftkings: "4.7 / 5",
    winner: "draftkings" as const,
  },
  {
    label: "Payout Speed",
    betmgm: "1-3 business days",
    draftkings: "1-3 business days",
    winner: "tie" as const,
  },
  {
    label: "Loyalty Program",
    betmgm: "M life Rewards (cross-resort)",
    draftkings: "DK Dollars + Dynasty Rewards",
    winner: "betmgm" as const,
  },
  {
    label: "Available States",
    betmgm: "NJ, MI, PA, WV, CO",
    draftkings: "NJ, MI, PA, WV, CT, CO",
    winner: "draftkings" as const,
  },
];

const betmgmWins = [
  {
    title: "M life Rewards cross-platform loyalty",
    desc: "BetMGM is the only US online casino tied directly to the M life Rewards program. Points earned online translate to real-world perks at MGM resorts including hotel stays, dining, and show tickets at Bellagio, Aria, MGM Grand, and more.",
  },
  {
    title: "Larger game library with 2,000+ titles",
    desc: "BetMGM offers a wider selection of slots and table games than DraftKings, including exclusive MGM-branded titles and games from providers like NetEnt, IGT, and Playtech that are not always available on competing platforms.",
  },
  {
    title: "More live dealer variety",
    desc: "BetMGM partners with both Evolution Gaming and Ezugi for its live dealer section, giving players more table options and betting limits compared to DraftKings' Evolution-only lineup.",
  },
  {
    title: "Established casino brand heritage",
    desc: "Backed by MGM Resorts International and Entain Holdings, BetMGM brings decades of brick-and-mortar casino experience to the online space -- a track record DraftKings (originally a DFS company) does not match.",
  },
];

const draftkingsWins = [
  {
    title: "Higher welcome bonus -- up to $2,000",
    desc: "DraftKings offers double the maximum bonus compared to BetMGM's $1,000 cap. For high-rolling new players, that extra $1,000 in bonus funds makes a meaningful difference out of the gate.",
  },
  {
    title: "Top-rated mobile app experience",
    desc: "DraftKings consistently earns the highest mobile app ratings among US online casinos. The app is fast, intuitive, and integrates casino, sportsbook, and daily fantasy into a single unified experience.",
  },
  {
    title: "Sportsbook and DFS integration",
    desc: "DraftKings lets you switch between casino, sportsbook, and daily fantasy sports from the same account and wallet. If you bet on sports and play casino games, this is a major convenience advantage.",
  },
  {
    title: "DK Dollars and Dynasty Rewards",
    desc: "DraftKings' loyalty system awards DK Dollars that can be used across all DraftKings products. Dynasty Rewards tiers unlock progressively better perks -- and everything is contained within the DraftKings ecosystem.",
  },
];

const faqs = [
  {
    q: "Is BetMGM or DraftKings better for casino games?",
    a: "BetMGM has the larger game library with over 2,000 titles compared to about 1,200 on DraftKings. If game variety is your priority, BetMGM is the stronger choice. DraftKings still covers all major categories including slots, table games, and live dealer.",
  },
  {
    q: "Which has the better welcome bonus -- BetMGM or DraftKings?",
    a: "DraftKings offers up to $2,000 in casino bonus funds compared to BetMGM's $1,000 deposit match. Both require a $10 minimum deposit and carry a 15x wagering requirement. DraftKings wins on raw bonus value.",
  },
  {
    q: "Can I use both BetMGM and DraftKings at the same time?",
    a: "Yes. There is no rule preventing you from having accounts at both casinos. Many players sign up for both to take advantage of each welcome bonus and compare the platforms firsthand.",
  },
  {
    q: "Which casino has faster payouts?",
    a: "Both BetMGM and DraftKings process withdrawals within 1-3 business days for most methods including PayPal and bank transfer. Neither has a significant speed advantage over the other.",
  },
  {
    q: "Are BetMGM and DraftKings Casino legal in my state?",
    a: "Both are legal in NJ, MI, PA, WV, and CO. DraftKings is also available in CT. You must be physically located in an eligible state to play. Check each casino's website for the most current state availability.",
  },
  {
    q: "Which loyalty program is better -- M life Rewards or DK Dollars?",
    a: "It depends on your lifestyle. M life Rewards lets you earn perks at physical MGM resorts (hotels, dining, shows). DK Dollars are redeemable across DraftKings' online products. If you visit Las Vegas regularly, BetMGM wins. If you prefer online-only rewards, DraftKings is the better fit.",
  },
];

function WinnerBadge({ winner }: { winner: "betmgm" | "draftkings" | "tie" }) {
  if (winner === "tie") return null;
  return (
    <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-casino-green/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-casino-green">
      <Trophy className="h-2.5 w-2.5" />
      Edge
    </span>
  );
}

export default function BetMGMvsDraftKings() {
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

      {/* ───── Hero ───── */}
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
                <span className="inline-flex items-center gap-1.5 rounded-full border border-casino-gold/40 bg-casino-gold/10 px-3 py-1 text-xs font-semibold text-casino-gold">
                  <Crown className="h-3 w-3" />
                  Head-to-Head
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary/30 px-3 py-1 text-xs font-medium text-muted-foreground">
                  21+ Only
                </span>
              </div>

              <h1 className="text-balance text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
                BetMGM vs DraftKings Casino --{" "}
                <span className="text-gradient-primary">Which Is Better in 2026?</span>
              </h1>

              <p className="mt-4 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                Two of the biggest names in US online gambling go head-to-head. We compare
                bonuses, game libraries, mobile apps, loyalty programs, and payouts so you
                can pick the right casino for your play style.
              </p>

              {/* Hero CTA */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={CTA_LINK}
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 rounded-xl bg-casino-green px-7 py-4 text-base font-bold text-white shadow-lg shadow-casino-green/30 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                >
                  Try BetMGM -- $1,000 Match
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href={CTA_LINK}
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-casino-green bg-transparent px-7 py-4 text-base font-bold text-casino-green transition-all duration-200 hover:bg-casino-green hover:text-white active:scale-[0.98]"
                >
                  Try DraftKings -- $2,000 Bonus
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                21+. New players only. Eligible states only. T&Cs apply.
              </p>
            </div>

            {/* Right: quick head-to-head card */}
            <div className="overflow-hidden rounded-2xl border border-casino-gold/30 bg-secondary/10">
              <div className="grid grid-cols-2 divide-x divide-border/40">
                {/* BetMGM side */}
                <div className="p-5 text-center sm:p-6">
                  <img
                    src="/images/betmgm.webp"
                    alt="BetMGM Casino logo"
                    className="mx-auto h-12 w-20 rounded-lg border border-border/40 object-cover"
                  />
                  <p className="mt-3 text-lg font-bold text-foreground">BetMGM</p>
                  <p className="mt-1 text-2xl font-black text-casino-gold">$1,000</p>
                  <p className="text-xs text-muted-foreground">Deposit Match</p>
                  <div className="mt-3 space-y-1 text-left text-xs text-muted-foreground">
                    <p className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 text-casino-green" /> 2,000+ games
                    </p>
                    <p className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 text-casino-green" /> M life Rewards
                    </p>
                    <p className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 text-casino-green" /> 15x wagering
                    </p>
                  </div>
                </div>

                {/* DraftKings side */}
                <div className="p-5 text-center sm:p-6">
                  <img
                    src="/images/draftkings.webp"
                    alt="DraftKings Casino logo"
                    className="mx-auto h-12 w-20 rounded-lg border border-border/40 object-cover"
                  />
                  <p className="mt-3 text-lg font-bold text-foreground">DraftKings</p>
                  <p className="mt-1 text-2xl font-black text-casino-gold">$2,000</p>
                  <p className="text-xs text-muted-foreground">Casino Bonus</p>
                  <div className="mt-3 space-y-1 text-left text-xs text-muted-foreground">
                    <p className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 text-casino-green" /> 1,200+ games
                    </p>
                    <p className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 text-casino-green" /> DK Dollars
                    </p>
                    <p className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 text-casino-green" /> 15x wagering
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t border-border/40 bg-background/30 px-5 py-3 text-center">
                <p className="text-xs text-muted-foreground">
                  Scroll down for the full breakdown
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Head-to-Head Comparison Table ───── */}
      <section className="bg-secondary/5">
        <div className="container py-10 sm:py-14">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Head-to-Head Comparison
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
            Every key metric compared. The casino with the edge in each category is highlighted.
          </p>

          <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-border/40">
            {/* Table header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-border/40 bg-background/60 px-4 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground sm:px-6">
              <span>Category</span>
              <span className="text-center">BetMGM</span>
              <span className="text-center">DraftKings</span>
            </div>

            {/* Table rows */}
            {comparisonRows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1fr_1fr_1fr] items-center gap-2 border-b border-border/20 px-4 py-3.5 sm:px-6 ${
                  i % 2 === 0 ? "bg-secondary/5" : "bg-background/30"
                }`}
              >
                <span className="text-sm font-semibold text-foreground">
                  {row.label}
                </span>
                <span
                  className={`text-center text-sm ${
                    row.winner === "betmgm"
                      ? "font-bold text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {row.betmgm}
                  {row.winner === "betmgm" && <WinnerBadge winner={row.winner} />}
                </span>
                <span
                  className={`text-center text-sm ${
                    row.winner === "draftkings"
                      ? "font-bold text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {row.draftkings}
                  {row.winner === "draftkings" && <WinnerBadge winner={row.winner} />}
                </span>
              </div>
            ))}
          </div>

          {/* CTA after table */}
          <div className="mx-auto mt-8 flex max-w-md flex-wrap justify-center gap-3">
            <a
              href={CTA_LINK}
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 rounded-xl bg-casino-green px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-casino-green/25 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            >
              Claim BetMGM $1,000 Match
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={CTA_LINK}
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-casino-green bg-transparent px-6 py-3.5 text-sm font-bold text-casino-green transition-all duration-200 hover:bg-casino-green hover:text-white active:scale-[0.98]"
            >
              Claim DraftKings $2,000 Bonus
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            21+. T&Cs apply. Gambling problem? Call 1-800-GAMBLER.
          </p>
        </div>
      </section>

      {/* ───── Where BetMGM Wins ───── */}
      <section className="bg-background">
        <div className="container py-10 sm:py-14">
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-casino-gold/20 ring-1 ring-casino-gold/40">
                <Star className="h-5 w-5 text-casino-gold" />
              </div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Where BetMGM Wins
              </h2>
            </div>

            <div className="mt-6 space-y-4">
              {betmgmWins.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/40 bg-secondary/10 p-5"
                >
                  <h3 className="flex items-start gap-2 text-sm font-semibold text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-casino-green" />
                    {item.title}
                  </h3>
                  <p className="mt-2 pl-6 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              Read more about BetMGM's current offer on our{" "}
              <Link
                href="/betmgm-promo-code"
                className="font-semibold text-casino-green underline underline-offset-2 hover:text-casino-green/80"
              >
                BetMGM promo code page
              </Link>
              .
            </p>

            {/* CTA */}
            <div className="mt-6 text-center">
              <a
                href={CTA_LINK}
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 rounded-xl bg-casino-green px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-casino-green/25 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
              >
                Claim BetMGM $1,000 Match
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-2 text-xs text-muted-foreground">
                21+. T&Cs apply. Gambling problem? Call 1-800-GAMBLER.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Where DraftKings Wins ───── */}
      <section className="bg-secondary/5">
        <div className="container py-10 sm:py-14">
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-casino-gold/20 ring-1 ring-casino-gold/40">
                <Zap className="h-5 w-5 text-casino-gold" />
              </div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Where DraftKings Wins
              </h2>
            </div>

            <div className="mt-6 space-y-4">
              {draftkingsWins.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/40 bg-background/50 p-5"
                >
                  <h3 className="flex items-start gap-2 text-sm font-semibold text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-casino-green" />
                    {item.title}
                  </h3>
                  <p className="mt-2 pl-6 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              Read more about DraftKings' current offer on our{" "}
              <Link
                href="/draftkings-promo-code"
                className="font-semibold text-casino-green underline underline-offset-2 hover:text-casino-green/80"
              >
                DraftKings promo code page
              </Link>
              .
            </p>

            {/* CTA */}
            <div className="mt-6 text-center">
              <a
                href={CTA_LINK}
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-casino-green bg-transparent px-7 py-3.5 text-sm font-bold text-casino-green transition-all duration-200 hover:bg-casino-green hover:text-white active:scale-[0.98]"
              >
                Claim DraftKings $2,000 Bonus
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-2 text-xs text-muted-foreground">
                21+. T&Cs apply. Gambling problem? Call 1-800-GAMBLER.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Our Verdict ───── */}
      <section className="bg-background">
        <div className="container py-10 sm:py-14">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
              Our Verdict
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
              Both BetMGM and DraftKings are top-tier US online casinos. The best choice depends
              on what matters most to you.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {/* Choose BetMGM if... */}
              <div className="rounded-2xl border border-casino-gold/30 bg-casino-gold/5 p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-casino-gold">
                  Choose BetMGM if...
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "You want the largest game library (2,000+ titles)",
                    "You visit MGM resorts and want M life Rewards integration",
                    "You prefer more live dealer table variety",
                    "You value an established casino brand with decades of history",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-casino-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Choose DraftKings if... */}
              <div className="rounded-2xl border border-casino-green/30 bg-casino-green/5 p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-casino-green">
                  Choose DraftKings if...
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "You want the biggest welcome bonus ($2,000 vs $1,000)",
                    "You also bet on sports or play daily fantasy",
                    "You prefer the highest-rated mobile app experience",
                    "You want access in CT (where BetMGM is not yet available)",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-casino-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Verdict CTA */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={CTA_LINK}
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 rounded-xl bg-casino-green px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-casino-green/25 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
              >
                Get BetMGM $1,000 Match
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={CTA_LINK}
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-casino-green bg-transparent px-7 py-3.5 text-sm font-bold text-casino-green transition-all duration-200 hover:bg-casino-green hover:text-white active:scale-[0.98]"
              >
                Get DraftKings $2,000 Bonus
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              21+. New players only. Eligible states only. T&Cs apply.
            </p>
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
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
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Bottom CTA ───── */}
      <section className="bg-background">
        <div className="container py-10 sm:py-14">
          <div className="mx-auto max-w-lg rounded-2xl border border-casino-gold/30 bg-secondary/10 p-8 text-center">
            <h2 className="text-xl font-bold text-foreground">
              Ready to Start Playing?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Both BetMGM and DraftKings offer strong welcome bonuses for new players.
              Sign up for one -- or both -- and decide which platform fits your style.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={CTA_LINK}
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 rounded-xl bg-casino-green px-7 py-4 text-base font-bold text-white shadow-lg shadow-casino-green/25 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
              >
                BetMGM -- $1,000 Match
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href={CTA_LINK}
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-casino-green bg-transparent px-7 py-4 text-base font-bold text-casino-green transition-all duration-200 hover:bg-casino-green hover:text-white active:scale-[0.98]"
              >
                DraftKings -- $2,000 Bonus
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              21+. New players only. T&Cs apply. Gambling problem? Call 1-800-GAMBLER.
            </p>
          </div>
        </div>
      </section>

      <StickyPromoCTA href={CTA_LINK} label="Compare Bonuses -- BetMGM vs DraftKings" />
    </>
  );
}
