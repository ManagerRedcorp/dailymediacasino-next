import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Daily Media Casino privacy policy. Learn how we collect, use, and protect your data. Cookie policy, CalOPPA compliance, and contact details.",
  alternates: { canonical: "https://www.dailymediacasino.com/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <div className="container py-12">
      <h1 className="mb-8 text-4xl font-bold text-foreground">
        Privacy Policy
      </h1>

      <div className="prose w-full max-w-none">
        <p className="mb-6 text-muted-foreground">
          This Privacy Policy explains how Daily Media Casino, owned and
          operated by <strong>Fan Leads Inc</strong> (&quot;Company,&quot;
          &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), collects, uses,
          and protects information relating to visitors of this Website.
        </p>

        <p className="mb-6 text-muted-foreground">
          By continuing to use this Website you acknowledge the practices set
          out in this Policy. If you have questions about how your data is
          processed, please reach out using the contact details provided in
          our Terms and Conditions.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold text-foreground">
          What information do we collect?
        </h2>
        <p className="mb-6 text-muted-foreground">
          We collect only the information needed to operate and improve our
          services. This may include technical data such as browser type,
          device type, IP address, and pages visited, as well as any details
          you provide voluntarily when contacting us.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold text-foreground">
          How do we use your information?
        </h2>
        <ul className="mb-6 list-disc pl-6 text-muted-foreground">
          <li>
            Analyze how visitors engage with our content in order to improve
            page quality and relevance.
          </li>
          <li>
            Respond to inquiries and communications submitted through the
            Website.
          </li>
          <li>
            Deliver relevant content or promotional materials where you have
            opted in to receive them.
          </li>
        </ul>

        <h2 className="mt-10 mb-4 text-2xl font-bold text-foreground">
          How do we protect your information?
        </h2>
        <p className="mb-6 text-muted-foreground">
          We take a layered approach to data security. Access to personally
          identifiable data is restricted to authorized personnel only.
          Sensitive data transmitted to or from the Website is encrypted using
          SSL technology. We do not store payment or financial information on
          our own servers.
        </p>

        <h2
          id="cookies"
          className="mt-10 mb-4 text-2xl font-bold text-foreground"
        >
          Cookies
        </h2>
        <p className="mb-6 text-muted-foreground">
          This Website uses cookies — small text files stored on your device
          by your browser — to recognize returning visitors and maintain
          preferences between sessions. You can manage or disable cookies
          through your browser settings.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold text-foreground">
          Third-party disclosure
        </h2>
        <p className="mb-6 text-muted-foreground">
          We do not sell, rent, or transfer your personally identifiable
          information to external parties. Information may only be shared
          where required by law or where you have given explicit prior
          consent.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold text-foreground">
          Third-party links
        </h2>
        <p className="mb-6 text-muted-foreground">
          This Website links to external platforms, including licensed casino
          and sportsbook operators. These third-party sites maintain their own
          independent privacy policies, and we take no responsibility for how
          they collect or handle your data.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold text-foreground">
          California Online Privacy Protection Act (CalOPPA)
        </h2>
        <ul className="mb-6 list-disc pl-6 text-muted-foreground">
          <li>
            Visitors may browse this Website without creating an account or
            providing any personal information.
          </li>
          <li>
            This Privacy Policy is linked from the Website&apos;s footer and
            is accessible from all pages.
          </li>
          <li>
            We will notify users of any material changes to this Policy by
            updating this page with a revised effective date.
          </li>
        </ul>

        <h2 className="mt-10 mb-4 text-2xl font-bold text-foreground">
          Do Not Track
        </h2>
        <p className="mb-6 text-muted-foreground">
          Where a visitor&apos;s browser transmits a Do Not Track (DNT)
          signal, we respect that preference and do not engage in cross-site
          behavioral tracking for that visitor.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold text-foreground">
          COPPA (Children&apos;s Online Privacy Protection Act)
        </h2>
        <p className="mb-6 text-muted-foreground">
          This Website is directed exclusively at adults aged 21 and over. We
          do not knowingly collect personal information from anyone under the
          age of 13.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold text-foreground">
          Contact Us
        </h2>
        <p className="mb-10 text-muted-foreground">
          <strong className="text-foreground">Fan Leads Inc</strong>
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
