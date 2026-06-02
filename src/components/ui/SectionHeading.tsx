"use client";

import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  overline?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  overline,
  title,
  sub,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {overline && (
        <Reveal>
          <p className="overline mb-4">{overline}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-[clamp(1.6rem,3.2vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.01em] text-light text-balance">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-silver text-[1.0625rem] leading-relaxed">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
