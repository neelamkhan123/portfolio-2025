"use client";

import { useEffect } from "react";

const NAV_SECTIONS = ["work", "stack", "experience", "about", "contact"];

/**
 * Port of the design's scroll behaviour: reveal-on-enter, a top progress bar,
 * nav active state, hero drift and a slight scale on the project figures —
 * all driven off one rAF-throttled scroll pass, as in the original.
 */
export default function ScrollEffects() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const motion = !reduced;

    if (motion) document.body.classList.add("motion-on");

    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    items.forEach((el) => {
      el.style.transitionDelay = `${el.dataset.delay ?? 0}ms`;
    });

    let observer: IntersectionObserver | undefined;
    let failsafe: ReturnType<typeof setTimeout> | undefined;

    if (motion) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-revealed");
            observer?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
      );
      items.forEach((el) => observer?.observe(el));
      // Never leave content invisible if the observer misses.
      failsafe = setTimeout(
        () => items.forEach((el) => el.classList.add("is-revealed")),
        3000,
      );
    }

    const bar = document.querySelector<HTMLElement>("[data-progress]");
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    const links = NAV_SECTIONS.map((id) =>
      document.querySelector<HTMLElement>(`[data-navlink="${id}"]`),
    );
    const sections = NAV_SECTIONS.map((id) => document.getElementById(id));
    let ticking = false;

    const pass = () => {
      ticking = false;
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;

      if (bar) bar.style.width = `${h > 0 ? Math.min(100, (y / h) * 100) : 0}%`;

      if (hero && motion) {
        const t = Math.min(1, y / (window.innerHeight * 0.9));
        hero.style.transform = `translateY(${t * -70}px)`;
        hero.style.opacity = String(1 - t * 0.85);
      }

      let active = -1;
      sections.forEach((section, i) => {
        if (
          section &&
          section.getBoundingClientRect().top <= window.innerHeight * 0.4
        ) {
          active = i;
        }
      });
      links.forEach((link, i) => {
        if (!link) return;
        link.dataset.active = String(i === active);
      });

      if (motion) {
        document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
          const r = el.getBoundingClientRect();
          const c =
            (r.top + r.height / 2 - window.innerHeight / 2) /
            window.innerHeight;
          el.style.transform = `scale(${1 - Math.min(0.035, Math.abs(c) * 0.06)})`;
        });
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(pass);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    pass();

    return () => {
      observer?.disconnect();
      if (failsafe) clearTimeout(failsafe);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.body.classList.remove("motion-on");
    };
  }, []);

  return null;
}
