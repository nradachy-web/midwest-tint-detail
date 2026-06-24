"use client";

import { useEffect, useRef, useState } from "react";

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
 * Styling for the injected content lives in globals.css (.soro-surface +
 * #soro-blog rules); those are no-ops if Soro renders inside its own iframe.
 */
const SORO_EMBED_SRC =
  "https://app.trysoro.com/api/embed/2eb50e66-8520-4693-b2a7-ced5a04269f2";

export default function SoroBlog() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Hide the loading state the moment Soro injects anything into the node.
    const observer = new MutationObserver(() => {
      if (mount.childNodes.length > 0) setLoaded(true);
    });
    observer.observe(mount, { childList: true, subtree: true });

    const script = document.createElement("script");
    script.src = SORO_EMBED_SRC;
    script.defer = true;
    script.dataset.soroEmbed = "true";
    document.body.appendChild(script);

    return () => {
      observer.disconnect();
      script.remove();
      mount.innerHTML = ""; // clear Soro's content so a remount starts clean
    };
  }, []);

  return (
    <div className="relative">
      {!loaded && (
        <div className="soro-loading" role="status">
          <span className="soro-spinner" aria-hidden="true" />
          Loading the latest from the shop&hellip;
        </div>
      )}
      <div id="soro-blog" ref={mountRef} />
      <noscript>
        <p style={{ color: "#2a343b", textAlign: "center" }}>
          Our latest articles need JavaScript to load. Call (313) 729-0005 and
          we&apos;ll answer any tint or detailing question directly.
        </p>
      </noscript>
    </div>
  );
}
