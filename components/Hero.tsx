'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const slides = [
  {
    src: '/assets/hero-socks-v2.png',
    alt: 'SVX Performance Socks',
    label: 'Show socks',
    className: '',
  },
  {
    src: '/assets/hero-bag-v2.png',
    alt: 'SVX Performance Backpack',
    label: 'Show bags',
    className: '',
  },
  {
    src: '/assets/hero-football-v2.png',
    alt: 'SVX Match Football',
    label: 'Show footballs',
    className: '',
  },
  {
    src: '/assets/hero-tshirt-v2.png',
    alt: 'SVX performance apparel',
    label: 'Show apparel',
    className: 'garment-slide',
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const setSlide = (index: number) => {
    setActiveSlide(index);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (
      typeof window !== 'undefined' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      timerRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
  };

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      timerRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-slides" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`hero-bg ${index === activeSlide ? 'active' : ''} ${
              slide.className
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover ${
                index === 3 ? 'object-[100%_center]' : 'object-center'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
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

      <div className="slide-dots" aria-label="Featured product categories">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            className={index === activeSlide ? 'active' : ''}
            data-slide={index}
            aria-label={slide.label}
            onClick={() => setSlide(index)}
          />
        ))}
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
