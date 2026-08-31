import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the SportsVentureX website and catalogue content.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <article className="legal-page section-shell">
      <header className="legal-page-header">
        <p className="eyebrow">Legal</p>
        <h1>Terms of use</h1>
        <p>Effective 29 August 2026</p>
      </header>

      <div className="legal-page-content">
        <section>
          <h2>Website purpose</h2>
          <p>
            This website presents SportsVentureX capabilities and product-development references. Catalogue
            images and descriptions are informational and do not constitute a binding quote, warranty, or offer.
          </p>
        </section>
        <section>
          <h2>Project enquiries</h2>
          <p>
            Submitting an enquiry does not create a customer, supplier, partnership, or agency relationship.
            Product specifications, pricing, quantities, lead times, testing, intellectual-property permissions,
            and delivery terms must be confirmed in a separate written agreement.
          </p>
        </section>
        <section>
          <h2>Acceptable use</h2>
          <p>
            You may not misuse the site, attempt unauthorized access, interfere with its operation, submit
            unlawful material, or use automated systems in a way that places an unreasonable load on the service.
          </p>
        </section>
        <section>
          <h2>Intellectual property</h2>
          <p>
            The site design, copy, and SportsVentureX branding are protected by applicable intellectual-property
            laws. Product references may include marks owned by their respective owners and are shown only to
            communicate development or manufacturing capabilities. No trademark licence is granted by this site.
          </p>
        </section>
        <section>
          <h2>Availability and liability</h2>
          <p>
            We work to keep the site accurate and available, but it may occasionally contain errors or be
            interrupted. To the extent permitted by law, the site is provided without implied warranties and we
            are not liable for indirect or consequential loss arising solely from use of the site.
          </p>
        </section>
        <section>
          <h2>Changes</h2>
          <p>
            We may update these terms as the website or our services change. Continued use after an update means
            the revised terms apply from the effective date shown above.
          </p>
        </section>
      </div>
    </article>
  );
}
