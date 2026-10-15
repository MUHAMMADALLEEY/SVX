import type { Metadata } from "next";
import ProductCataloguePage, { type CatalogueItem } from "../ProductCataloguePage";

const cricketProducts: CatalogueItem[] = [
  {
    title: "Professional Willow Bat",
    label: "Batting",
    image: "/images/cricket/cricket-04.webp",
    description: "Premium straight-grain profile with shaped shoulders, balanced pickup and modern SVX detailing.",
    features: ["English or Kashmir willow options", "Custom profile and weight", "Buyer branding and bat cover"],
  },
  {
    title: "Technical Batting Pads",
    label: "Protection",
    image: "/images/cricket/cricket-03.webp",
    description: "Lightweight articulated protection designed for mobility, ventilation and confident impact coverage.",
    features: ["Segmented high-density foam", "Contoured knee protection", "Junior to professional sizing"],
  },
  {
    title: "Gloves & Helmet",
    label: "Player Safety",
    image: "/images/cricket/cricket-01.webp",
    description: "Coordinated batting protection with flexible finger sections, airflow and secure head coverage.",
    features: ["Multi-section finger protection", "Ventilated padded palms", "Adjustable helmet and grille"],
  },
  {
    title: "Cricket Wheelie Bag",
    label: "Transport",
    image: "/images/cricket/cricket-02.webp",
    description: "Large organised kit storage with reinforced transport components for teams and travelling players.",
    features: ["External bat sleeves", "Ventilated footwear storage", "Heavy-duty wheels and handles"],
  },
];

export const metadata: Metadata = {
  title: 'Custom Cricket Equipment & Bat OEM Manufacturing',
  description:
    'Explore English and Kashmir willow cricket bats, technical pads, protective equipment, and cricket bags developed for global team programmes.',
  alternates: { canonical: '/products/cricket' },
};

export default function CricketPage() {
  return (
    <ProductCataloguePage
      category="Cricket"
      categorySlug="cricket"
      heroEyebrow="SVX cricket · product development"
      headline="Cricket."
      headlineAccent="Equipment."
      heroCopy="A coordinated professional range combining bat craftsmanship, lightweight impact protection and purpose-built transport."
      stats={[
        { value: "04", label: "Product groups" },
        { value: "SVX", label: "Custom branding" },
        { value: "Global", label: "Manufacturing" },
      ]}
      catalogueEyebrow="Complete cricket capability"
      catalogueHeading={["Select a", "product"]}
      catalogueCopy="Products can be developed for junior, academy, club and professional programmes with custom materials, colours, specifications and packaging."
      items={cricketProducts}
      processHeading={["Crafted for", "your market."]}
      developmentSteps={[
        "Select player level and target specification",
        "Confirm materials, protection and sizing",
        "Approve colours, branding and packaging",
        "Sample, test, produce and deliver",
      ]}
      footerLine="CRICKET · PRODUCT DEVELOPMENT · GLOBAL SOURCING"
    />
  );
}
