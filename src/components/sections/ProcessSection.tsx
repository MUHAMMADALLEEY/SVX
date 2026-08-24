import { SectionIntro } from "@/components/ui/SectionIntro";
import { processSteps } from "@/data/site-content";

export function ProcessSection() {
  return (
    <section id="process" className="section-shell content-section">
      <SectionIntro
        eyebrow="Process"
        title="An easier way to get it made."
        description="A clear process for taking a good idea from first brief to ready-to-ship product."
      />

      <div className="process-grid">
        {processSteps.map((step, index) => (
          <article key={step.title} className="process-step reveal" style={{ transitionDelay: `${index * 80}ms` }}>
            <span className="process-mark" aria-hidden="true" />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
