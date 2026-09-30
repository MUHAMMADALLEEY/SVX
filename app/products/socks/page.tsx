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
  { title: 'Organic Cotton', label: 'Natural', image: '/images/socks/S19.webp', description: 'Breathable, soft-touch socks developed with certified organic cotton and responsible material options.', features: ['Natural hand feel', 'Traceable yarn options', 'Eco packaging compatible'] },
  { title: 'Special High-Tech', label: 'Engineered', image: '/images/socks/S22.webp', description: 'Advanced engineered socks with mapped ventilation, compression zones, impact cushioning and anatomical shaping.', features: ['Zoned construction', 'Moisture management', 'Performance knitting options'] },
  { title: 'Dress Socks', label: 'Executive', image: '/images/socks/S20.webp', description: 'Fine-gauge business socks with refined patterns, smooth toe seams and elegant over-calf or crew profiles.', features: ['Mercerised cotton options', 'Fine needle construction', 'Cuff and welt customization'] },
  { title: 'Sports Socks', label: 'Active', image: '/images/socks/S15.webp', description: 'Versatile athletic socks combining arch support, ventilation mesh and strategic footbed cushioning.', features: ['Quarter and crew lengths', 'Supportive fit', 'Club and retail programmes'] },
  { title: 'Performance Socks', label: 'Elite', image: '/images/socks/S18.webp', description: 'Premium technical socks engineered for intensive training, racing and high-output athletic use.', features: ['Anatomical left/right fit', 'Targeted compression', 'High-abrasion protection'] },
  { title: 'Health Socks', label: 'Wellness', image: '/images/socks/S16.webp', description: 'Comfort-focused socks with non-binding cuffs, smooth toe construction and soft moisture-managing yarns.', features: ['Comfort top', 'Seamless toe options', 'Healthcare programmes'] },
  { title: 'Team Socks', label: 'Teamwear', image: '/images/socks/S17.webp', description: 'Durable coordinated socks for clubs, academies, schools and organizations in bespoke colourways.', features: ['Custom colours', 'Size grading', 'Repeat programme control'] },
  { title: 'Work Socks', label: 'Industrial', image: '/images/socks/S14.webp', description: 'Heavy-duty boot socks with high-wear reinforcement, moisture channels and protective cushioning.', features: ['Reinforced heel and toe', 'Boot-fit cushioning', 'High-durability blends'] },
  { title: "Women's Socks", label: "Women's", image: '/images/socks/S12.webp', description: "Modern women's performance socks shaped for an ergonomic fit with refined technical styling.", features: ['Lightweight cushioning', 'Breathable construction', 'Seasonal colour stories'] },
  { title: 'Garden Socks', label: 'Outdoor', image: '/images/socks/S9.webp', description: 'Practical outdoor socks with boot cushioning, durable yarns and moisture-management performance.', features: ['Rugged construction', 'Reinforced wear zones', 'Outdoor retail ranges'] },
  { title: 'Travel Socks', label: 'Journey', image: '/images/socks/S13.webp', description: 'Long-wear travel socks designed around gentle graduated support, breathability and all-day comfort.', features: ['Graduated support options', 'Cushioned heel and toe', 'Premium travel packaging'] },
  { title: 'Diabetic Comfort', label: 'Specialist', image: '/images/socks/S10.webp', description: 'Extra-stretch, non-binding comfort socks with a smooth toe and pressure-conscious construction.', features: ['Wide gentle opening', 'Soft seamless finish', 'Medical specification options'] },
  { title: 'Gym Socks', label: 'Gym', image: '/images/socks/S8.webp', description: 'Supportive training socks with arch compression, dense impact cushioning and breathable zones.', features: ['Quarter and crew profiles', 'Mid-foot structure', 'High-friction durability'] },
  { title: 'Running Socks', label: 'Run', image: '/images/socks/S7.webp', description: 'Lightweight anatomical socks with mapped airflow, heel security and targeted impact protection.', features: ['Left/right engineering', 'Anti-blister yarn options', 'Heel and toe ventilation'] },
  { title: 'Polyester-Rich', label: 'Value', image: '/images/socks/S11.webp', description: 'Resilient, quick-drying everyday socks designed for dependable value and volume retail programmes.', features: ['Durable colour retention', 'Fast-drying construction', 'Commercial retail packs'] },
  { title: 'Recycled-Yarn', label: 'Recycled', image: '/images/socks/S6.webp', description: 'Contemporary socks developed with recycled yarn options and performance-focused knit structures.', features: ['Recycled fibre options', 'Traceability support', 'Responsible packaging'] },
  { title: 'Warm & Thermal', label: 'Winter', image: '/images/socks/S4.webp', description: 'Heavyweight insulated socks with a soft brushed interior and deep cushioning for cold conditions.', features: ['Thermal loop construction', 'Heat-ready fit', 'Winter retail programmes'] },
  { title: 'Family Socks', label: 'Family', image: '/images/socks/S5.webp', description: "Coordinated adult, youth and children's sock programmes with shared colours and design language.", features: ['Complete size grading', 'Family multipacks', 'Retail-ready presentation'] },
  { title: 'School Socks', label: 'Uniform', image: '/images/socks/S1.webp', description: 'Smart, hard-wearing school socks designed for repeated washing, everyday comfort and uniform standards.', features: ['Knee-high and crew', 'Reinforced wear zones', 'School colour matching'] },
  { title: "Ladies' Comfort", label: 'Comfort', image: '/images/socks/S2.webp', description: 'Soft fine-gauge socks with gentle cuffs, elegant patterns and comfortable seamless-toe options.', features: ['Non-binding cuff', 'Soft-touch yarns', 'Classic and fashion designs'] },
  { title: 'Hiking Socks', label: 'Trail', image: '/images/socks/S3.webp', description: 'Technical outdoor socks with zoned cushioning, ankle protection and breathable merino-rich options.', features: ['Trail-ready durability', 'Ventilated knit zones', 'Light to expedition weights'] },
  { title: 'Compression Socks', label: 'Support', image: '/images/socks/S21.webp', description: 'Knee-high graduated-support socks with anatomical calf shaping and breathable technical construction.', features: ['Graduated compression options', 'Travel and recovery use', 'Independent testing available'] },
  { title: 'Guard-Pocket Football Socks', label: 'Protection', image: '/images/socks/S23.webp', description: 'Knee-high performance socks with an integrated shin-guard pocket, mapped ventilation and reinforced impact zones.', features: ['Integrated guard pocket', 'Ventilated calf construction', 'Reinforced heel and forefoot'] },
  { title: 'Technical Training Socks', label: 'Training', image: '/images/socks/S24.webp', description: 'Cushioned crew socks engineered with breathable mesh, structured arch support and secure heel lockdown.', features: ['Mapped cushioning zones', 'Arch and ankle support', 'Moisture-managing knit'] },
  { title: 'Elite Football Socks', label: 'Football', image: '/images/socks/S25.webp', description: 'Knee-high football socks combining breathable calf panels, anatomical support and durable match-day cushioning.', features: ['Knee-high match profile', 'Breathable shin zones', 'Anatomical foot cushioning'] },
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
  description: 'Explore 25 custom sock categories developed by SVX, from organic cotton and performance socks to work, travel and compression programmes.',
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
