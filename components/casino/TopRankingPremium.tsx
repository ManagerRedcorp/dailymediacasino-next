"use client";

import React, { useMemo, useState } from "react";
import { Star, Trophy, X, CheckCircle2 } from "lucide-react";
import CASINOS_DATA from "@/content/casinos.json";
import SPORTSBOOKS_DATA from "@/content/sportsbooks.json";
import { CATEGORY_CTA, CATEGORY_SUBTITLE, CASINO_CATEGORY_FEATURES } from "@/lib/category-content";
import type { CasinoCategory } from "@/lib/types";

export type SpecialLabel = "EDITOR'S PICK" | "TRENDING" | "NEW" | "HOT" | null;
export type PaymentType = "visa" | "mastercard" | "paypal" | "applepay" | "googlepay";

export type CasinoItem = {
  id: number;
  rank: number;
  name: string;
  logoSrc?: string;
  sidebarImageSrc?: string;
  offerTitle: string;
  offerSubtitle?: string;
  score: number;
  starRating: 1 | 2 | 3 | 4 | 5;
  features: string[];
  ctaUrl: string;
  termsText: string;
  specialLabel?: SpecialLabel;
  payments?: PaymentType[];
  expertPros?: string[];
  affiliateUrl?: string;
  categories?: CasinoCategory[];
  rtgGames?: boolean;
  cryptoAccepted?: boolean;
  bonusAmount?: string;
  gamesCount?: string;
  payoutSpeed?: string;
};

export const CASINOS: CasinoItem[] = CASINOS_DATA as CasinoItem[];
export const SPORTSBOOKS: CasinoItem[] = SPORTSBOOKS_DATA as CasinoItem[];

/** Filter casinos by category */
export function getCasinosByCategory(category: CasinoCategory): CasinoItem[] {
  return CASINOS.filter((c) => c.categories?.includes(category)).map((c, i) => ({
    ...c,
    rank: i + 1,
  }));
}

/**
 * Brands whose affiliate tracking domains are frequently blocked.
 * For these, we avoid target="_blank" to prevent the "tab opens then closes" UX.
 */
function shouldOpenInNewTab(casino: CasinoItem): boolean {
  const url = casino.ctaUrl.toLowerCase();
  const blockedDomains = ["revmasters.com", "revenuenetwork.com"];
  return !blockedDomains.some((d) => url.includes(d));
}

