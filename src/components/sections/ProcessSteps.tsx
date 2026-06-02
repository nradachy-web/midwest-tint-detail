"use client";

import { PROCESS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Hairline from "@/components/fx/Hairline";

export default function ProcessSteps() {
  const steps = PROCESS.steps;
  const last = steps.length - 1;

  return (
    <section className="section bg-ink relative overflow-hidden">
      {/* faint guiding glow behind the path */}
      <div
        aria-hidden
        className="glow-orb absolute left-1/2 top-1/3 -translate-x-1/2 opacity-40"
      />

      <div className="container-site relative">
        <SectionHeading
          overline="How It Works"
          title={PROCESS.heading}
          sub="Four calm steps from your first quote to driving away cooler and protected. No pressure, no guesswork."
        />

        {/* Desktop: horizontal guided path. Mobile: vertical timeline. */}
        <div className="mt-16 lg:mt-20">
          <ol className="relative grid gap-y-10 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
            {steps.map((step, i) => {
              const num = String(i + 1).padStart(2, "0");
              const delay = i * 0.12;

              return (
                <Reveal
                  as="li"
                  key={step.title}
                  delay={delay}
                  className="relative flex gap-5 lg:flex-col lg:gap-0"
                >
                  {/* ---- Mobile connector: vertical cyan line down the left rail ---- */}
                  {i !== last && (
                    <span
                      aria-hidden
                      className="absolute left-[27px] top-16 bottom-[-2.5rem] w-px bg-gradient-to-b from-[var(--color-cyan)]/50 via-[var(--color-cyan)]/15 to-transparent lg:hidden"
                    />
                  )}

                  {/* ---- Numeral + node ---- */}
                  <div className="relative flex-none lg:mb-7">
                    <div className="glass-strong relative flex h-14 w-14 items-center justify-center rounded-full border-[var(--glass-border)] glow-soft lg:h-16 lg:w-16">
                      <span className="text-chrome-cyan font-display text-2xl font-semibold leading-none lg:text-[1.75rem]">
                        {num}
                      </span>
                    </div>

                    {/* ---- Desktop connector: horizontal cyan hairline to next node ---- */}
                    {i !== last && (
                      <div
                        aria-hidden
                        className="absolute left-full top-1/2 hidden h-px w-[calc(100%+2rem)] -translate-y-1/2 lg:block"
                      >
                        <Hairline sweep className="h-px w-full" />
                      </div>
                    )}
                  </div>

                  {/* ---- Copy ---- */}
                  <div className="flex-1 pt-1 lg:pt-0 lg:pr-6">
                    <p className="overline mb-2 text-cyan/70">
                      Step {num}
                    </p>
                    <h3 className="font-display text-lg font-semibold leading-snug text-light lg:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-silver">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
