import Link from "next/link";
import { TableOfContents } from "./TableOfContents";

export function EditorialContent() {
  return (
    <section className="py-12 casino-pattern">
      <div className="container">
        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            <article className="prose max-w-none">
              {/* How We Review */}
              <section id="how-we-review" className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  How We Evaluate Online Casinos
                </h2>
                <div className="gd-accent" />
                <p className="text-muted-foreground mb-4">
                  Each casino in our rankings goes through a structured
                  evaluation before it earns a place on the list. Our process
                  covers the fundamentals that genuinely affect day-to-day
                  play: legal standing, game depth, bonus clarity, payment
                  reliability, and how well a site handles player issues.
                </p>
                <p className="text-muted-foreground mb-4">
                  Only operators holding an active license from a recognized
                  US state regulator are considered. This baseline ensures
                  accountability, fair game auditing, and defined protections
                  for players in the event of a dispute.
                </p>
                <div className="info-card p-6 my-6">
                  <h3 className="font-bold text-foreground mb-2">
                    What Our Evaluation Covers
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Active US state gaming license check</li>
                    <li>Playthrough requirements and bonus clarity</li>
                    <li>Game library depth and software quality</li>
                    <li>Withdrawal processing times</li>
                    <li>Speed and quality of customer support</li>
                    <li>Performance across mobile devices</li>
                  </ul>
                </div>
              </section>

              {/* Choosing the Right Casino */}
              <section id="choosing-casino" className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Finding the Casino That Suits You
                </h2>
                <div className="gd-accent" />
                <p className="text-muted-foreground mb-4">
                  The US market now hosts a large number of licensed online
                  casinos, which makes the decision harder than it used to be.
                  Rather than chasing the biggest advertised offer, focus on
                  a few factors that directly shape your actual experience.
                </p>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  Game Library
                </h3>
                <p className="text-muted-foreground mb-4">
                  A well-stocked game library signals a quality platform. If
                  you lean toward slots, look for variety in providers and
                  themes. If table games are your focus, check that both
                  standard and live dealer formats are available from
                  recognized studios.
                </p>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  Signup Offer Value
                </h3>
                <p className="text-muted-foreground mb-4">
                  The advertised bonus figure is rarely the full story. A
                  moderate bonus with a 20x playthrough requirement can be
                  far easier to work through than a larger offer with 50x
                  attached. Read the small print, check time limits, and
                  verify which games count toward clearing the requirement.
                </p>
              </section>

              {/* Bonuses Explained */}
              <section id="bonuses-explained" className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Types of Casino Bonuses
                </h2>
                <div className="gd-accent" />
                <p className="text-muted-foreground mb-4">
                  Knowing the difference between bonus formats helps you
                  identify which offers are genuinely useful and which ones
                  are harder to benefit from in practice:
                </p>
                <div className="grid gap-4 md:grid-cols-2 my-6">
                  <div className="info-card p-4">
                    <h3 className="font-bold text-casino-gold mb-2">
                      Deposit Match
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      The operator adds bonus funds proportional to your
                      deposit. A 100% match on $100 gives you $200 to play
                      with, subject to rollover terms.
                    </p>
                  </div>
                  <div className="info-card p-4">
                    <h3 className="font-bold text-casino-gold mb-2">
                      Bonus Spins
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Play designated slot games at no cost from your balance.
                      Any winnings generated are usually subject to a
                      playthrough before withdrawal.
                    </p>
                  </div>
                  <div className="info-card p-4">
                    <h3 className="font-bold text-casino-gold mb-2">
                      No-Deposit Offer
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Credited without requiring a deposit. Amounts tend to be
                      modest, and wagering requirements are typically higher
                      than standard bonuses.
                    </p>
                  </div>
                  <div className="info-card p-4">
                    <h3 className="font-bold text-casino-gold mb-2">
                      Loss Rebate
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      A portion of your net losses over a defined period is
                      returned as bonus credit or real funds, softening the
                      impact of a losing session.
                    </p>
                  </div>
                </div>
              </section>

              {/* Payment Methods */}
              <section id="payment-methods" className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Deposits and Withdrawals
                </h2>
                <div className="gd-accent" />
                <p className="text-muted-foreground mb-4">
                  Licensed US casinos support a range of funding options. The
                  right choice depends on how quickly you want to access your
                  money and which methods your casino accepts:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>
                    <strong className="text-foreground">Debit Cards</strong> —
                    Visa and Mastercard are widely available; deposits post
                    immediately
                  </li>
                  <li>
                    <strong className="text-foreground">Digital Wallets</strong> —
                    PayPal, Skrill, and Neteller typically offer the fastest
                    withdrawal times
                  </li>
                  <li>
                    <strong className="text-foreground">ACH / Bank Transfer</strong> —
                    Suited for larger amounts; processing can take a few
                    business days
                  </li>
                  <li>
                    <strong className="text-foreground">Online Banking</strong> —
                    Instant bank transfer options available at select operators
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  Before registering, always confirm your preferred payment
                  method is supported for both deposits and cashouts, as
                  availability varies by operator.
                </p>
              </section>

              {/* Responsible Gambling */}
              <section id="responsible-gambling" className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Playing Within Your Limits
                </h2>
                <div className="gd-accent" />
                <p className="text-muted-foreground mb-4">
                  Online casino games are a form of entertainment. Keeping
                  that perspective means deciding on limits before you start,
                  not after. A few practical habits make a significant
                  difference over time:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Decide on a session budget in advance and treat it as final</li>
                  <li>Walk away from losses rather than chasing them</li>
                  <li>Schedule natural breaks during longer sessions</li>
                  <li>
                    Activate deposit caps and spending trackers where available
                  </li>
                  <li>Avoid gambling when your judgment may be impaired</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  If gambling ever feels like more than recreation, support
                  is available. Our{" "}
                  <Link
                    href="/responsible-gambling"
                    className="text-primary hover:underline"
                  >
                    Responsible Gambling page
                  </Link>{" "}
                  lists organizations and tools that can help.
                </p>
              </section>

              {/* FAQ */}
              <section id="faq" className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Common Questions Answered
                </h2>
                <div className="gd-accent" />

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Is online casino gambling legal in the United States?
                    </h3>
                    <p className="text-muted-foreground">
                      It depends on your state. Several states have legalized
                      online casino play and issue licenses to operators. Every
                      casino in our rankings holds an active license from a
                      recognized US state authority, making them a legal option
                      where online gambling is permitted.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      How fast are casino payouts?
                    </h3>
                    <p className="text-muted-foreground">
                      Digital wallet methods such as PayPal tend to process
                      the quickest, often within a few hours or by the next
                      day. Debit card withdrawals generally arrive within 1-3
                      business days, while ACH bank transfers may take 3-5
                      business days depending on the operator.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      What does playthrough or wagering requirement mean?
                    </h3>
                    <p className="text-muted-foreground">
                      A playthrough requirement defines how many times you
                      must wager your bonus funds before they can be withdrawn.
                      For example, a $10 bonus with a 35x requirement means
                      you need to place $350 in total bets before cashing out
                      any bonus-derived winnings.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Do these casinos work on smartphones?
                    </h3>
                    <p className="text-muted-foreground">
                      Yes. All casinos in our rankings are fully playable on
                      mobile. Whether through a dedicated app or a responsive
                      browser-based experience, games, payments, and account
                      management all work on both iOS and Android devices.
                    </p>
                  </div>
                </div>
              </section>
            </article>
          </div>

          {/* Sidebar with TOC (desktop only) */}
          <div className="hidden w-64 flex-shrink-0 lg:block">
            <TableOfContents />
          </div>
        </div>
      </div>
    </section>
  );
}
