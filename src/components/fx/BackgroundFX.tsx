import { cn } from "@/lib/utils";

/** Ambient sitewide backdrop: faint perspective grid + drifting cyan glow orbs. */
export default function BackgroundFX({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden grid-bg", className)} aria-hidden>
      <div className="glow-orb floaty" style={{ width: 520, height: 520, top: -120, left: -120 }} />
      <div
        className="glow-orb floaty"
        style={{ width: 460, height: 460, bottom: -160, right: -120, animationDelay: "-3s" }}
      />
    </div>
  );
}
