import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Responsible Gambling",
  description:
    "Responsible gambling resources and support. Set limits, recognize warning signs, and access free help from national organizations. 21+ only.",
  alternates: { canonical: "https://www.dailymediacasino.com/responsible-gambling" },
};

type HelpOrg = {
  name: string;
  description: string;
  url: string;
  phone?: string | null;
  phoneUrl?: string | null;
  email?: string | null;
  notes?: string | null;
};

const helpOrgs: HelpOrg[] = [
  {
    name: "Gamblers Anonymous",
    description:
      "A fellowship of men and women who share their experience, strength, and hope to help each other recover from gambling addiction.",
    url: "https://www.gamblersanonymous.org/",
    phone: "All US Hotlines",
    phoneUrl: "https://gamblersanonymous.org/u-s-hotlines/",
    email: null,
    notes:
      "Support is provided through peer-led meetings and the 12-step recovery program, with local hotlines available by state across the United States.",
  },
  {
    name: "National Council on Problem Gambling (NCPG)",
    description:
      "National organization providing confidential support, resources, and referrals for problem gambling and those affected.",
    url: "https://www.ncpgambling.org/ncpg/",
    phone: "(202) 547-9204",
    email: "ncpg@ncpgambling.org",
    notes: "Address: 730 11th Street NW, Suite 601, Washington, DC 20001.",
  },
  {
    name: "1-800-522-4700 (National Problem Gambling Helpline)",
    description:
      "Free, confidential, 24/7 support for problem gambling, including crisis support and local resources.",
    url: "https://www.ncpgambling.org/help-treatment/national-helpline-1-800-522-4700/",
    phone: "1-800-522-4700",
    email: null,
    notes: "Available 24/7 across the United States.",
  },
  {
    name: "GamBan",
    description:
      "Gambling block software for devices. Helps reduce access to gambling content and apps.",
    url: "https://gamban.com/",
    phone: null,
    email: "info@gamban.com",
    notes: "Device-level blocking can be a strong practical barrier.",
  },
];

export default function ResponsibleGambling() {
  return (
    <div className="container py-12">
      <h1 className="mb-6 text-4xl font-bold text-foreground">
        Responsible Gambling
      </h1>

      <div className="w-full">
        <p className="text-lg text-muted-foreground">
          Daily Media Casino is an independent comparison resource covering
          US-licensed online casinos and betting platforms. Gambling is a
          leisure activity and should remain that way — it is not a reliable
          source of income and should never be used to address financial
          hardship.
        </p>

        <div className="mt-8 rounded-2xl border border-border bg-secondary/20 p-6">
          <p className="text-foreground font-semibold">21+ Only.</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            This site is intended for users aged 21 and above. We do not
            knowingly target, encourage, or permit the use of this site by
            anyone under 21.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-foreground">
          Staying in control
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Responsible play begins with decisions made before a session starts,
          not during it. Setting a clear budget and time limit while you are
          thinking rationally gives those limits real force.
        </p>
        <ul className="mt-5 list-disc list-inside space-y-2 text-muted-foreground">
          <li>Decide on a maximum spend and do not adjust it mid-session.</li>
          <li>Fix a time limit before you begin and stick to it.</li>
          <li>Accept losses as part of the game — chasing them rarely ends well.</li>
          <li>Skip sessions when you are tired, stressed, or emotionally unsettled.</li>
          <li>Keep gambling funds entirely separate from household expenses and savings.</li>
          <li>Never borrow money or use credit cards to fund gambling.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-foreground">
          Signs gambling may be becoming a problem
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Problem gambling is not a character flaw or a matter of willpower —
          it can develop in any person.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Spending beyond your plan",
              text: "Sessions regularly run longer or cost more than intended.",
            },
            {
              title: "Attempting to recover losses",
              text: "Losing a session triggers an urge to deposit again or raise stakes.",
            },
            {
              title: "Hiding or feeling ashamed",
              text: "You conceal gambling from family or friends, feel guilty afterward.",
            },
            {
              title: "Disruption to everyday life",
              text: "Gambling is cutting into sleep, work performance, or financial stability.",
            },
          ].map((card) => (
            <div key={card.title} className="info-card p-5">
              <h3 className="text-sm font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-2xl font-bold text-foreground">
          Tools that can help immediately
        </h2>
        <div className="mt-6 grid gap-4">
          {[
            {
              title: "Deposit, loss, and session limits",
              text: "Configure your limits before play begins.",
            },
            {
              title: "Session notifications and time alerts",
              text: "Periodic on-screen prompts interrupt automatic behavior.",
            },
            {
              title: "Temporary breaks and cool-off periods",
              text: "Short voluntary pauses reduce impulsive decisions.",
            },
            {
              title: "Self-exclusion programs",
              text: "A more formal, longer-term restriction. US players can enroll in their state's self-exclusion registry.",
            },
            {
              title: "Device-level gambling blockers",
              text: "Software such as GamBan prevents access to gambling websites and apps.",
            },
            {
              title: "Bank-side spending controls",
              text: "Many US banks now offer the option to block gambling-related transactions.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border/60 bg-background/10 p-5"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-2xl font-bold text-foreground" id="help">
          Help resources
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {helpOrgs.map((org) => (
            <div
              key={org.name}
              className="rounded-2xl border border-border bg-secondary/20 p-6"
            >
              <h3 className="font-bold text-foreground">{org.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {org.description}
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <a
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  Visit website <ExternalLink className="h-3 w-3" />
                </a>
                {org.phone ? (
                  <p className="text-muted-foreground">
                    Phone:{" "}
                    {org.phoneUrl ? (
                      <a
                        className="text-primary hover:underline"
                        href={org.phoneUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {org.phone}
                      </a>
                    ) : (
                      <a
                        className="text-primary hover:underline"
                        href={`tel:${org.phone.replace(/\s+/g, "")}`}
                      >
                        {org.phone}
                      </a>
                    )}
                  </p>
                ) : null}
                {org.email ? (
                  <p className="text-muted-foreground">
                    Email:{" "}
                    <a
                      className="text-primary hover:underline"
                      href={`mailto:${org.email}`}
                    >
                      {org.email}
                    </a>
                  </p>
                ) : null}
                {org.notes ? (
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {org.notes}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