/* Quick Overview Sidebar */
function QuickOverviewSidebar({
  open,
  casino,
  onClose,
}: {
  open: boolean;
  casino: CasinoItem | null;
  onClose: () => void;
}) {
  if (!open) return null;

  const pros = (casino?.expertPros ?? []).slice(0, 3);
  const openBlank = casino ? shouldOpenInNewTab(casino) : true;

  return (
    <div
      className="qo_root"
      role="dialog"
      aria-modal="true"
      aria-label="Quick overview"
    >
      <div className="qo_backdrop" onClick={onClose} aria-hidden="true" />

      <aside className="qo_panel" aria-label="Quick overview panel">
        <div className="qo_top">
          <div>
            <div className="qo_titleBig">
              Why choose{" "}
              <span className="qo_titleBrand">
                {casino?.name ?? "this casino"}
              </span>{" "}
              ?
            </div>
          </div>

          <button className="qo_close" onClick={onClose} aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Sidebar image */}
        <div className="qo_media">
          <div className="qo_mediaInner">
            <img
              src={
                casino?.sidebarImageSrc ??
                casino?.logoSrc ??
                "/images/brand-placeholder.svg"
              }
              alt={casino?.name ?? "Brand"}
              className="qo_img"
              loading="lazy"
            />
          </div>

          <div className="qo_scoreRow">
            <div className="qo_scorePill">
              <Star className="h-4 w-4 text-casino-gold" fill="currentColor" />
              <span>{casino ? casino.score.toFixed(1) : "0.0"}</span>
              <span className="qo_scoreSub">/ 10</span>
            </div>
          </div>
        </div>

        {/* Offer */}
        <div className="qo_section">
          <div className="qo_offerTitle">
            {casino?.offerTitle}
            {casino?.offerSubtitle ? (
              <span> {casino.offerSubtitle}</span>
            ) : null}
          </div>
        </div>

        {/* Key facts */}
        <div className="qo_section">
          <div className="qo_sectionTitle">Key facts</div>
          <div className="qo_facts">
            {(casino?.features ?? []).slice(0, 6).map((f) => (
              <div key={f} className="qo_fact">
                <span className="qo_dot" aria-hidden="true" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expert pros */}
        <div className="qo_section">
          <div className="qo_sectionTitle">What our experts have to say</div>

          <div className="qo_pros">
            {pros.map((p, idx) => (
              <div key={`${casino?.id ?? "c"}-pro-${idx}`} className="qo_pro">
                <CheckCircle2 className="qo_check" aria-hidden="true" />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="qo_footer">
          <a
            href={casino?.ctaUrl ?? "/#"}
            {...(openBlank
              ? { target: "_blank", rel: "noopener noreferrer sponsored" }
              : {})}
            className="qo_cta"
          >
            Get Bonus
          </a>
          <div className="qo_disclaimer">
            21+. T&amp;Cs apply. Gamble responsibly.
          </div>
        </div>
      </aside>

    </div>
  );
}

export function TopRankingPremium({
  embedded = false,
  customData,
  title: customTitle,
  category,
}: {
  embedded?: boolean;
  customData?: CasinoItem[];
  title?: string;
  category?: CasinoCategory;
}) {
  const isSportsCategory = category === "sportsbooks" || category === "football" || category === "boxing";
  const data = customData ?? (isSportsCategory ? SPORTSBOOKS : CASINOS);

  const items = useMemo(
    () => [...data].sort((a, b) => a.rank - b.rank),
    [data],
  );

  const [qoOpen, setQoOpen] = useState(false);
  const [qoCasinoId, setQoCasinoId] = useState<number | null>(null);

  const qoCasino = useMemo(() => {
    if (!qoCasinoId) return null;
    return items.find((c) => c.id === qoCasinoId) ?? null;
  }, [qoCasinoId, items]);

  const Wrapper: any = embedded ? "div" : "section";

  const title = customTitle ?? (isSportsCategory
    ? (category === "sportsbooks"
      ? "Top Sportsbooks for US players"
      : "Top Bookmakers for US players")
    : "Top US Casino Bonuses");

  const subtitle = (category && CATEGORY_SUBTITLE[category]) ||
    "Premium picks focused on US licensing, clearer terms, and faster cashouts.";

  return (
    <Wrapper
      id={!embedded ? "top-ranking" : undefined}
      className={embedded ? "mt-6" : "py-4 md:py-10 sm:py-12"}
    >
      <div className={embedded ? "" : "container px-0 sm:px-4 lg:px-4"}>
        {/* Header */}
        <div className="mb-0 md:mb-6 sm:mb-8">
          <div className="hidden lg:block flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-casino-purple/40 bg-secondary/25 backdrop-blur-sm">
              <Trophy className="h-5 w-5 text-casino-gold" />
            </span>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {title}
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground sm:text-base">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Rows */}
        <div className="grid gap-5">
          {items.map((casino) => (
            <RankingRow
              key={casino.id}
              casino={casino}
              category={category}
              onQuickOverview={(id) => {
                setQoCasinoId(id);
                setQoOpen(true);
              }}
            />
          ))}
        </div>
      </div>

      <QuickOverviewSidebar
        open={qoOpen}
        casino={qoCasino}
        onClose={() => setQoOpen(false)}
      />
    </Wrapper>
  );
}

function RankingRow({
  casino,
  category,
  onQuickOverview,
}: {
  casino: CasinoItem;
  category?: CasinoCategory;
  onQuickOverview: (id: number) => void;
}) {
  const isTop = casino.rank === 1;
  const openBlank = shouldOpenInNewTab(casino);

  // Category-specific overrides
  const features = (category && CASINO_CATEGORY_FEATURES[casino.id]?.[category]) || casino.features;
  const ctaLabel = (category && CATEGORY_CTA[category]) || "Get Bonus";

  return (
    <a
      href={casino.ctaUrl}
      {...(openBlank ? { target: "_blank", rel: "noopener noreferrer sponsored" } : {})}
      className="block"
    >
      <div
        className={[
          isTop ? "rank-animated-border is-active rank-hover-scale" : "",
        ].join(" ")}
      >
        <div
          className={[
            "rank-card-inner relative overflow-hidden rounded-3xl bg-secondary/15 backdrop-blur-sm transition-transform",
            isTop ? "" : "border border-border/70 hover:scale-[1.01]",
          ].join(" ")}
        >
          {/* subtle premium glows */}
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -left-24 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-casino-purple/20 blur-3xl" />
            <div className="absolute -right-24 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-casino-magenta/15 blur-3xl" />
          </div>

          {/* top strip (rank + label) */}
          <div className="relative flex items-center justify-between px-4 pt-4 sm:px-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-full border border-casino-purple/40 bg-background/30 px-2.5 py-1 text-xs font-semibold text-foreground">
                #{casino.rank}
              </span>

              {casino.specialLabel ? (
                <span
                  className={[
                    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide",
                    casino.specialLabel === "EDITOR'S PICK"
                      ? "bg-casino-cyan/20 text-casino-cyan ring-1 ring-casino-cyan/35"
                      : casino.specialLabel === "TRENDING"
                        ? "bg-casino-magenta/20 text-casino-magenta ring-1 ring-casino-magenta/35"
                        : casino.specialLabel === "HOT"
                          ? "bg-casino-gold/20 text-casino-gold ring-1 ring-casino-gold/35"
                          : casino.specialLabel === "NEW"
                            ? "bg-casino-purple/20 text-casino-purple ring-1 ring-casino-purple/35"
                            : "bg-secondary/25 text-muted-foreground ring-1 ring-border/50",
                  ].join(" ")}
                >
                  {casino.specialLabel}
                </span>
              ) : null}
            </div>
          </div>

          {/* main layout */}
          <div className="relative grid gap-4 px-4 pb-4 pt-4 sm:px-6 sm:pb-6 lg:grid-cols-12 lg:items-stretch">
            {/* LEFT: logo */}
            <div className="lg:col-span-3">
              <div className="relative h-[150px] w-full overflow-hidden rounded-2xl border border-casino-purple/40 bg-background/15">
                <img
                  src={casino.logoSrc ?? "/images/brand-placeholder.svg"}
                  alt={casino.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20" />
              </div>
            </div>

            {/* CENTER: offer + rating + features */}
            <div className="lg:col-span-6">
              <div className="h-full rounded-2xl border border-casino-purple/40 bg-background/10 px-4 py-3 sm:px-5 sm:py-4">
                <p className="text-sm font-semibold text-foreground sm:text-base">
                  {casino.offerTitle}
                  {casino.offerSubtitle ? (
                    <span className="ml-0 font-bold text-casino-gold">
                      {" "}
                      {casino.offerSubtitle}
                    </span>
                  ) : null}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-casino-purple/40 bg-secondary/25 px-3 py-1 text-xs font-semibold text-foreground">
                    <Star
                      className="h-3.5 w-3.5 text-casino-gold"
                      fill="currentColor"
                    />
                    {casino.score.toFixed(1)} / 10
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {features.slice(0, 4).map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center rounded-full border border-casino-purple/40 bg-secondary/20 px-2.5 py-1 text-[11px] font-semibold text-muted-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: CTA + quick overview */}
            <div className="lg:col-span-3">
              <div className="flex h-full flex-col justify-between gap-2 rounded-2xl border border-casino-purple/40 bg-background/10 px-4 py-3 sm:px-5 sm:py-4">
                <span
                  className="
                    btn-light-sweep inline-flex w-full items-center justify-center
                    rounded-full
                    gradient-primary
                    px-6 py-4
                    text-base font-semibold
                    text-white
                    shadow-lg glow-primary
                    transition-transform
                    hover:scale-[1.02]
                    active:scale-[0.98]
                  "
                >
                  {ctaLabel}
                </span>

                <button
                  type="button"
                  className="qo_link"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onQuickOverview(casino.id);
                  }}
                  aria-label={`Quick overview for ${casino.name}`}
                >
                  Quick overview
                </button>

                <p className="mt-1 text-center text-[10px] leading-tight text-muted-foreground">
                  21+. T&amp;Cs apply. Gamble responsibly.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </a>
  );
}
