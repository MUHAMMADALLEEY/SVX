import type { Metadata } from "next";
import ProductCataloguePage from "../ProductCataloguePage";
import styles from "./apparel-page.module.css";

type ApparelCategory = {
  title: string;
  label: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
};

const apparelCategories: ApparelCategory[] = [
  {
    title: "AeroGrid T-Shirt",
    label: "Training",
    image: "/images/Apparel/A3.webp",
    alt: "SVX AeroGrid performance T-shirt",
    description: "Body-mapped athletic tee for training, running and high-output team programmes.",
    features: ["Breathable mesh zones", "Moisture-management finish", "Custom colour blocking"],
  },
  {
    title: "FlexCore Sweatshirt",
    label: "Layering",
    image: "/images/Apparel/A2.webp",
    alt: "SVX FlexCore sweatshirt",
    description: "Clean athletic mid-layer balancing warmth, mobility and daily club wear.",
    features: ["Soft technical fleece", "Articulated sleeve", "Embroidered logo options"],
  },
  {
    title: "Velocity Football Kit",
    label: "Football",
    image: "/images/Apparel/A12.webp",
    alt: "SVX Velocity football kit",
    description: "Complete match kit with dynamic graphics and performance-focused construction.",
    features: ["Lightweight match fabric", "Club customisation", "Full size grading"],
  },
  {
    title: "MorphShield Hoodie",
    label: "Lifestyle",
    image: "/images/Apparel/A8.webp",
    alt: "SVX MorphShield hoodie",
    description: "Modern protective hoodie shaped for travel, warm-up and active everyday use.",
    features: ["Structured hood", "Secure utility pockets", "Premium bonded details"],
  },
  {
    title: "MotionLock Joggers",
    label: "Bottoms",
    image: "/images/Apparel/A1.webp",
    alt: "SVX MotionLock joggers",
    description: "Tapered performance joggers with ergonomic movement and organised storage.",
    features: ["Four-way stretch options", "Zipped side pockets", "Team colour programmes"],
  },
  {
    title: "HydroLuxe Towels",
    label: "Textiles",
    image: "/images/Apparel/A11.webp",
    alt: "SVX HydroLuxe towels",
    description: "Premium sport and bath towels in coordinated colours and branded finishes.",
    features: ["High-absorbency cotton", "Quick-dry options", "Woven or embroidered marks"],
  },
  {
    title: "RecoveryCloud Robe",
    label: "Recovery",
    image: "/images/Apparel/A10.webp",
    alt: "SVX RecoveryCloud bath robe",
    description: "Soft premium robe for club, spa, hotel and post-performance recovery programmes.",
    features: ["Plush cotton construction", "Adjustable wrap fit", "Bespoke hospitality branding"],
  },
  {
    title: "AeroForm Polo",
    label: "Polo",
    image: "/images/Apparel/A4.webp",
    alt: "SVX AeroForm polo shirt",
    description: "Smart technical polo developed for teams, staff, travel and corporate programmes.",
    features: ["Breathable piqué options", "Shape-retaining collar", "Embroidery-ready chest"],
  },
  {
    title: "FlexGuard Trousers",
    label: "Workwear",
    image: "/images/Apparel/A9.webp",
    alt: "SVX FlexGuard work trousers",
    description: "Hard-working utility trousers with modern articulation and practical tool storage.",
    features: ["Reinforced wear zones", "Stretch movement panels", "Knee-pad compatibility"],
  },
  {
    title: "ProShield Workwear",
    label: "Industrial",
    image: "/images/Apparel/A13.webp",
    alt: "SVX ProShield workwear",
    description: "Coordinated industrial garments engineered for visibility, protection and identity.",
    features: ["High-visibility options", "Durable easy-care fabric", "Company branding systems"],
  },
  {
    title: "PackLite Jacket",
    label: "Outerwear",
    image: "/images/Apparel/A6.webp",
    alt: "SVX PackLite technical jacket",
    description: "Light packable shell for training, travel, weather protection and retail ranges.",
    features: ["Wind-resistant construction", "Water-repellent finish", "Compact pack-away design"],
  },
  {
    title: "ThermoMap Base Layer",
    label: "Base Layer",
    image: "/images/Apparel/A5.webp",
    alt: "SVX ThermoMap base layer",
    description: "Mapped next-to-skin layer supporting temperature control and unrestricted movement.",
    features: ["Seamless body mapping", "Fast moisture transfer", "Warm and cool variants"],
  },
  {
    title: "SculptRun Leggings",
    label: "Women",
    image: "/images/Apparel/A7.webp",
    alt: "SVX SculptRun leggings",
    description: "Supportive performance leggings with sculpted seam lines and secure storage.",
    features: ["Squat-proof fabric options", "High-rise waistband", "Phone pocket integration"],
  },
];

const developmentSteps = [
  "Market, use and target price",
  "Fabric, fit and construction",
  "Colour, graphics and branding",
  "Sampling, testing and approval",
  "Production, packaging and delivery",
];

export const metadata: Metadata = {
  title: 'Custom Sports Apparel & Teamwear OEM Manufacturing',
  description:
    'Explore the complete custom apparel collection: performance T-shirts, sweatshirts, football kits, hoodies, joggers, towels, polos, and workwear.',
  alternates: { canonical: '/products/apparel' },
  openGraph: {
    title: 'Custom Sports Apparel & Teamwear OEM Manufacturing | SVX',
    description:
      'Explore the complete custom apparel collection: performance T-shirts, sweatshirts, football kits, hoodies, joggers, towels, polos, and workwear.',
    url: '/products/apparel',
    images: [{ url: '/images/Apparel/A8.webp', width: 1200, height: 800, alt: 'SVX Custom Sports Apparel Manufacturing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Sports Apparel & Teamwear OEM Manufacturing | SVX',
    description:
      'Explore the complete custom apparel collection: performance T-shirts, sweatshirts, football kits, hoodies, joggers, and workwear.',
    images: ['/images/Apparel/A8.webp'],
  },
};

export default function ApparelPage() {
  return (
    <ProductCataloguePage
      category="Apparel"
      categorySlug="apparel"
      heroEyebrow="SVX apparel · product development"
      headline="Move freely."
      headlineAccent="Look distinctive."
      heroCopy="From performance teamwear to lifestyle, workwear and home textiles, SVX develops fit, fabric, trims, graphics and packaging around every customer brief."
      stats={[
        { value: "13", label: "Product categories" },
        { value: "30", label: "Years of experience" },
        { value: "1", label: "Accountable partner" },
      ]}
      catalogueEyebrow="Complete apparel capability"
      catalogueHeading={["Select a", "category"]}
      catalogueCopy="Every garment can be customised through fabric weight, colour, construction, fit, performance finish, SVX branding, size grading and retail packaging."
      items={apparelCategories}
      processHeading={["Sketch to", "delivery."]}
      developmentSteps={developmentSteps}
      footerLine="APPAREL · PRODUCT DEVELOPMENT · GLOBAL SOURCING"
      styles={styles}
    />
  );
}
