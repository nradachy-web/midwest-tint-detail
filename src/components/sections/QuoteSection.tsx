"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  AtSign,
  Star,
  ShieldCheck,
} from "lucide-react";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import TickScale from "@/components/fx/TickScale";
import QuoteForm from "@/components/forms/QuoteForm";
import { BRAND, QUOTE } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ContactItem {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: Phone,
    label: "Call or text",
    value: BRAND.phoneDisplay,
    href: `tel:${BRAND.phoneTel}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
  {
    icon: MapPin,
    label: "Visit the shop",
    value: BRAND.address.full,
    href: BRAND.address.mapUrl,
    external: true,
  },
  {
    icon: Clock,
    label: "Hours",
    value: BRAND.hours,
    href: "",
  },
  {
    icon: AtSign,
    label: "Instagram",
    value: BRAND.social.instagramHandle,
    href: BRAND.social.instagram,
    external: true,
  },
];

export default function QuoteSection() {
  return (
    <section id="quote" className="section bg-ink-2 relative overflow-hidden">
      {/* ambient cyan orb for depth */}
      <span aria-hidden className="glow-orb absolute -top-24 right-[8%] opacity-60" />

      <div className="container-site relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:items-start">
          {/* ---------------- LEFT: invitation + contact ---------------- */}
          <div className="order-1">
            <Reveal>
              <p className="overline mb-4">Free, no-pressure quote</p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.015em] text-light text-balance">
                {QUOTE.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 text-silver text-[1.0625rem] leading-relaxed max-w-xl">
                {QUOTE.intro}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-6 glass rounded-md px-5 py-4 flex items-start gap-3 max-w-xl">
                <ShieldCheck
                  className="mt-0.5 h-5 w-5 shrink-0 text-cyan"
                  aria-hidden
                />
                <p className="text-light text-[0.95rem] leading-relaxed">
                  {QUOTE.reassurance}
                </p>
              </div>
            </Reveal>

            {/* signature flourish */}
            <Reveal delay={0.2}>
              <TickScale className="mt-8" />
            </Reveal>

            {/* contact list */}
            <RevealGroup className="mt-8 space-y-1" stagger={0.06}>
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                const hasLink = item.href.length > 0;
                const inner = (
                  <>
                    <span
                      className={cn(
                        "grid h-10 w-10 shrink-0 place-items-center rounded-md border border-[var(--glass-border)] bg-charcoal/60 transition-colors",
                        hasLink &&
                          "group-hover:border-[var(--glass-border-hover)]"
                      )}
                    >
                      <Icon className="h-[18px] w-[18px] text-cyan" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                        {item.label}
                      </span>
                      <span
                        className={cn(
                          "block text-[0.975rem] text-light leading-snug break-words transition-colors",
                          hasLink && "group-hover:text-cyan-bright"
                        )}
                      >
                        {item.value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <Reveal as="div" key={item.label}>
                    {hasLink ? (
                      <a
                        href={item.href}
                        {...(item.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="focus-ring group flex items-center gap-4 rounded-md py-2"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-md py-2">
                        {inner}
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </RevealGroup>

            {/* trust row */}
            <Reveal delay={0.1}>
              <div className="hairline mt-7" />
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span
                  className="flex items-center gap-1"
                  aria-label="Rated 5.0 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-[18px] w-[18px]"
                      style={{ color: "var(--color-star)" }}
                      fill="var(--color-star)"
                      aria-hidden
                    />
                  ))}
                </span>
                <span className="text-light font-medium">5.0</span>
                <span className="text-muted">·</span>
                <span className="text-silver text-[0.95rem]">
                  120+ five-star reviews
                </span>
              </div>
            </Reveal>
          </div>

          {/* ---------------- RIGHT: the form ---------------- */}
          <div className="order-2">
            <Reveal delay={0.1}>
              <div className="glass-strong glow-soft relative overflow-hidden rounded-xl p-6 sm:p-8">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(140,241,255,0.55), transparent)",
                  }}
                />
                <QuoteForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
