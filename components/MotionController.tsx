"use client";

import { useEffect, useRef } from "react";

const REVEAL_SELECTOR = "[data-reveal], [data-stagger]";

export default function MotionController() {
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const precisePointer = window.matchMedia("(min-width: 901px) and (pointer: fine)");
    const header = document.querySelector<HTMLElement>(".site-header");
    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    const parallaxElements = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const visibleParallax = new Set<HTMLElement>();

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.08 },
    );

    if (!reducedMotion.matches) {
      revealElements.forEach((element) => {
        element.classList.add("motion-pending");
        revealObserver.observe(element);
      });
    } else {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    }

    const updateParallax = () => {
      frame.current = null;
      if (reducedMotion.matches || !precisePointer.matches) {
        parallaxElements.forEach((element) => element.style.removeProperty("--parallax-y"));
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      visibleParallax.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const progressFromCenter = (elementCenter - viewportCenter) / (window.innerHeight + rect.height);
        const offset = Math.max(-12, Math.min(12, progressFromCenter * -28));
        element.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });
    };

    const requestUpdate = () => {
      if (frame.current === null) frame.current = window.requestAnimationFrame(updateParallax);
    };

    const parallaxObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        if (entry.isIntersecting) visibleParallax.add(element);
        else visibleParallax.delete(element);
      });
      requestUpdate();
    });

    parallaxElements.forEach((element) => parallaxObserver.observe(element));

    const updatePageChrome = () => {
      const scrollTop = window.scrollY;
      const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
      header?.classList.toggle("site-header--scrolled", scrollTop > 24);
      progress?.style.setProperty("--scroll-progress", `${scrollRange > 0 ? scrollTop / scrollRange : 0}`);
      requestUpdate();
    };

    window.addEventListener("scroll", updatePageChrome, { passive: true });
    window.addEventListener("resize", updatePageChrome, { passive: true });
    reducedMotion.addEventListener("change", updatePageChrome);
    precisePointer.addEventListener("change", updatePageChrome);
    updatePageChrome();

    return () => {
      revealObserver.disconnect();
      parallaxObserver.disconnect();
      window.removeEventListener("scroll", updatePageChrome);
      window.removeEventListener("resize", updatePageChrome);
      reducedMotion.removeEventListener("change", updatePageChrome);
      precisePointer.removeEventListener("change", updatePageChrome);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  return null;
}
