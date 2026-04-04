import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { SocialProofStrip } from "@/components/home/SocialProofStrip";
import { TopRankingPremium } from "@/components/casino/TopRankingPremium";
import PromoBanner_CTA_LeftCountdown from "@/components/casino/PromoBanner_CTA_LeftCountdown";
import { EditorialContent } from "@/components/home/EditorialContent";

export const metadata: Metadata = {
  title: "Daily Media Casino | Top-Rated US Online Casinos Compared 2026",
  description:
    "Compare the best US online casinos for 2026. Expert-reviewed, licensed operators with verified payouts, real bonuses, and fast withdrawals. 21+ only.",
  alternates: { canonical: "https://www.dailymediacasino.com/" },
  openGraph: {
    title: "Daily Media Casino | Top-Rated US Online Casinos Compared 2026",
    description:
      "Compare the best US online casinos for 2026. Expert-reviewed, licensed operators with verified payouts, real bonuses, and fast withdrawals. 21+ only.",
    url: "https://www.dailymediacasino.com/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProofStrip />
      <div className="gd" />
      <div className="hidden lg:block">
        <TopRankingPremium />
      </div>
      <div className="gd" />
      <div className="container py-4">
        <PromoBanner_CTA_LeftCountdown />
      </div>
      <div className="gd" />
      <EditorialContent />
    </>
  );
}
