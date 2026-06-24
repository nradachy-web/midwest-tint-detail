"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BRAND } from "@/lib/constants";

/**
 * Soro blog embed.
 *
 * Soro injects its post markup into the #soro-blog node once its embed script
 * runs. We load that script from an effect (instead of a static <script> tag)
 * for three reasons:
 *   1. The #soro-blog target is guaranteed to exist before the script runs.
 *   2. It re-injects on client-side navigation back to /blog, so the feed
 *      repopulates instead of showing an empty box.
 *   3. React never owns the nodes inside #soro-blog, so it won't fight Soro
 *      over that subtree.
 *
 * If Soro injects nothing within LOAD_TIMEOUT_MS (embed disabled in the Soro
 * dashboard, an empty project, or Soro unreachable), we drop the spinner and
 * show a graceful "coming soon" state instead of spinning forever. The
 * MutationObserver keeps watching, so late content still flips us to "ready".
 *
 * Styling for the injected content lives in globals.css (.soro-surface +
 * #soro-blog rules); those are no-ops if Soro renders inside its own iframe.
 */
const SORO_EMBED_SRC =
  "https://app.trysoro.com/api/embed/2eb50e66-8520-4693-b2a7-ced5a04269f2";

const LOAD_TIMEOUT_MS = 6000;

type Status = "loading" | "ready" | "empty";

export default function SoroBlog() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Flip to "ready" the moment Soro injects anything, even after the timeout.
    const observer = new MutationObserver(() => {
      if (mount.childNodes.length > 0) setStatus("ready");
    });
    observer.observe(mount, { childList: true, subtree: true });

    const timer = window.setTimeout(() => {
      setStatus((s) => (s === "loading" ? "empty" : s));
    }, LOAD_TIMEOUT_MS);

    const script = document.createElement("script");
    script.src = SORO_EMBED_SRC;
    script.defer = true;
    script.dataset.soroEmbed = "true";
    document.body.appendChild(script);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      script.remove();
      mount.innerHTML = ""; // clear Soro's content so a remount starts clean
    };
  }, []);

  return (
    <div className="soro-wrap">
      {status === "loading" && (
        <div className="soro-loading" role="status">
          <span className="soro-spinner" aria-hidden="true" />
          Loading the latest from the shop&hellip;
        </div>
      )}

      {status === "empty" && (
        <div className="soro-empty">
          <h2>Fresh articles are on the way</h2>
          <p>
            We&apos;re putting together straight-talk guides on ceramic tint,
            paint correction, coating, and detailing. In the meantime, we&apos;re
            glad to answer any question directly.
          </p>
          <div className="soro-empty-actions">
            <Link href="/contact" className="soro-empty-btn">
              Get My Free Quote
            </Link>
            <a href={`tel:${BRAND.phoneTel}`} className="soro-empty-link">
              Call {BRAND.phoneDisplay}
            </a>
          </div>
        </div>
      )}

      <div id="soro-blog" ref={mountRef} />

      <noscript>
        <p style={{ color: "#2a343b", textAlign: "center" }}>
          Our latest articles need JavaScript to load. Call {BRAND.phoneDisplay}{" "}
          and we&apos;ll answer any tint or detailing question directly.
        </p>
      </noscript>
    </div>
  );
}
