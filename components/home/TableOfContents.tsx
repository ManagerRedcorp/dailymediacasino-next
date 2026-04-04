"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  title: string;
}

const tocItems: TocItem[] = [
  { id: "how-we-review", title: "How We Review Casinos" },
  { id: "choosing-casino", title: "Choosing the Right Casino" },
  { id: "bonuses-explained", title: "Bonuses Explained" },
  { id: "payment-methods", title: "Payment Methods" },
  { id: "responsible-gambling", title: "Responsible Gambling" },
  { id: "faq", title: "Frequently Asked Questions" },
];

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const activeIndex = tocItems.findIndex((item) => item.id === activeId);

  return (
    <nav className="sticky top-24 hidden lg:block">
      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-casino-gold">
        On This Page
      </p>
      <div className="mb-5 h-0.5 w-8 rounded-full bg-gradient-to-r from-casino-gold to-casino-purple/70" />

      <div className="relative">
        <div className="absolute left-[6px] top-2 bottom-2 w-px bg-border/70" />

        {activeIndex >= 0 && (
          <div
            className="absolute left-[6px] top-2 w-px bg-gradient-to-b from-casino-gold to-casino-gold/40 transition-all duration-500"
            style={{ height: `calc(${((activeIndex + 0.5) / tocItems.length) * 100}% )` }}
          />
        )}

        <ul className="space-y-1">
          {tocItems.map((item, index) => {
            const isActive = activeId === item.id;
            const isPast = activeIndex >= 0 && index < activeIndex;

            return (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className="group flex w-full items-center gap-3 py-1.5 text-left"
                >
                  <span
                    className={cn(
                      "relative z-10 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border transition-all duration-200",
                      isActive
                        ? "border-casino-gold bg-casino-gold shadow-[0_0_10px_hsl(42_96%_52%/0.65)]"
                        : isPast
                        ? "border-casino-gold/60 bg-casino-gold/20"
                        : "border-border bg-background group-hover:border-casino-gold/50 group-hover:bg-casino-gold/10"
                    )}
                  >
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                    )}
                    {isPast && (
                      <span className="h-1 w-1 rounded-full bg-casino-gold/70" />
                    )}
                  </span>

                  <span
                    className={cn(
                      "text-sm leading-snug transition-colors duration-150",
                      isActive
                        ? "font-semibold text-casino-gold"
                        : isPast
                        ? "text-foreground/60"
                        : "text-muted-foreground group-hover:text-foreground"
                    )}
                  >
                    {item.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
