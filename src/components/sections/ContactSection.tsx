import { faqs } from "@/data/site-content";
import { ContactForm } from "@/components/sections/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell content-section contact-section">
      <div className="contact-copy reveal">
        <p className="eyebrow">Get in touch</p>
        <h2>Bring us the next big idea.</h2>
        <p>
          Tell us about your product, your brand, and where you want to take it. We will make the next step simple.
        </p>

        <div className="faq-list" aria-label="Frequently asked questions">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <ContactForm />
    </section>
  );
}
