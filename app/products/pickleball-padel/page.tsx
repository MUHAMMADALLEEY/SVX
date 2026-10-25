import type { Metadata } from "next";
import ProductCataloguePage, { type CatalogueItem } from "../ProductCataloguePage";

const racketProducts: CatalogueItem[] = [
  {
    title: "Carbon Padel Rackets",
    label: "Padel",
    image: "/images/pickleball-padel/pickleball-padel-05.webp",
    description: "A high-energy teardrop profile developed for balanced power, control and confident handling.",
    features: ["Carbon-style performance face", "Aerodynamic perforation pattern", "Comfort-wrapped grip"],
  },
  {
    title: "Power & Spin Paddles",
    label: "Pickleball",
    image: "/images/pickleball-padel/pickleball-padel-03.webp",
    description: "A bold two-tone paddle direction with a generous sweet spot for social and club play.",
    features: ["Textured face option", "Protective edge guard", "Coordinated ball colours"],
  },
  {
    title: "Control Carbon Paddles",
    label: "Performance",
    image: "/images/pickleball-padel/pickleball-padel-02.webp",
    description: "A clean premium carbon-look design focused on control, stability and repeatable placement.",
    features: ["Elongated control profile", "Cushioned perforated grip", "High-visibility practice balls"],
  },
  {
    title: "Club Carry Set",
    label: "Complete Set",
    image: "/images/pickleball-padel/pickleball-padel-04.webp",
    description: "A ready-to-play package bringing paddles, balls, protective covers and organised carry together.",
    features: ["Two branded paddles", "Six indoor and outdoor balls", "Protective covers and kit bag"],
  },
  {
    title: "Backpack Paddle Set",
    label: "Retail Set",
    image: "/images/pickleball-padel/pickleball-padel-01.webp",
    description: "A compact retail-ready pickleball package with coordinated paddles, balls, covers and backpack storage.",
    features: ["Two coordinated paddles", "Indoor and outdoor ball mix", "Organised backpack storage"],
  },
];

export const metadata: Metadata = {
  title: 'Custom Pickleball Paddles & Padel Rackets Manufacturing',
  description:
    'Explore carbon-face pickleball paddles, padel rackets, practice balls, covers, and complete retail carry sets developed for clubs and retail programmes.',
  alternates: { canonical: '/products/pickleball-padel' },
  openGraph: {
    title: 'Custom Pickleball Paddles & Padel Rackets Manufacturing | SVX',
    description:
      'Explore carbon-face pickleball paddles, padel rackets, practice balls, covers, and complete retail carry sets developed for clubs and retail programmes.',
    url: '/products/pickleball-padel',
    images: [{ url: '/images/pickleball-padel/pickleball-padel-02.webp', width: 1200, height: 800, alt: 'SVX Custom Pickleball & Padel Rackets Manufacturing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Pickleball Paddles & Padel Rackets Manufacturing | SVX',
    description:
      'Explore carbon-face pickleball paddles, padel rackets, practice balls, covers, and complete retail carry sets.',
    images: ['/images/pickleball-padel/pickleball-padel-02.webp'],
  },
};

export default function PickleballPadelPage() {
  return (
    <ProductCataloguePage
      category="Pickleball & Padel Rackets"
      categorySlug="pickleball-padel"
      heroEyebrow="SVX racquet sports · product development"
      headline="Pickleball"
      headlineAccent="& Padel."
      heroCopy="Purpose-built racket programmes combining confident SVX styling, practical construction and complete retail-ready accessories."
      stats={[
        { value: "04", label: "Launch directions" },
        { value: "01", label: "Complete carry set" },
        { value: "SVX", label: "Custom branding" },
      ]}
      catalogueEyebrow="Pickleball & padel capability"
      catalogueHeading={["Select a", "design"]}
      catalogueCopy="Each product can be developed around player level, face material, core thickness, grip, edge protection, colours, ball specification, packaging and buyer branding."
      items={racketProducts}
      processHeading={["Your brand.", "Your specification."]}
      developmentSteps={[
        "Select construction and player level",
        "Confirm artwork, colours and SVX branding",
        "Develop samples, balls, covers and packaging",
        "Approve production and quality standard",
      ]}
      footerLine="PICKLEBALL · PADEL · PRODUCT DEVELOPMENT"
    />
  );
}
