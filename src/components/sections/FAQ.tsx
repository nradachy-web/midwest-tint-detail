"use client";

import { useState, useId } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ as FAQ_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Hairline from "@/components/fx/Hairline";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const baseId = useId();

  return (
    <section className="section bg-ink relative">
      <div className="container-site">
        <SectionHeading
          overline="Good To Know"
          title="Window Tint Questions, Answered"
        />

        <Reveal className="mt-8 flex justify-center">
          <Hairline sweep className="w-24" />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl">
          <ul className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              const panelId = `${baseId}-panel-${i}`;
              const btnId = `${baseId}-btn-${i}`;

              return (
                <Reveal as="li" key={item.q} delay={i * 0.04}>
                  <div
                    className={cn(
                      "glass overflow-hidden rounded-lg border transition-colors duration-300",
                      isOpen
                        ? "border-[var(--glass-border-hover)] glow-soft"
                        : "border-[var(--glass-border)] glass-hover"
                    )}
                  >
                    <h3 className="m-0">
                      <button
                        id={btnId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="focus-ring flex w-full items-center justify-between gap-5 px-6 py-5 text-left sm:px-7 sm:py-6"
                      >
                        <span
                          className={cn(
                            "font-display text-[1.0625rem] font-medium leading-snug tracking-[-0.01em] transition-colors duration-300",
                            isOpen ? "text-cyan-bright" : "text-light"
                          )}
                        >
                          {item.q}
                        </span>
                        <motion.span
                          aria-hidden="true"
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={
                            reduce
                              ? { duration: 0 }
                              : { type: "spring", stiffness: 380, damping: 28 }
                          }
                          className={cn(
                            "grid size-8 shrink-0 place-items-center rounded-pill border transition-colors duration-300",
                            isOpen
                              ? "border-[var(--glass-border-hover)] text-cyan"
                              : "border-[var(--hairline-col)] text-muted"
                          )}
                        >
                          <ChevronDown className="size-4" strokeWidth={2} />
                        </motion.span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={btnId}
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={
                            reduce
                              ? { duration: 0 }
                              : {
                                  height: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
                                  opacity: { duration: 0.26, ease: "easeOut" },
                                }
                          }
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                            <div className="hairline mb-5" />
                            <p className="text-[0.975rem] leading-relaxed text-silver">
                              {item.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
