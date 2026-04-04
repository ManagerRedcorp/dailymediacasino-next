"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Menu, X, ChevronDown, Bell,
} from "lucide-react";
import { RouletteIcon } from "@/components/icons/RouletteIcon";
import { SlotsIcon } from "@/components/icons/SlotsIcon";
import { BlackjackIcon } from "@/components/icons/BlackjackIcon";
import { FootballIcon } from "@/components/icons/FootballIcon";
import { BoxingIcon } from "@/components/icons/BoxingIcon";
import { SportsbookIcon } from "@/components/icons/SportsbookIcon";
import { siteSettings } from "@/lib/config";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SpecialOffersSidebar from "@/components/casino/SpecialOffersSidebar";

type NavSubItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
};

type NavItem = {
  label: string;
  href: string;
  viewAllHref?: string;
  dropdown?: NavSubItem[];
};

const navItems: NavItem[] = [
  {
    label: "Casino",
    href: "/",
    viewAllHref: "/best-online-casinos",
    dropdown: [
      { label: "Best Online Casinos", href: "/best-online-casinos", icon: SlotsIcon, desc: "Top-rated US casinos" },
      { label: "Roulette", href: "/roulette", icon: RouletteIcon, desc: "European & live dealer tables" },
      { label: "Slots", href: "/slots", icon: SlotsIcon, desc: "500+ top slot games" },
      { label: "Blackjack", href: "/blackjack", icon: BlackjackIcon, desc: "Classic & strategy tables" },
      { label: "Poker", href: "/poker", icon: BlackjackIcon, desc: "Texas Hold'em & more" },
      { label: "Baccarat", href: "/baccarat", icon: RouletteIcon, desc: "Punto banco & mini tables" },
      { label: "Craps", href: "/craps", icon: RouletteIcon, desc: "Dice games & strategies" },
      { label: "Live Dealer", href: "/live-dealer", icon: BlackjackIcon, desc: "Real-time casino action" },
    ],
  },
  {
    label: "More",
    href: "#",
    viewAllHref: "/online-casino",
    dropdown: [
      { label: "Crypto Casinos", href: "/crypto-casino", icon: SlotsIcon, desc: "Bitcoin & altcoin gambling" },
      { label: "RTG Casinos", href: "/rtg-casinos", icon: SlotsIcon, desc: "RealTime Gaming sites" },
      { label: "Fast Payout", href: "/fast-payout-casino", icon: SlotsIcon, desc: "Same-day withdrawals" },
      { label: "New Casinos", href: "/new-casinos", icon: SlotsIcon, desc: "Recently launched sites" },
      { label: "Casino Apps", href: "/casino-apps", icon: SlotsIcon, desc: "Mobile gambling apps" },
      { label: "Offshore", href: "/offshore-casino", icon: SlotsIcon, desc: "International US-friendly sites" },
    ],
  },
  {
    label: "Bonuses",
    href: "/casino-bonuses",
    viewAllHref: "/casino-bonuses",
    dropdown: [
      { label: "BetMGM Promo Code", href: "/betmgm-promo-code", icon: SlotsIcon, desc: "$1,000 deposit match" },
      { label: "DraftKings Promo", href: "/draftkings-promo-code", icon: SlotsIcon, desc: "$2,000 casino bonus" },
      { label: "Caesars Promo", href: "/caesars-promo-code", icon: SlotsIcon, desc: "$1,000 + bonus play" },
      { label: "BetMGM vs DraftKings", href: "/compare/betmgm-vs-draftkings", icon: SlotsIcon, desc: "Side-by-side comparison" },
      { label: "All Casino Bonuses", href: "/casino-bonuses", icon: SlotsIcon, desc: "Compare welcome offers" },
    ],
  },
  {
    label: "Betting",
    href: "#",
    viewAllHref: "/sportsbooks",
    dropdown: [
      { label: "Sportsbooks", href: "/sportsbooks", icon: SportsbookIcon, desc: "Top licensed US operators" },
      { label: "Football", href: "/football", icon: FootballIcon, desc: "NFL & college wagering" },
      { label: "Boxing", href: "/boxing", icon: BoxingIcon, desc: "Fight cards & prop bets" },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [offersOpen, setOffersOpen] = useState(false);
  const [ringOnce, setRingOnce] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setRingOnce(true), 350);
    const t2 = window.setTimeout(() => setRingOnce(false), 1700);
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <header className="z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center">
            <img
              src="/images/dailymediacasino-logo.svg"
              alt="Daily Media Casino Logo"
              className="w-auto h-[36px] md:h-[50px]"
              loading="eager"
              draggable={false}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) =>
            item.dropdown ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="gap-1 text-foreground/80 hover:bg-secondary/40 hover:text-foreground"
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>

                {/* -- MEGA MENU PANEL -- */}
                <DropdownMenuContent
                  align="start"
                  className={`mega_panel border-casino-gold/20 p-0 shadow-2xl backdrop-blur-xl ${(item.dropdown?.length ?? 0) > 4 ? "w-[620px]" : "w-[460px]"}`}
                >
                  {/* Header strip */}
                  <div className="mega_header px-4 pt-4 pb-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-casino-gold/80">
                      {item.label}
                    </p>
                  </div>

                  {/* Grid of items */}
                  <div className="grid grid-cols-2 gap-1.5 px-3 pb-3">
                    {item.dropdown.map((subItem) => (
                      <DropdownMenuItem key={subItem.label} asChild className="p-0 focus:bg-transparent">
                        <Link
                          href={subItem.href}
                          className="mega_item group flex items-start gap-3 rounded-xl p-3 w-full cursor-pointer"
                        >
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-casino-gold/10 ring-1 ring-casino-gold/20 transition-all group-hover:bg-casino-gold/18 group-hover:ring-casino-gold/35">
                            <subItem.icon className="h-8 w-8 text-casino-gold" />
                          </span>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-foreground group-hover:text-casino-gold transition-colors">
                              {subItem.label}
                            </div>
                            <div className="mt-0.5 text-xs leading-snug text-muted-foreground">
                              {subItem.desc}
                            </div>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>

                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                key={item.label}
                variant="ghost"
                asChild
                className="text-foreground/80 hover:bg-secondary/40 hover:text-foreground"
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            )
          )}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          {/* Special offers notification */}
          <button
            className={["notif_btn", ringOnce ? "is-ring-once" : ""].join(" ")}
            onClick={() => setOffersOpen(true)}
            aria-label="5 special offers"
            type="button"
          >
            <span className="notif_glow" aria-hidden="true" />
            <Bell className="notif_bell h-5 w-5" aria-hidden="true" />
            <span className="notif_badge" aria-hidden="true">5</span>
          </button>

          {/* 21+ Badge */}
          <div className="hidden items-center gap-3 md:flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-destructive text-xs font-bold text-destructive">
              21+
            </span>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-secondary/40"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-2 text-foreground/80 hover:bg-secondary/40 hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>

                {item.dropdown && (
                  <div className="ml-4 flex flex-col gap-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="flex items-center gap-2.5 rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <subItem.icon className="h-5 w-5 text-casino-gold/70" />
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-2 flex items-center gap-2 px-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-destructive text-xs font-bold text-destructive">
                21+
              </span>
              <span className="text-sm text-muted-foreground">
                Please gamble responsibly
              </span>
            </div>
          </nav>
        </div>
      )}

      {/* Gradient divider */}
      <div className="gd" />

      <SpecialOffersSidebar
        open={offersOpen}
        onClose={() => setOffersOpen(false)}
      />

      <style>{`
        /* -- Mega menu panel -- */
        .mega_panel{
          background:
            radial-gradient(ellipse 80% 50% at 15% 0%, hsl(42 96% 52% / 0.10) 0%, transparent 55%),
            hsl(222 32% 10% / 0.98);
          border: 1px solid hsl(42 96% 52% / 0.22);
          border-radius: 18px;
          overflow: hidden;
        }
        .mega_header{
          border-bottom: 1px solid hsl(42 96% 52% / 0.12);
        }
        .mega_item{
          transition: background .15s ease;
          text-decoration: none;
        }
        .mega_item:hover{
          background: hsl(42 96% 52% / 0.07);
        }

        /* ---- notification button ---- */
        .notif_btn{
          position: relative;
          height: 40px;
          width: 40px;
          border-radius: 14px;
          border: 1px solid rgba(249,184,28,.35);
          background: #f9b81c;
          color: #0c1424;
          display: grid;
          place-items: center;
          cursor: pointer;
          overflow: hidden;
          transform: translateZ(0);
          transition: transform .15s ease, background .15s ease, border-color .15s ease;
        }
        .notif_btn:hover{
          background: #d89e14;
          border-color: rgba(249,184,28,.55);
          transform: translateY(-1px);
        }
        .notif_btn:active{ transform: translateY(0px) scale(.98); }
        .notif_btn:focus-visible{
          outline: none;
          box-shadow: 0 0 0 3px rgba(249,184,28,.30), 0 0 0 1px rgba(255,255,255,.18) inset;
        }
        .notif_glow{
          position: absolute;
          inset: -40%;
          background: radial-gradient(circle at 35% 35%, rgba(249,184,28,.35), rgba(0,0,0,0) 55%);
          filter: blur(10px);
          opacity: .9;
          pointer-events: none;
          transform: translateZ(0);
        }
        .notif_bell{
          position: relative;
          z-index: 1;
          transform-origin: 50% 10%;
          animation: notif_ring_idle 2.8s ease-in-out infinite;
          will-change: transform;
        }
        .notif_btn:hover .notif_bell{ animation: notif_ring_hover 1.05s ease-in-out infinite; }
        .notif_btn.is-ring-once .notif_bell{ animation: notif_ring_once .9s ease-in-out 1; }
        @keyframes notif_ring_idle{
          0%, 86%, 100% { transform: rotate(0deg); }
          88% { transform: rotate(-10deg); }
          90% { transform: rotate(10deg); }
          92% { transform: rotate(-8deg); }
          94% { transform: rotate(8deg); }
          96% { transform: rotate(-4deg); }
          98% { transform: rotate(4deg); }
        }
        @keyframes notif_ring_hover{
          0% { transform: rotate(0deg); }
          15% { transform: rotate(-14deg); }
          30% { transform: rotate(14deg); }
          45% { transform: rotate(-10deg); }
          60% { transform: rotate(10deg); }
          75% { transform: rotate(-6deg); }
          90% { transform: rotate(6deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes notif_ring_once{
          0% { transform: rotate(0deg); }
          18% { transform: rotate(-16deg); }
          36% { transform: rotate(16deg); }
          54% { transform: rotate(-12deg); }
          72% { transform: rotate(12deg); }
          90% { transform: rotate(-6deg); }
          100% { transform: rotate(0deg); }
        }
        .notif_badge{
          position: absolute;
          top: 1px;
          right: 5px;
          height: 16px;
          min-width: 16px;
          padding: 0 5px;
          border-radius: 999px;
          background: linear-gradient(180deg, hsl(var(--accent)), hsl(var(--accent) / 0.85));
          color: hsl(var(--accent-foreground));
          font-size: 10px;
          font-weight: 900;
          line-height: 1.4;
          text-align: center;
          box-shadow: 0 12px 26px hsl(var(--accent) / 0.22);
          border: 1px solid hsl(var(--foreground) / 0.18);
          z-index: 2;
        }
      `}</style>
    </header>
  );
}
