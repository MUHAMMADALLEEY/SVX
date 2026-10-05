'use client';

import {useCallback, useEffect, useRef, useState} from 'react';
import DisplayHeading from '@/components/DisplayHeading';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlayButton, setShowPlayButton] = useState(false);

  const startPlayback = useCallback(async () => {
    const video = videoRef.current;

    if (!video) return;

    // Set both properties before play() for reliable muted autoplay in Safari.
    video.defaultMuted = true;
    video.muted = true;

    try {
      await video.play();
      setShowPlayButton(false);
    } catch {
      // iOS can still block autoplay in Low Power Mode or by user preference.
      setShowPlayButton(true);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!video) return;

    const updatePlayback = () => {
      if (reducedMotion.matches) {
        video.pause();
        video.currentTime = 0;
        setShowPlayButton(true);
      } else {
        void startPlayback();
      }
    };

    const handlePlaying = () => setShowPlayButton(false);
    const handleError = () => setShowPlayButton(true);

    updatePlayback();
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('error', handleError);
    reducedMotion.addEventListener('change', updatePlayback);

    return () => {
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('error', handleError);
      reducedMotion.removeEventListener('change', updatePlayback);
    };
  }, [startPlayback]);

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
            media="(max-width: 620px)"
          />
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        {showPlayButton && (
          <button
            className="hero-video-play"
            type="button"
            onClick={() => void startPlayback()}
            aria-label="Play background video"
          >
            <span aria-hidden="true">&#9654;</span>
            Play video
          </button>
        )}
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
