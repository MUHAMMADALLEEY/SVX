"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { type CSSProperties, useState } from "react";
import { ProductRangeSection } from "@/components/sections/ProductRangeSection";
import {
  bagCatalogue,
  bagCategories,
  footballCatalogue,
  footballCategories,
  sockShowcaseCategories,
  sockShowcaseImages,
  tshirtCatalogue,
  tshirtCategories,
} from "@/data/site-content";

type ProductFamily = "footballs" | "socks" | "bags" | "tshirts";

const totalCatalogueReferences =
  footballCatalogue.length + sockShowcaseImages.length + bagCatalogue.length + tshirtCatalogue.length;

const productFamilies = {
  footballs: {
    label: "Footballs",
    countLabel: `${footballCatalogue.length} references`,
    previewImage: footballCatalogue[0].image,
    previewAlt: "Preview of the football catalogue",
    eyebrow: "Ball range",
    title: "Built for every kind of play.",
    description:
      "From training footballs and basketballs to beach, match, mini, and American-football formats, we develop each program around its purpose, feel, construction, and brand expression.",
    stats: ["Training, match and promotional", "Multiple sport formats", "Custom panels and branding"],
    categories: footballCategories,
    items: footballCatalogue,
    featuredLabel: "Featured ball sample",
    fallbackImage: "/products/football-photo.jpg",
  },
  socks: {
    label: "Socks",
    countLabel: `${sockShowcaseImages.length} references`,
    previewImage: sockShowcaseImages[1].image,
    previewAlt: "Preview of the custom sock catalogue",
    eyebrow: "Sock range",
    title: "A deeper look at custom socks.",
    description:
      "Explore multipacks, everyday crew styles, performance construction, custom colors, and branded details. Every program can be refined around your audience, presentation, and target quality.",
    stats: ["Crew, quarter and ankle", "Multipack presentation", "Custom color and logo placement"],
    categories: sockShowcaseCategories,
    items: sockShowcaseImages,
    featuredLabel: "Featured sock sample",
    fallbackImage: "/products/socks-photo.jpg",
  },
  bags: {
    label: "Bags",
    countLabel: `${bagCatalogue.length} references`,
    previewImage: bagCatalogue[0].image,
    previewAlt: "Preview of the bag catalogue",
    eyebrow: "Bag range",
    title: "Carry systems with brand presence.",
    description:
      "Explore backpacks and waist packs developed in water-repellent 600D Oxford fabric, with options for solid colors, contrast trims, applied marks, and full digital prints.",
    stats: ["600D polyester Oxford", "Water-repellent PU coating", "Print and trim customization"],
    categories: bagCategories,
    items: bagCatalogue,
    featuredLabel: "Featured bag sample",
    fallbackImage: "/products/bag-photo.jpg",
  },
  tshirts: {
    label: "T-shirts",
    countLabel: `${tshirtCatalogue.length} references`,
    previewImage: tshirtCatalogue[0].image,
    previewAlt: "Preview of the custom T-shirt catalogue",
    eyebrow: "T-shirt range",
    title: "Custom tees, built beyond the graphic.",
    description:
      "Explore performance, cotton, sublimated, and heavyweight T-shirts developed around fabric, fit, construction, and decoration—not just a logo on a blank.",
    stats: ["Cotton and performance fabrics", "Classic, athletic and relaxed fits", "Custom print, color and branding"],
    categories: tshirtCategories,
    items: tshirtCatalogue,
    featuredLabel: "Featured T-shirt sample",
    fallbackImage: "/images/tshirts/classic-cotton-tee.png",
  },
} satisfies Record<ProductFamily, {
  label: string;
  countLabel: string;
  previewImage: string;
  previewAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  stats: string[];
  categories: { label: string; description: string }[];
  items: Array<{ id: string; title: string; category: string; image: string; alt: string }>;
  featuredLabel: string;
  fallbackImage: string;
}>;

export function ProductCatalogueSection() {
  const reduceMotion = useReducedMotion();
  const [activeFamily, setActiveFamily] = useState<ProductFamily>("footballs");
  const activeRange = productFamilies[activeFamily];
  const familyKeys = Object.keys(productFamilies) as ProductFamily[];
  const activeFamilyIndex = familyKeys.indexOf(activeFamily);

  return (
    <>
      <section id="catalogue" className="catalogue-switcher">
        <div className="section-shell">
          <div className="catalogue-switcher-heading reveal">
            <div>
              <p className="eyebrow">Product catalogue · {totalCatalogueReferences} references</p>
              <h2>What are we<br />building?</h2>
            </div>
            <p>
              Select a category to explore real development references, available constructions,
              materials, and customization opportunities.
            </p>
          </div>

          <div
            className="catalogue-tabs"
            role="tablist"
            aria-label="Product ranges"
            style={{
              "--active-tab": activeFamilyIndex,
              "--active-column": activeFamilyIndex % 2,
              "--active-row": Math.floor(activeFamilyIndex / 2),
            } as CSSProperties}
          >
            <span className="catalogue-tabs-indicator" aria-hidden="true" />
            {familyKeys.map((family) => {
              const item = productFamilies[family];
              const isActive = activeFamily === family;

              return (
                <button
                  type="button"
                  role="tab"
                  key={family}
                  id={`catalogue-tab-${family}`}
                  aria-selected={isActive}
                  aria-controls="selected-product-range"
                  tabIndex={isActive ? 0 : -1}
                  className={isActive ? "is-active" : ""}
                  onClick={() => setActiveFamily(family)}
                  onKeyDown={(event) => {
                    const directions: Partial<Record<string, number>> = {
                      ArrowRight: 1,
                      ArrowLeft: -1,
                      ArrowDown: 2,
                      ArrowUp: -2,
                    };
                    const direction = directions[event.key];

                    if (direction === undefined) return;

                    event.preventDefault();
                    const nextIndex = (activeFamilyIndex + direction + familyKeys.length) % familyKeys.length;
                    const nextFamily = familyKeys[nextIndex];

                    setActiveFamily(nextFamily);
                    requestAnimationFrame(() => {
                      document.getElementById(`catalogue-tab-${nextFamily}`)?.focus();
                    });
                  }}
                >
                  <span className="catalogue-tab-image" aria-hidden="true">
                    <Image src={item.previewImage} alt={item.previewAlt} fill sizes="72px" />
                  </span>
                  <span className="catalogue-tab-copy">
                    <strong>{item.label}</strong>
                    <small>{item.countLabel}</small>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <motion.div
        key={activeFamily}
        initial={reduceMotion ? false : { y: 14 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        id="selected-product-range"
        role="tabpanel"
        aria-labelledby={`catalogue-tab-${activeFamily}`}
      >
        <ProductRangeSection
          key={activeFamily}
          id="product-range"
          eyebrow={activeRange.eyebrow}
          title={activeRange.title}
          description={activeRange.description}
          stats={activeRange.stats}
          categories={activeRange.categories}
          items={activeRange.items}
          featuredLabel={activeRange.featuredLabel}
          fallbackImage={activeRange.fallbackImage}
        />
      </motion.div>
    </>
  );
}
