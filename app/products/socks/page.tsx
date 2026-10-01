import type { Metadata } from 'next';
import ProductCataloguePage from '../ProductCataloguePage';
import styles from './socks-page.module.css';

type SockCategory = {
  title: string;
  label: string;
  description: string;
  image: string;
  features: string[];
};

const sockCategories: SockCategory[] = [
  { title: 'Guard-Pocket Football Socks', label: 'Protection', image: '/images/socks/S23.webp', description: 'Knee-high performance socks with an integrated shin-guard pocket, mapped ventilation and reinforced impact zones.', features: ['Integrated guard pocket', 'Ventilated calf construction', 'Reinforced heel and forefoot'] },
  { title: 'Technical Training Socks', label: 'Training', image: '/images/socks/S24.webp', description: 'Cushioned crew socks engineered with breathable mesh, structured arch support and secure heel lockdown.', features: ['Mapped cushioning zones', 'Arch and ankle support', 'Moisture-managing knit'] },
  { title: 'Elite Football Socks', label: 'Football', image: '/images/socks/S25.webp', description: 'Knee-high football socks combining breathable calf panels, anatomical support and durable match-day cushioning.', features: ['Knee-high match profile', 'Breathable shin zones', 'Anatomical foot cushioning'] },
  { title: 'High-Tech Performance / Running Sock', label: 'Running', image: '/images/socks/S26.webp', description: 'A high-tech performance sock developed for running with targeted ventilation, secure support and responsive cushioning.', features: ['Breathable performance knit', 'Structured arch support', 'Impact-zone cushioning'] },
  { title: 'Football Performance Sock', label: 'Football', image: '/images/socks/S27.webp', description: 'A technical football sock engineered for match and training use with a stable fit, breathable construction and reinforced wear zones.', features: ['Match-ready knee-high fit', 'Ventilated calf and foot', 'Reinforced heel and toe'] },
  { title: 'Technical Running & Training Crew Sock', label: 'Training', image: '/images/socks/S28.webp', description: 'A versatile technical crew sock for running and gym training with mapped cushioning and moisture-managing airflow.', features: ['Crew-length performance fit', 'Mapped cushioning zones', 'Moisture-managing ventilation'] },
  { title: 'Hiking & Outdoor Performance Sock', label: 'Outdoor', image: '/images/socks/S29.webp', description: 'A durable outdoor sock designed for hiking comfort with protective cushioning, breathable support and reinforced high-wear areas.', features: ['Trail-ready cushioning', 'Breathable support zones', 'Reinforced high-wear areas'] },
  { title: 'Elite Football Match Sock', label: 'Football', image: '/images/socks/S30.webp', description: 'An elite match-day football sock combining anatomical support, breathable calf panels and durable game-ready cushioning.', features: ['Elite match profile', 'Anatomical foot support', 'Durable match-day cushioning'] },
  { title: 'SVX Endurance Work & Training Sock', label: 'Workwear', image: '/images/socks/S8.webp', description: 'Durable midweight crew sock with a reinforced heel and toe, protective cushioning, ventilation zones and supportive arch construction.', features: ['Workwear & safety footwear', 'Intensive training', 'Ventilated arch support'] },
  { title: 'SVX Women’s Active Performance Sock', label: 'Women’s', image: '/images/socks/S10.webp', description: 'Women’s technical crew sock with breathable mesh panels, lightweight cushioning, arch compression and reinforced impact areas.', features: ['Running, gym & walking', 'Breathable mesh panels', 'Reinforced impact areas'] },
  { title: 'SVX Trail Trek Outdoor Sock', label: 'Outdoor', image: '/images/socks/S6-updated.webp', description: 'Outdoor crew sock with a supportive ankle structure, breathable upper, cushioned sole and reinforced heel and toe.', features: ['Hiking & trekking', 'Supportive ankle structure', 'Reinforced heel and toe'] },
  { title: 'SVX Wellness Comfort Sock', label: 'Wellness', image: '/images/socks/S15.webp', description: 'Soft comfort sock with a gentle cuff, breathable mesh, supportive arch and cushioned heel and toe.', features: ['Healthcare & all-day use', 'Gentle comfort cuff', 'Cushioned heel and toe'] },
  { title: 'SVX PowerGym Training Sock', label: 'Training', image: '/images/socks/S11.webp', description: 'Quarter-length technical sock with strong heel and toe cushioning, ankle stability, ventilation and a secure arch-support band.', features: ['Gym & cross-training', 'Stable ankle support', 'Secure arch-support band'] },
  { title: 'SVX AeroRun Lightweight Sock', label: 'Running', image: '/images/socks/S9.webp', description: 'Lightweight warm-weather sock with open mesh airflow, targeted cushioning and reinforced blue heel and toe areas.', features: ['Running & court sports', 'Open-mesh airflow', 'Reinforced heel and toe'] },
  { title: 'SVX Everyday Active Multipack', label: 'Multipack', image: '/images/socks/S13.webp', description: 'Commercial three-colour collection with moderate cushioning, breathable panels, arch support and easy-to-manufacture construction.', features: ['Everyday sport & casual wear', 'Three-colour multipack', 'Commercial construction'] },
  { title: 'SVX EcoTrail Recycled Sock', label: 'Recycled', image: '/images/socks/S14.webp', description: 'Eco-focused sock concept with a recycled-yarn appearance, ventilation panels, reinforced wear zones and secure ankle construction.', features: ['Outdoor & travel', 'Recycled-yarn appearance', 'Secure ankle construction'] },
  { title: 'SVX Thermal Expedition Sock', label: 'Thermal', image: '/images/socks/S12.webp', description: 'Heavyweight thermal sock with insulating knit, full-foot cushioning and strong heel and toe protection.', features: ['Winter hiking & work boots', 'Insulating heavyweight knit', 'Full-foot cushioning'] },
  { title: 'SVX Tactical Outdoor Performance Sock', label: 'Tactical', image: '/images/socks/S16.webp', description: 'Premium technical sock combining engineered ventilation, targeted compression, ankle stability and reinforced impact zones.', features: ['Demanding work & outdoor use', 'Targeted compression', 'Reinforced impact zones'] },
  { title: 'Midnight Navy', label: 'Performance', image: '/images/socks/S31.webp', description: 'A deep navy technical crew sock with breathable knit zones, structured arch support and reinforced grey impact areas.', features: ['Breathable performance knit', 'Supportive arch construction', 'Reinforced heel and toe'] },
  { title: 'Bone White', label: 'Performance', image: '/images/socks/S32.webp', description: 'A bone-white performance crew sock combining mapped ventilation, targeted cushioning and durable heel and toe reinforcement.', features: ['Mapped ventilation zones', 'Targeted footbed cushioning', 'Contrast performance details'] },
  { title: 'Forest Green', label: 'Outdoor', image: '/images/socks/S33.webp', description: 'A forest-green technical crew sock with ventilated panels, secure ankle support and durable cushioning for active outdoor use.', features: ['Ventilated technical knit', 'Stable ankle and arch fit', 'Durable impact cushioning'] },
  { title: 'Sand & Stone', label: 'Lifestyle', image: '/images/socks/S34.webp', description: 'A neutral sand performance crew sock with stone-grey reinforcement, breathable zones and balanced everyday cushioning.', features: ['Neutral retail colourway', 'Breathable support zones', 'Reinforced heel and toe'] },
];

