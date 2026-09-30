import type { Metadata } from "next";
import ProductCataloguePage, { type CatalogueItem } from "../ProductCataloguePage";

const sportsProducts: CatalogueItem[] = [
  {
    title: "Speed & Agility Training Kit",
    label: "Training",
    image: "/images/sports-products/sports-product-01.webp",
    description: "A complete coaching set for speed, footwork, movement and team-session organisation.",
    features: ["Training bib and cone sets", "Agility ladder and hurdles", "Resistance band options"],
  },
  {
    title: "Cricket Equipment Set",
    label: "Cricket",
    image: "/images/sports-products/sports-product-02.webp",
    description: "A coordinated player package combining batting, protection and match-day equipment.",
    features: ["Bat, pads and gloves", "Helmet and ball options", "Junior to professional sizing"],
  },
  {
    title: "Team Bag Programme",
    label: "Bags",
    image: "/images/sports-products/sports-product-03.webp",
    description: "A coordinated collection of team, travel, duffle and equipment-carry solutions.",
    features: ["Multiple bag formats", "Reinforced carry systems", "Custom club branding"],
  },
  {
    title: "Carbon Padel Rackets",
    label: "Padel",
    image: "/images/sports-products/sports-product-04.webp",
    description: "Performance-focused teardrop rackets developed around power, control and confident handling.",
    features: ["Carbon-style face options", "Aerodynamic perforation", "Custom grip and balance"],
  },
  {
    title: "Multi-Sport Ball Range",
    label: "Balls",
    image: "/images/sports-products/sports-product-05.webp",
    description: "A coordinated ball programme for team sport, training, recreation and retail presentation.",
    features: ["Multiple sport formats", "Match and training levels", "Custom colour and branding"],
  },
  {
    title: "Protective Equipment",
    label: "Protection",
    image: "/images/sports-products/sports-product-06.webp",
    description: "Impact protection for players across training, competition and contact-sport programmes.",
    features: ["Head, hand and limb protection", "Ergonomic padded construction", "Complete size grading"],
  },
  {
    title: "Match & Training Footballs",
    label: "Football",
    image: "/images/sports-products/sports-product-07.webp",
    description: "Purpose-built footballs covering professional, club, academy and everyday training levels.",
    features: ["Match and training builds", "Custom panel artwork", "Sizes 3, 4 and 5"],
  },
  {
    title: "Training & Reaction Balls",
    label: "Coordination",
    image: "/images/sports-products/sports-product-08.webp",
    description: "A varied ball set for throwing, catching, reaction, coordination and skills practice.",
    features: ["Multiple weights and textures", "High-visibility colours", "Club and school sets"],
  },
  {
    title: "Hockey Stick Range",
    label: "Hockey",
    image: "/images/sports-products/sports-product-09.webp",
    description: "Wooden, hybrid and composite sticks coordinated across beginner, club and elite levels.",
    features: ["Multiple construction levels", "Mid-bow and low-bow options", "Matching balls and branding"],
  },
  {
    title: "Pickleball Backpack Set",
    label: "Pickleball",
    image: "/images/sports-products/sports-product-10.webp",
    description: "A compact ready-to-play set bringing paddles, balls, covers and backpack storage together.",
    features: ["Two branded paddles", "Indoor and outdoor balls", "Organised backpack carry"],
  },
  {
    title: "Power & Spin Paddles",
    label: "Pickleball",
    image: "/images/sports-products/sports-product-11.webp",
    description: "Textured pickleball paddles with a generous sweet spot for social, school and club play.",
    features: ["Textured face options", "Protective edge guards", "Comfort-wrapped grips"],
  },
  {
    title: "Club Pickleball Carry Set",
    label: "Complete Set",
    image: "/images/sports-products/sports-product-12.webp",
    description: "A complete organised package for clubs, coaching sessions and retail-ready programmes.",
    features: ["Paddles and protective covers", "Six high-visibility balls", "Structured multi-pocket bag"],
  },
  {
    title: "Boxing Glove Programme",
    label: "Combat",
    image: "/images/sports-products/sports-product-13.webp",
    description: "A complete glove family developed for competition, training, sparring, bag work and youth use.",
    features: ["Multiple padding densities", "Secure wrist systems", "Adult and youth sizing"],
  },
  {
    title: "Control Carbon Paddles",
    label: "Performance",
    image: "/images/sports-products/sports-product-14.webp",
    description: "Premium carbon-look paddles focused on control, stability and repeatable placement.",
    features: ["Elongated control profile", "Cushioned perforated grip", "Coordinated practice balls"],
  },
  {
    title: "Cooling Towels",
    label: "Recovery",
    image: "/images/sports-products/sports-product-15.webp",
    description: "Lightweight reusable towels for training, travel, warm-weather sport and recovery.",
    features: ["Fast-cooling fabric options", "Compact storage pouches", "Custom colours and marks"],
  },
  {
    title: "Football Team Carry Set",
    label: "Transport",
    image: "/images/sports-products/sports-product-16.webp",
    description: "An organised high-capacity solution for transporting footballs and coaching equipment.",
    features: ["Multi-ball capacity", "Reinforced handles and base", "Coach-accessory storage"],
  },
  {
    title: "Training Gloves & Mitts",
    label: "Boxing",
    image: "/images/sports-products/sports-product-17.webp",
    description: "Coordinated boxing gloves and training mitts for fitness, coaching and skills programmes.",
    features: ["Impact-absorbing foam options", "Ventilated palm construction", "Programme colour matching"],
  },
  {
    title: "Mesh Ball Carry Bag",
    label: "Equipment",
    image: "/images/sports-products/sports-product-18.webp",
    description: "A breathable high-capacity carry solution for mixed training-ball and team-equipment sets.",
    features: ["Ventilated mesh body", "Secure drawcord closure", "Club logo application"],
  },
  {
    title: "Thermal Training Hoods",
    label: "Cold Weather",
    image: "/images/sports-products/sports-product-19.webp",
    description: "Protective close-fitting hoods developed for cold-weather training, travel and outdoor work.",
    features: ["Thermal stretch fabrics", "Breathable face panels", "Multiple coverage profiles"],
  },
];

export const metadata: Metadata = {
  title: "Custom Sports Products Development | SVX",
  description: "Explore 19 SVX sports-product programmes spanning training, balls, protection, rackets, boxing, recovery and equipment carry.",
  alternates: { canonical: "/products/sports-products" },
};

export default function SportsProductsPage() {
  return (
    <ProductCataloguePage
      category="Sports Products"
      categorySlug="sports-products"
      heroEyebrow="SVX sports products · product development"
      headline="Train smarter."
      headlineAccent="Perform stronger."
      heroCopy="From coaching equipment and team-sport hardware to protection, rackets, recovery and carry solutions, SVX develops every product around the buyer brief."
      stats={[
        { value: "19", label: "Product groups" },
        { value: "30", label: "Years of experience" },
        { value: "1", label: "Accountable partner" },
      ]}
      catalogueEyebrow="Complete sports capability"
      catalogueHeading={["Select a", "category"]}
      catalogueCopy="Every product can be developed around its user, performance level, materials, construction, colours, branding, testing requirements and retail packaging."
      items={sportsProducts}
      processHeading={["Brief to", "game-ready."]}
      developmentSteps={[
        "Market, sport and target price",
        "Materials, construction and performance",
        "Colour, branding and product coordination",
        "Sampling, testing and approval",
        "Production, packaging and delivery",
      ]}
      footerLine="SPORTS PRODUCTS · DEVELOPMENT · GLOBAL SOURCING"
    />
  );
}
