"use client";

import { Phone, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Hairline from "@/components/fx/Hairline";
import { BRAND, CTA, FINAL_CTA } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CTABannerProps {
  heading?: string;
  sub?: string;
  className?: string;
}

const EMPHASIS = ["Cooler", "Protected"];

/**
 * Splits the heading so the first emphasis word found ("Cooler" / "Protected")
 * is rendered in chrome cyan. Falls back to plain text if neither is present.
 */
function renderHeading(heading: string) {
  for (const word of EMPHASIS) {
    const idx = heading.indexOf(word);
    if (idx !== -1) {
      return (
        <>
          {heading.slice(0, idx)}
          <span className="text-chrome-cyan text-glow-cyan">{word}</span>
          {heading.slice(idx + word.length)}
        </>
      );
    }
  }
  return heading;
}

export default function CTABanner({ heading, sub, className }: CTABannerProps) {
  const finalHeading = heading ?? FINAL_CTA.heading;
  const finalSub = sub ?? FINAL_CTA.sub;

  return (
    <section className={cn("section relative overflow-hidden bg-ink grain", className)}>
      {/* Ambient field */}
      <div className="grid-bg absolute inset-0 opacity-[0.5]" aria-hidden />
      <div
        className="glow-orb absolute left-1/2 top-[-18%] h-[460px] w-[460px] -translate-x-1/2 opacity-80"
        aria-hidden
      />
      <div
        className="glow-orb absolute bottom-[-22%] left-[8%] h-[360px] w-[360px] opacity-60"
        aria-hidden
      />
      <div
        className="glow-orb absolute right-[6%] top-[12%] h-[320px] w-[320px] opacity-50"
        aria-hidden
      />
      {/* Top scrim so the section reads as a deliberate finale */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40"
        style={{ background: "linear-gradient(to bottom, var(--scrim-bottom), transparent)" }}
        aria-hidden
      />

      <div className="container-site relative z-10">
        <Reveal>
          <div className="glass-strong glow relative mx-auto max-w-4xl overflow-hidden rounded-xl px-7 py-16 text-center sm:px-12 sm:py-20 lg:py-24">
            {/* Inner top hairline accent */}
            <div className="absolute inset-x-0 top-0">
              <Hairline sweep />
            </div>

            {/* Inner orb for depth behind the headline */}
            <div
              className="glow-orb absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 opacity-70"
              aria-hidden
            />

            <div className="relative">
              <p className="overline mb-5 text-cyan">{BRAND.taglineShort}</p>

              <h2 className="mx-auto max-w-3xl font-display uppercase leading-[0.98] tracking-[-0.02em] text-[clamp(2.1rem,5.5vw,4rem)] font-bold text-white">
                {renderHeading(finalHeading)}
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-silver">
                {finalSub}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="shine w-full sm:w-auto"
                >
                  {CTA.primary}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>

                <Button
                  href={`tel:${BRAND.phoneTel}`}
                  variant="outline"
                  size="lg"
                  external
                  ariaLabel={`Call ${BRAND.name} at ${BRAND.phoneDisplay}`}
                  className="w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {CTA.secondary}
                </Button>
              </div>

              <p className="mt-8 text-sm text-muted">
                {BRAND.phoneDisplay} &middot; {BRAND.address.city}, {BRAND.address.state}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
