"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND, QUOTE, SERVICE_OPTIONS, WEB3FORMS_KEY } from "@/lib/constants";
import VehicleSearch, { type VehicleSelection } from "./VehicleSearch";

const STEPS = ["Vehicle", "Services", "Contact", "Review"] as const;

// Modern Apex attribution rails (public/apex-attribution.js, loaded in the
// root layout). attach() is additive and fire-and-forget: the Web3Forms path
// stays the delivery lane and this call never blocks or throws.
declare global {
  interface Window {
    apexAttribution?: {
      attach: (fields: {
        name?: string;
        email?: string;
        phone?: string;
        message?: string;
        isTest?: boolean;
      }) => void;
    };
  }
}

// Mirror the submission into the Modern Apex lead ledger after the normal
// submit path has succeeded. ?apx_test=1 on the page URL marks the row as a
// rollout test so it never counts as a real lead. All failures swallowed:
// attribution must never surface on the visitor's submit experience.
function attachToApexLedger(fields: { name: string; email: string; phone: string; message: string }) {
  try {
    const isTest = new URLSearchParams(window.location.search).get("apx_test") === "1";
    window.apexAttribution?.attach(isTest ? { ...fields, isTest: true } : fields);
  } catch {
    /* swallowed by contract */
  }
}

const variants = {
  enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
};

function captureUtm(): Record<string, string> | null {
  if (typeof window === "undefined") return null;
  const p = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"].forEach((k) => {
    const v = p.get(k);
    if (v) out[k] = v;
  });
  if (document.referrer) out.referrer = document.referrer;
  return Object.keys(out).length ? out : null;
}

