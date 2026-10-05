'use client';

import {useEffect, useRef} from 'react';
import DisplayHeading from '@/components/DisplayHeading';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Mobile browsers require muted and defaultMuted on the DOM element for autoplay
    video.defaultMuted = true;
    video.muted = true;

    const attemptPlay = () => {
      if (video.paused) {
        video.play().catch(() => {
          // Autoplay was restricted by browser policy; user interaction listeners below will resume it
        });
      }
    };

    attemptPlay();

    // In case the mobile browser defers autoplay until user interaction
    const handleFirstInteraction = () => {
      attemptPlay();
    };

    window.addEventListener('touchstart', handleFirstInteraction, {once: true, passive: true});
    window.addEventListener('scroll', handleFirstInteraction, {once: true, passive: true});
    window.addEventListener('click', handleFirstInteraction, {once: true, passive: true});

    return () => {
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-media">
        <video
          ref={videoRef}
          className="hero-video"
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-background-poster.jpg"
        >
          <source
            src="/hero-background-mobile.mp4"
            type="video/mp4"
            media="(max-width: 768px)"
          />
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-shade" />

      <div className="hero-copy">
        <p className="eyebrow">MANUFACTURING · SOURCING · PRODUCT DEVELOPMENT</p>
        <DisplayHeading as="h1" variant="hero" className="digital-headline">
          WHERE SPORTS
          <br />
          MEETS THE
          <br />
          <i>
            DIGITAL
            <br />
            SUPPLY CHAIN
          </i>
        </DisplayHeading>
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
