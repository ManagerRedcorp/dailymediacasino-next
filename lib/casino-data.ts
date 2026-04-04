// Server-compatible casino data exports
// These can be imported in both server and client components

import CASINOS_DATA from "@/content/casinos.json";
import SPORTSBOOKS_DATA from "@/content/sportsbooks.json";
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
