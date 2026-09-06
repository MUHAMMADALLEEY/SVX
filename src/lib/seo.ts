import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title, description, alternates: { canonical: path },
    openGraph: { title: `${title} | ${siteConfig.name}`, description, url: absoluteUrl(path), type: "website", siteName: siteConfig.name, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SportsVentureX custom sports goods" }] },
    twitter: { card: "summary_large_image", title: `${title} | ${siteConfig.name}`, description, images: ["/opengraph-image"] },
  };
}

export function breadcrumbData(name: string, path: string) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name, item: absoluteUrl(path) },
    ],
  };
}
