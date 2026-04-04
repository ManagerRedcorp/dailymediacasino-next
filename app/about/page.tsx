import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Daily Media Casino, operated by Fan Leads Inc in Las Vegas, NV. Our editorial team reviews and compares licensed US online casinos for players aged 21+.",
  alternates: { canonical: "https://www.dailymediacasino.com/about" },
};

export default function About() {
  return (
    <div className="container py-12">
      <h1 className="mb-6 text-4xl font-bold text-foreground">
        About Daily Media Casino
      </h1>

      <div className="prose w-full max-w-none">
        <p className="text-foreground">
          Daily Media Casino is an independent review platform dedicated to
          helping US players make informed decisions about online casinos and
          sportsbooks. We are operated by{" "}
          <strong>Fan Leads Inc</strong>, based in Las Vegas, Nevada.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">
          Our Mission
        </h2>
        <p className="text-foreground">
          The online casino landscape can be overwhelming. Our mission is to
          cut through the noise by providing transparent, well-researched
          comparisons of licensed operators available to US players. Every
          casino on our site is evaluated against a consistent set of criteria
          before earning a spot in our rankings.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">
          How We Review
        </h2>
        <p className="text-foreground">
          Our editorial process evaluates each operator across several key
          areas:
        </p>
        <ul className="text-foreground">
          <li>
            <strong>Licensing and regulation</strong> &mdash; We verify that
            operators hold valid licenses in the jurisdictions where they
            accept players.
          </li>
          <li>
            <strong>Bonus terms and fairness</strong> &mdash; We read the fine
            print so you don&apos;t have to, highlighting wagering
            requirements, time limits, and game restrictions.
          </li>
          <li>
            <strong>Payout speed and reliability</strong> &mdash; We assess
            how quickly and consistently operators process withdrawals.
          </li>
          <li>
            <strong>Game selection and software</strong> &mdash; We evaluate
            the breadth and quality of each operator&apos;s game library.
          </li>
          <li>
            <strong>Customer support</strong> &mdash; We test response times
            and helpfulness across available support channels.
          </li>
        </ul>
        <p className="text-foreground mt-3">
          Rankings are updated regularly as promotions change and new
          information becomes available. Outdated offers are removed promptly.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">
          Editorial Independence
        </h2>
        <p className="text-foreground">
          Daily Media Casino participates in affiliate programs. When you
          visit an operator through a link on our site and register, we may
          receive a referral fee at no additional cost to you. These
          commercial relationships do not influence our editorial rankings or
          the accuracy of the information we publish. Our reviews and scores
          are produced independently.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">
          Responsible Gambling
        </h2>
        <p className="text-foreground">
          We take responsible gambling seriously. Our content is intended for
          adults aged 21 and older in jurisdictions where online gambling is
          lawfully permitted. If you or someone you know has a gambling
          problem, free and confidential help is available at{" "}
          <strong>1-800-522-4700</strong> (National Problem Gambling Helpline,
          available 24/7).
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">
          Contact Us
        </h2>
        <p className="text-foreground">
          <strong>Fan Leads Inc</strong>
          <br />
          1180 N Town Center Dr, Suite 100
          <br />
          Las Vegas, NV 89144
          <br />
          United States
        </p>
        <p className="text-foreground mt-3">
          For inquiries, please reach out via the contact details provided in
          our{" "}
          <Link href="/terms" className="underline hover:text-foreground">
            Terms and Conditions
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
