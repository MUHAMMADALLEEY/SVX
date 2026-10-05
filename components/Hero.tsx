'use client';

import {useEffect, useRef} from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!video) return;

    const updatePlayback = () => {
      if (reducedMotion.matches) {
        video.pause();
        video.currentTime = 0;
      } else {
        void video.play().catch(() => {
          // The poster remains visible if a browser blocks autoplay.
        });
      }
    };

    updatePlayback();
    reducedMotion.addEventListener('change', updatePlayback);

    return () => reducedMotion.removeEventListener('change', updatePlayback);
  }, []);

  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-background-poster.jpg"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-shade" />

      <div className="hero-copy">
        <p className="eyebrow">MANUFACTURING · SOURCING · PRODUCT DEVELOPMENT</p>
        <h1 className="digital-headline">
          WHERE SPORTS
          <br />
          MEETS THE
          <br />
          <i>DIGITAL SUPPLY CHAIN</i>
        </h1>
        <p>
          One commercial team connecting buyer ambition to capable factories,
          controlled production, digital visibility and retail-ready delivery.
        </p>
        <div className="hero-actions">
          <a className="cta" href="#brands">
            BRANDS
          </a>
          <a className="text-link" href="#network">
            <span>EXPLORE THE NETWORK</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="hero-proof">
        <article>
          <b>50+</b>
          <span>brand programmes handled</span>
        </article>
        <article>
          <b>20+</b>
          <span>factory environments</span>
        </article>
        <article>
          <b>30</b>
          <span>years of industry knowledge</span>
        </article>
        <article>
          <b>1</b>
          <span>accountable supply route</span>
        </article>
      </div>
    </section>
  );
}
