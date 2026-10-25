import type { Metadata } from 'next';
import ProductCataloguePage from '../ProductCataloguePage';
import styles from './footballs-page.module.css';

type FootballCategory = {
  title: string;
  description: string;
  image: string;
  features: string[];
};

const footballCategories: FootballCategory[] = [
  { title: 'Professional', image: '/images/footballs/F3.webp', description: 'Premium match performance with thermally bonded construction, controlled flight and a responsive touch.', features: ['Thermally bonded construction', 'Textured PU match cover', 'Controlled flight performance'] },
  { title: 'Competition', image: '/images/footballs/F8.webp', description: 'High-performance specification for leagues, tournaments and demanding competitive programmes.', features: ['Competition-grade materials', 'Consistent touch and rebound', 'League and tournament options'] },
  { title: 'Club', image: '/images/footballs/F1.webp', description: 'Reliable shape retention, touch and durability for regular match-day use across club levels.', features: ['Durable match construction', 'Reliable shape retention', 'Custom club graphics'] },
  { title: 'Academy', image: '/images/footballs/F2.webp', description: 'Balanced control and dependable flight developed for player progression and academy programmes.', features: ['Balanced touch and flight', 'Player-development focus', 'Multiple size options'] },
  { title: 'Elite Training', image: '/images/footballs/F6.webp', description: 'High-visibility, reinforced performance for intensive sessions and repeated professional use.', features: ['Reinforced construction', 'High-visibility graphics', 'Intensive training durability'] },
  { title: 'Team Training', image: '/images/footballs/F9.webp', description: 'Hard-wearing everyday construction for clubs, schools and organised team programmes.', features: ['Hard-wearing outer cover', 'Dependable air retention', 'Repeat team programmes'] },
  { title: 'Junior & School', image: '/images/footballs/F4.webp', description: 'Bright, engaging designs in sizes 3, 4 and 5 with age-appropriate weight and softer-touch options.', features: ['Sizes 3, 4 and 5', 'Age-appropriate weights', 'Softer-touch options'] },
  { title: 'Custom & Promotional', image: '/images/footballs/F7.webp', description: 'Bespoke colours, panel graphics, branding and packaging developed around every customer brief.', features: ['Bespoke panel graphics', 'Custom colours and branding', 'Retail packaging options'] },
  { title: 'Precision Control', image: '/images/footballs/F11.webp', description: 'A high-grip technical football with deeply textured panels for confident control and dependable match performance.', features: ['High-grip textured surface', 'Precision-moulded panel design', 'Match and training options'] },
  { title: 'Eco Training', image: '/images/footballs/F12.webp', description: 'A durable training direction combining a resilient textured cover with a distinctive recycled-material visual language.', features: ['Durable textured cover', 'Recycled-material options', 'High-volume training programmes'] },
  { title: 'Elite Thermobonded', image: '/images/footballs/F13.webp', description: 'A clean premium match-ball direction with large thermally bonded panels, controlled flight and responsive touch.', features: ['Thermally bonded construction', 'Large-panel flight stability', 'Premium textured finish'] },
];

const developmentSteps = [
  'Market, use and target price',
  'Construction, materials and performance',
  'Panel design, colour and branding',
  'Sampling, testing and approval',
  'Production, packaging and delivery',
];

export const metadata: Metadata = {
  title: 'Custom Footballs & Match Balls OEM Manufacturing',
  description:
    'Explore 11 purpose-built custom football programmes for professional matches, FIFA-standard tournaments, club training, academy, and promotional use.',
  alternates: { canonical: '/products/footballs' },
  openGraph: {
    title: 'Custom Footballs & Match Balls OEM Manufacturing | SVX',
    description:
      'Explore 11 purpose-built custom football programmes for professional matches, FIFA-standard tournaments, club training, academy, and promotional use.',
    url: '/products/footballs',
    images: [{ url: '/images/footballs/F6.webp', width: 1200, height: 800, alt: 'SVX Custom Footballs Manufacturing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Footballs & Match Balls OEM Manufacturing | SVX',
    description:
      'Explore 11 purpose-built custom football programmes for professional matches, FIFA-standard tournaments, club training, academy, and promotional use.',
    images: ['/images/footballs/F6.webp'],
  },
};

export default function FootballsPage() {
  return (
    <ProductCataloguePage
      category="Footballs"
      categorySlug="footballs"
      heroEyebrow="SVX football range · product development"
      headline="Every match."
      headlineAccent="One expert route."
      heroCopy="One focused range covering professional matches, club and academy play, training, schools and promotional programmes."
      stats={[
        { value: String(footballCategories.length), label: 'Purpose-built ranges' },
        { value: '30', label: 'Years of experience' },
        { value: '1', label: 'Accountable partner' },
      ]}
      catalogueEyebrow="SVX football range"
      catalogueHeading={['Eleven purpose-', 'built designs']}
      catalogueCopy="Each programme is developed around its playing level, construction, touch, flight, durability, panel artwork and commercial target."
      items={footballCategories.map((category) => ({ ...category, label: 'Football' }))}
      processHeading={['Panel to', 'match-ready.']}
      developmentSteps={developmentSteps}
      footerLine="FOOTBALLS · PRODUCT DEVELOPMENT · GLOBAL SOURCING"
      getItemAlt={(item) => `${item.title} custom SVX football`}
      imagePriorityCount={4}
      styles={styles}
    />
  );
}
