import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OrbitSection from '@/components/OrbitSection';
import ScrollReveal from '@/components/ScrollReveal';
import Footer from '@/components/Footer';
import { ContactBriefButton } from '@/components/ContactBriefModal';
import DisplayHeading from '@/components/DisplayHeading';
import ProductCardVisual from '@/components/ProductCardVisual';
import { PRODUCT_CATEGORIES } from '@/data/product-categories';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'SVX | Custom Sports Goods, Socks, Footballs & Bags Manufacturing',
  description:
    'Buyer-focused OEM/ODM sports goods manufacturing and global sourcing partner across custom socks, match footballs, technical sports bags, and team apparel.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SVX | Custom Sports Goods, Socks, Footballs & Bags Manufacturing',
    description:
      'Buyer-focused OEM/ODM sports goods manufacturing and global sourcing partner across custom socks, footballs, and sports bags.',
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: '/assets/product-world.png',
        width: 1200,
        height: 630,
        alt: 'SportsVentureX Product Programme & Sourcing Laboratory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SVX | Custom Sports Goods, Socks, Footballs & Bags Manufacturing',
    description:
      'Buyer-focused OEM/ODM sports goods manufacturing and global sourcing partner across custom socks, footballs, and sports bags.',
    images: ['/assets/product-world.png'],
  },
};

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        <Hero />

        <section className="intro">
          <div className="intro-heading">
            <p className="eyebrow">BUILT FOR BUYERS</p>
            <DisplayHeading>
              ECO-FRIENDLY YARNS
              <br />
              RECYCLED MATERIALS
              <br />
              RESPONSIBLE SUPPLY
            </DisplayHeading>
          </div>
          <div className="intro-aside">
          

            <div className="sustainability-visuals" aria-label="Sustainability programme focus areas">
              <Image
                src="/assets/recycle-symbol.webp"
                alt="Recycle symbol for eco-friendly yarns and recycled materials"
                width={1200}
                height={1200}
                sizes="(max-width: 620px) 82vw, (max-width: 1000px) 460px, 34vw"
                className="sustainability-image"
              />
            </div>
          </div>
        </section>

        <OrbitSection />

        <section className="products" id="products">
          <div className="section-head">
            <p className="eyebrow">PRODUCT CATEGORIES</p>
            <DisplayHeading>
              FROM SPECIALIST
              <br />
              TO STORE-READY.
            </DisplayHeading>
            <p>
              Own-label, private-label, promotional and licensed-style
              programmes developed around the buyer’s standard not a fixed
              catalogue.
            </p>
          </div>

          <div className="product-visual">
            <Image
              src="/assets/product-world.png"
              alt="SportsVentureX custom sports goods, technical socks, match footballs, and bags manufacturing lab"
              width={1600}
              height={900}
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 92vw, 1480px"
              className="w-full h-auto aspect-video object-cover"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="image-tag">SVX PRODUCT LAB / 2026</div>
          </div>

          <div className="category-grid">
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="category-card group"
                data-category={cat.slug}
              >
                <ProductCardVisual
                  image={cat.coverImage}
                  alt={`${cat.title} product manufacturing programme`}
                  kicker="SVX PRODUCT PROGRAMME"
                  title={cat.title}
                  actionLabel="EXPLORE COLLECTION"
                  sizes="(max-width: 620px) calc(100vw - 40px), (max-width: 1179px) 50vw, 33vw"
                />
              </Link>
            ))}
          </div>
        </section>


        <section className="process" id="process">
          <div className="section-head">
            <p className="eyebrow">A CLEAR ROUTE TO MARKET</p>
            <DisplayHeading>
              BRIEF TO
              <br />
              DELIVERY.
            </DisplayHeading>
          </div>

          <ol>
            <li>
              <b>01 / DEFINE</b>
              <span>
                Category, customer, target price, quantity, market and launch date.
              </span>
            </li>
            <li>
              <b>02 / DEVELOP</b>
              <span>
                Materials, design, construction, technical packs, sampling and cost
                options.
              </span>
            </li>
            <li>
              <b>03 / VALIDATE</b>
              <span>
                Fit, performance, testing, compliance, packaging and approval
                standards.
              </span>
            </li>
            <li>
              <b>04 / PRODUCE</b>
              <span>
                Factory placement, production tracking, inline checks and issue
                management.
              </span>
            </li>
            <li>
              <b>05 / DELIVER</b>
              <span>
                Final inspection, documentation, logistics coordination and
                repeat-order learning.
              </span>
            </li>
          </ol>
        </section>


        <section className="brand-wall" id="brands">
          <p className="eyebrow">BRAND &amp; RETAIL EXPERIENCE</p>
          <DisplayHeading variant="compact">25 LEADING NAMES</DisplayHeading>
          <p className="mt-2 text-sm text-[#8f99a8] max-w-xl">
            Commercial manufacturing and sourcing expertise delivering programmes for international sporting labels and retail distributors.
          </p>
          <div
            className="brand-logo-grid"
            aria-label="Brands and retailers supported by the team's experience"
          >
            <span>Reebok</span>
            <span>STANCE</span>
            <span>FILA</span>
            <span>Kappa</span>
            <span>UMBRO</span>
            <span>Ellesse</span>
            <span>EVERLAST</span>
            <span>KARRIMOR</span>
            <span>SONDICO</span>
            <span>NO FEAR</span>
            <span>DKNY</span>
            <span>REAL MADRID FC</span>
            <span>
              NATIONAL
              <br />
              GEOGRAPHIC
            </span>
            <span>RIP CURL</span>
            <span>Champion</span>
            <span>STARTER</span>
            <span>
              EMPORIO
              <br />
              ARMANI
            </span>
            <span>PRIMARK</span>
            <span>SPRINTER (JD)sp</span>
            <span>LPP</span>
            <span>K-Ways</span>
            <span>SPORTS DIRECT</span>
            <span>BARCELONA FC</span>
            <span>BENCH</span>
            <span>ROYAL PADEL</span>
          </div>
        </section>
      </main>

      <Footer />

      <ScrollReveal />
    </>
  );
}
