"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { BRAND } from "@/lib/constants";

/** Mobile-only sticky conversion dock: Call + Free Quote always thumb-reachable. */
export default function StickyCallBar() {
  return (
    <div
      className="glass-strong fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-[var(--glass-border)] px-3 pt-2 lg:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={`tel:${BRAND.phoneTel}`}
        className="flex items-center justify-center gap-2 rounded-sm border border-[var(--glass-border-hover)] py-3 text-sm font-semibold text-light"
      >
        <Phone className="h-4 w-4 text-cyan" /> Call Moe
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center rounded-sm bg-cyan py-3 font-display text-sm font-semibold uppercase tracking-[0.06em] text-ink"
      >
        Free Quote
      </Link>
    </div>
  );
}
