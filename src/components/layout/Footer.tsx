import Link from "next/link";
import { Phone, Mail, MapPin, Clock, AtSign, Star } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import Hairline from "@/components/fx/Hairline";
import { asset } from "@/lib/asset";

export default function Footer() {
  const serviceLinks = NAV_LINKS.filter((l) =>
    ["/window-tinting", "/paint-correction", "/ceramic-coating", "/detailing"].includes(l.href)
  );

  return (
    <footer className="relative bg-charcoal pb-28 pt-16 md:pb-16">
      <Hairline className="absolute inset-x-0 top-0" />
      <div className="container-site">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/logo.png")} alt={BRAND.name} className="mb-4 h-14 w-auto" />
            <p className="mb-3 text-sm leading-relaxed text-silver">
              Plymouth&apos;s trusted name for premium ceramic window tinting, paint correction,
              ceramic coating, and detailing. Done right the first time.
            </p>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[var(--color-star)] text-[var(--color-star)]" />
              ))}
              <span className="ml-1 text-sm text-silver">5.0 · 120+ reviews</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.16em] text-light">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-silver transition-colors hover:text-cyan">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service area */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.16em] text-light">
              Service Area
            </h4>
            <div className="flex flex-wrap gap-2">
              {BRAND.serviceArea.map((city) => (
                <span
                  key={city}
                  className="rounded-pill border border-[var(--glass-border)] bg-graphite/60 px-3 py-1 text-xs text-silver"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.16em] text-light">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${BRAND.phoneTel}`} className="flex items-center gap-2.5 text-silver transition-colors hover:text-cyan">
                  <Phone className="h-4 w-4 text-cyan" /> {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2.5 text-silver transition-colors hover:text-cyan">
                  <Mail className="h-4 w-4 text-cyan" /> {BRAND.email}
                </a>
              </li>
              <li>
                <a href={BRAND.address.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-silver transition-colors hover:text-cyan">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" /> {BRAND.address.full}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-silver">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cyan" /> {BRAND.hours}
              </li>
              <li>
                <a href={BRAND.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-silver transition-colors hover:text-cyan">
                  <AtSign className="h-4 w-4 text-cyan" /> {BRAND.social.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--hairline-col)] pt-6 text-center text-xs text-muted sm:flex-row sm:text-left">
          <p>© {BRAND.name}. All rights reserved. Plymouth, Michigan.</p>
          <p className="text-silver">
            Lifetime warranty on all window tint installs · 120+ five-star reviews · Owner installed by Moe
          </p>
        </div>
      </div>
    </footer>
  );
}
