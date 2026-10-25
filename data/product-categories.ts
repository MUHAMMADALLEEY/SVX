import {
  bagCatalogue,
  footballCatalogue,
  sockShowcaseImages,
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
    coverImage: '/images/socks/S26.webp',
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
    coverImage: '/images/footballs/F6.webp',
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
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return PRODUCT_CATEGORIES.find((cat) => cat.slug === slug);
}
