import type { Faq, NavItem, ProcessStep, Product, Reason, Service } from "@/types/site";

export const navItems: NavItem[] = [
  { label: "Why us", href: "#why-us" },
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const products: Product[] = [
  {
    name: "Footballs",
    eyebrow: "Match, training and promotional balls",
    description:
      "Durable football programs built around touch, shape retention, panel construction, and clean custom branding.",
    image: "/products/football-photo.jpg",
    features: ["Training balls", "Match-inspired builds", "Custom colorways", "Logo placement"],
  },
  {
    name: "Socks",
    eyebrow: "Performance comfort for everyday movement",
    description:
      "Athletic and lifestyle socks developed with fit, cushioning, yarn selection, and repeatable quality in mind.",
    image: "/products/socks-photo.jpg",
    features: ["Athletic socks", "Crew and ankle fits", "Compression zones", "Private labels"],
  },
  {
    name: "Bags",
    eyebrow: "Team, travel and everyday carry",
    description:
      "Custom bag ranges for sports, travel, promotions, and lifestyle use with thoughtful trims and practical storage.",
    image: "/products/bag-photo.jpg",
    features: ["Duffel bags", "Backpacks", "Kit bags", "Retail packaging"],
  },
];

export const services: Service[] = [
  {
    title: "Product Development",
    description:
      "Turn early product ideas into production-ready specifications, materials, trims, sizing, and samples.",
  },
  {
    title: "Custom Branding",
    description:
      "Build consistent brand moments through logos, colorways, labels, packaging, and product presentation.",
  },
  {
    title: "Quality Assurance",
    description:
      "Keep production aligned with agreed standards through sample review, material checks, and finishing control.",
  },
  {
    title: "Sourcing & Production",
    description:
      "Coordinate reliable product programs across footballs, socks, and bags with clear timelines and practical guidance.",
  },
];

export const reasons: Reason[] = [
  {
    title: "Product thinking that stays practical",
    description:
      "We turn the early brief into clear, workable product decisions around materials, construction, fit, and finish.",
  },
  {
    title: "Brand details that belong on the product",
    description:
      "Colour, logos, labels, packaging, and trims are considered as one consistent product story, not added at the end.",
  },
  {
    title: "A process you can follow",
    description:
      "From the first sample to production readiness, each step stays visible so decisions remain clear and timely.",
  },
  {
    title: "Quality with a point of view",
    description:
      "We focus on the details customers notice: feel, durability, finishing, and the confidence a product gives your brand.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Define",
    description: "Clarify the product, audience, branding needs, target quality, and commercial expectations.",
  },
  {
    title: "Develop",
    description: "Create samples, refine materials, adjust details, and prepare the product for repeatable production.",
  },
  {
    title: "Produce",
    description: "Manage production with steady communication, quality checkpoints, and organized documentation.",
  },
  {
    title: "Deliver",
    description: "Support packing, handover, and shipment preparation so the finished goods are ready for market.",
  },
];

export const qualityFocus = [
  "Material selection",
  "Sample refinement",
  "Brand consistency",
  "Production checks",
  "Packaging readiness",
];

export const faqs: Faq[] = [
  {
    question: "Can SportsVentureX support custom branding?",
    answer:
      "Yes. The site presents custom branding as a core capability across product colorways, logos, labels, packaging, and finishing details.",
  },
  {
    question: "Which products are included in the first website version?",
    answer:
      "The first version focuses on footballs, socks, and bags, with room to add sportswear or accessories later.",
  },
  {
    question: "Is the contact form connected?",
    answer:
      "Not yet. For this launch page, the contact form is visual-only and marked as coming soon.",
  },
];
