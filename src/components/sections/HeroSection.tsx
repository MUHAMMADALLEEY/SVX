"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="top" className="svx-hero">
      <div className="section-shell svx-hero-grid">
        <div className="svx-hero-copy">
          <p className="eyebrow">SportsVentureX / Custom sports goods</p>
          <h1>Custom sports goods.<br /><span>Your brand.</span><br /><em>In play.</em></h1>
          <p className="svx-lead">Footballs, performance socks, bags and T-shirts. Developed around your product, your people and the way they play.</p>
          <div className="svx-actions">
            <motion.a className="svx-button" href="/contact" whileHover={reduceMotion ? undefined : { y: -3 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>Start your project <ArrowUpRight size={19} aria-hidden="true" /></motion.a>
            <a className="svx-text-link" href="#catalogue">Explore the range <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
          <div className="svx-hero-note"><span>01 / CONCEPT</span><span>02 / SAMPLE</span><span>03 / PRODUCTION</span></div>
        </div>
        <div className="svx-hero-visual">
          <Image src="/headerimages/hero-footballs-v2.webp" alt="Custom footballs with contrasting panel designs" fill sizes="(max-width: 800px) 100vw, 50vw" priority className="svx-hero-image" />
          <div className="svx-visual-label"><span>BUILT FOR THE GAME.</span><span>MADE FOR YOUR BRAND.</span></div>
          <a className="svx-feature-label" href="/custom-footballs"><span>Explore custom footballs<br /><strong>From first touch to final detail.</strong></span><ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
      <div className="svx-discipline-bar"><div className="section-shell"><span>PRODUCT DEVELOPMENT</span><span>CUSTOM BRANDING</span><span>SAMPLING & PRODUCTION</span><span>QUALITY ASSURANCE</span></div></div>
    </section>
  );
}
