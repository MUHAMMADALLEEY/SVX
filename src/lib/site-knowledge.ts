import {
  bagCatalogue,
  bagCategories,
  faqs,
  footballCatalogue,
  footballCategories,
  processSteps,
  qualityFocus,
  reasons,
  services,
  sockShowcaseCategories,
  sockShowcaseImages,
  tshirtCatalogue,
  tshirtCategories,
} from "@/data/site-content";
import { siteConfig } from "@/lib/site-config";

export type SiteKnowledgeDocument = {
  id: string;
  title: string;
  content: string;
  metadata: {
    source: string;
    section: string;
  };
};

function list(items: string[]) {
  return items.join(", ");
}

export const siteKnowledgeDocuments: SiteKnowledgeDocument[] = [
  {
    id: "company-overview",
    title: "SportsVentureX overview",
    content:
      `${siteConfig.name} develops custom footballs, socks, bags, T-shirts, and sports goods programs for growing brands. ` +
      "The work covers product development, custom branding, quality assurance, sourcing, production, packing, handover, and shipment preparation.",
    metadata: { source: "/", section: "Overview" },
  },
  ...services.map((service) => ({
    id: `service-${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    title: service.title,
    content: `${service.title}: ${service.description}`,
    metadata: { source: "/#solutions", section: "Services" },
  })),
  ...reasons.map((reason) => ({
    id: `reason-${reason.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    title: reason.title,
    content: `${reason.title}: ${reason.description}`,
    metadata: { source: "/#why-us", section: "Why choose us" },
  })),
  ...processSteps.map((step, index) => ({
    id: `process-${index + 1}`,
    title: step.title,
    content: `${index + 1}. ${step.title}: ${step.description}`,
    metadata: { source: "/#process", section: "Process" },
  })),
  {
    id: "quality-focus",
    title: "Quality focus",
    content: `SportsVentureX quality support focuses on ${list(qualityFocus)}.`,
    metadata: { source: "/#quality", section: "Quality" },
  },
  {
    id: "footballs",
    title: "Football and ball range",
    content:
      `SportsVentureX develops ball programs across ${list(footballCategories.map((category) => category.label))}. ` +
      `Catalogue references include ${list(footballCatalogue.slice(0, 12).map((item) => item.title))}.`,
    metadata: { source: "/#catalogue", section: "Products" },
  },
  {
    id: "socks",
    title: "Sock range",
    content:
      `SportsVentureX develops custom socks across ${list(sockShowcaseCategories.map((category) => category.label))}. ` +
      `Reference styles include ${list(sockShowcaseImages.slice(0, 18).map((item) => item.title))}.`,
    metadata: { source: "/#catalogue", section: "Products" },
  },
  {
    id: "bags",
    title: "Bag range",
    content:
      `SportsVentureX develops backpacks and waist packs across ${list(bagCategories.map((category) => category.label))}. ` +
      `Bag references include ${list(bagCatalogue.map((item) => `${item.title} (${item.meta})`))}.`,
    metadata: { source: "/#catalogue", section: "Products" },
  },
  {
    id: "tshirts",
    title: "T-shirt range",
    content:
      `SportsVentureX develops T-shirt programs across ${list(tshirtCategories.map((category) => category.label))}. ` +
      `T-shirt references include ${list(tshirtCatalogue.map((item) => `${item.title}: ${item.description}`))}.`,
    metadata: { source: "/#catalogue", section: "Products" },
  },
  ...faqs.map((faq) => ({
    id: `faq-${faq.question.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    title: faq.question,
    content: `${faq.question} ${faq.answer}`,
    metadata: { source: "/#contact", section: "FAQ" },
  })),
];

export function searchLocalKnowledge(query: string, limit = 4) {
  const terms = query
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((term) => term.length > 2);

  return siteKnowledgeDocuments
    .map((document) => {
      const haystack = `${document.title} ${document.content}`.toLowerCase();
      const score = terms.reduce((total, term) => total + (haystack.includes(term) ? 1 : 0), 0);
      return { document, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ document }) => document);
}
