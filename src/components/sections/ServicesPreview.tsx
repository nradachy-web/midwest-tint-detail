"use client";

import { motion } from "framer-motion";
import { Sun, Sparkles, Shield, Droplets, Check, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";

const ICONS = { Sun, Sparkles, Shield, Droplets } as const;

export default function ServicesPreview() {
  return (
    <section className="section bg-ink relative overflow-hidden">
      <div className="container-site relative">
        <SectionHeading
          overline="What We Do"
          title="Four Ways We Make Your Car Better"
          sub="Ceramic tint, paint correction, ceramic coating, and detailing. Owner installed by Moe and team, done right the first time."
        />

        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
          stagger={0.1}
        >
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS] ?? Sun;
            const featured = service.featured === true;

            return (
              <Reveal
                key={service.id}
                className={cn(featured && "lg:col-span-2")}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="h-full"
                >
                  <GlassCard
                    className={cn(
                      "group flex h-full flex-col",
                      featured && "glow-soft"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-full flex-col",
                        featured && "lg:flex-row"
                      )}
                    >
                      {/* Image */}
                      <div
                        className={cn(
                          "relative shrink-0 overflow-hidden",
                          featured ? "lg:w-1/2" : "w-full"
                        )}
                      >
                        <div className="relative aspect-[3/2] w-full overflow-hidden">
                          <img
                            src={asset(service.image)}
                            alt={`${service.name} by Midwest Tint & Detail in Plymouth, MI`}
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                            loading="lazy"
                          />
                          {/* Dark gradient overlay */}
                          <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0"
                            style={{
                              background:
                                "linear-gradient(180deg, rgba(8,10,12,0) 30%, rgba(8,10,12,0.55) 100%)",
                            }}
                          />
                          {/* Shine sweep on hover */}
                          <span
                            aria-hidden
                            className="shine pointer-events-none absolute inset-0"
                          />
                          {/* Most Booked pill on the featured card */}
                          {featured && (
                            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-pill bg-cyan px-3 py-1 text-[0.6875rem] font-display font-semibold uppercase tracking-[0.1em] text-ink glow-soft">
                              Most Booked
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Body */}
                      <div className="flex flex-1 flex-col p-6 sm:p-7">
                        <div className="flex items-start gap-4">
                          {/* Icon chip */}
                          <span className="glass-strong flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-cyan">
                            <Icon className="h-5 w-5" strokeWidth={1.75} />
                          </span>
                          <div className="min-w-0">
                            <h3 className="font-display text-[1.25rem] font-semibold leading-tight text-light">
                              {service.name}
                            </h3>
                            <p className="mt-1 text-[0.9375rem] leading-relaxed text-silver">
                              {service.oneLine}
                            </p>
                          </div>
                        </div>

                        {/* Features */}
                        <ul
                          className={cn(
                            "mt-5 space-y-2.5",
                            featured && "lg:columns-1"
                          )}
                        >
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2.5 text-[0.875rem] leading-snug text-muted"
                            >
                              <Check
                                className="mt-0.5 h-4 w-4 shrink-0 text-cyan"
                                strokeWidth={2.25}
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Price framing + CTA */}
                        <div className="mt-6 flex flex-col gap-4 pt-2">
                          <p className="overline text-cyan">
                            {service.priceFraming}
                          </p>
                          <Button
                            href={service.href}
                            variant={featured ? "primary" : "outline"}
                            size="md"
                            className="w-full sm:w-auto"
                            ariaLabel={`${service.cta} for ${service.name}`}
                          >
                            {service.cta}
                            <ArrowRight className="h-4 w-4" strokeWidth={2} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </Reveal>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
