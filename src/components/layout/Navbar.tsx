"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { BRAND, NAV_LINKS, CTA } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";

function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} aria-label={`${BRAND.name} home`} className="group flex items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/logo.png")}
        alt={BRAND.name}
        className="h-9 w-auto transition-transform duration-300 group-hover:scale-105 md:h-11"
      />
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "glass-strong" : "bg-transparent"
        )}
      >
        <div className="container-wide flex h-[72px] items-center justify-between">
          <Wordmark />

          <div className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-[0.9375rem] font-medium transition-colors duration-200",
                    active ? "text-cyan" : "text-silver hover:text-light"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px bg-cyan transition-all duration-300",
                      active ? "w-full" : "w-0"
                    )}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BRAND.phoneTel}`}
              className="hidden items-center gap-2 rounded-pill border border-[var(--glass-border-hover)] px-4 py-2 text-sm font-medium text-light transition-all hover:border-cyan hover:text-cyan md:inline-flex"
            >
              <Phone className="h-4 w-4" />
              {BRAND.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="hidden rounded-sm bg-cyan px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-ink shine glow transition-colors hover:bg-cyan-bright sm:inline-flex"
            >
              Get My Free Quote
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="grid h-10 w-10 place-items-center text-light lg:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {scrolled && (
          <div
            className="absolute inset-x-0 bottom-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--color-cyan) 35%, var(--color-cyan) 65%, transparent)",
              opacity: 0.5,
            }}
          />
        )}
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-ink/70 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="glass-strong fixed inset-y-0 right-0 z-50 flex w-80 max-w-[85vw] flex-col lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-[var(--hairline-col)] px-5 py-4">
                <Wordmark onClick={() => setOpen(false)} />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-9 w-9 place-items-center text-silver hover:text-light"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">
                {NAV_LINKS.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.08 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-sm px-4 py-3.5 text-sm font-medium transition-colors",
                          active
                            ? "bg-cyan/10 text-cyan"
                            : "text-silver hover:bg-white/5 hover:text-light"
                        )}
                      >
                        {link.label}
                        <ChevronRight className="h-4 w-4 opacity-50" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="space-y-3 border-t border-[var(--hairline-col)] px-5 py-5">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-sm bg-cyan px-5 py-3 font-display text-sm font-semibold uppercase tracking-[0.08em] text-ink glow"
                >
                  {CTA.primary}
                </Link>
                <a
                  href={`tel:${BRAND.phoneTel}`}
                  className="flex w-full items-center justify-center gap-2 rounded-sm border border-[var(--glass-border-hover)] px-5 py-3 text-sm font-medium text-light"
                >
                  <Phone className="h-4 w-4" />
                  {BRAND.phoneDisplay}
                </a>
                <p className="text-center text-xs text-muted">{BRAND.taglineShort}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
