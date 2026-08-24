import { SectionIntro } from "@/components/ui/SectionIntro";
import { reasons } from "@/data/site-content";

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="why-section content-section">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Why SportsVentureX"
          title="A stronger product starts with a closer partner."
          description="We keep the product, the brand, and the production process connected from the first conversation onward."
        />
        <div className="reason-grid">
          {reasons.map((reason, index) => (
            <article key={reason.title} className="reason-item reveal" style={{ transitionDelay: `${index * 80}ms` }}>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
