'use client';

import { useState } from 'react';
import Image from 'next/image';
import ProductCardVisual from '@/components/ProductCardVisual';

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category?: string;
  specs?: string[];
  alt?: string;
}

interface ProductGalleryGridProps {
  items: GalleryItem[];
  categoryTitle: string;
}

export default function ProductGalleryGrid({ items, categoryTitle }: ProductGalleryGridProps) {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  if (items.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-white/20 bg-[#0b1018] p-8 py-20 text-center">
        <p className="mb-2 text-lg font-bold text-white">No images added yet</p>
        <p className="text-sm text-[#8f99a8]">Drop your image files (.png, .jpg, .webp) into the folder for this category to display them here automatically.</p>
      </div>
    );
  }

  return (
    <>
      <div className="product-gallery-grid" data-category={categoryTitle.toLowerCase()}>
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveItem(item)}
            className="category-card product-gallery-card"
            aria-label={`View specification for ${item.title}`}
            data-category={categoryTitle.toLowerCase()}
          >
            <ProductCardVisual
              image={item.image}
              alt={item.alt || item.title}
              showPreviewArrow
              showContent={false}
              sizes="(max-width: 559px) calc(100vw - 32px), (max-width: 899px) 50vw, (max-width: 1179px) 33vw, 25vw"
            />
          </button>
        ))}
      </div>

      {activeItem && (
        <div className="product-gallery-modal animate-fadeIn" onClick={() => setActiveItem(null)}>
          <div className="product-gallery-modal-panel" role="dialog" aria-modal="true" aria-label={activeItem.title}>
            <button type="button" onClick={() => setActiveItem(null)} className="product-gallery-modal-close" aria-label="Close image preview">×</button>
            <div className="product-gallery-modal-media">
              <Image
                src={activeItem.image}
                alt={activeItem.alt || activeItem.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                quality={100}
                className="object-contain p-3 sm:p-6"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="product-gallery-modal-caption">{activeItem.title}</p>
          </div>
        </div>
      )}
    </>
  );
}
