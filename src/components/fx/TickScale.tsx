"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Signature VLT tick scale: ticks brighten/grow left to right, lighting up on scroll-in. */
export default function TickScale({
  count = 14,
  className,
}: {
  count?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ticks = Array.from({ length: count });

  return (
    <motion.div
      className={cn("tick-scale", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{ show: { transition: { staggerChildren: 0.035 } } }}
      aria-hidden
    >
      {ticks.map((_, i) => {
        const t = i / (count - 1);
        const height = 8 + t * 12;
        const opacity = 0.25 + t * 0.75;
        return (
          <motion.span
            key={i}
            style={{ height, opacity }}
            variants={
              reduce
                ? { hidden: { opacity }, show: { opacity } }
                : { hidden: { scaleY: 0, opacity: 0 }, show: { scaleY: 1, opacity } }
            }
            initial="hidden"
          />
        );
      })}
    </motion.div>
  );
}
