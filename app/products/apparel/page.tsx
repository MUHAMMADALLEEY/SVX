import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { ContactBriefButton } from "@/components/ContactBriefModal";
import Header from "@/components/Header";
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
  title: "SVX Apparel | Complete Product Range",
  description:
    "Explore the SVX apparel collection: performance T-shirts, sweatshirts, football kits, hoodies, joggers, towels, robes, polos and workwear.",
  alternates: { canonical: "/products/apparel" },
};

export default function ApparelPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.shell}>
            <Link className={styles.backLink} href="/#products">
              <span aria-hidden="true">←</span> Back to product categories
            </Link>
            <p className={styles.eyebrow}>SVX apparel · product development</p>
            <h1>
              Move freely.<span>Look distinctive.</span>
            </h1>
            <p className={styles.heroCopy}>
              From performance teamwear to lifestyle, workwear and home textiles, SVX develops
              fit, fabric, trims, graphics and packaging around every customer brief.
            </p>
            <dl className={styles.stats}>
              <div><dt>13</dt><dd>Product categories</dd></div>
              <div><dt>30</dt><dd>Years of experience</dd></div>
              <div><dt>1</dt><dd>Accountable partner</dd></div>
            </dl>
          </div>
        </section>

        <section className={styles.catalogue} aria-labelledby="apparel-category-heading">
          <div className={styles.shell}>
            <div className={styles.catalogueIntro}>
              <div>
                <p className={styles.eyebrow}>Complete apparel capability</p>
                <h2 id="apparel-category-heading">Select a<br />category</h2>
              </div>
              <p>
                Every garment can be customised through fabric weight, colour, construction,
                fit, performance finish, SVX branding, size grading and retail packaging.
              </p>
            </div>

            <div className={styles.grid}>
              {apparelCategories.map((category, index) => (
                <article className={styles.card} key={category.title}>
                  <div className={styles.cardImage}>
                    <Image
                      src={category.image}
                      alt={category.alt}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                      priority={index < 3}
                    />
                    <ContactBriefButton
                      className={styles.cardAction}
                      defaultCategory="Apparel"
                      defaultProduct={category.title}
                    >
                      Select this category <span aria-hidden="true">↗</span>
                    </ContactBriefButton>
                  </div>
                  <div className={styles.cardBody}>
                    <p className={styles.cardIndex}>
                      {String(index + 1).padStart(2, "0")} / {category.label}
                    </p>
                    <h3>{category.title}</h3>
                    <p className={styles.cardDescription}>{category.description}</p>
                    <ul>
                      {category.features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.process} aria-labelledby="apparel-process-heading">
          <div className={`${styles.shell} ${styles.processLayout}`}>
            <div>
              <p className={styles.eyebrow}>Built around your brief</p>
              <h2 id="apparel-process-heading">Sketch to<br />delivery.</h2>
            </div>
            <ol>
              {developmentSteps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <footer>
        <div className="flex items-center text-white h-10">
          <BrandLogo className="h-8 w-auto" />
        </div>
        <span>APPAREL · PRODUCT DEVELOPMENT · GLOBAL SOURCING</span>
        <a className="footer-email" href="mailto:sales@sportsventurex.com">sales@sportsventurex.com</a>
        <a href="/">BACK TO MAIN WEBSITE</a>
      </footer>
    </>
  );
}
