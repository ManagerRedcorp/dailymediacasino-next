import type { CasinoItem, CasinoCategory } from "@/lib/types";
import CASINOS_DATA from "@/content/casinos.json";
import SPORTSBOOKS_DATA from "@/content/sportsbooks.json";

export const CASINOS: CasinoItem[] = CASINOS_DATA as CasinoItem[];
export const SPORTSBOOKS: CasinoItem[] = SPORTSBOOKS_DATA as CasinoItem[];

export const getTopCasinos = (limit = 10): CasinoItem[] =>
  CASINOS.slice(0, limit);

export const getLiveCasinos = (): CasinoItem[] =>
  CASINOS.filter((c) => c.categories?.includes("live-dealer"));

export const getSlotsCasinos = (): CasinoItem[] =>
  CASINOS.filter((c) => c.categories?.includes("slots"));

export const getCasinosByCategory = (category: CasinoCategory): CasinoItem[] =>
  CASINOS.filter((c) => c.categories?.includes(category)).map((c, i) => ({
    ...c,
    rank: i + 1,
  }));
