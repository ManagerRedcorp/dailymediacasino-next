import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the terms and conditions for Daily Media Casino. Usage policies, disclaimers, affiliate disclosure, and legal notices for US visitors.",
  alternates: { canonical: "https://www.dailymediacasino.com/terms" },
};

export default function TermsAndConditions() {
  return (
    <div className="container py-12">
      <h1 className="mb-6 text-4xl font-bold text-foreground">
        Terms and Conditions
      </h1>

      <div className="prose w-full max-w-none">
        <p className="text-foreground">
          Welcome to <strong>Daily Media Casino</strong> (the{" "}
          <strong>&quot;Website&quot;</strong>), owned and operated by{" "}
          <strong>Fan Leads Inc</strong> (referred to throughout as{" "}
          <strong>
            &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;
          </strong>
          ).
        </p>

        <p className="text-foreground mt-3">
          The following Terms and Conditions (
          <strong>&quot;Terms&quot;</strong>) apply to all access and use of
          this Website and its associated content, including articles,
          statistics, operator comparisons, odds data, and all other materials
          (collectively referred to as the{" "}
          <strong>&quot;Services&quot;</strong>).
        </p>

        <p className="text-foreground mt-3">
          Accessing or using this Website constitutes your agreement to these
          Terms along with our Privacy Policy, which forms part of this
          agreement. If you disagree with any portion of these Terms, you
          should exit the Website immediately and refrain from returning until
          you have reviewed and accepted them.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">
          1. Important Legal Notices &amp; Disclaimers
        </h2>

        <h3 className="mt-6 mb-2 text-xl font-bold text-foreground">
          1.1. Age Restriction
        </h3>
        <p className="text-foreground">
          Access to this Website is restricted to individuals who are{" "}
          <strong>21 years of age or older</strong>, or the minimum legal
          gambling age applicable in your jurisdiction if that threshold
          exceeds 21. By using this Website you confirm that you satisfy this
          requirement.
        </p>

        <h3 className="mt-6 mb-2 text-xl font-bold text-foreground">
          1.2. No Gambling Services Offered
        </h3>
        <p className="text-foreground">
          Daily Media Casino does not operate as a gambling service. We do not
          accept deposits, process bets, or handle any financial transactions
          connected to wagering. The content on this Website is purely
          informational and educational in nature.
        </p>

        <h3 className="mt-6 mb-2 text-xl font-bold text-foreground">
          1.3. For Informational Purposes Only
        </h3>
        <p className="text-foreground">
          All content published on this Website — including operator
          comparisons, betting odds, sports data, and editorial reviews — is
          provided for general information only. We take reasonable care over
          accuracy but make no guarantee that information is complete,
          current, or error-free.
        </p>

        <h3 className="mt-6 mb-2 text-xl font-bold text-foreground">
          1.4. Your Responsibility to Comply with Local Laws
        </h3>
        <p className="text-foreground">
          Online gambling regulations differ across states and jurisdictions.
          It is entirely your responsibility to determine whether accessing
          this Website, or following links to third-party gambling operators,
          is lawful in your location.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">
          2. Responsible Gambling
        </h2>
        <p className="text-foreground">
          Gambling should remain an enjoyable leisure activity. We support
          responsible gambling and encourage anyone who suspects they may have
          a gambling problem to seek professional guidance.
        </p>
        <p className="text-foreground mt-3">
          The following organizations provide free and confidential support:
        </p>
        <ul className="text-foreground">
          <li>
            <a
              href="https://www.gamblersanonymous.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              Gamblers Anonymous
            </a>
          </li>
          <li>
            <a
              href="https://gamban.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              Gamban
            </a>
          </li>
          <li>
            <a
              href="https://www.ncpgambling.org/ncpg/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              The National Council on Problem Gambling
            </a>
          </li>
          <li>
            <a
              href="https://www.1800gambler.net"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              1-800-GAMBLER
            </a>
          </li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">
          3. Third-Party Links and Affiliate Disclosure
        </h2>
        <p className="text-foreground">
          This Website includes links to external websites operated by third
          parties, including licensed online casinos and sportsbooks.
          These links are provided as a convenience only. We have no
          ownership of or control over Third-Party Sites and bear no
          responsibility for their content, security practices, or terms of
          service.
        </p>
        <p className="text-foreground mt-3">
          <strong>Affiliate Disclosure:</strong> Daily Media Casino
          participates in affiliate programs. When you navigate to a
          Third-Party Site through a link on this Website and subsequently
          register or complete a transaction, we may receive a referral fee
          from that operator. This payment comes at no additional cost to you.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">
          4. Intellectual Property Rights
        </h2>
        <p className="text-foreground">
          The text, graphics, logos, design elements, and all other content on
          this Website are the property of the Company or its licensed
          suppliers and are protected under copyright, trademark, and related
          intellectual property laws.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">
          5. Prohibited Conduct
        </h2>
        <p className="text-foreground">
          By using this Website you agree to refrain from using the Website in
          any manner that violates applicable law or breaches these Terms,
          attempting unauthorized access, uploading viruses or malware, or
          disrupting the normal functioning of the Website.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">
          6. Disclaimer of Warranties
        </h2>
        <p className="text-foreground">
          <strong>
            ALL CONTENT AND SERVICES PROVIDED THROUGH THIS WEBSITE ARE
            DELIVERED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
            BASIS WITHOUT WARRANTY OF ANY KIND.
          </strong>
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">
          7. Limitation of Liability
        </h2>
        <p className="text-foreground">
          <strong>
            TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, THE COMPANY
            SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES OF ANY KIND.
          </strong>
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">
          8. Indemnification
        </h2>
        <p className="text-foreground">
          You agree to defend, indemnify, and hold harmless the Company
          together with its officers, directors, employees, and agents from
          any claims arising from your violation of these Terms.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">
          9. Modification of Terms
        </h2>
        <p className="text-foreground">
          We may update these Terms at our discretion. Continued use of the
          Website following the effective date of any revision constitutes
          your acceptance of the updated Terms.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">
          10. Governing Law and Jurisdiction
        </h2>
        <p className="text-foreground">
          These Terms are governed by the laws of{" "}
          <strong>the State of Nevada, United States of America</strong>.
          Any dispute shall be subject to the exclusive jurisdiction of the
          courts located in <strong>Clark County, Nevada</strong>.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">
          11. Miscellaneous
        </h2>
        <p className="text-foreground">
          These Terms together with our Privacy Policy represent the complete
          agreement between you and the Company with respect to your use of
          this Website.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">
          12. Contact Information
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
      </div>
    </div>
  );
}
