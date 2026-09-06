"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function MotionController() {
  const pathname = usePathname();
  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;
    async function enhance() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
          gsap.from(element, { y: 28, duration: 0.75, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 92%", once: true } });
        });
        if (document.querySelector(".svx-hero")) {
          gsap.from(".svx-hero-copy h1", { y: 30, duration: 0.85, ease: "power3.out" });
          gsap.to(".svx-hero-image", { yPercent: 5, ease: "none", scrollTrigger: { trigger: ".svx-hero", start: "top top", end: "bottom top", scrub: 1 } });
        }
      });
      cleanup = () => media.revert();
    }
    void enhance().catch(() => { /* Content remains readable if animation cannot load. */ });
    return () => { cancelled = true; cleanup?.(); };
  }, [pathname]);
  return null;
}
