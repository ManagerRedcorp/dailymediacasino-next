import { Star } from "lucide-react";
import type { CasinoItem } from "@/components/casino/TopRankingPremium";

interface Column {
  key: keyof CasinoItem | "action";
  label: string;
  render?: (casino: CasinoItem) => React.ReactNode;
}

interface ComparisonTableProps {
  casinos: CasinoItem[];
  title?: string;
  columns?: Column[];
}

const defaultColumns: Column[] = [
  { key: "name", label: "Casino" },
  {
    key: "score",
    label: "Rating",
    render: (c) => (
      <div className="flex items-center gap-1">
        <Star className="h-3.5 w-3.5 fill-casino-gold text-casino-gold" />
        <span className="font-mono font-bold text-sm">{c.score}/10</span>
      </div>
    ),
  },
  { key: "bonusAmount", label: "Bonus" },
  { key: "gamesCount", label: "Games" },
  { key: "payoutSpeed", label: "Payout" },
  {
    key: "action",
    label: "",
    render: (c) => (
      <a
        href={c.ctaUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-block px-4 py-2 rounded-lg bg-casino-green text-background font-bold text-xs hover:brightness-110 transition-all whitespace-nowrap"
      >
        Visit Site →
      </a>
    ),
  },
];

export function ComparisonTable({
  casinos,
  title = "Casino Comparison",
  columns = defaultColumns,
}: ComparisonTableProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          {title}
        </h2>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border/30">
                <th className="text-left text-xs font-medium text-muted-foreground py-3 px-3">
                  #
                </th>
                {columns.map((col) => (
                  <th
                    key={String(col.key)}
                    className="text-left text-xs font-medium text-muted-foreground py-3 px-3"
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {casinos.map((casino, i) => (
                <tr
                  key={casino.id}
                  className="border-b border-border/20 hover:bg-card/30 transition-colors"
                >
                  <td className="py-3 px-3 text-sm font-bold text-muted-foreground">
                    {i + 1}
                  </td>
                  {columns.map((col) => (
                    <td key={String(col.key)} className="py-3 px-3 text-sm">
                      {col.render
                        ? col.render(casino)
                        : col.key === "name"
                          ? (
                            <div className="flex items-center gap-2">
                              {casino.logoSrc && (
                                <img
                                  src={casino.logoSrc}
                                  alt={casino.name}
                                  className="h-6 w-auto rounded bg-white/10 p-0.5"
                                />
                              )}
                              <span className="font-medium">{casino.name}</span>
                            </div>
                          )
                          : String(casino[col.key as keyof CasinoItem] ?? "—")}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {casinos.map((casino, i) => (
            <div
              key={casino.id}
              className="rounded-xl border border-border/30 bg-card/30 p-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-bold text-muted-foreground">
                  #{i + 1}
                </span>
                {casino.logoSrc && (
                  <img
                    src={casino.logoSrc}
                    alt={casino.name}
                    className="h-7 w-auto rounded bg-white/10 p-0.5"
                  />
                )}
                <span className="font-bold text-sm">{casino.name}</span>
                <div className="ml-auto flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-casino-gold text-casino-gold" />
                  <span className="font-mono font-bold text-sm text-casino-gold">
                    {casino.score}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs mb-3">
                {casino.bonusAmount && (
                  <div className="rounded-lg bg-background/50 p-2">
                    <p className="font-bold text-casino-green">{casino.bonusAmount}</p>
                    <p className="text-muted-foreground">Bonus</p>
                  </div>
                )}
                {casino.gamesCount && (
                  <div className="rounded-lg bg-background/50 p-2">
                    <p className="font-bold">{casino.gamesCount}</p>
                    <p className="text-muted-foreground">Games</p>
                  </div>
                )}
                {casino.payoutSpeed && (
                  <div className="rounded-lg bg-background/50 p-2">
                    <p className="font-bold">{casino.payoutSpeed}</p>
                    <p className="text-muted-foreground">Payout</p>
                  </div>
                )}
              </div>
              <a
                href={casino.ctaUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block w-full py-2.5 rounded-lg bg-casino-green text-background font-bold text-center text-sm hover:brightness-110 transition-all"
              >
                Visit Site →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
