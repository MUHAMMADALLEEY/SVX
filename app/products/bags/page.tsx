import type { Metadata } from 'next';
import ProductCataloguePage from '../ProductCataloguePage';
import styles from './bags-page.module.css';

type BagCategory = {
  title: string;
  label: string;
  description: string;
  image: string;
  features: string[];
};

const bagCategories: BagCategory[] = [
  { title: 'Football Bags', label: 'Football', image: '/images/bags/B1.webp', description: 'Large organised kit bags developed for match day, training and club travel.', features: ['Separate boot compartment', 'Reinforced carry system', 'Club colours and branding'] },
  { title: 'Gym Bags', label: 'Training', image: '/images/bags/B3.webp', description: 'Compact training holdalls with practical storage and ventilation for daily workouts.', features: ['Ventilated shoe pocket', 'Padded shoulder strap', 'Water-resistant fabric options'] },
  { title: 'Basic Backpacks', label: 'Everyday', image: '/images/bags/B2.webp', description: 'Dependable everyday backpacks with clean styling and comfortable organisation.', features: ['Dual zip compartments', 'Side bottle pockets', 'Padded adjustable straps'] },
  { title: 'High-Tech Backpacks', label: 'Engineered', image: '/images/bags/B8.webp', description: 'Advanced technical packs combining ergonomic support with modern utility features.', features: ['Moulded back support', 'Device and cable organisation', 'Technical trim options'] },
  { title: 'School Bags', label: 'School', image: '/images/bags/B4.webp', description: 'Hard-wearing school backpacks designed for books, equipment and repeated daily use.', features: ['Spacious compartments', 'Reinforced stress points', 'School colour matching'] },
  { title: 'Team Bags', label: 'Teamwear', image: '/images/bags/B5.webp', description: 'Professional team kit bags for clubs, academies, schools and organisations.', features: ['Large kit capacity', 'Player-number options', 'Repeat programme control'] },
  { title: 'Football Boot Bags', label: 'Footwear', image: '/images/bags/B6.webp', description: 'Compact structured carriers that keep football boots protected and separated.', features: ['Ventilated mesh panel', 'Easy-clean lining', 'Strong dual zipper'] },
  { title: 'Duffle Bags', label: 'Duffle', image: '/images/bags/B7.webp', description: 'Versatile premium duffles for sport, weekend travel and active lifestyles.', features: ['Wide main opening', 'End storage pocket', 'Multiple size options'] },
  { title: 'Trolley Bags', label: 'Wheeled', image: '/images/bags/B12.webp', description: 'High-capacity wheeled bags engineered for easy team and long-distance travel.', features: ['Telescopic handle', 'Durable wheel system', 'Protected reinforced base'] },
  { title: 'Laptop Backpacks', label: 'Business', image: '/images/bags/B9.webp', description: 'Smart professional packs with organised protection for work and technology.', features: ['Padded laptop section', 'Business organisation', 'Clean urban profile'] },
  { title: 'Hydration Backpacks', label: 'Running', image: '/images/bags/B10.webp', description: 'Lightweight close-fitting packs for running, endurance and outdoor training.', features: ['Front hydration pockets', 'Breathable mesh harness', 'Reflective detail options'] },
  { title: 'Travel Carry-Ons', label: 'Travel', image: '/images/bags/B11.webp', description: 'Cabin-ready travel packs with secure, efficient organisation for every journey.', features: ['Clamshell access', 'Compression straps', 'Luggage pass-through'] },
  { title: 'Crossbody Bags', label: 'Accessory', image: '/images/bags/B13.webp', description: 'Compact everyday bags for phones, documents and essential personal items.', features: ['Adjustable shoulder strap', 'Secure zipped pockets', 'Retail colour programmes'] },
  { title: 'Technical Waist Packs', label: 'Waist', image: '/images/bags/B14.webp', description: 'Low-profile waist packs that keep essentials secure and accessible during travel, training and daily use.', features: ['Padded breathable belt', 'Secure dual-zip storage', 'Adjustable quick-release fit'] },
  { title: 'Anti-Theft Sling Bags', label: 'Sling', image: '/images/bags/B15.webp', description: 'Streamlined crossbody sling bags with organised protection for technology and everyday essentials.', features: ['Padded device compartment', 'Body-side secure access', 'Ambidextrous adjustable strap'] },
  { title: 'Multi-Pocket Running Belts', label: 'Performance', image: '/images/bags/B16.webp', description: 'Technical running belts engineered for stable storage, ventilation and convenient device access.', features: ['Multiple zipped compartments', 'Breathable mesh support', 'Reflective performance details'] },
  { title: 'Garment Duffle Bags', label: 'Business Travel', image: '/images/bags/B17.webp', description: 'Convertible garment duffles that combine crease-conscious clothing storage with organised travel capacity.', features: ['Integrated garment section', 'Separate footwear compartment', 'Cabin-ready carry system'] },
  { title: 'Waterproof Phone Sling Bags', label: 'Outdoor', image: '/images/bags/B18.webp', description: 'Compact weather-ready sling bags with a visible phone compartment for cycling, travel and outdoor activity.', features: ['Touch-compatible phone window', 'Water-resistant construction', 'Ventilated adjustable strap'] },
];

const developmentSteps = [
  'Market, use and target price',
  'Dimensions, fabric and construction',
  'Organisation, colour and branding',
  'Sampling, testing and approval',
  'Production, packaging and delivery',
];

export const metadata: Metadata = {
  title: 'Custom Sports Bags, Backpacks & Holdalls Manufacturing',
  description:
    'Explore 18 custom bag categories for football, gym, training, school, teamwear, business tech packs, running, and travel programmes.',
  alternates: { canonical: '/products/bags' },
  openGraph: {
    title: 'Custom Sports Bags, Backpacks & Holdalls Manufacturing | SVX',
    description:
      'Explore 18 custom bag categories for football, gym, training, school, teamwear, business tech packs, running, and travel programmes.',
    url: '/products/bags',
    images: [{ url: '/images/bags/B2.webp', width: 1200, height: 800, alt: 'SVX Custom Sports Bags Manufacturing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Sports Bags, Backpacks & Holdalls Manufacturing | SVX',
    description:
      'Explore 18 custom bag categories for football, gym, training, school, teamwear, and travel programmes.',
    images: ['/images/bags/B2.webp'],
  },
};

export default function BagsPage() {
  return (
    <ProductCataloguePage
      category="Bags"
      categorySlug="bags"
      heroEyebrow="SVX bags · product development"
      headline="Carry more."
      headlineAccent="Perform better."
      heroCopy="From team football equipment to technical travel and performance packs, SVX develops construction, materials, organisation, branding and packaging around each buyer's market."
      stats={[
        { value: '18', label: 'Product categories' },
        { value: '30', label: 'Years of experience' },
        { value: '1', label: 'Accountable partner' },
      ]}
      catalogueEyebrow="Complete bags capability"
      catalogueHeading={['Select a', 'category']}
      catalogueCopy="Every SVX bag can be developed around your dimensions, fabric, colours, compartments, trims, logo application, testing requirements and retail packaging."
      items={bagCategories}
      processHeading={['Concept to', 'delivery.']}
      developmentSteps={developmentSteps}
      footerLine="BAGS · PRODUCT DEVELOPMENT · GLOBAL SOURCING"
      styles={styles}
    />
  );
}
