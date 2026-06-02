import Button from "@/components/ui/Button";
import BackgroundFX from "@/components/fx/BackgroundFX";
import Hairline from "@/components/fx/Hairline";
import { BRAND } from "@/lib/constants";
import { Phone } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink">
      <BackgroundFX />

      <section className="container-site relative z-10 flex min-h-screen flex-col items-center justify-center pt-32 pb-24 text-center">
        <span className="overline text-cyan">Error 404</span>

        <h1 className="mt-6 font-display text-[clamp(5rem,18vw,12rem)] font-bold leading-none tracking-tight text-glow-cyan text-chrome-cyan">
          404
        </h1>

        <Hairline sweep className="mx-auto mt-8 w-40" />

        <p className="mt-8 text-balance text-lg text-light sm:text-xl">
          This page took a wrong turn.
        </p>
        <p className="mt-3 max-w-md text-balance text-muted">
          The page you are looking for moved or never existed. Let us get you
          back on the road.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button href="/" variant="primary" size="lg">
            Back to Home
          </Button>
          <Button
            href={`tel:${BRAND.phoneTel}`}
            variant="outline"
            size="lg"
            external
            ariaLabel={`Call ${BRAND.name} at ${BRAND.phoneDisplay}`}
          >
            <Phone className="h-4 w-4" />
            {BRAND.phoneDisplay}
          </Button>
        </div>
      </section>
    </main>
  );
}
