import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const productRoutes = [
    { slug: "socks", priority: 0.9, changeFrequency: "weekly" as const },
    { slug: "footballs", priority: 0.9, changeFrequency: "weekly" as const },
    { slug: "bags", priority: 0.9, changeFrequency: "weekly" as const },
  ];

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...productRoutes.map(({ slug, priority, changeFrequency }) => ({
      url: absoluteUrl(`/products/${slug}`),
      lastModified,
      changeFrequency,
      priority,
    })),
    {
      url: absoluteUrl("/privacy-policy"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
