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
  { title: 'Forest Vector Trail Crew', label: 'Outdoor', image: '/images/socks/S26.webp', description: 'A forest-green trail sock using strong black reinforcement and bright vector accents for a rugged, technical outdoor identity.', features: ['Breathable mesh zones', 'Protective heel and toe', 'Lateral support vectors'] },
  { title: 'Football Performance Sock', label: 'Football', image: '/images/socks/S27.webp', description: 'A technical football sock engineered for match and training use with a stable fit, breathable construction and reinforced wear zones.', features: ['Match-ready knee-high fit', 'Ventilated calf and foot', 'Reinforced heel and toe'] },
  { title: 'Apex Heritage Stripe Crew', label: 'Lifestyle', image: '/images/socks/S28.webp', description: 'A crisp white athletic crew combining classic varsity stripes with SVX blue and orange branding for a strong heritage-sport look.', features: ['Cushioned sole and stay-up cuff', 'Reinforced marled heel and toe', 'Supportive mid-foot knit'] },
  { title: 'Aqua Curve Crew', label: 'Lifestyle', image: '/images/socks/S29.webp', description: 'A clean teal crew with one flowing aqua curve that gives the style a distinctive SVX movement signature.', features: ['Smooth performance knit', 'Comfort rib cuff', 'Versatile everyday fit'] },
  { title: 'Cobalt Curve Crew', label: 'Lifestyle', image: '/images/socks/S30.webp', description: 'A navy crew with an electric cobalt movement curve, designed as the strongest core SVX colourway.', features: ['Smooth performance knit', 'Bold directional curve', 'Easy team and retail application'] },
  { title: 'Endurance Work & Training Sock', label: 'Workwear', image: '/images/socks/S8.webp', description: 'Durable midweight crew sock with a reinforced heel and toe, protective cushioning, ventilation zones and supportive arch construction.', features: ['Workwear & safety footwear', 'Intensive training', 'Ventilated arch support'] },
  { title: 'Violet Flux Performance Crew', label: 'Performance', image: '/images/socks/S10.webp', description: 'A technical violet performance crew with mapped ventilation, directional support zones and reinforced heel and toe areas.', features: ['Mapped mesh ventilation', 'Ribbed leg support and arch hold', 'Reinforced heel and toe'] },
  { title: 'Trail Trek Outdoor Sock', label: 'Outdoor', image: '/images/socks/S6-updated.webp', description: 'Outdoor crew sock with a supportive ankle structure, breathable upper, cushioned sole and reinforced heel and toe.', features: ['Hiking & trekking', 'Supportive ankle structure', 'Reinforced heel and toe'] },
  { title: 'Wellness Comfort Sock', label: 'Wellness', image: '/images/socks/S15.webp', description: 'Soft comfort sock with a gentle cuff, breathable mesh, supportive arch and cushioned heel and toe.', features: ['Healthcare & all-day use', 'Gentle comfort cuff', 'Cushioned heel and toe'] },
  { title: 'PowerGym Training Sock', label: 'Training', image: '/images/socks/S11.webp', description: 'Quarter-length technical sock with strong heel and toe cushioning, ankle stability, ventilation and a secure arch-support band.', features: ['Gym & cross-training', 'Stable ankle support', 'Secure arch-support band'] },
  { title: 'AeroRun Lightweight Sock', label: 'Running', image: '/images/socks/S9.webp', description: 'Lightweight warm-weather sock with open mesh airflow, targeted cushioning and reinforced blue heel and toe areas.', features: ['Running & court sports', 'Open-mesh airflow', 'Reinforced heel and toe'] },
  { title: 'Everyday Active Multipack', label: 'Multipack', image: '/images/socks/S13.webp', description: 'Commercial three-colour collection with moderate cushioning, breathable panels, arch support and easy-to-manufacture construction.', features: ['Everyday sport & casual wear', 'Three-colour multipack', 'Commercial construction'] },
  { title: 'EcoTrail Recycled Sock', label: 'Recycled', image: '/images/socks/S14.webp', description: 'Eco-focused sock concept with a recycled-yarn appearance, ventilation panels, reinforced wear zones and secure ankle construction.', features: ['Outdoor & travel', 'Recycled-yarn appearance', 'Secure ankle construction'] },
  { title: 'Thermal Expedition Sock', label: 'Thermal', image: '/images/socks/S12.webp', description: 'Heavyweight thermal sock with insulating knit, full-foot cushioning and strong heel and toe protection.', features: ['Winter hiking & work boots', 'Insulating heavyweight knit', 'Full-foot cushioning'] },
  { title: 'Tactical Outdoor Performance Sock', label: 'Tactical', image: '/images/socks/S16.webp', description: 'Premium technical sock combining engineered ventilation, targeted compression, ankle stability and reinforced impact zones.', features: ['Demanding work & outdoor use', 'Targeted compression', 'Reinforced impact zones'] },
  { title: 'Midnight Aero Training Crew', label: 'Training', image: '/images/socks/S31.webp', description: 'A deep navy technical sock with open-knit ventilation and reinforced graphite wear zones for intensive training sessions.', features: ['Mapped mesh ventilation', 'Arch compression band', 'Reinforced heel and toe'] },
  { title: 'Arctic Core Performance Crew', label: 'Performance', image: '/images/socks/S32.webp', description: 'A natural-white technical crew with cool-grey protection zones and precise ventilation mapping for a premium clean-performance range.', features: ['Dual mesh ventilation zones', 'Targeted arch support', 'Reinforced grey heel and toe'] },
  { title: 'Forest Green', label: 'Outdoor', image: '/images/socks/S33.webp', description: 'A forest-green technical crew sock with ventilated panels, secure ankle support and durable cushioning for active outdoor use.', features: ['Ventilated technical knit', 'Stable ankle and arch fit', 'Durable impact cushioning'] },
  { title: 'Sandstone Motion Trek Crew', label: 'Outdoor', image: '/images/socks/S34.webp', description: 'A warm sandstone technical crew with grey protection panels and slim blue-orange motion lines for a refined outdoor collection.', features: ['Zonal mesh ventilation', 'Structured arch knit', 'Cushioned heel and toe'] },
  { title: 'PrismFlow Invisible Runner', label: 'Running', image: '/images/socks/prismflow-invisible-runner.webp', description: 'A low-profile running sock with layered multicolour motion lines designed to express speed while retaining a clean base.', features: ['Breathable upper and low-cut collar', 'Flexible instep panel', 'Lightweight arch support'] },
  { title: 'Trail Sage Performance Crew', label: 'Outdoor', image: '/images/socks/trail-sage-performance-crew.webp', description: 'A calm sage technical crew with engineered support waves and breathable zones for outdoor movement and all-day comfort.', features: ['Mapped mesh ventilation', 'Arch support waves', 'Reinforced heel and toe'] },
  { title: 'Rose Motion Training Crew', label: 'Training', image: '/images/socks/rose-motion-training-crew.webp', description: 'A modern dusty-rose training sock with sculpted grey cushioning zones and contrast SVX details for an athletic lifestyle range.', features: ['Mapped cushioning and mesh', 'Ankle support bands', 'Easy-grip pull tab'] },
  { title: 'Night Pulse Performance Crew', label: 'Performance', image: '/images/socks/night-pulse-performance-crew.webp', description: 'A dark technical crew with electric-blue support lines and orange highlights, created as a strong core performance colourway.', features: ['Zonal ventilation', 'Anatomical arch support', 'Contrast motion markers'] },
  { title: 'Polar Line Performance Crew', label: 'Performance', image: '/images/socks/polar-line-performance-crew.webp', description: 'A fresh white performance crew with cool-grey reinforcement and an orange motion line for a clean technical appearance.', features: ['Breathable mapped mesh', 'Supportive arch knit', 'Padded heel and toe'] },
  { title: 'Ignite Frame Training Crew', label: 'Training', image: '/images/socks/ignite-frame-training-crew.webp', description: 'A white technical training crew framed by navy and orange structural zones, giving the foot a fast and protective visual profile.', features: ['Framed heel construction', 'Arch wrap and forefoot flex lines', 'Reinforced toe and heel'] },
  { title: 'ShadowLock Invisible 3 Pack', label: 'Multipack', image: '/images/socks/shadowlock-invisible-3-pack.webp', description: 'A three-colour invisible sock pack designed for a secure low-profile fit, technical ventilation and discreet performance branding.', features: ['Low-cut collar and breathable mesh', 'Heel-hold construction', 'Three coordinated colourways'] },
  { title: 'CloudLite Invisible 3 Pack', label: 'Multipack', image: '/images/socks/cloudlite-invisible-3-pack.webp', description: 'A clean white three-pair invisible pack with subtle technical linework, made for lightweight shoes and everyday comfort.', features: ['Ultralight mesh knit', 'Elastic arch bands', 'Secure low-profile opening'] },
  { title: 'Hi Vis Velocity Crew', label: 'High visibility', image: '/images/socks/hi-vis-velocity-crew.webp', description: 'A high-energy performance crew combining a fluorescent body with dark support curves and blue motion accents.', features: ['High-visibility body', 'Breathable mesh and arch band', 'Curved lateral support'] },
  { title: 'Glacier Curve Crew', label: 'Performance', image: '/images/socks/glacier-curve-crew.webp', description: 'A crisp white crew with a cool-grey movement curve for a fresh, versatile and premium sporting appearance.', features: ['Breathable clean body', 'Grey directional curve', 'Lightweight construction'] },
  { title: 'Executive Gold Toe Knee High', label: 'Dress', image: '/images/socks/executive-gold-toe-knee-high.webp', description: 'A minimalist black over-the-calf dress sock distinguished by a premium gold-coloured toe and discreet SVX mark.', features: ['Fine vertical rib', 'Extended stay-up leg', 'Fine-gauge formal construction'] },
  { title: 'Graphite Herringbone Dress Sock', label: 'Dress', image: '/images/socks/graphite-herringbone-dress-sock.webp', description: 'A graphite dress sock with a full herringbone texture, black wear zones and a narrow SVX blue cuff accent.', features: ['Herringbone jacquard', 'Contrast cuff piping', 'Reinforced black heel and toe'] },
  { title: 'Highland Grid Dress Sock', label: 'Dress', image: '/images/socks/highland-grid-dress-sock.webp', description: 'A forest-green dress sock with a subtle navy windowpane grid and an orange cuff accent.', features: ['Fine-gauge windowpane pattern', 'Navy heel and toe', 'Premium seasonal styling'] },
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
  description: 'Explore 35 unique sock products developed by SVX for football, performance, running, training, outdoor, lifestyle and dress collections.',
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
