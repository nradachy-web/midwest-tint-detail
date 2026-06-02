"use client";

import { UserCheck, Gem, ShieldCheck, Truck, Wind, MapPin } from "lucide-react";
import { WHY_US } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import BackgroundFX from "@/components/fx/BackgroundFX";
import Hairline from "@/components/fx/Hairline";

const ICONS = { UserCheck, Gem, ShieldCheck, Truck, Wind, MapPin } as const;

export default function WhyChooseUs() {
  return (
    <section className="section bg-ink-2 relative overflow-hidden">
      <BackgroundFX className="opacity-60" />

      <div className="container-site relative z-10">
        <SectionHeading overline="Why Midwest" title={WHY_US.heading} />

        <Hairline sweep className="mx-auto mt-10 max-w-xs" />

        <RevealGroup
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {WHY_US.reasons.map((reason) => {
            const Icon = ICONS[reason.icon as keyof typeof ICONS] ?? UserCheck;
            return (
              <Reveal key={reason.title}>
                <GlassCard className="group h-full p-7">
                  <div className="glass-strong glow-soft mb-6 inline-flex h-12 w-12 items-center justify-center rounded-md text-cyan transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </div>

                  <h3 className="font-display text-[1.15rem] font-semibold leading-snug tracking-[-0.01em] text-light">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-[0.975rem] leading-relaxed text-silver">
                    {reason.body}
                  </p>
                </GlassCard>
              </Reveal>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
