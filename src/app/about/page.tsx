import type { Metadata } from "next";
import { UserCheck, Gem, ShieldCheck, MapPin, Star } from "lucide-react";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Hairline from "@/components/fx/Hairline";
import TickScale from "@/components/fx/TickScale";
import BackgroundFX from "@/components/fx/BackgroundFX";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";
import { ABOUT, BRAND, STATS, SEO, CTA } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.about.title,
  description: SEO.about.description,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "/about",
    title: SEO.about.title,
    description: SEO.about.description,
  },
};

const ICONS = { UserCheck, Gem, ShieldCheck, MapPin } as const;
type PillarIcon = keyof typeof ICONS;

export default function AboutPage() {
  return (
    <main className="relative pt-32 overflow-hidden">
      <BackgroundFX />

      {/* ---------------- Hero band ---------------- */}
      <section className="section relative">
        <div className="container-site relative">
          <Reveal className="max-w-3xl">
            <span className="overline text-cyan">About the shop</span>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-white">
              {ABOUT.heading}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-silver max-w-2xl">
              {ABOUT.subheading}
            </p>
          </Reveal>

          {/* Trust strip */}
          <Reveal delay={0.12} className="mt-10">
            <div className="glass inline-flex flex-wrap items-center gap-x-5 gap-y-3 rounded-pill px-6 py-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[var(--color-star)] text-[var(--color-star)]"
                    />
                  ))}
                </div>
                <span className="font-display text-sm font-semibold text-white">
                  5.0
                </span>
              </div>
              <span className="hidden sm:block h-4 w-px bg-[var(--hairline-col)]" aria-hidden="true" />
              <span className="text-sm text-silver">120+ five-star reviews</span>
              <span className="hidden sm:block h-4 w-px bg-[var(--hairline-col)]" aria-hidden="true" />
              <span className="text-sm text-silver">{BRAND.address.city}, {BRAND.address.state}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <Hairline sweep className="container-site" />

      {/* ---------------- Story / prose ---------------- */}
      <section className="section relative">
        <div className="container-site relative grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              overline="Our story"
              title="A real shop, run by the person doing the work"
              align="left"
            />
          </Reveal>

          <div className="max-w-2xl space-y-6">
            {ABOUT.body.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.06} as="div">
                <p className="text-base sm:text-lg leading-relaxed text-silver">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="container-site">
        <TickScale className="opacity-70" />
      </div>

      {/* ---------------- Pillars ---------------- */}
      <section className="section relative">
        <div className="container-site relative">
          <Reveal>
            <SectionHeading
              overline="What we stand on"
              title="The standard behind every job"
              sub="No shortcuts, no upsell games. Just careful work that holds up."
              align="center"
            />
          </Reveal>

          <RevealGroup
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.08}
          >
            {ABOUT.pillars.map((pillar) => {
              const Icon = ICONS[pillar.icon as PillarIcon] ?? UserCheck;
              return (
                <GlassCard key={pillar.title} hover topEdge className="h-full p-7">
                  <div className="glow-soft inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--glass-border)] bg-ink-2/60">
                    <Icon className="h-6 w-6 text-cyan" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {pillar.body}
                  </p>
                </GlassCard>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <Hairline className="container-site" />

      {/* ---------------- Service area ---------------- */}
      <section className="section relative">
        <div className="container-site relative">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <span className="overline text-cyan">Where we work</span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Rooted in Plymouth, serving Metro Detroit
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-silver max-w-xl">
                A real shop at {BRAND.address.full}. Stop by, or ask about mobile
                service for select jobs and we will come to you, at home, at the
                office, even at a job site.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="#quote" size="md">
                  {CTA.primary}
                </Button>
                <Button
                  href={`tel:${BRAND.phoneTel}`}
                  variant="outline"
                  size="md"
                  external
                  ariaLabel={`Call ${BRAND.name} at ${BRAND.phoneDisplay}`}
                >
                  {CTA.secondary}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <GlassCard topEdge className="p-7 sm:p-8">
                <div className="flex items-center gap-2 text-cyan">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                  <span className="overline">Service area</span>
                </div>
                <p className="mt-4 text-sm text-muted">
                  Proudly serving drivers across:
                </p>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {BRAND.serviceArea.map((city) => (
                    <li
                      key={city}
                      className="hairline rounded-pill border border-[var(--glass-border)] bg-ink-2/50 px-4 py-2 text-sm text-light transition-colors hover:border-[var(--glass-border-hover)] hover:text-white"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-muted">
                  Not on the list? Ask anyway. {BRAND.hours}.
                </p>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="container-site">
        <TickScale className="opacity-70" />
      </div>

      {/* ---------------- Reviews trust strip ---------------- */}
      <section className="section relative">
        <div className="container-site relative">
          <Reveal>
            <GlassCard className="glow-soft p-8 text-center sm:p-12">
              <div className="flex items-center justify-center gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 fill-[var(--color-star)] text-[var(--color-star)]"
                  />
                ))}
              </div>
              <p className="mt-5 font-display text-3xl sm:text-4xl font-semibold text-white">
                <span className="text-chrome-cyan text-glow-cyan">5.0</span> on Google
              </p>
              <p className="mt-3 text-base text-silver">
                Backed by {STATS[1].value.toLowerCase()} from Plymouth and Metro
                Detroit drivers who say their cars look and smell brand new.
              </p>
              <div className="mt-7 flex justify-center">
                <Button
                  href={BRAND.googleReviewUrl}
                  variant="ghost"
                  size="md"
                  external
                >
                  Read the reviews
                </Button>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Final CTA ---------------- */}
      <CTABanner />
    </main>
  );
}
