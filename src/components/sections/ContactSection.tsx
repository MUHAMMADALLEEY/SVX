import { ArrowUpRight, Mail } from "lucide-react";
import { faqs } from "@/data/site-content";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  const contactMailTo = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("SportsVentureX project enquiry")}`;
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
        <h2>Bring us the next big idea.</h2>
        <p className="pt-6">
          Tell us about your product, your brand, and where you want to take it. We will make the next step simple.
        </p>

        <div className="contact-method-list" aria-label="Direct contact options">
          <a className="contact-method" href={contactMailTo}>
            <span className="contact-method-icon" aria-hidden="true">
              <Mail size={19} strokeWidth={1.9} />
            </span>
            <span className="contact-method-copy">
              <span>Email sales</span>
              <strong>{siteConfig.contactEmail}</strong>
            </span>
            <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>

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
