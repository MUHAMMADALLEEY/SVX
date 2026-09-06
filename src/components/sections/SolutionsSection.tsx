import { services } from "@/data/site-content";

export function SolutionsSection() {
  return (
    <section id="solutions" className="content-section muted-section">
      <div className="section-shell">
        <div className="split-heading reveal">
          <div>
            <p className="eyebrow">Our capabilities</p>
            <h2>Sports product development.<br />Every detail connected.</h2>
          </div>
          <p>
            We pair sharp product thinking with hands-on production support, so the work stays moving and the brand stays visible.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article key={service.title} className="service-card reveal" style={{ transitionDelay: `${index * 75}ms` }}>
              <span className="svx-service-number" aria-hidden="true">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
