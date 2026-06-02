"use client";

import { STATS } from "@/lib/constants";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import Hairline from "@/components/fx/Hairline";
import { cn } from "@/lib/utils";

/**
 * StatsBar
 * Compact, premium proof band. Four big font-display numbers (cyan glow) with
 * quiet labels beneath. 4-up on desktop, 2-up on mobile. Hairline sweep above,
 * staggered scroll-reveal on the items.
 */
export default function StatsBar({ className }: { className?: string }) {
  return (
    <section className={cn("relative bg-ink-2", className)} aria-label="Why customers choose us">
      <Hairline sweep className="opacity-70" />

      <div className="container-site py-12 sm:py-14">
        <RevealGroup className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              className={cn(
                "group relative flex flex-col items-center text-center px-4 py-6 sm:py-7",
                // hairline dividers between cells, hidden on the edges
                i % 2 !== 0 && "border-l border-[var(--hairline-col)]",
                "md:border-l md:first:border-l-0",
                // second row top border on mobile (cols 3 & 4)
                i >= 2 && "border-t border-[var(--hairline-col)] md:border-t-0",
              )}
            >
              <span className="font-display text-glow-cyan text-4xl sm:text-5xl md:text-[3.25rem] leading-none tracking-tight tabular-nums">
                {stat.value}
              </span>
              <span className="mt-3 text-xs sm:text-sm text-muted leading-snug max-w-[14ch] mx-auto transition-colors duration-300 group-hover:text-silver">
                {stat.label}
              </span>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
