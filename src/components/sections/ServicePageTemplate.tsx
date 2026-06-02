import { Check, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Hairline from "@/components/fx/Hairline";
import CTABanner from "@/components/sections/CTABanner";
import { SERVICE_DETAILS, BRAND, CTA } from "@/lib/constants";
import { asset } from "@/lib/asset";

/**
 * Premium service landing page composed from SERVICE_DETAILS[id].
 * Server component: it only renders client children (Button, Reveal, etc.).
 */
export default function ServicePageTemplate({ id }: { id: string }) {
  const detail = SERVICE_DETAILS[id];
  if (!detail) return null;

  // Pull the last word of the name as a natural cyan-glow accent.
  const nameParts = detail.name.trim().split(" ");
  const accentWord = nameParts.length > 1 ? nameParts.pop()! : null;
  const leadWords = nameParts.join(" ");

  return (
    <article className="bg-ink">
      {/* ============================================================
          1) HERO BAND
         ============================================================ */}
      <section className="relative isolate overflow-hidden bg-ink pt-32 pb-20 sm:pt-40 sm:pb-28 grain">
        {/* Darkened service image background */}
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(detail.image)}
            alt={`${detail.name} by ${BRAND.name} in Plymouth, MI`}
            className="h-full w-full object-cover object-center"
          />
          {/* Dark gradient scrim for legibility */}
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
          {/* Signature texture + glow */}
          <div className="grid-bg absolute inset-0 opacity-50" aria-hidden />
          <div className="glow-orb absolute -right-24 top-1/4 h-96 w-96" aria-hidden />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-2xl">
            <Reveal>
              <p className="overline mb-5">{detail.name}</p>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="font-display uppercase leading-[0.98] tracking-[-0.02em] text-white text-[clamp(2.4rem,6vw,4.75rem)] font-bold text-balance">
                {accentWord ? (
                  <>
                    {leadWords}{" "}
                    <span className="text-chrome-cyan text-glow-cyan">{accentWord}</span>
                  </>
                ) : (
                  detail.name
                )}
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-silver">
                {detail.heroSubtitle}
              </p>
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

      {/* ============================================================
          2) LONG DESCRIPTION
         ============================================================ */}
      <section className="section relative overflow-hidden">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                align="left"
                overline="Overview"
                title={
                  <>
                    Done right,{" "}
                    <span className="text-chrome-cyan text-glow-cyan">the first time.</span>
                  </>
                }
              />
            </div>
            <div className="lg:col-span-8">
              <RevealGroup className="space-y-6">
                {detail.longDescription.map((para, i) => (
                  <Reveal key={i}>
                    <p className="max-w-prose text-[1.05rem] leading-relaxed text-silver">
                      {para}
                    </p>
                  </Reveal>
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>
      </section>

      <Hairline sweep className="container-wide" />

      {/* ============================================================
          3) BENEFITS — "Why It Matters"
         ============================================================ */}
      <section className="section relative overflow-hidden">
        <div className="glow-orb absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 opacity-60" aria-hidden />
        <div className="container-site relative">
          <SectionHeading
            overline="The Difference"
            title="Why It Matters"
            sub="What you actually get when the work is done with premium materials and real care."
          />

          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2" stagger={0.07}>
            {detail.benefits.map((benefit, i) => (
              <Reveal key={i}>
                <GlassCard className="h-full p-5 sm:p-6" topEdge={false}>
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-pill border border-cyan/30 bg-cyan/10 glow-soft">
                      <Check className="h-4 w-4 text-cyan" />
                    </span>
                    <p className="text-[1.0125rem] leading-relaxed text-light">{benefit}</p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ============================================================
          4) PROCESS — "Our Process"
         ============================================================ */}
      <section className="section relative overflow-hidden bg-ink-2">
        <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />
        <div className="container-site relative">
          <SectionHeading
            overline="Step by Step"
            title="Our Process"
            sub="A clean, careful path from your first quote to a finish you will be proud of."
          />

          <RevealGroup className="mx-auto mt-14 max-w-3xl" stagger={0.08}>
            <ol className="relative">
              {/* Vertical connector line */}
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-6 left-[1.4375rem] top-6 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(140,241,255,0.35), transparent)",
                }}
              />
              {detail.process.map((step, i) => (
                <Reveal as="li" key={i} className="relative flex gap-6 pb-10 last:pb-0">
                  <span className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-pill glass-strong text-chrome-cyan glow-soft">
                    <span className="font-display text-lg font-bold tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-display text-lg font-semibold text-light">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-prose text-[1.0125rem] leading-relaxed text-silver">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </RevealGroup>
        </div>
      </section>

      {/* ============================================================
          5) TIERS — "Options" (conditional)
         ============================================================ */}
      {detail.tiers && detail.tiers.length > 0 && (
        <section className="section relative overflow-hidden">
          <div className="glow-orb absolute -left-24 top-1/3 h-80 w-80 opacity-60" aria-hidden />
          <div className="container-site relative">
            <SectionHeading
              overline="Build Your Package"
              title="Options"
              sub="Choose the level that fits your vehicle and your goals. Not sure? We will recommend the right call on your free quote."
            />

            <RevealGroup
              className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              stagger={0.08}
            >
              {detail.tiers.map((tier, i) => (
                <Reveal key={i}>
                  <GlassCard className="flex h-full flex-col p-6 sm:p-7" hover>
                    <span className="overline mb-4 inline-block text-cyan">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {tier.name}
                    </h3>
                    <p className="mt-3 text-[0.975rem] leading-relaxed text-silver">
                      {tier.body}
                    </p>
                  </GlassCard>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      <Hairline sweep className="container-wide" />

      {/* ============================================================
          6) WHY MIDWEST — checked list
         ============================================================ */}
      <section className="section relative overflow-hidden">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                align="left"
                overline="The Standard"
                title={
                  <>
                    Why{" "}
                    <span className="text-chrome-cyan text-glow-cyan">Midwest</span>
                  </>
                }
                sub="Owner led by Moe, premium materials, and a 5.0 Google rating from 120+ Metro Detroit drivers."
              />
            </div>
            <div className="lg:col-span-7">
              <RevealGroup className="space-y-3" stagger={0.06}>
                {detail.whyUs.map((reason, i) => (
                  <Reveal key={i}>
                    <div className="glass glass-hover flex items-start gap-4 rounded-md p-4 sm:p-5">
                      <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-pill border border-cyan/30 bg-cyan/10">
                        <Check className="h-3.5 w-3.5 text-cyan" />
                      </span>
                      <p className="text-[1.0125rem] leading-relaxed text-light">{reason}</p>
                    </div>
                  </Reveal>
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          7) FAQs — "Questions" (native details/summary, no JS)
         ============================================================ */}
      <section className="section relative overflow-hidden bg-ink-2">
        <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />
        <div className="container-site relative">
          <SectionHeading
            overline="Good to Know"
            title="Questions"
            sub="Straight answers, no pressure. Still wondering something? Call us and ask."
          />

          <RevealGroup className="mx-auto mt-12 max-w-3xl space-y-3" stagger={0.06}>
            {detail.faqs.map((faq, i) => (
              <Reveal key={i}>
                <details className="glass group rounded-md transition-colors open:border-[var(--glass-border-hover)]">
                  <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6">
                    <span className="font-display text-[1.0625rem] font-semibold text-light transition-colors group-open:text-cyan">
                      {faq.q}
                    </span>
                    <span
                      aria-hidden
                      className="flex h-6 w-6 flex-none items-center justify-center text-cyan transition-transform duration-300 group-open:rotate-45"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <p className="max-w-prose text-[1.0125rem] leading-relaxed text-silver">
                      {faq.a}
                    </p>
                  </div>
                </details>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ============================================================
          8) CLOSING CTA
         ============================================================ */}
      <CTABanner />
    </article>
  );
}
