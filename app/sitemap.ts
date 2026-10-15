import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const productRoutes = [
    { slug: "socks", priority: 0.9 },
    { slug: "footballs", priority: 0.9 },
    { slug: "bags", priority: 0.9 },
  ];

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      priority: 1.0,
    },
    ...productRoutes.map(({ slug, priority }) => ({
      url: absoluteUrl(`/products/${slug}`),
      lastModified,
      priority,
    })),
  ];
}
