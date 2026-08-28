"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const galleryPageSize = 4;

export type RangeCategory = { label: string; description: string };

export type RangeItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  description?: string;
  meta?: string;
  specs?: string[];
};

type ProductRangeSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  stats: string[];
  categories: RangeCategory[];
  items: RangeItem[];
  featuredLabel: string;
  fallbackImage: string;
};

type RangeImageProps = {
  image: string;
  alt: string;
  fallbackImage: string;
  sizes: string;
  priority?: boolean;
};

function RangeImage({ image, alt, fallbackImage, sizes, priority = false }: RangeImageProps) {
  const [source, setSource] = useState(image);

  useEffect(() => setSource(image), [image]);

  return (
    <Image
      src={source}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => {
        if (source !== fallbackImage) setSource(fallbackImage);
      }}
    />
  );
}

export function ProductRangeSection({
  id,
  eyebrow,
  title,
  description,
  stats,
  categories,
  items,
  featuredLabel,
  fallbackImage,
}: ProductRangeSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? items
        : items.filter((item) => item.category === activeCategory),
    [activeCategory, items],
  );

  const featuredItem = items[0];
  const pageCount = Math.max(1, Math.ceil(filteredItems.length / galleryPageSize));
  const pageStart = currentPage * galleryPageSize;
  const visibleItems = filteredItems.slice(pageStart, pageStart + galleryPageSize);
  const selectedItem = selectedIndex === null ? null : filteredItems[selectedIndex];
  const lightboxPosition = selectedIndex === null ? 0 : selectedIndex + 1;

  function selectCategory(category: string) {
    setActiveCategory(category);
    setCurrentPage(0);
    setSelectedIndex(null);
  }

  function closeLightbox() {
    setSelectedIndex(null);
  }

  function showPrevious() {
    setSelectedIndex((index) => {
      if (index === null) return null;
      return (index - 1 + filteredItems.length) % filteredItems.length;
    });
  }

  function showNext() {
    setSelectedIndex((index) => {
      if (index === null) return null;
      return (index + 1) % filteredItems.length;
    });
  }

  useEffect(() => {
    if (selectedIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, filteredItems.length]);

  if (!featuredItem) return null;

  return (
    <section id={id} className="content-section range-section">
      <div className="section-shell">
        <div className="range-showcase-header range-enter">
          <div className="range-showcase-copy">
            <div className="range-overline">
              <p className="eyebrow">{eyebrow}</p>
              <span>{items.length.toString().padStart(2, "0")} product references</span>
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="range-stat-list" aria-label={`${eyebrow} capabilities`}>
              {stats.map((stat) => <span key={stat}>{stat}</span>)}
            </div>
          </div>

          <button
            type="button"
            className="range-featured-frame"
            onClick={() => {
              selectCategory("All");
              setSelectedIndex(0);
            }}
            aria-label={`Open featured sample: ${featuredItem.title}`}
          >
            <RangeImage
              image={featuredItem.image}
              alt={featuredItem.alt}
              fallbackImage={fallbackImage}
              sizes="(max-width: 720px) calc(100vw - 32px), (max-width: 980px) calc(100vw - 64px), 52vw"
              priority
            />
            <span className="range-featured-label">{featuredLabel}</span>
          </button>
        </div>

        <div className="range-filter-bar range-enter" aria-label={`Filter ${eyebrow.toLowerCase()} examples`}>
          <button
            type="button"
            className={`range-filter-button${activeCategory === "All" ? " is-active" : ""}`}
            aria-pressed={activeCategory === "All"}
            onClick={() => selectCategory("All")}
          >
            All <span>{items.length}</span>
          </button>
          {categories.map((category) => {
            const count = items.filter((item) => item.category === category.label).length;
            return (
              <button
                type="button"
                key={category.label}
                className={`range-filter-button${activeCategory === category.label ? " is-active" : ""}`}
                aria-pressed={activeCategory === category.label}
                title={category.description}
                onClick={() => selectCategory(category.label)}
              >
                {category.label} <span>{count}</span>
              </button>
            );
          })}
        </div>

        <div className="range-gallery-grid" key={`${activeCategory}-${currentPage}`}>
          {visibleItems.map((item, index) => (
            <button
              type="button"
              className="range-gallery-item"
              key={item.id}
              onClick={() => setSelectedIndex(pageStart + index)}
              aria-label={`Open ${item.title}`}
            >
              <span className="range-gallery-image">
                <RangeImage image={item.image} alt={item.alt} fallbackImage={fallbackImage} sizes="(max-width: 980px) 46vw, 23vw" />
                <span className="range-gallery-index">{String(pageStart + index + 1).padStart(2, "0")}</span>
                <span className="range-gallery-view" aria-hidden="true">
                  <ArrowUpRight size={17} strokeWidth={1.8} />
                </span>
              </span>
              <span className="range-gallery-meta">
                <strong>{item.title}</strong>
                <small>{item.category}</small>
                {item.meta ? <span>{item.meta}</span> : null}
              </span>
            </button>
          ))}
        </div>

        <nav className="range-pagination" aria-label={`${eyebrow} gallery pages`}>
          <button type="button" onClick={() => setCurrentPage((page) => Math.max(0, page - 1))} disabled={currentPage === 0} aria-label="Previous gallery page">
            <ChevronLeft size={20} strokeWidth={1.8} aria-hidden="true" />
          </button>
          <p aria-live="polite"><strong>{currentPage + 1}</strong><span>/</span>{pageCount}</p>
          <button type="button" onClick={() => setCurrentPage((page) => Math.min(pageCount - 1, page + 1))} disabled={currentPage === pageCount - 1} aria-label="Next gallery page">
            <ChevronRight size={20} strokeWidth={1.8} aria-hidden="true" />
          </button>
          <span className="range-pagination-summary">
            {pageStart + 1}-{Math.min(pageStart + galleryPageSize, filteredItems.length)} of {filteredItems.length}
          </span>
        </nav>
      </div>

      {selectedItem ? (
        <div className="range-lightbox" role="dialog" aria-modal="true" aria-label="Product image preview">
          <button type="button" className="range-lightbox-backdrop" onClick={closeLightbox} aria-label="Close product preview" />
          <div className="range-lightbox-panel">
            <div className="range-lightbox-image">
              <RangeImage image={selectedItem.image} alt={selectedItem.alt} fallbackImage={fallbackImage} sizes="90vw" />
            </div>
            <div className="range-lightbox-controls">
              <div className="range-lightbox-copy">
                <strong>{selectedItem.title}</strong>
                <span>{selectedItem.category} · {lightboxPosition} / {filteredItems.length}</span>
                {selectedItem.description ? <p>{selectedItem.description}</p> : null}
                {selectedItem.specs?.length ? (
                  <div className="range-lightbox-specs">
                    {selectedItem.specs.map((spec) => <small key={spec}>{spec}</small>)}
                  </div>
                ) : null}
              </div>
              <div className="range-lightbox-actions">
                <button type="button" onClick={showPrevious}>Previous</button>
                <button type="button" onClick={showNext}>Next</button>
                <button type="button" onClick={closeLightbox}>Close</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
