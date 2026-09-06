import { faqs } from "@/data/site-content";
import { ContactForm } from "@/components/sections/ContactForm";

export function ContactSection({ initialMessage }: { initialMessage?: string } = {}) {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section id="contact" className="section-shell content-section contact-section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <div className="contact-copy reveal">
        <p className="eyebrow">Get in touch</p>
        <h2>Let’s talk about your product.</h2>
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

      <ContactForm initialMessage={initialMessage} />
    </section>
  );
}
