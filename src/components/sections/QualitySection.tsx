import { qualityFocus } from "@/data/site-content";

export function QualitySection() {
  return (
    <section id="quality" className="content-section quality-section">
      <div className="section-shell quality-panel reveal">
        <div>
          <p className="eyebrow">Quality focus</p>
          <h2>Good products are felt in the details.</h2>
        </div>
        <div className="quality-list" aria-label="Quality focus areas">
          {qualityFocus.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