const developmentSteps = [
  'Market, use and target price',
  'Yarn, construction and performance',
  'Design, colour and branding',
  'Sampling, testing and approval',
  'Production, packaging and delivery',
];

export const metadata: Metadata = {
  title: 'Custom Socks Product Development | SVX',
  description: 'Explore 22 technical sock products developed by SVX for football, running, training, workwear, wellness and outdoor performance.',
  alternates: { canonical: '/products/socks' },
};

export default function SocksPage() {
  return (
    <ProductCataloguePage
      category="Socks"
      categorySlug="sock"
      heroEyebrow="SVX socks · product development"
      headline="Every sock."
      headlineAccent="One expert route."
      heroCopy="From everyday essentials to high-performance engineered socks, SVX develops materials, construction, fit, branding and packaging around each buyer's market."
      stats={[
        { value: String(sockCategories.length), label: 'Product categories' },
        { value: '30', label: 'Years of experience' },
        { value: '1', label: 'Accountable partner' },
      ]}
      catalogueEyebrow="Complete sock capability"
      catalogueHeading={['Select a', 'category']}
      catalogueCopy="Every image represents a development direction. Yarn composition, colours, cushioning, sizing, performance zones and packaging can be customized to the customer brief."
      items={sockCategories}
      processHeading={['Yarn to', 'retail-ready.']}
      developmentSteps={developmentSteps}
      footerLine="MANUFACTURING · SOURCING · PRODUCT DEVELOPMENT"
      footerEnd={{ label: 'LONDON (UK) COMMERCIAL OFFICE · GLOBAL MANUFACTURING NETWORK' }}
      getItemAlt={(item) => `${item.title} custom sock development example`}
      styles={styles}
    />
  );
}
