import { bagCatalogue, footballCatalogue, sockShowcaseImages, tshirtCatalogue } from "@/data/site-content";
import type { CatalogueProduct } from "@/types/site";

export type ProductRange = {
  slug: string;
  name: string;
  title: string;
  description: string;
  image: string;
  intro: string;
  details: { title: string; text: string }[];
  products: CatalogueProduct[];
};

export const productRanges: ProductRange[] = [
  {
    slug: "custom-footballs", name: "Footballs & sports balls", title: "Custom Footballs & Sports Balls",
    description: "Explore custom footballs, basketballs, volleyballs and promotional balls. Compare construction, panel designs and branding options with SportsVentureX.",
    image: "/headerimages/hero-footballs-v2.webp",
    intro: "Build a ball program around the way it will be used. Explore training, promotional, beach and match references, with construction and graphics considered together.",
    details: [
      { title: "Choose the construction", text: "Our references include synthetic covers, rubber constructions, reinforced backings and different bladder systems. Select the intended sport and playing conditions before agreeing the specification." },
      { title: "Make the panels your own", text: "Discuss panel artwork, colors and logo placement alongside size and weight. The sample is the point to review handling, surface finish and how the graphics sit on the finished ball." },
      { title: "Plan the order", text: "Send the reference, quantity, target market and required delivery date. Minimum quantities, sample costs and production timing are confirmed against your brief." },
    ], products: footballCatalogue,
  },
  {
    slug: "custom-sports-socks", name: "Custom sports socks", title: "Custom Sports Socks & Branded Multipacks",
    description: "Explore custom sports socks, crew styles, performance constructions and branded multipacks. Develop colors, knitted logos and packaging with SportsVentureX.",
    image: "/headerimages/hero-socks-v2.webp",
    intro: "From everyday crew socks to performance styles and coordinated multipacks, start with references that help define the fit, feel and presentation of your collection.",
    details: [
      { title: "Shape the collection", text: "Compare crew, quarter and ankle formats, lifestyle colorways and sport-focused designs. Discuss yarn composition, cushioning and support requirements during development." },
      { title: "Develop branded details", text: "Explore knitted marks, color blocking, labels and pack presentation. Samples help you review the readability of the logo and the balance of the finished design." },
      { title: "Confirm your specification", text: "The images are development references. Yarn blend, size range, minimum quantity and production schedule are confirmed for your specific order, rather than assumed from a photograph." },
    ], products: sockShowcaseImages.map((sock) => ({ ...sock, description: sock.alt, meta: sock.category, specs: [] })),
  },
  {
    slug: "custom-sports-bags", name: "Custom sports bags", title: "Custom Sports Bags, Backpacks & Waist Packs",
    description: "Discover custom sports backpacks and waist packs with print, color and trim options. Explore 600D polyester Oxford bag references from SportsVentureX.",
    image: "/headerimages/hero-bags-v2.webp",
    intro: "A useful bag carries the brand beyond the game. Explore backpacks and waist packs with solid colors, printed panels and practical storage details.",
    details: [
      { title: "Start with fabric and function", text: "The current bag references use PU-coated 600D polyester Oxford fabric with a water-repellent finish. Compare dimensions, pocket layout and the way each format will be carried." },
      { title: "Choose your branding", text: "Explore front DTF graphics, digitally printed panels, all-over patterns and contrast trims. Select a treatment that suits both the artwork and the construction." },
      { title: "Review the sample", text: "Confirm dimensions, print placement, zips and finishing before production. Share your expected quantity and timing so the team can advise on the proposed program." },
    ], products: bagCatalogue,
  },
  {
    slug: "custom-t-shirts", name: "Custom T-shirts", title: "Custom T-Shirts for Sports & Lifestyle Brands",
    description: "Explore custom performance T-shirts, cotton essentials, sublimated graphics and heavyweight fits, with fabric, color and branding development from SportsVentureX.",
    image: "/headerimages/hero-tshirts-v2.webp",
    intro: "Build the T-shirt around the wearer. Explore athletic, everyday and relaxed silhouettes, then develop the fabric, fit and decoration as one product.",
    details: [
      { title: "Find the right fabric and fit", text: "Compare performance polyester, combed cotton jersey and heavier cotton constructions. Choose the intended use and fit before finalizing size measurements and fabric specifications." },
      { title: "Develop the decoration", text: "The range includes print-ready cotton essentials, contrast performance panels and all-over sublimated graphics. Discuss artwork, labels and trims as part of the sample brief." },
      { title: "Agree production details", text: "Send the style reference, size breakdown, quantity and target delivery date. Fabric availability, decoration method and sampling needs inform the final quotation and schedule." },
    ], products: tshirtCatalogue,
  },
];
