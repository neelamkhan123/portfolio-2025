"use client";

import { ArrowUp } from "lucide-react";

/**
 * Visibility is driven by the shared scroll pass in ScrollEffects, which
 * toggles `data-visible` and `inert` — this only owns the click.
 */
export default function ScrollToTop() {
  return (
    <button
      type="button"
      data-scrolltop
      inert
      aria-label="Back to top"
      onClick={() => {
        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
      }}
      className="to-top fixed right-6 bottom-6 z-50 flex h-11 w-11 items-center justify-center rounded-full max-sm:right-4 max-sm:bottom-4"
    >
      <ArrowUp aria-hidden size={18} />
    </button>
  );
}
