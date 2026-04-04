import { Star, ExternalLink } from "lucide-react";
import { getLiveCasinos, getSlotsCasinos } from "@/lib/casino-helpers";
import type { CasinoItem } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CompactCardProps {
  casino: CasinoItem;
}

function CompactCard({ casino }: CompactCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          "h-3 w-3",
          i < rating ? "fill-casino-gold text-casino-gold" : "text-muted"
        )}
      />
    ));
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-md transition-all hover:border-primary/50 hover:shadow-lg sm:flex-row">
      <div className="flex items-center justify-center gap-4 border-b border-border bg-secondary/20 p-4 sm:w-40 sm:flex-col sm:border-b-0 sm:border-r">
        <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-lg font-bold text-primary-foreground">
          {casino.rank}
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-casino-gold">
            {casino.score}
          </div>
          <div className="flex items-center gap-0.5">
            {renderStars(casino.starRating)}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center p-4">
        <h4 className="font-bold text-card-foreground">{casino.name}</h4>
        <p className="text-sm text-muted-foreground">{casino.offerTitle}</p>
      </div>

      <div className="flex items-center justify-center border-t border-border bg-secondary/20 p-4 sm:border-l sm:border-t-0">
        <Button
          asChild
          className="gradient-primary text-primary-foreground font-bold hover:scale-105 transition-transform"
        >
          <a
            href={casino.ctaUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
          >
            Claim <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </Button>
      </div>
    </div>
  );
}

export function SecondaryRankings() {
  const liveCasinos = getLiveCasinos();
  const slotsCasinos = getSlotsCasinos();

  return (
    <section className="py-12 casino-pattern">
      <div className="container space-y-12">
        <div id="live-casino">
          <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
            Best US{" "}
            <span className="text-gradient-primary">Live Casino</span> Sites
            Ranked
          </h2>
          <div className="gd-accent" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {liveCasinos.map((casino) => (
              <CompactCard key={casino.id} casino={casino} />
            ))}
          </div>
        </div>

        <div id="slots">
          <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
            Top US <span className="text-gradient-primary">Slots</span>{" "}
            Casinos Compared
          </h2>
          <div className="gd-accent" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {slotsCasinos.map((casino) => (
              <CompactCard key={casino.id} casino={casino} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
