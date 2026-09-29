import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import BrandLogo from '@/components/BrandLogo';
import ProductGalleryGrid, { type GalleryItem } from '@/components/ProductGalleryGrid';
import { ContactBriefButton } from '@/components/ContactBriefModal';
import { PRODUCT_CATEGORIES, getCategoryBySlug } from '@/data/product-categories';
import { getCategoryImages } from '@/lib/product-images';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Category Not Found | SVX',
    };
  }

  return {
    title: `${category.title} Programme | SVX Manufacturing & Sourcing`,
    description: category.description,
  };
}

export default async function ProductCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  // Read current catalogue images without mixing in homepage cover artwork.
  const scannedFolderImages = getCategoryImages(slug);

  // Build a consistent card model for every current catalogue image.
  const folderItems: GalleryItem[] = scannedFolderImages.map((imgPath, index) => {
    const filename = imgPath.split('/').pop() || '';
    const cleanName = filename
      .replace(/\.[^/.]+$/, '')
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase());

    return {
      id: `folder-${slug}-${index}`,
      title: `${category.title} Development Sample ${String(index + 1).padStart(2, '0')}`,
      image: imgPath,
      category: category.title,
      specs: ['Custom Build', 'Factory Standard'],
      alt: `${category.title} product sample ${index + 1}: ${cleanName}`,
    };
  });

  // The older catalogue entries refer to images that were replaced during the
  // asset migration. Display only paths confirmed to exist in public/.
  const allItems: GalleryItem[] = folderItems;

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#070a10] pb-20 pt-28 text-[#f5f7fa] sm:pb-24 sm:pt-32">
        {/* Category Header Section */}
        <section className="mx-auto mb-12 max-w-[1480px] px-4 sm:px-6 lg:px-10 2xl:px-12">
          <div className="mb-6">
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#4e9dff] hover:text-white uppercase transition-colors"
            >
              <span>←</span>
              <span>Back to Product Categories</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10 border-b border-white/10">
            <div className="lg:col-span-8">
              <p className="text-xs font-extrabold tracking-widest text-[#086dff] uppercase mb-3">
                SVX PRODUCT PROGRAMME
              </p>
              <h1 className="mb-4 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl md:text-7xl">
                {category.title}
              </h1>
              <p className="text-lg text-[#c1c8d2] max-w-3xl leading-relaxed">
                {category.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col lg:items-end justify-end gap-3">
              <div className="bg-[#0d131f] border border-white/10 px-4 py-2.5 rounded-lg flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff4c18] animate-pulse" />
                <span className="text-xs font-bold tracking-wider text-[#c1c8d2] uppercase">
                  {allItems.length} REFERENCES AVAILABLE
                </span>
              </div>
              <ContactBriefButton
                defaultCategory={category.title}
                className="cta mini inline-flex items-center justify-between"
              >
                <span>REQUEST THIS CATEGORY</span>
                <span>↗</span>
              </ContactBriefButton>
            </div>
          </div>

          {/* Highlights */}
          {category.stats && category.stats.length > 0 && (
            <div className="flex flex-wrap gap-2.5 mt-6">
              {category.stats.map((stat, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold tracking-wide text-[#aab3c1] bg-[#0d131f] border border-white/10 px-3 py-1.5 rounded-md"
                >
                  ✓ {stat}
                </span>
              ))}
            </div>
          )}
        </section>

        {/* 4 in a Row Product Grid */}
        <section className="mx-auto mb-16 max-w-[1480px] px-4 sm:mb-20 sm:px-6 lg:px-10 2xl:px-12">
          <div className="mb-7 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-wide">
                Development &amp; Production Gallery
              </h2>
              <p className="mt-1 text-sm text-[#8f99a8]">
                Full product images with four samples per row on large displays
              </p>
            </div>

          </div>

          <ProductGalleryGrid items={allItems} categoryTitle={category.title} />
        </section>

        {/* Action Brief Banner */}
        <section className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10 2xl:px-12" id="contact">
          <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-white/15 bg-gradient-to-r from-[#09152b] via-[#083fa3] to-[#086dff] p-7 shadow-2xl sm:p-10 md:flex-row md:items-center md:p-14">
            <div className="max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-white/80">
                START A SPECIFICATION BRIEF
              </span>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-3 tracking-tight font-sans">
                READY TO BUILD YOUR {category.title}?
              </h3>
              <p className="text-white/85 text-base leading-relaxed">
                Send your target price, estimated order quantity, destination market, and target timeline. We will structure the optimal factory and development route.
              </p>
            </div>
            <ContactBriefButton
              className="cta light whitespace-nowrap self-start md:self-center"
              defaultCategory={category.title}
            >
              SEND YOUR BRIEF <span>↗</span>
            </ContactBriefButton>
          </div>
        </section>
      </main>

      <footer>
        <div className="flex items-center text-white h-10">
          <BrandLogo className="h-8 w-auto" />
        </div>
        <span>MANUFACTURING · SOURCING · PRODUCT DEVELOPMENT</span>
        <a className="footer-email" href="mailto:sales@sportsventurex.com">sales@sportsventurex.com</a>
        <span>LONDON (UK) COMMERCIAL OFFICE · GLOBAL MANUFACTURING NETWORK</span>
      </footer>
    </>
  );
}
