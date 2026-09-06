import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { productRanges } from "@/data/product-ranges";

export function CollectionsSection() {
  return (
    <section id="catalogue" className="section-shell content-section svx-collections">
      <div className="svx-section-top reveal"><div><p className="eyebrow">The product line-up</p><h2>Different disciplines.<br /><span>One standard of detail.</span></h2></div><a className="svx-text-link" href="/catalogue">Full catalogue <ArrowUpRight size={18} aria-hidden="true" /></a></div>
      <div className="svx-collection-grid">
        {productRanges.map((range, index) => (
          <a className="svx-collection-card reveal" href={`/${range.slug}`} key={range.slug}>
            <div className="svx-collection-image"><Image src={range.image} alt={range.name} fill sizes="(max-width: 650px) 100vw, 50vw" /><span className="svx-collection-number">0{index + 1}</span><span className="svx-collection-arrow"><ArrowUpRight aria-hidden="true" /></span></div>
            <div className="svx-collection-caption"><h3>{range.name}</h3><span>{range.products.length} references</span></div>
          </a>
        ))}
      </div>
    </section>
  );
}
