import { SectionIntro } from "@/components/ui/SectionIntro";
import { processSteps } from "@/data/site-content";

export function ProcessSection() {
  return (
    <section id="process" className="section-shell content-section">
      <SectionIntro
        eyebrow="Process"
        title="From your first idea to the finished product."
        description="A clear process for taking a good idea from first brief to ready-to-ship product."
      />

      <div className="process-grid">
        {processSteps.map((step, index) => (
          <article key={step.title} className="process-step reveal" style={{ transitionDelay: `${index * 80}ms` }}>
            <span className="svx-step-number" aria-hidden="true">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
