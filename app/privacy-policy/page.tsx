import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig, absoluteUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Privacy Policy | SportsVentureX',
  description:
    'SportsVentureX B2B Privacy Policy. Details how we collect, process, and safeguard commercial inquiry data and tech packs in compliance with UK GDPR.',
  alternates: {
    canonical: absoluteUrl('/privacy-policy'),
  },
  openGraph: {
    title: 'Privacy Policy | SportsVentureX',
    description:
      'SportsVentureX B2B Privacy Policy. Clear, practical data governance for our global contract manufacturing partners and clients.',
    url: absoluteUrl('/privacy-policy'),
    siteName: siteConfig.name,
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Privacy Policy',
        item: absoluteUrl('/privacy-policy'),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Header />
      <main className="min-h-screen bg-[#070a10] text-[#f5f7fa] overflow-x-clip">
        {/* Hero Section matching Product & Catalogue layout */}
        <section className="relative overflow-hidden pt-36 md:pt-44 pb-14 md:pb-20 border-b border-[#202a3a] bg-[radial-gradient(circle_at_92%_8%,rgba(8,109,255,0.22),transparent_35%),linear-gradient(115deg,#0b101b_0%,#0b1425_58%,#102c5d_100%)]">
          <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto min-w-0">
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#98a8be] hover:text-white transition-colors mb-8 md:mb-12"
            >
              <span aria-hidden="true">←</span> Back to SVX Home
            </Link>

            {/* Eyebrow */}
            <p className="text-[10px] md:text-xs font-black tracking-[0.18em] text-[#086dff] uppercase mb-3">
              Legal &amp; Compliance · UK &amp; Global Operations
            </p>

            {/* Main Headline */}
            <h1 className="font-['Barlow_Condensed',sans-serif] font-black uppercase text-white tracking-tight text-5xl sm:text-7xl md:text-8xl leading-[0.85] mb-4">
              PRIVACY <span className="text-[#086dff]">POLICY</span>
            </h1>

            {/* Subtitle / Effective Date */}
            <p className="text-sm md:text-base text-[#c0c9d7] max-w-2xl leading-relaxed">
            SportsVentureX B2B Commercial Operations &amp; UK GDPR Compliance.
            </p>
          </div>
        </section>

        {/* Policy Body Grid matching site container */}
        <section className="py-14 md:py-20 bg-[#070a10]">
          <div className="w-[calc(100%-48px)] max-w-[1240px] mx-auto min-w-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Card 1 */}
              <article className="rounded-xl border border-white/10 bg-[#0d121b] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-colors">
                <div>
                  <h2 className="font-['Barlow_Condensed',sans-serif] font-black uppercase text-xl sm:text-2xl text-white tracking-wide mb-3">
                    1. Overview &amp; Data Controller
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-[#c1c8d2] mb-3">
                    SportsVentureX (&quot;SVX&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a business-to-business (B2B)
                    contract manufacturing and sourcing partner specializing in custom technical socks, match and training footballs,
                    and technical sports bags.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-[#c1c8d2]">
                    Our commercial inquiries, account coordination, and technical evaluation teams operate from our London (UK)
                    commercial office, working directly with vetted international contract production facilities.
                  </p>
                </div>
              </article>

              {/* Card 2 */}
              <article className="rounded-xl border border-white/10 bg-[#0d121b] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-colors">
                <div>
                  <h2 className="font-['Barlow_Condensed',sans-serif] font-black uppercase text-xl sm:text-2xl text-white tracking-wide mb-3">
                    2. Information We Collect
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-[#c1c8d2] mb-3">
                    Because we operate strictly in a B2B manufacturing capacity, we collect information necessary to evaluate commercial
                    feasibility, prepare quotations, manufacture samples, and deliver production orders:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base leading-relaxed text-[#c1c8d2]">
                    <li>
                      <strong className="text-white">Commercial Contact Data:</strong> Your name, corporate email address,
                      direct phone number, and company/brand name submitted via our inquiry briefs.
                    </li>
                    <li>
                      <strong className="text-white">Product &amp; Technical Specifications:</strong> Tech packs, design files,
                      target quantities, and delivery milestones.
                    </li>
                  </ul>
                </div>
              </article>

              {/* Card 3 */}
              <article className="rounded-xl border border-white/10 bg-[#0d121b] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-colors">
                <div>
                  <h2 className="font-['Barlow_Condensed',sans-serif] font-black uppercase text-xl sm:text-2xl text-white tracking-wide mb-3">
                    3. Data Sharing &amp; Third Parties
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-[#c1c8d2] mb-3">
                    <strong className="text-white">We never sell, rent, or trade your personal or corporate data to third parties or marketing lists.</strong>
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-[#c1c8d2] mb-3">
                    Information is disclosed solely to authorized service providers and vetted contract facilities strictly as required to fulfill commercial commitments:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base leading-relaxed text-[#c1c8d2]">
                    <li>
                      <strong className="text-white">Production Facilities:</strong> Technical drawings and tech packs are
                      transferred directly to our partner factories solely for tooling and sample programming.
                    </li>
                    <li>
                      <strong className="text-white">Freight &amp; Logistics:</strong> Consignment addresses and commercial invoices for customs clearance.
                    </li>
                  </ul>
                </div>
              </article>

              {/* Card 4 */}
              <article className="rounded-xl border border-white/10 bg-[#0d121b] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-colors">
                <div>
                  <h2 className="font-['Barlow_Condensed',sans-serif] font-black uppercase text-xl sm:text-2xl text-white tracking-wide mb-3">
                    4. Contact Information
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-[#c1c8d2] mb-4">
                    If you have questions about this Privacy Policy or wish to exercise your data rights, please contact our London commercial team:
                  </p>
                  <div className="p-4 rounded-lg bg-black/40 border border-white/5 space-y-1.5 text-sm">
                    <p className="font-semibold text-white">SportsVentureX Commercial Operations</p>
                    <p className="text-[#98a8be]">Commercial Office: London, United Kingdom</p>
                    <p className="text-[#98a8be]">
                      Direct Email:{' '}
                      <a
                        href={`mailto:${siteConfig.contactEmail}`}
                        className="text-[#4e9dff] hover:underline font-medium"
                      >
                        {siteConfig.contactEmail}
                      </a>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
