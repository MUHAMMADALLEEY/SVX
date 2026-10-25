import { siteConfig } from '@/lib/site-config';

export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/logo-clean-white.png`,
    image: `${siteConfig.url}/assets/product-world.png`,
    description:
      'Buyer-focused B2B OEM/ODM contract manufacturing and global sourcing partner specializing in custom technical socks, match and training footballs, and technical sports bags.',
    email: siteConfig.contactEmail,
    sameAs: [siteConfig.linkedinUrl],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.contactEmail,
      contactType: 'sales',
      availableLanguage: ['English'],
    },
    areaServed: ['GB', 'US', 'EU', 'Global'],
    award: [
      'BSCI & Sedex SMETA Audited Global Facilities',
      'OEKO-TEX Standard',
      'FIFA Quality & FIFA Basic Performance Standards',
    ],
    knowsAbout: [
      'Custom Sock Manufacturing',
      'Technical Knitwear & Graduated Compression Socks',
      'Grip Socks OEM/ODM Production',
      'FIFA-Standard Match Football Manufacturing',
      'Thermo-Bonded Seamless Match Footballs',
      'Hybrid & Hand-Stitched Training Footballs',
      'Technical Sports Bags & Equipment Packs',
      'Water-Resistant 600D and 1680D Ballistic Oxford Carry Gear',
      'B2B Private Label Product Development',
      'Global Supply Chain Management & Quality Assurance',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Sports Goods Contract Manufacturing & Sourcing Programmes',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Technical Socks OEM/ODM Manufacturing',
            url: `${siteConfig.url}/products/socks`,
            description:
              'Full-specification custom sock development across 22 categories: performance athletic, grip socks, medical/travel compression, organic cotton, and merino wool utilizing 96N-200N jacquard knitting with seamless hand-linked toes.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Match & Training Footballs OEM/ODM Manufacturing',
            url: `${siteConfig.url}/products/footballs`,
            description:
              'Engineering thermo-bonded seamless match balls, sealed hybrid balls, and traditional 32-panel hand-stitched footballs meeting FIFA Basic, Quality, and Quality Pro standards with textured PU/microfiber covers.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technical Sports Bags & Carry Equipment OEM/ODM Manufacturing',
            url: `${siteConfig.url}/products/bags`,
            description:
              'Bespoke development of club backpacks, wet/dry ventilated boot bags, technical kit duffles, and tournament luggage in water-resistant 600D, 900D, and 1680D ballistic Oxford polyester with waterproof zippers.',
          },
        },
      ],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
    inLanguage: 'en-US',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organizationSchema, websiteSchema]),
      }}
    />
  );
}
