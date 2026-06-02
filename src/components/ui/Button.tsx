"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-sm font-display font-semibold uppercase tracking-[0.08em] transition-all duration-300 cursor-pointer focus-ring";

const variants: Record<Variant, string> = {
  primary:
    "bg-cyan text-ink hover:bg-cyan-bright glow shine border border-cyan/30",
  outline:
    "bg-transparent text-light border border-[var(--glass-border-hover)] hover:border-cyan hover:text-cyan hover:glow-soft",
  ghost: "bg-transparent text-silver hover:text-cyan",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[0.8125rem]",
  md: "px-6 py-3 text-[0.9375rem]",
  lg: "px-8 py-4 text-[1rem]",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className,
  external = false,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], disabled && "opacity-50 cursor-not-allowed", className);

  if (href) {
    if (external || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
      return (
        <motion.a
          href={href}
          aria-label={ariaLabel}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={classes}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex">
        <Link href={href} aria-label={ariaLabel} className={classes}>
          {children}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
