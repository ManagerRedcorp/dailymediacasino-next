// ============================================
// Shared TypeScript types for Daily Media Casino
// ============================================

export type SpecialLabel = "EDITOR'S PICK" | "TRENDING" | "NEW" | "HOT" | null;

export type SiteSettings = {
  siteName: string;
  siteTagline?: string;
  lastUpdated?: string;
  advertisingDisclosure?: string;
  legalEntity?: string;
  legalAddress?: string;
};

export type PaymentMethod =
  | "VISA"
  | "MASTERCARD"
  | "PAYPAL"
  | "SKRILL"
  | "NETELLER"
  | "APPLE_PAY"
  | "GOOGLE_PAY"
  | "BANK_TRANSFER";

export interface Casino {
  id: number;
  rank?: number;

  // Branding
  name: string;
  logo?: string;

  // Offer copy
  offerTitle: string;
  offerSubtitle?: string;

  // Ratings
  score: number;
  starRating: 1 | 2 | 3 | 4 | 5;

  // UI badges/pills
  features: string[];
  specialLabel?: SpecialLabel;

  // Links
  ctaUrl: string;
  visitUrl?: string;

  // Compliance / T&Cs
  termsText: string;

  // Optional: show payment icons row
  paymentMethods?: PaymentMethod[];

  // Categories for filtering
  categories?: string[];
}

export type PaymentType = "visa" | "mastercard" | "paypal" | "applepay" | "googlepay";

export type CasinoCategory =
  | "slots" | "blackjack" | "roulette" | "poker" | "craps" | "baccarat"
  | "live-dealer" | "crypto" | "rtg" | "fast-payout" | "offshore"
  | "bonus" | "mobile-app" | "new" | "bingo"
  | "sportsbooks" | "football" | "boxing";

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
