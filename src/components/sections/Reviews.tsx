"use client";

import { Star } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { BRAND, REVIEWS } from "@/lib/constants";

function Stars() {
  return (
    <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          className="h-4 w-4"
          style={{ fill: "var(--color-star)", color: "var(--color-star)" }}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="section bg-ink-2">
      <div className="container-site">
        <SectionHeading
          overline="5.0 on Google"
          title={REVIEWS.heading}
          sub={REVIEWS.intro}
          align="center"
        />

        <RevealGroup
          stagger={0.08}
          className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]"
        >
          {REVIEWS.items.map((review) => {
            const meta = [review.vehicle, review.when]
              .filter(Boolean)
              .join(" · ");

            return (
              <Reveal
                key={`${review.name}-${review.when}`}
                className="mb-6 break-inside-avoid"
              >
                <GlassCard className="h-full p-7">
                  <Stars />

                  <blockquote className="mt-5 text-silver leading-relaxed">
                    {review.quote}
                  </blockquote>

                  <div className="mt-6 flex flex-col gap-0.5">
                    <span className="font-display text-light">{review.name}</span>
                    {meta && (
                      <span className="text-sm text-muted">{meta}</span>
                    )}
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </RevealGroup>

        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            href={BRAND.googleReviewUrl}
            external
            ariaLabel="Read more reviews on Google"
          >
            Read More on Google
          </Button>
        </div>
      </div>
    </section>
  );
}
