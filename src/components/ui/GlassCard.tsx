"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  topEdge?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
  topEdge = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass relative overflow-hidden rounded-lg",
        hover && "glass-hover",
        className
      )}
    >
      {topEdge && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(140,241,255,0.5), transparent)",
          }}
        />
      )}
      {children}
    </div>
  );
}
