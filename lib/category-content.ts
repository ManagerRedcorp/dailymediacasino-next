import type { CasinoCategory } from "@/lib/types";

/** CTA button label per category */
export const CATEGORY_CTA: Partial<Record<CasinoCategory, string>> = {
  crypto: "Play with Crypto",
  rtg: "Play RTG Games",
  "fast-payout": "Fast Cashout",
  "live-dealer": "Play Live",
  slots: "Play Slots",
  blackjack: "Play Blackjack",
  roulette: "Play Roulette",
  poker: "Play Poker",
  craps: "Play Craps",
  baccarat: "Play Baccarat",
  bonus: "Claim Bonus",
  offshore: "Play Now",
  "mobile-app": "Play Mobile",
  new: "Try Now",
};

/** Ranking section subtitle per category */
export const CATEGORY_SUBTITLE: Partial<Record<CasinoCategory, string>> = {
  crypto: "Top-rated crypto casinos with fast Bitcoin payouts and enhanced bonuses.",
  rtg: "Casinos powered by RealTime Gaming with verified slots and table games.",
  "fast-payout": "Casinos with the fastest withdrawal times for US players.",
  "live-dealer": "Best live dealer casinos with real-time streaming and pro dealers.",
  slots: "Top slot casinos with the biggest libraries and best RTPs.",
  blackjack: "Best blackjack casinos with multiple variants and fair table rules.",
  roulette: "Top roulette casinos with European, live, and multi-wheel options.",
  poker: "Best online poker casinos with cash games, tournaments, and video poker.",
  craps: "Top craps casinos with authentic odds and live dealer tables.",
  baccarat: "Best baccarat casinos with punto banco, live tables, and fair limits.",
  bonus: "Casinos with the most generous welcome bonuses and fair wagering terms.",
  offshore: "Trusted offshore casinos accepting US players with reliable payouts.",
  "mobile-app": "Best mobile casino apps with smooth gameplay on iOS and Android.",
  new: "Newest online casinos with fresh bonuses and modern platforms.",
};

/**
 * Per-casino feature overrides by category.
 * Key = casino ID, value = map of category → 3 features.
 * Only override where it adds real value — fallback is the casino's default features.
 */
export const CASINO_CATEGORY_FEATURES: Record<number, Partial<Record<CasinoCategory, string[]>>> = {
  // The Online Casino (id: 11)
  11: {
    crypto: ["Accepts major cryptocurrencies", "Fast crypto withdrawal processing", "Enhanced crypto deposit bonuses"],
    "fast-payout": ["Same-day e-wallet withdrawals", "Express crypto cashouts under 1h", "No withdrawal fees"],
    "live-dealer": ["HD live dealer tables", "Multiple live roulette & blackjack", "24/7 live game availability"],
    slots: ["700+ slot titles available", "Games from top providers", "Regular new slot releases"],
    blackjack: ["Multiple blackjack variants", "Live dealer blackjack tables", "Low minimum table limits"],
    roulette: ["European & American roulette", "Live roulette with real dealers", "Multi-wheel options available"],
    bonus: ["400% welcome match bonus", "Fair wagering requirements", "Regular rewarding promotions"],
  },
  // SlotsLV (id: 4)
  4: {
    crypto: ["Instant Bitcoin deposits", "Crypto withdrawals in minutes", "Higher crypto welcome bonus"],
    rtg: ["Full RTG slot library", "RTG progressive jackpots", "RTG table games included"],
    "fast-payout": ["Instant crypto payouts", "No withdrawal limits on crypto", "Fast processing for all methods"],
    "live-dealer": ["Tons of live dealer options", "Live blackjack & roulette", "Real-time HD streaming"],
    slots: ["500+ slots from RTG & Betsoft", "Hourly jackpot prizes daily", "Progressive jackpot network"],
    bonus: ["$3,000 + 30 Free Spins", "200% crypto match bonus", "Ongoing reload promotions"],
  },
  // Slots of Vegas (id: 2)
  2: {
    crypto: ["Bitcoin & Litecoin accepted", "Crypto-friendly deposit limits", "No fees on crypto transactions"],
    rtg: ["200+ RTG-powered slots", "RTG progressive jackpot network", "Exclusive RTG bonus codes"],
    "fast-payout": ["Multiple withdrawal methods", "VIP expedited cashouts", "No maximum cashout limits"],
    slots: ["250+ slot games available", "Classic & video slots", "Progressive jackpot titles"],
    bonus: ["$2,500 + 50 Free Spins", "VIP program with multiple tiers", "Daily and weekly promotions"],
  },
  // Wild Casino (id: 1)
  1: {
    crypto: ["300% crypto welcome bonus", "18+ cryptocurrencies accepted", "Instant crypto withdrawals"],
    "fast-payout": ["Fastest payout times in class", "Daily cash rewards", "No rollover requirements"],
    "live-dealer": ["Premium live dealer lobby", "Live blackjack, roulette & baccarat", "Immersive HD stream quality"],
    slots: ["900+ games including slots", "Top providers featured", "New titles added weekly"],
    blackjack: ["Multiple live blackjack tables", "Low to high stakes available", "Classic & variant rules"],
    bonus: ["250 Free Spins welcome offer", "Daily cash rewards", "No rollover requirements"],
  },
  // Uptown Aces (id: 10)
  10: {
    crypto: ["Bitcoin & Ethereum accepted", "Crypto payouts in 12-24h", "No crypto transaction fees"],
    rtg: ["Full RTG game collection", "RTG progressive jackpots", "150+ RTG slots available"],
    "fast-payout": ["Low rollover requirements", "No cashout limit", "Expedited VIP withdrawals"],
    bonus: ["$8,888 + 350 Free Spins", "6-part welcome package", "Low rollover and no cashout limit"],
  },
  // Lucky Red (id: 5)
  5: {
    crypto: ["400% crypto welcome bonus", "Instant crypto withdrawals", "Bitcoin, ETH & LTC accepted"],
    rtg: ["Top RTG titles available", "RTG progressive jackpots", "RTG table games & video poker"],
    "fast-payout": ["Instant withdrawals, no fees", "Express crypto cashouts", "Reliable payout track record"],
    "live-dealer": ["Live dealer roulette & blackjack", "Professional live dealers", "Real-time game streaming"],
    bonus: ["$4,000 + $75 Free Chip", "Structured bonus ecosystem", "Generous loyalty program"],
  },
};