export default function QuoteForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [vehicle, setVehicle] = useState<VehicleSelection>({ year: 0, make: "", model: "", trim: "" });
  const [color, setColor] = useState("");
  const [services, setServices] = useState<string[]>(["window-tint"]);
  const [contact, setContact] = useState({ name: "", phone: "", email: "", zip: "", notes: "" });
  const [smsConsent, setSmsConsent] = useState({ marketing: false, nonMarketing: false });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onVehicle = useCallback((v: VehicleSelection) => setVehicle((p) => ({ ...p, ...v })), []);

  const toggleService = (id: string) =>
    setServices((p) => (p.includes(id) ? p.filter((s) => s !== id) : [...p, id]));

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (step === 0 && (!vehicle.year || !vehicle.make || !vehicle.model)) e.vehicle = "Select your year, make, and model.";
    if (step === 1 && services.length === 0) e.services = "Pick at least one service.";
    if (step === 2) {
      if (!contact.name.trim()) e.name = "Your name helps us reach you.";
      if (!contact.phone.trim()) e.phone = "A phone number is required.";
      if (contact.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) e.email = "That email looks off.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validate()) { setDir(1); setStep((s) => Math.min(s + 1, STEPS.length - 1)); } };
  const back = () => { setDir(-1); setStep((s) => Math.max(s - 1, 0)); };

  const vehicleStr = [vehicle.year || "", vehicle.make, vehicle.model, vehicle.trim].filter(Boolean).join(" ");
  const serviceLabels = services.map((id) => SERVICE_OPTIONS.find((o) => o.id === id)?.label ?? id);

  const submit = async () => {
    setSubmitting(true);
    setSubmitError(null);
    const utm = captureUtm();
    const message = [
      `New quote request from ${contact.name}`,
      ``,
      `Vehicle: ${vehicleStr}${color ? ` (${color})` : ""}`,
      `Services: ${serviceLabels.join(", ")}`,
      ``,
      `Name: ${contact.name}`,
      `Phone: ${contact.phone}`,
      contact.email ? `Email: ${contact.email}` : "",
      contact.zip ? `ZIP: ${contact.zip}` : "",
      contact.notes ? `Notes: ${contact.notes}` : "",
      ``,
      `SMS marketing consent: ${smsConsent.marketing ? "Yes" : "No"}`,
      `SMS non-marketing consent (order updates, appointment reminders): ${smsConsent.nonMarketing ? "Yes" : "No"}`,
      utm ? `\nSource: ${JSON.stringify(utm)}` : "",
    ].filter(Boolean).join("\n");

    const hasKey = WEB3FORMS_KEY && !WEB3FORMS_KEY.startsWith("REPLACE");

    try {
      if (hasKey) {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `New Tint Quote: ${contact.name} - ${vehicleStr}`,
            from_name: "Midwest Tint & Detail Website",
            name: contact.name,
            phone: contact.phone,
            email: contact.email || BRAND.email,
            vehicle: vehicleStr,
            services: serviceLabels.join(", "),
            sms_marketing_consent: smsConsent.marketing ? "Yes" : "No",
            sms_nonmarketing_consent: smsConsent.nonMarketing ? "Yes" : "No",
            message,
          }),
        });
        if (!res.ok) throw new Error("send failed");
      } else if (typeof window !== "undefined") {
        // No key configured yet: log so dev/test still flows to the conversion page.
        console.warn("[QuoteForm] WEB3FORMS_KEY not set. Lead not delivered:", message);
      }
      attachToApexLedger({ name: contact.name, email: contact.email, phone: contact.phone, message });
      router.push("/thank-you");
    } catch {
      setSubmitError(QUOTE.error);
      setSubmitting(false);
    }
  };

  return (
    <div className="glass relative overflow-hidden rounded-xl p-5 md:p-8">
      {/* Progress */}
      <div className="mb-7">
        <div className="mb-2 flex justify-between">
          {STEPS.map((label, i) => (
            <button
              key={label}
              onClick={() => i < step && (setDir(-1), setStep(i))}
              className={cn(
                "font-display text-[0.7rem] font-semibold uppercase tracking-[0.14em] transition-colors",
                i <= step ? "text-cyan" : "text-muted",
                i < step && "cursor-pointer hover:text-cyan-bright"
              )}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="h-1.5 overflow-hidden rounded-pill bg-steel">
          <motion.div
            className="h-full rounded-pill bg-gradient-to-r from-cyan-deep to-cyan"
            initial={false}
            animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>

      <div className="relative min-h-[320px] overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={step}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {step === 0 && (
              <div className="space-y-5">
                <div>
                  <h3 className="font-display text-xl font-semibold text-light">{QUOTE.steps.vehicle.header}</h3>
                  <p className="mt-1 text-sm text-silver">{QUOTE.steps.vehicle.helper}</p>
                </div>
                <VehicleSearch onChange={onVehicle} />
                {errors.vehicle && <p className="text-sm text-[var(--color-error)]">{errors.vehicle}</p>}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-silver">
                    Color <span className="text-muted">(optional)</span>
                  </label>
                  <input className="field" value={color} onChange={(e) => setColor(e.target.value)} placeholder="e.g. Black, Pearl White" />
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <h3 className="font-display text-xl font-semibold text-light">{QUOTE.steps.services.header}</h3>
                  <p className="mt-1 text-sm text-silver">{QUOTE.steps.services.helper}</p>
                </div>
                {errors.services && <p className="text-sm text-[var(--color-error)]">{errors.services}</p>}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {SERVICE_OPTIONS.map((o) => {
                    const sel = services.includes(o.id);
                    return (
                      <button
                        key={o.id}
                        type="button"
                        onClick={() => toggleService(o.id)}
                        className={cn(
                          "flex items-center gap-3 rounded-sm border p-4 text-left transition-all",
                          sel ? "border-cyan bg-cyan/10" : "border-steel bg-graphite/50 hover:border-[var(--glass-border-hover)]"
                        )}
                      >
                        <span className={cn("grid h-5 w-5 shrink-0 place-items-center rounded border", sel ? "border-cyan bg-cyan" : "border-muted")}>
                          {sel && <Check className="h-3.5 w-3.5 text-ink" strokeWidth={3} />}
                        </span>
                        <span className={cn("text-sm font-medium", sel ? "text-light" : "text-silver")}>{o.label}</span>
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-muted">
                  Tint pricing: front two windows $149.99, full vehicle $299, clear ceramic windshield film $99. Somebody from our team will confirm the details when they reach out.
                </p>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <h3 className="font-display text-xl font-semibold text-light">{QUOTE.steps.contact.header}</h3>
                  <p className="mt-1 text-sm text-silver">{QUOTE.steps.contact.helper}</p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-silver">Name *</label>
                    <input className={cn("field", errors.name && "border-[var(--color-error)]")} value={contact.name} onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))} placeholder="Your name" />
                    {errors.name && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-silver">Phone *</label>
                    <input className={cn("field", errors.phone && "border-[var(--color-error)]")} type="tel" value={contact.phone} onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))} placeholder="(313) 555-0123" />
                    {errors.phone && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-silver">Email <span className="text-muted">(optional)</span></label>
                    <input className={cn("field", errors.email && "border-[var(--color-error)]")} type="email" value={contact.email} onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))} placeholder="you@email.com" />
                    {errors.email && <p className="mt-1 text-xs text-[var(--color-error)]">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-silver">ZIP <span className="text-muted">(optional)</span></label>
                    <input className="field" value={contact.zip} onChange={(e) => setContact((c) => ({ ...c, zip: e.target.value }))} placeholder="48170" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-silver">Anything we should know? <span className="text-muted">(optional)</span></label>
                  <textarea className="field resize-none" rows={3} value={contact.notes} onChange={(e) => setContact((c) => ({ ...c, notes: e.target.value }))} placeholder="Timeline, specific questions, anything we should know..." />
                </div>
                <div className="space-y-3 rounded-sm border border-steel bg-graphite/40 p-4">
                  <ConsentCheckbox
                    checked={smsConsent.marketing}
                    onChange={() => setSmsConsent((c) => ({ ...c, marketing: !c.marketing }))}
                    label={QUOTE.smsConsent.marketing}
                  />
                  <ConsentCheckbox
                    checked={smsConsent.nonMarketing}
                    onChange={() => setSmsConsent((c) => ({ ...c, nonMarketing: !c.nonMarketing }))}
                    label={QUOTE.smsConsent.nonMarketing}
                  />
                  <p className="text-xs text-muted">
                    Consent is not a condition of purchase. See our{" "}
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline transition-colors hover:text-cyan">Privacy Policy</a>{" "}
                    and{" "}
                    <a href="/terms" target="_blank" rel="noopener noreferrer" className="underline transition-colors hover:text-cyan">Terms &amp; Conditions</a>.
                  </p>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-xl font-semibold text-light">{QUOTE.steps.review.header}</h3>
                  <p className="mt-1 text-sm text-silver">{QUOTE.steps.review.helper}</p>
                </div>
                <div className="space-y-3">
                  <ReviewRow label="Vehicle" value={`${vehicleStr}${color ? ` · ${color}` : ""}`} />
                  <ReviewRow label="Services" value={serviceLabels.join(", ")} />
                  <ReviewRow label="Name" value={contact.name} />
                  <ReviewRow label="Phone" value={contact.phone} />
                  {contact.email && <ReviewRow label="Email" value={contact.email} />}
                  {contact.notes && <ReviewRow label="Notes" value={contact.notes} />}
                  <ReviewRow
                    label="Text consent"
                    value={`Marketing: ${smsConsent.marketing ? "Yes" : "No"} · Order updates: ${smsConsent.nonMarketing ? "Yes" : "No"}`}
                  />
                </div>
                <div className="flex items-start gap-3 rounded-sm border border-cyan/30 bg-cyan/10 px-4 py-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden />
                  <p className="text-sm leading-relaxed text-light">
                    After you send this, <span className="font-semibold text-cyan">somebody from our team will reach out from {BRAND.phoneDisplay}</span> to confirm your quote and book your install. Keep an eye out for that number.
                  </p>
                </div>
                <p className="text-xs text-cyan">{QUOTE.trustMicro}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {submitError && (
        <p className="mt-4 rounded-sm border border-[var(--color-error)]/40 bg-[var(--color-error)]/10 px-4 py-3 text-sm text-[var(--color-error)]">
          {submitError}{" "}
          <a href={`tel:${BRAND.phoneTel}`} className="underline">Call {BRAND.phoneDisplay}</a>
        </p>
      )}

      <div className="mt-7 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button onClick={back} className="rounded-sm border border-[var(--glass-border-hover)] px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.08em] text-light transition-colors hover:border-cyan hover:text-cyan">
            Back
          </button>
        ) : (
          <a href={`tel:${BRAND.phoneTel}`} className="inline-flex items-center gap-2 text-sm text-silver transition-colors hover:text-cyan">
            <Phone className="h-4 w-4" /> Prefer to call? {BRAND.phoneDisplay}
          </a>
        )}

        {step < STEPS.length - 1 ? (
          <button onClick={next} className="rounded-sm bg-cyan px-7 py-3 font-display text-sm font-semibold uppercase tracking-[0.08em] text-ink shine glow transition-colors hover:bg-cyan-bright">
            Continue
          </button>
        ) : (
          <button onClick={submit} disabled={submitting} className={cn("rounded-sm bg-cyan px-7 py-3 font-display text-sm font-semibold uppercase tracking-[0.08em] text-ink shine glow transition-colors hover:bg-cyan-bright", submitting && "opacity-60")}>
            {submitting ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink border-t-transparent" />
                Sending...
              </span>
            ) : (
              QUOTE.submit
            )}
          </button>
        )}
      </div>
    </div>
  );
}

function ConsentCheckbox({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <label className="flex cursor-pointer items-start gap-3">
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      <span
        aria-hidden
        className={cn(
          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border transition-colors",
          checked ? "border-cyan bg-cyan" : "border-muted"
        )}
      >
        {checked && <Check className="h-3.5 w-3.5 text-ink" strokeWidth={3} />}
      </span>
      <span className="text-xs leading-relaxed text-silver">{label}</span>
    </label>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-sm border border-steel bg-graphite/40 px-4 py-3">
      <span className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-muted">{label}</span>
      <span className="text-right text-sm text-light">{value}</span>
    </div>
  );
}
