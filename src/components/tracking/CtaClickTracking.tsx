"use client";

import { useEffect } from "react";
import { gtagEvent } from "@/lib/gtag";
import { GADS } from "@/lib/constants";

// One delegated listener covers every tel:/mailto: CTA on the site (navbar,
// hero, sticky call bar, footer, quote form, service and city pages), so any
// CTA added later is tracked automatically. Capture phase so component-level
// handlers cannot swallow the click before we see it.
export default function CtaClickTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target instanceof Element ? e.target : null;
      const link = target?.closest<HTMLAnchorElement>(
        'a[href^="tel:"], a[href^="mailto:"]'
      );
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        gtagEvent("conversion", { send_to: GADS.labels.phoneClick });
        gtagEvent("phone_call_click", { link_url: href });
      } else {
        gtagEvent("conversion", { send_to: GADS.labels.emailClick });
        gtagEvent("email_click", { link_url: href });
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
