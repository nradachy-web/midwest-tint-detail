"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";
import { asset } from "@/lib/asset";

interface Shade {
  id: string;
  label: string;
  vlt: string;
  opacity: number; // crossfade strength toward the tinted image
}

const SHADES: Shade[] = [
  { id: "factory", label: "Factory Glass", vlt: "Clear", opacity: 0 },
  { id: "light", label: "Light", vlt: "50%", opacity: 0.38 },
  { id: "medium", label: "Medium", vlt: "35%", opacity: 0.58 },
  { id: "dark", label: "Dark", vlt: "20%", opacity: 0.78 },
  { id: "darker", label: "Extra Dark", vlt: "15%", opacity: 0.9 },
  { id: "limo", label: "Limo", vlt: "5%", opacity: 1 },
];

export default function TintVisualizer() {
  const [active, setActive] = useState(2); // Medium default
  const shade = SHADES[active];

  return (
    <section className="section relative overflow-hidden bg-ink-2" id="visualizer">
      <div className="container-wide relative z-10">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <Reveal>
            <p className="overline mb-4">See It On Glass</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-[clamp(1.6rem,3.2vw,2.5rem)] font-semibold leading-tight tracking-[-0.01em] text-light">
              Preview Your Tint Shade
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-silver">
              Slide through ceramic shades to see how dark your glass could go. Then build your free
              quote and we will match the right setup for your vehicle.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="glass mx-auto max-w-4xl overflow-hidden rounded-xl p-3 md:p-4">
            {/* Image stack */}
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-graphite">
              {/* eslint-disable @next/next/no-img-element */}
              <img
                src={asset("/images/tint-visualizer-car.jpg")}
                alt="Sedan with factory clear glass"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <motion.img
                src={asset("/images/tint-visualizer-car-tinted.jpg")}
                alt="Same sedan with ceramic window tint applied"
                className="absolute inset-0 h-full w-full object-cover"
                animate={{ opacity: shade.opacity }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
              {/* eslint-enable @next/next/no-img-element */}

              {/* Shade readout */}
              <div className="absolute left-4 top-4 rounded-pill border border-[var(--glass-border)] bg-ink/70 px-3 py-1.5 backdrop-blur-sm">
                <span className="text-xs font-medium text-silver">Viewing</span>
                <span className="ml-2 font-display text-sm font-semibold text-cyan">
                  {shade.label} · {shade.vlt}
                </span>
              </div>
            </div>

            {/* Range slider */}
            <div className="px-2 pt-5">
              <input
                type="range"
                min={0}
                max={SHADES.length - 1}
                step={1}
                value={active}
                onChange={(e) => setActive(Number(e.target.value))}
                aria-label="Tint darkness"
                className="tint-range w-full"
              />
              {/* Shade chips */}
              <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
                {SHADES.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setActive(i)}
                    className={cn(
                      "rounded-sm border px-2 py-2 text-center transition-all",
                      i === active
                        ? "border-cyan bg-cyan/10 text-cyan"
                        : "border-steel bg-graphite/50 text-silver hover:border-[var(--glass-border-hover)]"
                    )}
                  >
                    <span className="block font-display text-sm font-semibold">{s.vlt}</span>
                    <span className="block text-[0.7rem] text-muted">{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-[var(--hairline-col)] px-2 pt-5 sm:flex-row">
              <p className="text-sm text-muted">
                Simulated preview. We will help you choose the best shade for your vehicle.
              </p>
              <Link
                href="/contact"
                className="shine inline-flex shrink-0 items-center justify-center rounded-sm bg-cyan px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.08em] text-ink transition-colors hover:bg-cyan-bright"
              >
                Get This Look
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .tint-range { -webkit-appearance: none; appearance: none; height: 6px; border-radius: 999px;
          background: linear-gradient(90deg, var(--color-cyan), var(--color-cyan-deep)); outline: none; }
        .tint-range::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 22px; height: 22px;
          border-radius: 999px; background: #fff; border: 3px solid var(--color-cyan); cursor: pointer;
          box-shadow: 0 0 14px var(--glow-cyan); }
        .tint-range::-moz-range-thumb { width: 22px; height: 22px; border-radius: 999px; background: #fff;
          border: 3px solid var(--color-cyan); cursor: pointer; box-shadow: 0 0 14px var(--glow-cyan); }
      `}</style>
    </section>
  );
}
