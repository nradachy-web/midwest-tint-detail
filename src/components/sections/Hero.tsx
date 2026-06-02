"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star, ChevronDown, Phone } from "lucide-react";
import Link from "next/link";
import { BRAND, HERO, CTA } from "@/lib/constants";
import { asset } from "@/lib/asset";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-ink grain">
      {/* Video / poster background */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src={asset("/images/hero-still.jpg")}
          alt="Blacked-out luxury car with fresh ceramic window tint in a professional detailing studio"
          className="h-full w-full object-cover"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.08 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          transition={
            reduce
              ? { duration: 0.6 }
              : { opacity: { duration: 1.2 }, scale: { duration: 16, ease: "linear" } }
          }
        />
        {/* Scrims for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(6,7,8,0.92) 0%, rgba(6,7,8,0.72) 38%, rgba(6,7,8,0.25) 70%, rgba(6,7,8,0.15) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{ background: "linear-gradient(to top, var(--scrim-bottom), transparent)" }}
        />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-pill border border-[var(--glass-border)] bg-ink/40 px-3.5 py-1.5 backdrop-blur-sm"
          >
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[var(--color-star)] text-[var(--color-star)]" />
              ))}
            </span>
            <span className="text-xs font-medium tracking-wide text-silver">{HERO.eyebrow}</span>
          </motion.div>

          <h1 className="mb-6 font-display uppercase leading-[0.96] tracking-[-0.02em]">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease }}
              className="block text-[clamp(2.4rem,6vw,5rem)] font-light text-light/70"
            >
              {HERO.headlineLead}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.48, ease }}
              className="block text-[clamp(2.75rem,7.5vw,6rem)] font-bold text-white"
            >
              {HERO.headlineRestBefore}
              <span className="text-chrome-cyan text-glow-cyan">{HERO.headlineGlow}</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62, ease }}
            className="mb-8 max-w-xl text-[1.0625rem] leading-relaxed text-silver"
          >
            {HERO.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.78, ease }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/contact"
              className="shine glow inline-flex items-center justify-center rounded-sm bg-cyan px-8 py-4 font-display text-base font-semibold uppercase tracking-[0.08em] text-ink transition-colors hover:bg-cyan-bright"
            >
              {CTA.hero}
            </Link>
            <a
              href={`tel:${BRAND.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-[var(--glass-border-hover)] px-8 py-4 font-display text-base font-semibold uppercase tracking-[0.08em] text-light transition-all hover:border-cyan hover:text-cyan"
            >
              <Phone className="h-4 w-4" />
              {CTA.secondary}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
          >
            {HERO.badges.map((b) => (
              <span key={b} className="flex items-center gap-2 text-sm text-silver">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--glow-cyan)]" />
                {b}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <ChevronDown className="h-7 w-7 text-silver/40" />
      </motion.div>
    </section>
  );
}
