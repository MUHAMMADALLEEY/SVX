import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-01T00:00:00.000Z");

  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/products/socks"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/products/footballs"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/products/bags"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/products/apparel"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/products/sports-products"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/products/hockey"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/products/cricket"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/products/pickleball-padel"), lastModified, changeFrequency: "monthly", priority: 0.9 },
  ];
}
