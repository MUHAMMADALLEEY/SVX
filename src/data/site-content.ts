import type {
  Faq,
  CatalogueCategory,
  CatalogueProduct,
  NavItem,
  ProcessStep,
  Reason,
  Service,
  SockShowcaseCategory,
  SockShowcaseImage,
} from "@/types/site";

export const navItems: NavItem[] = [
  { label: "Why us", href: "#why-us" },
  { label: "Catalogue", href: "#catalogue" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const sockShowcaseCategories: {
  label: SockShowcaseCategory;
  description: string;
}[] = [
  { label: "Multipacks", description: "Bundled colorways and retail-ready pack presentation." },
  { label: "Crew socks", description: "Classic crew silhouettes in solid and striped designs." },
  { label: "Performance socks", description: "Cushioning, support zones, and sport-focused construction." },
  { label: "Lifestyle colors", description: "Seasonal shades, everyday neutrals, and expressive palettes." },
  { label: "Logo / custom branding", description: "Knitted marks, labels, and custom graphics." },
];

const transparentSockImageIds = new Set([
  "black-six-pack-flat",
  "white-grey-technical-pair",
  "cream-retro-crew-pair",
  "blue-quarter-performance",
  "illustrated-white-crew",
  "orange-no-show",
  "core-neutral-lineup",
  "cream-retro-pair",
  "number-graphic-crew",
  "blue-technical-quarter",
]);

function sockImage(
  id: string,
  title: string,
  category: SockShowcaseCategory,
  alt: string,
): SockShowcaseImage {
  const extension = transparentSockImageIds.has(id) ? "png" : "jpg";
  return { id, title, category, image: `/images/socks/${id}.${extension}`, alt };
}

export const sockShowcaseImages: SockShowcaseImage[] = [
  sockImage("black-six-pack-flat", "Black six-pack flat lay", "Multipacks", "Six black crew socks arranged as a product lineup"),
  sockImage("white-grey-technical-pair", "White technical pair", "Performance socks", "White performance sock pair with grey reinforced zones"),
  sockImage("cream-retro-crew-pair", "Cream crew with retro bands", "Lifestyle colors", "Cream crew socks with orange and brown cuff bands"),
  sockImage("blue-quarter-performance", "Blue quarter performance concept", "Performance socks", "Blue quarter socks with contrasting technical support zones"),
  sockImage("illustrated-white-crew", "Illustrated crew concept", "Logo / custom branding", "White crew socks with a custom illustrated graphic"),
  sockImage("orange-no-show", "Orange no-show concept", "Performance socks", "Orange low-cut performance socks on a white background"),
  sockImage("number-graphic-crew", "Number graphic crew concept", "Logo / custom branding", "Red and blue crew socks with a knitted number graphic"),
  sockImage("pink-custom-performance", "White and pink custom crew", "Logo / custom branding", "White performance sock with pink cushioning and a custom graphic"),
  sockImage("four-design-development-board", "Four-design development board", "Logo / custom branding", "Four custom crew sock designs presented together"),
  sockImage("orange-graphic-crew", "Orange graphic crew concept", "Logo / custom branding", "Orange crew sock with a bold black knitted graphic"),
  sockImage("orange-logo-crew-form", "Orange logo crew on form", "Logo / custom branding", "Orange custom crew sock displayed on a foot form"),
  sockImage("core-neutral-lineup", "Core neutral lineup", "Lifestyle colors", "Grey, white, and black crew sock concepts arranged in a lineup"),
  sockImage("white-color-band-crew", "White performance crew with color bands", "Performance socks", "White performance crew sock with red, black, and grey bands"),
  sockImage("white-orange-band-performance", "Orange-band performance crew", "Performance socks", "White performance sock with orange and dark cuff bands"),
  sockImage("blue-technical-quarter", "Blue technical quarter concept", "Performance socks", "Blue technical quarter socks with contrasting support lines"),
  sockImage("purple-performance-crew", "Purple performance crew", "Performance socks", "Purple crew sock showing heel and support-zone construction"),
  sockImage("sage-performance-crew", "Sage performance crew", "Performance socks", "Sage green crew sock showing heel and support zones"),
  sockImage("navy-performance-crew", "Navy performance crew", "Performance socks", "Navy crew sock showing heel and sole construction"),
  sockImage("white-grey-cushioned-crew", "White and grey cushioned crew", "Performance socks", "White crew sock with grey cushioning at the heel and toe"),
  sockImage("white-grey-cushioned-back", "White cushioned crew back", "Performance socks", "White crew sock showing grey heel and sole construction"),
  sockImage("white-grey-technical-crew", "White and grey technical crew", "Performance socks", "White crew sock with grey technical cushioning zones"),
  sockImage("sage-performance-back", "Sage performance back", "Performance socks", "Sage green performance sock showing the reinforced heel"),
  sockImage("brown-quarter-back", "Brown quarter sock", "Performance socks", "Brown quarter-length sock showing heel support construction"),
  sockImage("red-striped-crew-back", "Red stripe crew construction", "Performance socks", "Back view of a red and white striped crew sock"),
  sockImage("red-stripe-crew", "White and red stripe crew", "Lifestyle colors", "White crew sock with an all-over red stripe pattern"),
  sockImage("pastel-color-lineup", "Pastel lifestyle color lineup", "Lifestyle colors", "Pink, cream, sage, and burgundy socks in a coordinated lineup"),
  sockImage("cream-retro-pair", "Cream retro crew pair", "Lifestyle colors", "Cream crew sock pair with orange and brown bands"),
  sockImage("orange-solid-crew", "Solid orange crew", "Lifestyle colors", "Solid orange crew sock displayed on a form"),
  sockImage("mustard-neutral-multipack", "Mustard neutral multipack", "Lifestyle colors", "Mustard and neutral crew socks bundled as a multipack"),
  sockImage("tan-neutral-multipack-angle", "Tan neutral multipack", "Lifestyle colors", "Tan and neutral crew socks bundled as a multipack"),
  sockImage("blue-burgundy-multipack", "Blue and burgundy multipack", "Lifestyle colors", "Blue and burgundy crew socks in a mixed-color pack"),
  sockImage("white-striped-multipack", "White striped multipack", "Multipacks", "White crew sock multipack with black stripe details"),
  sockImage("black-striped-multipack", "Black striped multipack", "Multipacks", "Black crew sock multipack with white stripe details"),
  sockImage("white-striped-pack-display", "White striped pack display", "Multipacks", "White striped crew socks in retail-ready pack presentation"),
  sockImage("white-multipack-angle", "White multipack angle", "Multipacks", "Angled view of a white and neutral sock multipack"),
  sockImage("white-grey-pack-side", "Core color pack side", "Multipacks", "White, grey, and black socks shown as a layered pack"),
  sockImage("white-black-crew-pack", "White and black crew pack", "Multipacks", "White and black crew socks bundled in a multipack"),
  sockImage("tan-multipack-front", "Tan multipack front", "Multipacks", "Tan and neutral crew socks in a front-facing pack"),
  sockImage("mixed-color-multipack-angle", "Mixed-color multipack", "Multipacks", "Blue, burgundy, and neutral crew socks in an angled pack"),
  sockImage("blue-burgundy-pack-angle", "Blue and burgundy pack angle", "Multipacks", "Angled view of blue and burgundy crew socks bundled together"),
  sockImage("blue-ribbed-crew", "Blue ribbed crew", "Crew socks", "Blue ribbed crew sock shown from the front"),
  sockImage("blue-crew-side", "Blue crew side view", "Crew socks", "Blue ribbed crew sock shown from the side"),
  sockImage("blue-crew-front", "Blue crew front", "Crew socks", "Blue crew sock shown from the front"),
  sockImage("navy-crew-front", "Navy crew front", "Crew socks", "Solid navy crew sock with a small knitted mark"),
  sockImage("navy-crew-back", "Navy crew back", "Crew socks", "Solid navy crew sock shown from the back"),
  sockImage("black-crew-studio", "Black crew studio view", "Crew socks", "Black crew sock presented against a retail display wall"),
  sockImage("black-crew-front", "Black crew front", "Crew socks", "Solid black crew sock displayed from the front"),
  sockImage("white-everyday-crew", "White everyday crew", "Crew socks", "Solid white everyday crew sock shown from the front"),
  sockImage("white-grey-crew-front", "White and grey crew front", "Crew socks", "White crew sock with a grey cuff and reinforced toe"),
  sockImage("white-crew-side", "White crew side view", "Crew socks", "White crew sock hanging in a side view"),
  sockImage("assorted-branded-samples", "Assorted branding samples", "Logo / custom branding", "Assorted sock samples showing custom branding treatments"),
  sockImage("sage-label-detail", "Sage label and material detail", "Logo / custom branding", "Close-up of sage sock material and product labelling"),
  sockImage("white-logo-pack-display", "White logo pack display", "Logo / custom branding", "White crew socks with visible knitted branding in a multipack"),
  sockImage("orange-logo-crew", "Orange custom logo crew", "Logo / custom branding", "Orange crew sock with a large knitted logo panel"),
];

export const footballCategories: CatalogueCategory[] = [
  { label: "Basketballs", description: "Rubber basketball builds for training and promotional programs." },
  { label: "Soccer balls", description: "Soccer constructions for training, beach play, and custom programs." },
  { label: "American footballs", description: "Laced American footballs in microfiber and synthetic builds." },
  { label: "Volleyballs", description: "Water-repellent beach and soft-touch match volleyballs." },
  { label: "Mini sets", description: "Compact multi-sport ball sets for gifting and promotions." },
  { label: "Training & promo", description: "Practical school-training and promotional ball constructions." },
];

function catalogueProduct(
  id: string,
  title: string,
  category: string,
  image: string,
  description: string,
  meta: string,
  specs: string[],
): CatalogueProduct {
  return {
    id,
    title,
    category,
    image,
    description,
    meta,
    specs,
    alt: `${title} product reference`,
  };
}

export const footballCatalogue: CatalogueProduct[] = [
  catalogueProduct("cellular-rubber-basketball", "Cellular rubber basketball", "Basketballs", "/images/footballs/football-01.png", "A high-resilience cellular rubber basketball with layered reinforcement and a balanced, high-retention bladder.", "Article 01 · Basketball", ["Cellular cured rubber", "Cross-laminated reinforcement", "Polyester-wound NR bladder"]),
  catalogueProduct("graphic-rubber-basketball", "Graphic natural-rubber basketball", "Basketballs", "/images/footballs/football-02.png", "A natural-rubber basketball with a synthetic composition and full-surface custom graphics.", "Article 02 · 600–650 g", ["Natural and synthetic rubber", "Custom all-over graphics", "Training-weight construction"]),
  catalogueProduct("monochrome-rubber-basketball", "Monochrome rubber basketball", "Basketballs", "/images/footballs/football-03.png", "A natural-rubber basketball in a monochrome custom graphic treatment.", "Article 03 · 600–650 g", ["Natural and synthetic rubber", "Custom graphic panels", "Training-weight construction"]),
  catalogueProduct("orange-promo-football", "Orange geometric promo football", "Training & promo", "/images/footballs/football-04.png", "A promotional football built from durable PVC enamel laminated onto a cloth backing.", "Article 04 · Promo ball", ["PVC enamel cover", "Cloth backing", "Polyester and latex reinforcement"]),
  catalogueProduct("sky-promo-football", "Sky-blue promo football", "Training & promo", "/images/footballs/football-05.png", "A durable promotional football with a bright custom panel design.", "Article 05 · Promo ball", ["PVC enamel cover", "Cloth backing", "Custom color program"]),
  catalogueProduct("lime-promo-football", "Lime promo football", "Training & promo", "/images/footballs/football-06.png", "A durable promotional football designed for bold custom colors and branding.", "Article 06 · Promo ball", ["PVC enamel cover", "Cloth backing", "Polyester and latex reinforcement"]),
  catalogueProduct("mini-graphic-soccer-ball", "Mini graphic soccer ball", "Mini sets", "/images/footballs/football-07.png", "A size-one mini soccer ball for promotional packs, gifting, and display.", "Article 07 · Size 1", ["PVC enamel cover", "Cloth backing", "Compact promotional format"]),
  catalogueProduct("mint-soccer-ball", "Mint training soccer ball", "Soccer balls", "/images/footballs/football-08.png", "A synthetic soccer ball in a high-contrast custom panel design.", "Article 08 · 400–450 g", ["Synthetic cover", "Custom panel graphics", "Full-size weight range"]),
  catalogueProduct("white-graphic-soccer-ball", "White graphic soccer ball", "Soccer balls", "/images/footballs/football-09.png", "A synthetic soccer ball with a clean white base and graphic brand panels.", "Article 09 · 400–450 g", ["Synthetic cover", "Custom graphic treatment", "Full-size weight range"]),
  catalogueProduct("korean-american-football", "Korean microfiber American football", "American footballs", "/images/footballs/football-10.png", "A size-five microfiber PU American football with rubber padding, a latex bladder, and PU drawstring lace.", "Article 10 · Size 5 · 400–425 g", ["Microfiber PU cover", "Rubber padding", "Latex bladder"]),
  catalogueProduct("green-tacky-football", "Green tacky American football", "American footballs", "/images/footballs/football-11.png", "A size-three tiled microfiber PU football with silicone padding and a tacky surface treatment for extra grip.", "Article 11 · Size 3 · 300–350 g", ["Microfiber PU cover", "Silicone sponge padding", "Tacky grip finish"]),
  catalogueProduct("black-synthetic-football", "Black synthetic American football", "American footballs", "/images/footballs/football-12.png", "A compact pimpled synthetic-leather football with a latex bladder and PU lace.", "Article 12 · Size 3 · 200–250 g", ["Pimpled synthetic leather", "Latex bladder", "PU drawstring lace"]),
  catalogueProduct("red-tacky-football", "Red tacky American football", "American footballs", "/images/footballs/football-13.png", "A size-three microfiber PU football with sponge-effect silicone padding and a high-grip surface treatment.", "Article 13 · Size 3 · 300–350 g", ["Microfiber PU cover", "Silicone sponge padding", "Tacky grip finish"]),
  catalogueProduct("turquoise-mini-ball-set", "Turquoise mini ball set", "Mini sets", "/images/footballs/football-14.png", "A coordinated three-piece set containing a mini soccer ball, American football, and basketball.", "Article 14 · Size 2 set · 850 g", ["Three-piece sports set", "Coordinated graphics", "Gift-ready concept"]),
  catalogueProduct("mixed-mini-ball-set", "Mixed mini ball set", "Mini sets", "/images/footballs/football-15.png", "A three-piece mini sports set with soccer, American football, and basketball formats.", "Article 15 · Size 2 set · 850 g", ["Three-piece sports set", "Mixed ball formats", "Custom presentation"]),
  catalogueProduct("anti-slip-beach-volleyball", "Anti-slip beach volleyball", "Volleyballs", "/images/footballs/football-16.png", "A water-repellent TPU beach volleyball with an anti-slip surface and yarn-wound butyl bladder.", "Article 16 · Beach volleyball", ["100% PU / TPU cover", "Anti-slip water-repellent finish", "Heat-and-pressure molded"]),
  catalogueProduct("six-panel-beach-soccer", "Six-panel beach soccer ball", "Soccer balls", "/images/footballs/football-17.png", "A high-shine, water-repellent six-panel beach soccer ball with a yarn-wound SR bladder.", "Article 17 · Sizes 4 and 5", ["100% PU / TPU cover", "Six-panel construction", "Heat-and-pressure molded"]),
  catalogueProduct("soft-touch-match-volleyball", "Soft-touch match volleyball", "Volleyballs", "/images/footballs/football-18.png", "A TPU match volleyball with a silk-soft touch finish and yarn-wound butyl bladder.", "Article 18 · Match volleyball", ["100% PU / TPU cover", "Silk-soft touch finish", "Heat-and-pressure molded"]),
  catalogueProduct("school-training-football", "School training football", "Training & promo", "/images/footballs/football-19.png", "A practical school-training football with a 2.5 mm multi-structure PU/PVC cover.", "Article 19 · 250–275 g", ["2.5 mm PU/PVC cover", "Knitted cloth backing", "Polyester-latex reinforcement"]),
  catalogueProduct("tournament-soccer-ball", "Tournament-inspired soccer ball", "Soccer balls", "/images/footballs/football-20.png", "A panelled soccer-ball reference for custom tournament-inspired graphics.", "Article 20 · Soccer ball", ["Custom panel artwork", "Full-size format", "Brand-ready surface"]),
  catalogueProduct("blue-panel-promo-ball", "Blue-panel promo football", "Training & promo", "/images/footballs/football-21.png", "A size-five promotional football with a 1.0 mm PVC enamel cover and high-retention latex bladder.", "Article 21 · Size 5", ["1.0 mm PVC enamel cover", "Cloth backing", "Seamless latex bladder"]),
  catalogueProduct("red-panel-training-ball", "Red-panel school training football", "Training & promo", "/images/footballs/football-22.png", "A size-five school-training football with a reinforced PVC enamel cover and balanced latex bladder.", "Article 22 · Size 5", ["1.0 mm PVC enamel cover", "Polyester-latex reinforcement", "High air retention"]),
];

export const bagCategories: CatalogueCategory[] = [
  { label: "Printed backpacks", description: "Backpacks developed around front graphics and full-fabric print treatments." },
  { label: "Solid backpacks", description: "Solid-color backpack programs with contrast trims and applied branding." },
  { label: "Waist packs", description: "Compact hands-free carry with adjustable webbing and custom graphics." },
];

const backpackDescription = "Made from PU-coated 600D polyester Oxford fabric with a water-repellent finish.";

export const bagCatalogue: CatalogueProduct[] = [
  catalogueProduct("basketball-graphic-backpack", "Basketball graphic backpack", "Printed backpacks", "/images/bags/bag-01.png", `${backpackDescription} Finished with a front DTF graphic and contrast zips.`, "Style DP909 · 42 × 27.5 × 14 cm", ["600D polyester Oxford", "PU-coated and water-repellent", "Front DTF branding"]),
  catalogueProduct("monogram-print-backpack", "Monogram front-print backpack", "Printed backpacks", "/images/bags/bag-02.png", `${backpackDescription} Features a digitally printed front panel and compact graphic layout.`, "Style DP910 · 42 × 27.5 × 14 cm", ["600D polyester Oxford", "Digital front print", "Contrast zipper detail"]),
  catalogueProduct("script-logo-backpack", "Script-logo backpack", "Solid backpacks", "/images/bags/bag-03.png", `${backpackDescription} A black solid-color build with an applied front logo and contrast zipper.`, "Style DP907 · 42 × 27.5 × 14 cm", ["600D polyester Oxford", "Solid-color construction", "Front DTF branding"]),
  catalogueProduct("turquoise-print-backpack", "Turquoise print backpack", "Printed backpacks", "/images/bags/bag-04.png", `${backpackDescription} Uses a full digital-print fabric treatment for maximum visual impact.`, "Style DP906 · 42 × 27.5 × 14 cm", ["600D polyester Oxford", "Full digital print", "Water-repellent finish"]),
  catalogueProduct("red-print-backpack", "Red print backpack", "Printed backpacks", "/images/bags/bag-05.png", `${backpackDescription} A bright full-print backpack reference with black trim and a front utility pocket.`, "Backpack · 42 × 27.5 × 14 cm", ["600D polyester Oxford", "Full digital print", "Front utility pocket"]),
  catalogueProduct("graphic-waist-pack", "Graphic waist pack", "Waist packs", "/images/bags/bag-06.png", `${backpackDescription} A compact waist-pack format with adjustable webbing and an all-over graphic treatment.`, "Waist pack · 38 × 10 × 19 cm", ["600D polyester Oxford", "Adjustable webbing strap", "Water-repellent finish"]),
  catalogueProduct("yellow-solid-backpack", "Yellow solid backpack", "Solid backpacks", "/images/bags/bag-07.png", backpackDescription, "Backpack · 42 × 27.5 × 14 cm", ["600D polyester Oxford", "Solid-color body", "Front utility pocket"]),
  catalogueProduct("mint-contrast-backpack", "Mint contrast backpack", "Solid backpacks", "/images/bags/bag-08.png", `${backpackDescription} A mint body with purple contrast zips and an applied front mark.`, "Style DP908 · 42 × 27.5 × 14 cm", ["600D polyester Oxford", "Contrast zipper program", "Water-repellent finish"]),
  catalogueProduct("blue-solid-backpack", "Blue solid backpack", "Solid backpacks", "/images/bags/bag-09.png", `${backpackDescription} A vivid blue solid-color backpack with black trim and front storage.`, "Backpack · 42 × 27.5 × 14 cm", ["600D polyester Oxford", "Solid-color body", "Front utility pocket"]),
  catalogueProduct("black-contrast-backpack", "Black contrast backpack", "Solid backpacks", "/images/bags/bag-10.png", `${backpackDescription} A black backpack with turquoise contrast piping, zipper, and lower panel.`, "Backpack · 42 × 27.5 × 14 cm", ["600D polyester Oxford", "Contrast trim details", "Water-repellent finish"]),
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
      "Yes. Send an enquiry with your product details and the SportsVentureX team will receive it directly.",
  },
];
