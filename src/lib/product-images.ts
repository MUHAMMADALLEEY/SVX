import fs from 'fs';
import path from 'path';

export const CATEGORY_SLUGS = [
  't-shirts',
  'socks',
  'footballs',
  'bags',
  'sports-products',
  'accessories',
] as const;

export type CategorySlug = typeof CATEGORY_SLUGS[number];

const UPLOADED_SOURCE_FILES: Record<string, string> = {
  't-shirts': 'C:/Users/Muhammad Ali/.gemini/antigravity/brain/b6874c2b-664c-42a5-8bc4-377c3b8306ee/.user_uploaded/media_1790619592861.png',
  'footballs': 'C:/Users/Muhammad Ali/.gemini/antigravity/brain/b6874c2b-664c-42a5-8bc4-377c3b8306ee/.user_uploaded/media_1790619606629.jpg',
  'socks': 'C:/Users/Muhammad Ali/.gemini/antigravity/brain/b6874c2b-664c-42a5-8bc4-377c3b8306ee/.user_uploaded/media_1790619614045.png',
  'bags': 'C:/Users/Muhammad Ali/.gemini/antigravity/brain/b6874c2b-664c-42a5-8bc4-377c3b8306ee/.user_uploaded/media_1790619619633.jpg',
};

/**
 * Ensures all category folders exist under public/products/
 * and copies initial uploaded product images if not already copied.
 */
export function ensureCategoryFoldersAndAssets() {
  const publicDir = path.join(process.cwd(), 'public');
  const productsBaseDir = path.join(publicDir, 'products');

  if (!fs.existsSync(productsBaseDir)) {
    fs.mkdirSync(productsBaseDir, { recursive: true });
  }

  CATEGORY_SLUGS.forEach((slug) => {
    const categoryDir = path.join(productsBaseDir, slug);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    // Copy initial user-uploaded photo if available
    const srcFile = UPLOADED_SOURCE_FILES[slug];
    if (srcFile && fs.existsSync(srcFile)) {
      const ext = path.extname(srcFile);
      const destFile = path.join(categoryDir, `featured-01${ext}`);
      if (!fs.existsSync(destFile)) {
        try {
          fs.copyFileSync(srcFile, destFile);
        } catch (e) {
          console.error(`Failed to copy image for ${slug}:`, e);
        }
      }
    }
  });

  // Seed sample images for sports-products and accessories if empty
  const sportsDir = path.join(productsBaseDir, 'sports-products');
  const accessoriesDir = path.join(productsBaseDir, 'accessories');
  const sampleProductWorld = path.join(publicDir, 'assets', 'product-world.png');

  if (fs.existsSync(sampleProductWorld)) {
    const destSports = path.join(sportsDir, 'featured-01.png');
    if (!fs.existsSync(destSports)) {
      try {
        fs.copyFileSync(sampleProductWorld, destSports);
      } catch {}
    }
    const destAccessories = path.join(accessoriesDir, 'featured-01.png');
    if (!fs.existsSync(destAccessories)) {
      try {
        fs.copyFileSync(sampleProductWorld, destAccessories);
      } catch {}
    }
  }
}

/**
 * Reads all image filenames in public/products/[slug] dynamically
 */
export function getCategoryImages(slug: string): string[] {
  ensureCategoryFoldersAndAssets();
  const categoryDir = path.join(process.cwd(), 'public', 'products', slug);

  if (!fs.existsSync(categoryDir)) {
    return [];
  }

  try {
    const files = fs.readdirSync(categoryDir);
    return files
      .filter((file) => /\.(png|jpe?g|webp|svg|avif)$/i.test(file))
      .map((file) => `/products/${slug}/${file}`);
  } catch (err) {
    console.error(`Error reading category images for ${slug}:`, err);
    return [];
  }
}
