import type { Metadata } from "next";
import { MapPin } from "lucide-react";

import QuoteSection from "@/components/sections/QuoteSection";
import Reveal from "@/components/ui/Reveal";
import { BRAND, SEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.contact.title,
  description: SEO.contact.description,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="pt-32">
      <QuoteSection />

      <section className="section pt-0">
        <div className="container-site">
          <Reveal>
            <div className="glass relative overflow-hidden rounded-xl p-8 sm:p-10">
              <div className="hairline-sweep absolute inset-x-0 top-0" aria-hidden="true" />
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <span
                    className="glow-soft mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-cyan/10 text-cyan"
                    aria-hidden="true"
                  >
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="overline text-cyan">Proudly serving</p>
                    <h2 className="mt-2 font-display text-xl text-white sm:text-2xl">
                      {BRAND.address.city} and the surrounding metro
                    </h2>
                    <p className="mt-2 max-w-xl text-sm text-silver">
                      {BRAND.serviceArea.join(", ")}, and nearby communities. Based out of{" "}
                      {BRAND.address.full}.
                    </p>
                  </div>
                </div>

                <a
                  href={BRAND.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring glass-hover shrink-0 rounded-pill px-5 py-2.5 text-sm font-medium text-light"
                >
                  Get directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
