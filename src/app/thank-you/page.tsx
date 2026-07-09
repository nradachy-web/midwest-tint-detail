import type { Metadata } from "next";
import { CheckCircle, Phone, ArrowRight, AtSign } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Hairline from "@/components/fx/Hairline";
import BackgroundFX from "@/components/fx/BackgroundFX";
import QuoteConversion from "@/components/tracking/QuoteConversion";
import { BRAND, QUOTE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Thank You | Midwest Tint & Detail",
  description: "Your free quote request was received.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="relative min-h-[70vh] overflow-hidden pt-32 pb-24">
      <QuoteConversion />
      <BackgroundFX />

      <div className="container-site relative z-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Reveal>
            <div className="relative mb-10 flex items-center justify-center">
              <div className="glow-orb absolute inset-0 -z-10 scale-150 opacity-60" aria-hidden />
              <div className="glass-strong glow flex h-28 w-28 items-center justify-center rounded-pill border border-[var(--glass-border-hover)]">
                <CheckCircle
                  className="h-14 w-14 text-cyan text-glow-cyan"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="overline mb-4 text-cyan">Request Received</p>
          </Reveal>

          <Reveal delay={0.14}>
            <h1 className="font-display text-balance text-4xl font-semibold leading-[1.05] text-white sm:text-5xl">
              You are all set.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-silver">
              {QUOTE.success}
            </p>
          </Reveal>

          <Reveal delay={0.28} className="w-full">
            <div className="my-10 w-full">
              <Hairline sweep />
            </div>
          </Reveal>

          <Reveal delay={0.34}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/" variant="primary" size="lg">
                Back to Home
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button
                href={`tel:${BRAND.phoneTel}`}
                variant="outline"
                size="lg"
                external
                ariaLabel={`Call us at ${BRAND.phoneDisplay}`}
              >
                <Phone className="h-4 w-4" aria-hidden />
                {BRAND.phoneDisplay}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.42}>
            <a
              href={BRAND.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-10 inline-flex items-center gap-2 rounded-pill px-3 py-2 text-sm text-muted transition-colors duration-300 hover:text-cyan"
            >
              <AtSign className="h-4 w-4" aria-hidden />
              Follow us {BRAND.social.instagramHandle}
            </a>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
