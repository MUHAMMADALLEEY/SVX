import { faqs } from "@/data/site-content";

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

      <form className="contact-form reveal" aria-label="Visual enquiry form">
        <p className="form-overline">Project enquiry</p>
        <label>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your name" disabled />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" placeholder="you@company.com" disabled />
        </label>
        <label>
          <span>Company</span>
          <input type="text" name="company" placeholder="Company name" disabled />
        </label>
        <label>
          <span>Product interest</span>
          <select name="interest" disabled defaultValue="">
            <option value="" disabled>
              Select product
            </option>
            <option>Footballs</option>
            <option>Socks</option>
            <option>Bags</option>
            <option>Multiple products</option>
          </select>
        </label>
        <label>
          <span>Message</span>
          <textarea name="message" placeholder="Tell us what you want to build" rows={4} disabled />
        </label>
        <button type="button" disabled>
          Enquiries opening soon
        </button>
      </form>
    </section>
  );
}
