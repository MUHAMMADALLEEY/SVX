import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SportsVentureX collects, uses, and protects information submitted through this website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="legal-page section-shell">
      <header className="legal-page-header">
        <p className="eyebrow">Legal</p>
        <h1>Privacy policy</h1>
        <p>Effective 29 August 2026</p>
      </header>

      <div className="legal-page-content">
        <section>
          <h2>Information we collect</h2>
          <p>
            When you submit a project enquiry, we collect the details you provide, such as your name,
            email address, company, product interest, and message. Our hosting and security providers may
            also process limited technical information, including IP address, browser type, and request logs.
          </p>
        </section>
        <section>
          <h2>How we use information</h2>
          <p>
            We use enquiry information to respond to you, assess a potential project, prevent abuse, maintain
            site security, and improve our services. We do not sell personal information.
          </p>
        </section>
        <section>
          <h2>Analytics and consent</h2>
          <p>
            Optional analytics load only after you select “Accept analytics” in the consent notice. Your choice
            is stored in your browser so the site can remember it. You can reopen Cookie settings from the footer
            at any time and change your choice.
          </p>
        </section>
        <section>
          <h2>Service providers and retention</h2>
          <p>
            We use service providers for website hosting, analytics, and enquiry email delivery. They process
            information only to provide those services. We retain enquiry records only as long as reasonably
            necessary for business communication, legal obligations, security, and dispute resolution.
          </p>
        </section>
        <section>
          <h2>Your choices</h2>
          <p>
            You may ask to access, correct, or delete personal information associated with an enquiry, subject
            to applicable legal requirements. Use the project enquiry form and clearly identify your privacy
            request so we can respond.
          </p>
        </section>
        <section>
          <h2>Updates</h2>
          <p>
            We may update this policy when our website or practices change. The effective date above identifies
            the current version.
          </p>
        </section>
      </div>
    </article>
  );
}
