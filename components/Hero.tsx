'use client';

import {useEffect, useRef} from 'react';
import DisplayHeading from '@/components/DisplayHeading';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const enforceInlineMuted = () => {
      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      video.loop = true;
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', 'true');
      video.setAttribute('autoplay', '');
    };

    enforceInlineMuted();

    const interactionEvents = [
      'touchstart',
      'touchend',
      'pointerdown',
      'pointerup',
      'mousedown',
      'click',
      'scroll',
      'keydown',
    ] as const;

    const removeInteractionListeners = () => {
      for (const event of interactionEvents) {
        window.removeEventListener(event, handleInteraction);
      }
    };

    const attemptPlay = () => {
      enforceInlineMuted();
      if (!video.paused && !video.ended) {
        removeInteractionListeners();
        return;
      }

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            removeInteractionListeners();
          })
          .catch(() => {
            // Keep listeners active until playback succeeds
          });
      }
    };

    function handleInteraction() {
      attemptPlay();
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        attemptPlay();
      }
    };

    const handlePause = () => {
      if (document.visibilityState === 'visible' && !video.ended) {
        attemptPlay();
      }
    };

    // 1. Attempt immediately and whenever media buffers enough frames
    attemptPlay();
    video.addEventListener('loadedmetadata', attemptPlay);
    video.addEventListener('loadeddata', attemptPlay);
    video.addEventListener('canplay', attemptPlay);
    video.addEventListener('canplaythrough', attemptPlay);
    video.addEventListener('pause', handlePause);

    // 2. Resume when returning to tab or unlocking phone
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pageshow', attemptPlay);
    window.addEventListener('focus', attemptPlay);

    // 3. Keep gesture listeners active (do not remove until play() actually succeeds)
    for (const event of interactionEvents) {
      window.addEventListener(event, handleInteraction, {passive: true});
    }

    return () => {
      video.removeEventListener('loadedmetadata', attemptPlay);
      video.removeEventListener('loadeddata', attemptPlay);
      video.removeEventListener('canplay', attemptPlay);
      video.removeEventListener('canplaythrough', attemptPlay);
      video.removeEventListener('pause', handlePause);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pageshow', attemptPlay);
      window.removeEventListener('focus', attemptPlay);
      removeInteractionListeners();
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
          disablePictureInPicture
          disableRemotePlayback
          preload="metadata"
          poster="/hero-background-poster.jpg"
        >
          {/* 1. Mobile: Try high-efficiency WebM first */}
          <source
            src="/main.webm"
            type="video/webm"
            media="(max-width: 768px)"
          />
          {/* 2. Mobile: Fallback to lightweight MP4 */}
          <source
            src="/hero-background-mobile.mp4"
            type="video/mp4"
            media="(max-width: 768px)"
          />

          {/* 3. Desktop: Primary high-efficiency WebM */}
          <source src="/main.webm" type="video/webm" />

          {/* 4. Desktop: Fallback to desktop MP4 */}
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
