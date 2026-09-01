"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";

const heroBackgrounds = [
  {
    image: "/headerimages/hero-footballs-v2.webp",
    position: "center 58%",
    mobilePosition: "55% center",
  },
  {
    image: "/headerimages/hero-socks-v2.webp",
    position: "center 64%",
    mobilePosition: "58% center",
  },
  {
    image: "/headerimages/hero-bags-v2.webp",
    position: "center 52%",
    mobilePosition: "68% center",
  },
  {
    image: "/headerimages/hero-tshirts-v2.webp",
    position: "center 54%",
    mobilePosition: "63% center",
  },
];

export function HeroSection() {
  const [activeBackground, setActiveBackground] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActiveBackground((currentBackground) => (currentBackground + 1) % heroBackgrounds.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="top" className="hero-section hero-brand-home">
      <div className="hero-backgrounds" aria-hidden="true">
        {heroBackgrounds.map((background, index) => (
          <div
            key={background.image}
            className={`hero-background ${index % 2 === 0 ? "drift-right" : "drift-left"} ${index === activeBackground ? "is-active" : ""}`}
            style={{
              "--hero-image": `url("${background.image}")`,
              "--hero-position": background.position,
              "--hero-mobile-position": background.mobilePosition,
            } as CSSProperties}
          />
        ))}
      </div>
      <div className="hero-background-overlay" aria-hidden="true" />
      <div className="section-shell hero-brand-layout">
        <div className="hero-brand-copy">
          <h1>
            <span>Built for the game.</span>
            <span>Made for your brand.</span>
          </h1>
          <p className="hero-brand-description hero-text-in">
            Custom footballs, performance socks, bags, and T-shirts made with the product thinking your brand deserves.
          </p>
          <div className="hero-brand-actions hero-actions-in" aria-label="Primary actions">
            <ButtonLink href="#contact">Get in touch</ButtonLink>
            <a href="#catalogue">Explore what we make <span aria-hidden="true">↘</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
