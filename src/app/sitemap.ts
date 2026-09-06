import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";
import { productRanges } from "@/data/product-ranges";

export default function sitemap(): MetadataRoute.Sitemap {
  const contentModified = new Date("2026-09-06T00:00:00.000Z");
  const legalModified = new Date("2026-08-29T00:00:00.000Z");
  return [
    { url: absoluteUrl("/"), lastModified: contentModified },
    ...["/catalogue", "/about", "/contact", ...productRanges.map((range) => `/${range.slug}`)].map((path) => ({ url: absoluteUrl(path), lastModified: contentModified })),
    ...["/privacy-policy", "/terms"].map((path) => ({ url: absoluteUrl(path), lastModified: legalModified })),
  ];
}
