"use client";

import Link from "next/link";
import { Scan, FileCheck2, Radar } from "lucide-react";
import { useEffect, useState } from "react";
import { USFlagIcon } from "@/components/icons/USFlagIcon";
import { Lock } from "@/components/icons/Lock";
import { Coin } from "@/components/icons/Coin";
import { TopRankingPremium, CASINOS } from "@/components/casino/TopRankingPremium";

const trustBadges = [
  { icon: USFlagIcon, label: "US LICENSED" },
  { icon: Lock, label: "Secure & safe selection" },
  { icon: Coin, label: "Fast withdrawals focus" },
] as const;

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const reduced = media?.matches ?? false;
    setReduceMotion(reduced);

    if (reduced) {
      setMounted(true);
      return;
    }

    const t = window.setTimeout(() => setMounted(true), 120);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden casino-pattern">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45"
          style={{ backgroundImage: "url(/images/bg-hero-us.webp)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/95" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(249,184,28,0.18),transparent_60%),radial-gradient(55%_55%_at_80%_25%,rgba(118,67,248,0.15),transparent_60%),radial-gradient(60%_60%_at_55%_75%,rgba(16,196,226,0.12),transparent_60%)]" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-casino-purple/15 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-casino-magenta/15 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-casino-cyan/10 blur-3xl" />
      </div>

      <div className="container relative py-10 sm:py-12 lg:py-18">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/30 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
                21+ Only
              </span>
            </div>

            <h1 className="text-balance text-3xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Top-Rated US Online Casinos{" "}
              <span className="text-gradient-primary">Vetted & Compared</span>
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              We do the groundwork so you don&apos;t have to. Every casino on our
              list is checked for licensing, fair bonus terms, and reliable
              payout speeds before it earns a spot.
            </p>

            {/* MOBILE ONLY FLOW */}
            <div className="lg:hidden">
              <TopRankingPremium />

              <div className="mt-2 grid gap-3 sm:grid-cols-3">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-3 rounded-2xl border border-border/70 bg-secondary/25 px-4 py-3 backdrop-blur-sm"
                  >
                    <badge.icon className="h-5 w-5 text-casino-gold" />
                    <span className="text-sm font-medium text-foreground">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground">
                This page contains affiliate links. If you sign up through our
                links, we may earn a commission at no extra cost to you.{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Read our terms and conditions
                </Link>
                .
              </p>

              {/* Methodology card (mobile) */}
              <div className="mt-8">
                <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-secondary/15 p-5 backdrop-blur-sm sm:p-6">
                  <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-casino-magenta/20 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-casino-cyan/15 blur-3xl" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground">
                          How our rankings work
                        </p>
                        <p className="mt-1 text-lg font-bold text-foreground">
                          What every casino must pass
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-4">
                      <div className="rounded-2xl border border-border/60 bg-background/25 px-4 py-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-casino-purple/20 ring-1 ring-casino-purple/25">
                              <Scan className="h-4.5 w-4.5 text-casino-gold" />
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-foreground">
                                State licensing confirmed
                              </p>
                              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                                We verify each operator holds a valid US state
                                license before including them.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary/40">
                          <div
                            className={[
                              "h-full rounded-full bg-casino-green/80",
                              reduceMotion
                                ? "w-full"
                                : `transition-[width] duration-700 ease-out ${
                                    mounted ? "w-full" : "w-0"
                                  }`,
                            ].join(" ")}
                            style={
                              !reduceMotion
                                ? { transitionDelay: "0ms" }
                                : undefined
                            }
                          />
                        </div>
                      </div>

                      <div className="rounded-2xl border border-border/60 bg-background/25 px-4 py-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-casino-cyan/15 ring-1 ring-casino-cyan/25">
                              <FileCheck2 className="h-4.5 w-4.5 text-casino-cyan" />
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-foreground">
                                Bonus terms decoded
                              </p>
                              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                                We break down playthrough requirements, time
                                caps, and game restrictions clearly.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary/40">
                          <div
                            className={[
                              "h-full rounded-full bg-casino-cyan/80",
                              reduceMotion
                                ? "w-[92%]"
                                : `transition-[width] duration-700 ease-out ${
                                    mounted ? "w-[92%]" : "w-0"
                                  }`,
                            ].join(" ")}
                            style={
                              !reduceMotion
                                ? { transitionDelay: "120ms" }
                                : undefined
                            }
                          />
                        </div>
                      </div>

                      <div className="rounded-2xl border border-border/60 bg-background/25 px-4 py-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-casino-magenta/15 ring-1 ring-casino-magenta/25">
                              <Radar className="h-4.5 w-4.5 text-casino-magenta" />
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-foreground">
                                Kept current and accurate
                              </p>
                              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                                Rankings are updated as promotions shift and
                                expired offers are removed promptly.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary/40">
                          <div
                            className={[
                              "h-full rounded-full bg-casino-magenta/80",
                              reduceMotion
                                ? "w-[85%]"
                                : `transition-[width] duration-700 ease-out ${
                                    mounted ? "w-[85%]" : "w-0"
                                  }`,
                            ].join(" ")}
                            style={
                              !reduceMotion
                                ? { transitionDelay: "240ms" }
                                : undefined
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DESKTOP ONLY: Trust badges */}
            <div className="mt-7 hidden gap-3 sm:grid-cols-3 lg:grid">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 rounded-2xl border border-border/70 bg-secondary/25 px-4 py-3 backdrop-blur-sm"
                >
                  <badge.icon className="h-5 w-5 text-casino-gold" />
                  <span className="text-sm font-medium text-foreground">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

            {/* DESKTOP ONLY: Disclosure text */}
            <p className="mt-6 hidden max-w-3xl text-xs leading-relaxed text-muted-foreground lg:block">
              Some links on this page are affiliate links. We may earn a
              referral fee when you register through them, at zero cost to you.{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Learn more
              </Link>
              .
            </p>
          </div>

          {/* DESKTOP ONLY: Right methodology card */}
          <div className="hidden lg:col-span-5 lg:block">
            {(() => {
              const top = CASINOS[0];
              return (
                <div className="mb-4 overflow-hidden rounded-2xl border border-casino-gold/30 bg-secondary/15 backdrop-blur-sm">
                  <div className="flex items-center gap-2 border-b border-casino-gold/20 bg-casino-gold/10 px-4 py-2">
                    <span className="inline-flex items-center rounded-full bg-casino-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-background">
                      #1 Top Pick
                    </span>
                    <span className="text-xs font-semibold text-casino-gold">
                      {top.name}
                    </span>
                    {top.specialLabel && (
                      <span className="ml-auto rounded-full border border-casino-gold/40 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-casino-gold">
                        {top.specialLabel}
                      </span>
                    )}
                  </div>

                  <div className="px-4 py-3">
                    <p className="text-sm font-bold text-foreground leading-snug">
                      {top.offerTitle}
                    </p>
                    {top.offerSubtitle && (
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {top.offerSubtitle}
                      </p>
                    )}

                    <div className="mt-2 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-md bg-casino-green/15 px-2 py-0.5 text-xs font-semibold text-casino-green ring-1 ring-casino-green/30">
                        {top.score}/10
                      </span>
                      {top.features.slice(0, 2).map((f) => (
                        <span
                          key={f}
                          className="rounded-md border border-border/50 bg-background/20 px-2 py-0.5 text-[11px] text-muted-foreground"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    <a
                      href={top.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="mt-3 flex w-full items-center justify-center rounded-xl bg-casino-green px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-casino-green/25 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                    >
                      Get Bonus &rarr;
                    </a>

                    <p className="mt-2 text-center text-[10px] text-muted-foreground">
                      21+. T&amp;Cs apply. Gambling problem? Call 1-800-GAMBLER.
                    </p>
                  </div>
                </div>
              );
            })()}

            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-secondary/15 p-5 backdrop-blur-sm sm:p-6">
              <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-casino-magenta/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-casino-cyan/15 blur-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground">
                      Ranking methodology
                    </p>
                    <p className="mt-1 text-lg font-bold text-foreground">
                      What we verify before ranking
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4">
                  <div className="rounded-2xl border border-border/60 bg-background/25 px-4 py-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-casino-purple/20 ring-1 ring-casino-purple/25">
                          <Scan className="h-4.5 w-4.5 text-casino-gold" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            Regulatory compliance check
                          </p>
                          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                            We prioritise US-regulated operators and surface
                            safer options first.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary/40">
                      <div
                        className={[
                          "h-full rounded-full bg-casino-green/80",
                          reduceMotion
                            ? "w-full"
                            : `transition-[width] duration-700 ease-out ${
                                mounted ? "w-full" : "w-0"
                              }`,
                        ].join(" ")}
                        style={
                          !reduceMotion ? { transitionDelay: "0ms" } : undefined
                        }
                      />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/60 bg-background/25 px-4 py-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-casino-cyan/15 ring-1 ring-casino-cyan/25">
                          <FileCheck2 className="h-4.5 w-4.5 text-casino-cyan" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            Bonus terms verification
                          </p>
                          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                            We highlight key terms like wagering requirements
                            and time limits.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary/40">
                      <div
                        className={[
                          "h-full rounded-full bg-casino-cyan/80",
                          reduceMotion
                            ? "w-[92%]"
                            : `transition-[width] duration-700 ease-out ${
                                mounted ? "w-[92%]" : "w-0"
                              }`,
                        ].join(" ")}
                        style={
                          !reduceMotion
                            ? { transitionDelay: "120ms" }
                            : undefined
                        }
                      />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/60 bg-background/25 px-4 py-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-casino-magenta/15 ring-1 ring-casino-magenta/25">
                          <Radar className="h-4.5 w-4.5 text-casino-magenta" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            Ongoing updates
                          </p>
                          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                            We refresh rankings as offers change and remove
                            outdated deals.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary/40">
                      <div
                        className={[
                          "h-full rounded-full bg-casino-magenta/80",
                          reduceMotion
                            ? "w-[85%]"
                            : `transition-[width] duration-700 ease-out ${
                                mounted ? "w-[85%]" : "w-0"
                              }`,
                        ].join(" ")}
                        style={
                          !reduceMotion
                            ? { transitionDelay: "240ms" }
                            : undefined
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
