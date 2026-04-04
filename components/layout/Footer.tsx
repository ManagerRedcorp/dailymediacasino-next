import Link from "next/link";
import { siteSettings } from "@/lib/config";

const footerLinks = {
  casino: [
    { label: "Roulette", href: "/roulette" },
    { label: "Slots", href: "/slots" },
    { label: "Blackjack", href: "/blackjack" },
    { label: "Poker", href: "/poker" },
    { label: "Live Dealer", href: "/live-dealer" },
  ],
  bonuses: [
    { label: "BetMGM Promo Code", href: "/betmgm-promo-code" },
    { label: "DraftKings Promo", href: "/draftkings-promo-code" },
    { label: "Caesars Promo", href: "/caesars-promo-code" },
    { label: "BetMGM vs DraftKings", href: "/compare/betmgm-vs-draftkings" },
    { label: "All Bonuses", href: "/casino-bonuses" },
  ],
  betting: [
    { label: "Sportsbooks", href: "/sportsbooks" },
    { label: "Football", href: "/football" },
    { label: "Boxing", href: "/boxing" },
  ],
  legal: [
    { label: "About Us", href: "/about" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Responsible Gambling", href: "/responsible-gambling" },
    { label: "Cookie Policy", href: "/privacy#cookies" },
  ],
};

const certifications = [
  {
    name: "21+",
    src: "/images/21.webp",
    alt: "21+ only",
    href: "",
  },
  {
    name: "1-800-GAMBLER",
    src: "/images/1-800-gambler.svg",
    alt: "1-800-GAMBLER",
    href: "https://www.1800gambler.net/",
  },
  {
    name: "Gamblers Anonymous",
    src: "/images/gamblers-anonymous.png",
    alt: "Gamblers Anonymous",
    href: "https://gamblersanonymous.org/",
  },
  {
    name: "National Problem Gambling Helpline (NCPG)",
    src: "/images/ncpg.svg",
    alt: "National Problem Gambling Helpline (NCPG)",
    href: "https://www.ncpgambling.org/ncpg/",
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-3">
      <h3 className="shrink-0 text-[11px] font-bold uppercase tracking-[0.12em] text-white/60">
        {children}
      </h3>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-casino-darker">
      <div className="gd" />

      <div className="container py-12">

        {/* -- TOP GRID: brand + certs left | nav columns right -- */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-flex items-center">
              <img
                src="/images/dailymediacasino-logo.svg"
                alt={siteSettings.siteName}
                className="h-14 w-auto"
                loading="eager"
                draggable={false}
              />
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              An independent guide for US casino players. We cover licensed,
              state-regulated operators and highlight the deals that are worth
              your attention.
            </p>

            {/* Certification logos */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
              {certifications.map((cert) =>
                cert.href ? (
                  <a
                    key={cert.name}
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={cert.alt}
                    title={cert.alt}
                    className="opacity-80 transition-opacity hover:opacity-100"
                  >
                    <img
                      src={cert.src}
                      alt={cert.alt}
                      loading="lazy"
                      className="h-9 w-auto"
                    />
                  </a>
                ) : (
                  <span
                    key={cert.name}
                    aria-label={cert.alt}
                    title={cert.alt}
                    className="opacity-80"
                  >
                    <img
                      src={cert.src}
                      alt={cert.alt}
                      loading="lazy"
                      className="h-9 w-auto"
                    />
                  </span>
                )
              )}
            </div>
          </div>

          {/* Casino links */}
          <div className="rounded-xl p-5" style={{ backgroundColor: "rgb(37 37 37 / 25%)" }}>
            <h4 className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white/60">
              Casino
            </h4>
            <ul className="space-y-2">
              {footerLinks.casino.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bonuses links */}
          <div className="rounded-xl p-5" style={{ backgroundColor: "rgb(37 37 37 / 25%)" }}>
            <h4 className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white/60">
              Bonuses
            </h4>
            <ul className="space-y-2">
              {footerLinks.bonuses.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Betting links */}
          <div className="rounded-xl p-5" style={{ backgroundColor: "rgb(37 37 37 / 25%)" }}>
            <h4 className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white/60">
              Betting
            </h4>
            <ul className="space-y-2">
              {footerLinks.betting.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div className="rounded-xl p-5" style={{ backgroundColor: "rgb(37 37 37 / 25%)" }}>
            <h4 className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white/60">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* -- DISCLOSURE SECTIONS -- */}
        <div className="mt-10 space-y-7 border-t border-white/10 pt-8">

          {/* Advertising Disclosure */}
          <div>
            <SectionHeading>Advertising Disclosure</SectionHeading>
            <div className="space-y-2 text-[12px] leading-relaxed text-white/55">
              <p>
                This site publishes independent editorial content about online
                casinos and sports betting platforms available to US players.
                All rankings, scores, and assessments reflect our own evaluation
                process and are presented for general informational use only.
                They are not guarantees of quality or predictions of outcomes.
              </p>
              <p>
                Some operators featured here have commercial relationships with
                this site. We may receive referral compensation when users
                register through links on this page. This arrangement may affect
                the placement or prominence of certain brands, but it does not
                alter our editorial standards or the accuracy of information
                we present.
              </p>
              <p>
                Bonus offers, promotions, and terms displayed on this site
                originate from third-party operators and can be withdrawn or
                modified at any time without notice. Always verify current terms
                directly on the operator&apos;s official website before claiming
                any offer. The legality of online gambling differs across US
                states — you are solely responsible for verifying that online
                gambling is permitted under the laws applicable in your state.
              </p>
              <p>
                Nothing published here constitutes legal, financial, tax, or
                professional advice of any kind. This site is designed for
                adults aged 21 and older in jurisdictions where online gambling
                is lawfully permitted.
              </p>
            </div>
          </div>

          {/* Responsible Gambling */}
          <div>
            <SectionHeading>Responsible Gambling</SectionHeading>
            <div className="space-y-2 text-[12px] leading-relaxed text-white/55">
              <p>
                Gambling is entertainment. It should never be used as a method
                to generate income or recover financial losses. Playing within
                a budget you can genuinely afford to lose is the foundation of
                a healthy relationship with casino games and sports betting.
              </p>
              <p>
                If gambling feels out of control or begins to affect your
                finances, relationships, or mental health, free and confidential
                help is available. Contact the National Problem Gambling Helpline
                at 1-800-522-4700, available 24/7, operated by the National
                Council on Problem Gambling.
              </p>
            </div>
          </div>
        </div>

        {/* -- COPYRIGHT BAR -- */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Fan Leads Inc &mdash; dailymediacasino.com &mdash; All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            21+ Only &middot; Please gamble responsibly.
          </p>
        </div>

      </div>
    </footer>
  );
}
