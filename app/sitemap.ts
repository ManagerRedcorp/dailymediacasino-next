import type { MetadataRoute } from "next";

const BASE_URL = "https://www.dailymediacasino.com";

const routes = [
  "/",
  "/slots",
  "/blackjack",
  "/roulette",
  "/bingo",
  "/poker",
  "/baccarat",
  "/craps",
  "/live-dealer",
  "/crypto-casino",
  "/rtg-casinos",
  "/offshore-casino",
  "/fast-payout-casino",
  "/best-online-casinos",
  "/online-casino",
  "/casino-bonuses",
  "/casino-apps",
  "/new-casinos",
  "/sportsbooks",
  "/football",
  "/boxing",
  "/betmgm-promo-code",
  "/caesars-promo-code",
  "/draftkings-promo-code",
  "/about",
  "/terms",
  "/privacy",
  "/responsible-gambling",
  "/compare/betmgm-vs-draftkings",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "/" ? 1.0 : 0.8,
  }));
}
