import Image from "next/image";

interface ProductCardVisualProps {
  image: string;
  alt: string;
  kicker?: string;
  title?: string;
  actionLabel?: string;
  sizes: string;
  showPreviewArrow?: boolean;
  showContent?: boolean;
}

export default function ProductCardVisual({
  image,
  alt,
  kicker,
  title,
  actionLabel,
  sizes,
  showPreviewArrow = false,
  showContent = true,
}: ProductCardVisualProps) {
  return (
    <>
      <div className="category-card-media">
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          quality={100}
          className="category-card-img"
          referrerPolicy="no-referrer"
        />
        {showContent && <div className="category-card-overlay" />}
      </div>

      {showPreviewArrow && (
        <span className="product-gallery-preview-arrow" aria-hidden="true">↗</span>
      )}

      {showContent && (
        <div className="category-card-content">
          <span className="category-card-kicker">{kicker}</span>
          <h3>{title}</h3>
          <span className="category-card-action">
            {actionLabel}
            <span className="category-card-arrow" aria-hidden="true">→</span>
          </span>
        </div>
      )}
    </>
  );
}
