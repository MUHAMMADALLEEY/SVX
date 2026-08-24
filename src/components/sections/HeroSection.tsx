import { ButtonLink } from "@/components/ui/ButtonLink";

export function HeroSection() {
  return (
    <section id="top" className="hero-section hero-brand-home">
      <div className="section-shell hero-brand-layout">
        <div className="hero-brand-copy">
          <h1>
            <span>Built for the game.</span>
            <span>Made for your brand.</span>
          </h1>
          <p className="hero-brand-description hero-text-in">
            Custom footballs, performance socks, and bags made with the product thinking your brand deserves.
          </p>
          <div className="hero-brand-actions hero-actions-in" aria-label="Primary actions">
            <ButtonLink href="#contact">Get in touch</ButtonLink>
            <a href="#products">Explore what we make <span aria-hidden="true">↘</span></a>
          </div>
        </div>

      </div>
    </section>
  );
}
