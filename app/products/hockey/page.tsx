import type { Metadata } from "next";
import ProductCataloguePage, { type CatalogueItem } from "../ProductCataloguePage";

const hockeyProducts: CatalogueItem[] = [
  {
    title: "Low-Bow Carbon Stick",
    label: "Elite",
    image: "/images/hockey/hockey-01.webp",
    description: "A premium low-bow composite direction for fast skills, control and powerful modern play.",
    features: ["Carbon-composite construction", "Reinforced head and shaft", "Performance grip system"],
  },
  {
    title: "Three-Level Stick Programme",
    label: "Complete Range",
    image: "/images/hockey/hockey-03.webp",
    description: "Wooden-hybrid, club composite and elite carbon options presented as one coordinated retail family.",
    features: ["Beginner, club and elite levels", "Mid-bow and low-bow profiles", "Matching branded balls"],
  },
  {
    title: "12-Stick Team Bundle",
    label: "Team Quantity",
    image: "/images/hockey/hockey-02.webp",
    description: "A consistent club and academy solution supplied as twelve coordinated sticks with six training balls.",
    features: ["Exactly 12 matching sticks", "Six practice balls", "Team colours and player IDs"],
  },
  {
    title: "Multi-Stick Hockey Bag",
    label: "Transport",
    image: "/images/hockey/hockey-04.webp",
    description: "A structured stick carrier with practical separate storage for training and competition use.",
    features: ["Capacity for 4–6 sticks", "Ball and wet-gear pockets", "Padded backpack harness"],
  },
];

export const metadata: Metadata = {
  title: 'Custom Field Hockey Sticks & Equipment Manufacturing',
  description:
    'Explore carbon-composite and wooden field hockey sticks, team bundles, practice balls, and multi-stick hockey bags developed for retail and club programmes.',
  alternates: { canonical: '/products/hockey' },
};

export default function HockeyPage() {
  return (
    <ProductCataloguePage
      category="Hockey"
      categorySlug="hockey"
      heroEyebrow="SVX field hockey · product development"
      headline="Hockey."
      headlineAccent="Equipment."
      heroCopy="Original wooden, hybrid and carbon-composite stick programmes supported by team quantities, balls and organised multi-stick transport."
      stats={[
        { value: "03", label: "Performance levels" },
        { value: "12", label: "Stick team set" },
        { value: "SVX", label: "Custom branding" },
      ]}
      catalogueEyebrow="Complete hockey capability"
      catalogueHeading={["Select a", "product"]}
      catalogueCopy="Develop single-stick retail lines or complete club programmes with custom bow profiles, carbon levels, grips, balls, bags and packaging."
      items={hockeyProducts}
      processHeading={["Retail to", "team quantities."]}
      developmentSteps={[
        "Select wooden, hybrid or composite construction",
        "Define bow, weight, balance and grip",
        "Coordinate sticks, balls, bags and branding",
        "Approve samples and production quantities",
      ]}
      footerLine="HOCKEY · PRODUCT DEVELOPMENT · SIALKOT"
    />
  );
}
