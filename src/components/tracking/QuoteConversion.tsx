"use client";

import { useEffect } from "react";
import { gtagEvent } from "@/lib/gtag";
import { GADS } from "@/lib/constants";

// /thank-you is only reachable after a successful quote-form submit, so
// mounting here is the form-lead conversion trigger. useEffect fires on both
// SPA navigation from the form and a direct page load.
export default function QuoteConversion() {
  useEffect(() => {
    gtagEvent("conversion", { send_to: GADS.labels.quoteForm });
    gtagEvent("generate_lead", { form: "quote" });
  }, []);
  return null;
}
