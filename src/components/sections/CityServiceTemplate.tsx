import Link from "next/link";
import { Phone, MapPin, ArrowRight, Sun, Sparkles, Shield, Droplets } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Hairline from "@/components/fx/Hairline";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import QuoteSection from "@/components/sections/QuoteSection";
import { SERVICES, BRAND, CTA, SITE_URL, CITIES, type City } from "@/lib/constants";
import { asset } from "@/lib/asset";

const ICONS = { Sun, Sparkles, Shield, Droplets } as const;

/**
 * Local SEO landing page for a single service-area city.
 * Unique hero + intro + JSON-LD per city; shared brand sections below.
 */
export default function CityServiceTemplate({ city }: { city: City }) {
  const nearby = city.nearby
    .map((slug) => CITIES.find((c) => c.slug === slug))
    .filter((c): c is City => Boolean(c));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Automotive Window Tinting",
    name: `Window Tinting in ${city.name}, MI`,
    provider: {
      "@type": "AutoRepair",
      name: BRAND.name,
      telephone: BRAND.phoneTel,
      address: {
        "@type": "PostalAddress",
        streetAddress: BRAND.address.street,
        addressLocality: BRAND.address.city,
        addressRegion: "MI",
        postalCode: BRAND.address.zip,
        addressCountry: "US",
      },
    },
    areaServed: { "@type": "City", name: `${city.name}, Michigan` },
    url: `${SITE_URL}/window-tinting/${city.slug}`,
  };

  return (
    <article className="bg-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---------- HERO ---------- */}
      <section className="relative isolate overflow-hidden bg-ink pt-32 pb-20 sm:pt-40 sm:pb-28 grain">
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/services/window-tint.jpg")}
            alt={`Ceramic window tinting in ${city.name}, MI`}
            className="h-full w-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(6,7,8,0.95) 0%, rgba(6,7,8,0.82) 42%, rgba(6,7,8,0.55) 72%, rgba(6,7,8,0.4) 100%)",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-2/3"
            style={{ background: "linear-gradient(to top, var(--scrim-bottom, #060708), transparent)" }}
          />
          <div className="grid-bg absolute inset-0 opacity-50" aria-hidden />
          <div className="glow-orb absolute -right-24 top-1/4 h-96 w-96" aria-hidden />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-2xl">
            <Reveal>
              <p className="overline mb-5 inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" /> Serving {city.county}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="font-display uppercase leading-[0.98] tracking-[-0.02em] text-white text-[clamp(2.2rem,5.5vw,4.25rem)] font-bold text-balance">
                Window Tinting in{" "}
                <span className="text-chrome-cyan text-glow-cyan">{city.name}</span>, MI
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-silver">{city.intro[0]}</p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/contact" variant="primary" size="lg">
                  {CTA.primary}
                </Button>
                <Button href={`tel:${BRAND.phoneTel}`} variant="outline" size="lg" external>
                  <Phone className="h-4 w-4" />
                  {BRAND.phoneDisplay}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- LOCAL INTRO ---------- */}
      <section className="section relative overflow-hidden">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                align="left"
                overline="Your Local Tint Shop"
                title={
                  <>
                    Premium ceramic tint for{" "}
                    <span className="text-chrome-cyan text-glow-cyan">{city.name}</span>
                  </>
                }
              />
            </div>
            <div className="lg:col-span-7">
              <RevealGroup className="space-y-6">
                {city.intro.map((p, i) => (
                  <Reveal key={i}>
                    <p className="max-w-prose text-[1.05rem] leading-relaxed text-silver">{p}</p>
                  </Reveal>
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>
      </section>

      <Hairline sweep className="container-wide" />

      {/* ---------- SERVICES IN CITY ---------- */}
      <section className="section relative overflow-hidden bg-ink-2">
        <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />
        <div className="container-site relative">
          <SectionHeading
            overline="What We Offer"
            title={`Our Services in ${city.name}`}
            sub="Tint is just the start. We also protect and restore your vehicle with paint correction, ceramic coating, and detailing."
          />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2" stagger={0.07}>
            {SERVICES.map((s) => {
              const Icon = ICONS[s.icon as keyof typeof ICONS] ?? Sun;
              return (
                <Reveal key={s.id}>
                  <Link href={s.href} className="block h-full">
                    <GlassCard className="glass-hover flex h-full items-start gap-4 p-5 sm:p-6">
                      <span className="glass-strong flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-cyan">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-light">{s.name}</h3>
                        <p className="mt-1 text-[0.95rem] leading-relaxed text-silver">{s.oneLine}</p>
                        <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-cyan">
                          Learn more <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </GlassCard>
                  </Link>
                </Reveal>
              );
            })}
          </RevealGroup>

          {nearby.length > 0 && (
            <Reveal delay={0.1}>
              <div className="mt-12 flex flex-wrap items-center gap-3">
                <span className="text-sm text-muted">We also tint in:</span>
                {nearby.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/window-tinting/${n.slug}`}
                    className="rounded-pill border border-[var(--glass-border)] bg-graphite/60 px-3 py-1 text-xs text-silver transition-colors hover:border-cyan hover:text-cyan"
                  >
                    {n.name}
                  </Link>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <WhyChooseUs />
      <Reviews />
      <FAQ />
      <QuoteSection />
    </article>
  );
}
