import type { Metadata } from "next";
import { Star } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Hairline from "@/components/fx/Hairline";
import BackgroundFX from "@/components/fx/BackgroundFX";
import CTABanner from "@/components/sections/CTABanner";
import SoroBlog from "@/components/blog/SoroBlog";
import { BRAND, SEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.blog.title,
  description: SEO.blog.description,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: SEO.blog.title,
    description: SEO.blog.description,
  },
};

export default function BlogPage() {
  return (
    <main className="relative pt-32 overflow-hidden">
      <BackgroundFX />

      {/* ---------------- Hero band ---------------- */}
      <section className="section relative">
        <div className="container-site relative">
          <Reveal className="max-w-3xl">
            <span className="overline text-cyan">From the shop</span>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-white">
              Ceramic Tint &amp; Detailing,{" "}
              <span className="text-chrome-cyan text-glow-cyan">Explained</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-silver max-w-2xl">
              Care guides, straight answers, and shop notes from our experts.
              Everything worth knowing about keeping your tint, paint, and
              interior looking their best through Michigan summers and winters.
            </p>
          </Reveal>

          {/* Trust strip (mirrors the About page for cohesion) */}
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
              <span className="text-sm text-silver">150+ five-star reviews</span>
              <span className="hidden sm:block h-4 w-px bg-[var(--hairline-col)]" aria-hidden="true" />
              <span className="text-sm text-silver">
                {BRAND.address.city}, {BRAND.address.state}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <Hairline sweep className="container-site" />

      {/* ---------------- Blog feed (editorial paper surface) ---------------- */}
      <section className="section relative">
        <div className="container-site relative">
          <Reveal>
            <div className="soro-surface mx-auto max-w-5xl p-5 sm:p-8 lg:p-10">
              <SoroBlog />
            </div>
          </Reveal>
          <p className="mx-auto mt-6 max-w-5xl text-center text-sm text-muted">
            Questions about your vehicle? Call {BRAND.phoneDisplay} or build a
            free quote in under a minute.
          </p>
        </div>
      </section>

      <Hairline className="container-site" />

      {/* ---------------- Final CTA ---------------- */}
      <CTABanner />
    </main>
  );
}
