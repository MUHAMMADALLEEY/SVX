import fs from 'fs';
import path from 'path';

export const CATEGORY_SLUGS = [
  'apparel',
  'socks',
  'footballs',
  'bags',
  'sports-products',
  'accessories',
] as const;

export type CategorySlug = typeof CATEGORY_SLUGS[number];

const IMAGE_FILE_PATTERN = /\.(png|jpe?g|webp|svg|avif)$/i;

const CATALOGUE_IMAGE_DIRECTORIES: Partial<Record<CategorySlug, string>> = {
  apparel: 'Apparel',
  socks: 'socks',
  footballs: 'footballs',
  bags: 'bags',
};

function imagesInDirectory(
  directory: string,
  publicPath: string,
  exclude: RegExp = /$^/,
): string[] {
  if (!fs.existsSync(directory)) return [];

  return fs
    .readdirSync(directory)
    .filter((file) => IMAGE_FILE_PATTERN.test(file) && !exclude.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `${publicPath}/${file}`);
}

/** Reads the committed category images. No files are created at request time. */
export function getCategoryImages(slug: string): string[] {
  try {
    const productImages = imagesInDirectory(
      path.join(process.cwd(), 'public', 'products', slug),
      `/products/${slug}`,
      /^featured-/i,
    );
    const catalogueDirectory = CATALOGUE_IMAGE_DIRECTORIES[slug as CategorySlug];
    const catalogueImages = catalogueDirectory
      ? imagesInDirectory(
          path.join(process.cwd(), 'public', 'images', catalogueDirectory),
          `/images/${catalogueDirectory}`,
          /^product-world\./i,
        )
      : [];

    if (productImages.length > 0 || catalogueImages.length > 0) {
      return [...productImages, ...catalogueImages];
    }

    return imagesInDirectory(
      path.join(process.cwd(), 'public', 'products', slug),
      `/products/${slug}`,
    );
  } catch (err) {
    console.error(`Error reading category images for ${slug}:`, err);
    return [];
  }
}
