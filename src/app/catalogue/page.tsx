import { ProductCatalogueSection } from "@/components/sections/ProductCatalogueSection";
import { productRanges } from "@/data/product-ranges";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Custom Sports Goods Catalogue", "Browse SportsVentureX footballs, socks, bags and T-shirts. Compare product references and explore dedicated ranges for custom branding and development.", "/catalogue");

export default function CataloguePage() {
  return <><header className="section-shell svx-page-intro"><p className="eyebrow">Explore / Compare / Develop</p><h1>Custom sports goods catalogue.</h1><p>Find a reference. Explore the details. Make it your own.</p><nav className="svx-range-links" aria-label="Detailed product ranges">{productRanges.map((range) => <a key={range.slug} href={`/${range.slug}`}>{range.name} ↗</a>)}</nav></header><ProductCatalogueSection /></>;
}
