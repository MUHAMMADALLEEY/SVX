import {
  bagCatalogue,
  footballCatalogue,
  sockShowcaseImages,
  tshirtCatalogue,
} from '@/data/site-content';

export interface ProductCategoryItem {
  id: string;
  title: string;
  image: string;
  category?: string;
  specs?: string[];
  alt?: string;
}

export interface ProductCategory {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  stats: string[];
  items: ProductCategoryItem[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: 'socks',
    title: 'SOCKS',
    subtitle: 'Performance, dress, lifestyle, workwear, medical, football and complete team-sock programmes.',
    description:
      'From custom team and technical sports socks to multi-pack retail programs, our sock manufacturing covers specialized yarns, seamless toe linking, graduated compression, and precision jacquard branding.',
    coverImage: '/images/socks/S3.webp',
    stats: ['Technical & compression options', 'Custom knitted logos & patterns', 'Retail-ready multi-pack packaging'],
    items: [
      {
        id: 'socks-svx-primary',
        title: 'SVX Technical Performance Socks',
        image: '/products/socks/featured-01.webp',
        category: 'Performance',
        specs: ['Reinforced arch & heel', 'Breathable mesh zones', 'Cushioned sole'],
        alt: 'SVX Technical Performance Socks',
      },
      ...sockShowcaseImages.map((s) => ({
        id: s.id,
        title: s.title,
        image: s.image,
        category: s.category,
        alt: s.alt,
      })),
    ],
  },
  {
    slug: 'footballs',
    title: 'FOOTBALLS',
    subtitle: 'From World Cup-standard match balls to training footballs, with FIFA-approved manufacturing capability.',
    description:
      'We manufacture match, training, and promotional balls across soccer, basketball, American football, and volleyball formats, using hybrid, thermo-bonded, and hand-stitched constructions.',
    coverImage: '/images/footballs/f6.webp',
    stats: ['FIFA-standard test capability', 'Thermo-bonded & hand-stitched builds', 'High-air-retention bladders'],
    items: [
      {
        id: 'footballs-svx-primary',
        title: 'SVX Match & Training Football Trio',
        image: '/products/footballs/featured-01.webp',
        category: 'Match Balls',
        specs: ['FIFA-quality spec', 'Textured PU cover', 'Reinforced bladder'],
        alt: 'SVX Match & Training Football Trio',
      },
      ...footballCatalogue.map((f) => ({
        id: f.id,
        title: f.title,
        image: f.image,
        category: f.category,
        specs: f.specs,
        alt: f.alt,
      })),
    ],
  },
  {
    slug: 'bags',
    title: 'BAGS',
    subtitle: 'Backpacks, duffles, travel, team, school and technical carry solutions.',
    description:
      'Engineered backpacks, waist packs, and sports carry bags built from water-repellent PU-coated 600D polyester Oxford, featuring reinforced stress points, ergonomic padding, and custom hardware.',
    coverImage: '/images/bags/B2.webp',
    stats: ['600D water-repellent Oxford', 'Custom hardware & contrast zips', 'Full digital print & embroidery'],
    items: [
      {
        id: 'bag-svx-primary',
        title: 'SVX Performance Technical Backpack',
        image: '/products/bags/featured-01.webp',
        category: 'Backpacks',
        specs: ['Waterproof Oxford shell', 'Laptop compartment', 'Ergonomic airflow back'],
        alt: 'SVX Performance Technical Backpack',
      },
      ...bagCatalogue.map((b) => ({
        id: b.id,
        title: b.title,
        image: b.image,
        category: b.category,
        specs: b.specs,
        alt: b.alt,
      })),
    ],
  },
  {
    slug: 'apparel',
    title: 'APPAREL',
    subtitle: 'Performance teamwear, lifestyle, workwear and home textiles developed around every brief.',
    description:
      'From performance teamwear to lifestyle, workwear and home textiles, SVX develops fit, fabric, trims, graphics and packaging around every customer brief.',
    coverImage: '/images/Apparel/A10.webp',
    stats: ['13 product categories', 'Custom fit, fabric and trims', 'Retail-ready branding and packaging'],
    items: [
      {
        id: 'tshirt-svx-primary',
        title: 'SVX Panelled Athletic Training Tee',
        image: '/images/Apparel/A8.webp',
        category: 'Performance',
        specs: ['Breathable mesh side panels', 'Contrast raglan seam', 'Quick-dry moisture management'],
        alt: 'SVX Panelled Athletic Training Tee',
      },
      ...tshirtCatalogue.map((t) => ({
        id: t.id,
        title: t.title,
        image: t.image,
        category: t.category,
        specs: t.specs,
        alt: t.alt,
      })),
    ],
  },
  {
    slug: 'sports-products',
    title: 'SPORTS PRODUCTS',
    subtitle: 'Training, fitness, club and academy equipment developed as coordinated programmes.',
    description:
      'A broad equipment programme spanning speed, agility, strength, conditioning, coaching and team training products, developed around your market, performance level and brand identity.',
    coverImage: '/images/sports-products/sports-product-01.webp',
    stats: ['19 product references', 'Club & academy equipment', 'Custom colours, branding & packaging'],
    items: [],
  },
  {
    slug: 'hockey',
    title: 'HOCKEY',
    subtitle: 'Field hockey sticks, team bundles, balls and organised multi-stick transport.',
    description:
      'Original wooden, hybrid and carbon-composite stick programmes supported by team quantities, matching balls and organised multi-stick transport.',
    coverImage: '/images/hockey/hockey-01.webp',
    stats: ['Wooden, hybrid & composite builds', 'Custom bow, weight & balance', 'Retail lines & team quantities'],
    items: [],
  },
  {
    slug: 'cricket',
    title: 'CRICKET',
    subtitle: 'Cricket bats, technical pads, protective equipment and purpose-built transport.',
    description:
      'A coordinated professional range combining bat craftsmanship, lightweight impact protection and purpose-built transport for junior, academy, club and professional programmes.',
    coverImage: '/images/cricket/cricket-04.webp',
    stats: ['English & Kashmir willow options', 'Junior to professional sizing', 'Custom materials, colours & branding'],
    items: [],
  },
  {
    slug: 'pickleball-padel',
    title: 'PICKLEBALL & PADEL RACKETS',
    subtitle: 'Purpose-built paddles, rackets, balls, covers and complete carry sets.',
    description:
      'Purpose-built racket programmes combining confident SVX styling, practical construction and complete retail-ready accessories for pickleball and padel players.',
    coverImage: '/images/pickleball-padel/pickleball-padel-02.webp',
    stats: ['Custom face material & core thickness', 'Player-level grip & edge options', 'Balls, covers & carry sets'],
    items: [],
  },
  // {
  //   slug: 'accessories',
  //   title: 'ACCESSORIES',
  //   subtitle: 'Custom-developed sports, team and lifestyle accessories tailored to your brand and market.',
  //   description:
  //     'Caps, beanies, headbands, wristbands, water bottles, and promotional accessory packages manufactured to match your brand guidelines.',
  //   coverImage: '/products/accessories/featured-01.webp',
  //   stats: ['Embroidered & woven marks', 'Bespoke packaging options', 'Eco-conscious materials'],
  //   items: [
  //     {
  //       id: 'accessories-lab-1',
  //       title: 'SVX Accessories Programme',
  //       image: '/products/accessories/featured-01.webp',
  //       category: 'Accessories',
  //       specs: ['Bespoke finishes', 'Custom hardware', 'Retail packaging ready'],
  //       alt: 'SVX Accessories Programme',
  //     },
  //   ],
  // },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return PRODUCT_CATEGORIES.find((cat) => cat.slug === slug);
}
