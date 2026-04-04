import { Star, Users, Clock, Shield } from "lucide-react";

function hashStringToUint32(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function monthKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  return `${y}-${m}`;
}

function startOfMonth(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), 1, 0, 0, 0, 0);
}

function daysBetween(a: Date, b: Date): number {
  const a0 = new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime();
  const b0 = new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime();
  return Math.max(0, Math.floor((b0 - a0) / 86400000));
}

function computePlayerCount(now: Date): number {
  const mk = monthKey(now);
  const seed = hashStringToUint32(`social-proof-strip:${mk}`);
  const rngBase = mulberry32(seed);

  const base = 2600 + Math.floor(rngBase() * 151);

  const mStart = startOfMonth(now);
  const daysElapsed = daysBetween(mStart, now);

  let total = base;
  for (let day = 1; day <= daysElapsed; day++) {
    const rng = mulberry32(hashStringToUint32(`${mk}:day:${day}`));
    total += 20 + Math.floor(rng() * 31);
  }

  return total;
}

function formatDate(d: Date): string {
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function SocialProofStrip() {
  const now = new Date();
  const playerCount = computePlayerCount(now);
  const formattedCount = playerCount.toLocaleString("en-US");
  const formattedDate = formatDate(now);

  return (
    <div
      className="border-y border-border/40 bg-background/60 py-3 backdrop-blur-sm"
      aria-label="Site statistics"
    >
      <div className="container">
        <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-0">

          <div className="flex items-center gap-2 sm:px-5">
            <span
              className="relative flex h-2 w-2 flex-shrink-0"
              aria-hidden="true"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <Users
              className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <span className="text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">
                {formattedCount}+
              </span>{" "}
              players joined this month
            </span>
          </div>

          <span
            className="hidden h-4 w-px bg-border/50 sm:block"
            aria-hidden="true"
          />

          <div className="flex items-center gap-2 sm:px-5">
            <Clock
              className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <span className="text-xs text-muted-foreground">
              Last updated:{" "}
              <span className="font-semibold text-foreground">
                {formattedDate}
              </span>
            </span>
          </div>

          <span
            className="hidden h-4 w-px bg-border/50 sm:block"
            aria-hidden="true"
          />

          <div className="flex items-center gap-2 sm:px-5">
            <Star
              className="h-3.5 w-3.5 flex-shrink-0 fill-casino-gold text-casino-gold"
              aria-hidden="true"
            />
            <span className="text-xs text-muted-foreground">
              Average rating:{" "}
              <span className="font-semibold text-foreground">9.4/10</span>
            </span>
          </div>

          <span
            className="hidden h-4 w-px bg-border/50 sm:block"
            aria-hidden="true"
          />

          <div className="flex items-center gap-2 sm:px-5">
            <Shield
              className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <span className="text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">6</span> licensed
              casinos compared
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
