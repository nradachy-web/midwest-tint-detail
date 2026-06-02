import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Hairline from "@/components/fx/Hairline";
import TickScale from "@/components/fx/TickScale";
import TintVisualizer from "@/components/visualizer/TintVisualizer";
import CTABanner from "@/components/sections/CTABanner";
import { GALLERY, SEO } from "@/lib/constants";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: SEO.gallery.title },
  description: SEO.gallery.description,
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: SEO.gallery.title,
    description: SEO.gallery.description,
    url: "/gallery",
  },
  twitter: {
    title: SEO.gallery.title,
    description: SEO.gallery.description,
  },
};

export default function GalleryPage() {
  return (
    <main className="relative overflow-hidden">
      {/* ---------- Header + interactive centerpiece ---------- */}
      <section className="section relative pt-32 sm:pt-36">
        {/* Ambient field */}
        <div className="grid-bg absolute inset-0 opacity-[0.4]" aria-hidden />
        <div
          className="glow-orb absolute left-1/2 top-[-10%] h-[420px] w-[420px] -translate-x-1/2 opacity-70"
          aria-hidden
        />

        <div className="container-site relative z-10">
          <SectionHeading
            overline="The Gallery"
            title={GALLERY.heading}
            sub={GALLERY.intro}
          />

          {/* Cyan signature between the heading and the centerpiece */}
          <Reveal delay={0.12} className="mx-auto mt-10 max-w-md">
            <TickScale />
          </Reveal>

          {/* Interactive before/after visualizer as the hero of the page */}
          <Reveal delay={0.08} className="mx-auto mt-12 max-w-5xl">
            <GlassCard topEdge className="overflow-hidden p-3 sm:p-4">
              <TintVisualizer />
            </GlassCard>
          </Reveal>

          <Reveal delay={0.05} className="mx-auto mt-6 max-w-2xl text-center">
            <p className="inline-flex items-center justify-center gap-2 text-sm text-muted">
              <Sparkles className="h-4 w-4 text-cyan" aria-hidden />
              {GALLERY.sub}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Beat separator into the work grid */}
      <div className="container-site relative z-10">
        <Hairline sweep className="opacity-80" />
      </div>

      {/* ---------- The work grid ---------- */}
      <section className="section relative">
        <div
          className="glow-orb absolute bottom-[6%] right-[4%] h-[360px] w-[360px] opacity-50"
          aria-hidden
        />

        <div className="container-wide relative z-10">
          <Reveal>
            <p className="overline mb-4 text-center text-cyan">Recent work</p>
            <h2 className="mx-auto max-w-2xl text-center text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.1] tracking-[-0.01em] text-light text-balance">
              A few finishes from the shop
            </h2>
          </Reveal>

          <RevealGroup
            stagger={0.08}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7"
          >
            {GALLERY.items.map((item) => (
              <GlassCard
                key={item.image}
                hover
                topEdge
                className="shine group overflow-hidden p-0"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={asset(item.image)}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                  {/* Bottom scrim so the caption block reads cleanly */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
                    style={{
                      background:
                        "linear-gradient(to top, var(--scrim-bottom), transparent)",
                    }}
                    aria-hidden
                  />
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-lg font-semibold uppercase tracking-[-0.01em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-silver">
                    {item.caption}
                  </p>
                </div>
              </GlassCard>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ---------- Closing CTA ---------- */}
      <CTABanner heading="See Your Car Like This" />
    </main>
  );
}
