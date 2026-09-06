import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { productRanges } from "@/data/product-ranges";
import { breadcrumbData, pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site-config";

export const dynamicParams = false;
export function generateStaticParams() { return productRanges.map((range) => ({ category: range.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const range = productRanges.find((item) => item.slug === category);
  if (!range) notFound();
  return pageMetadata(range.title, range.description, `/${range.slug}`);
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const range = productRanges.find((item) => item.slug === category);
  if (!range) notFound();
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: range.title, description: range.description, url: absoluteUrl(`/${range.slug}`), mainEntity: { "@type": "ItemList", numberOfItems: range.products.length, itemListElement: range.products.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.title, url: absoluteUrl(`/${range.slug}#${product.id}`) })) } };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbData(range.name, `/${range.slug}`), schema]).replace(/</g, "\\u003c") }} />
      <section className="section-shell svx-range-hero">
        <div><nav className="svx-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">{range.name}</span></nav><p className="eyebrow">Made for your brand</p><h1>{range.title}</h1><p className="svx-lead">{range.intro}</p><a className="svx-button" href="/contact">Discuss your product <ArrowUpRight size={18} aria-hidden="true" /></a></div>
        <div className="svx-range-image"><Image src={range.image} alt={range.name} fill sizes="(max-width: 800px) 100vw, 45vw" priority /></div>
      </section>
      <section className="section-shell svx-range-details" aria-label="Product development options">{range.details.map((detail, index) => <article className="reveal" key={detail.title}><span className="eyebrow">0{index + 1}</span><h2>{detail.title}</h2><p>{detail.text}</p></article>)}</section>
      <section className="section-shell content-section">
        <div className="svx-section-top"><div><p className="eyebrow">Explore the references</p><h2>Find your starting point.</h2></div><p>{range.products.length} product references</p></div>
        <p className="svx-reference-note">References illustrate development options. Final materials, availability, quantities and pricing are confirmed with your quotation.</p>
        <div className="svx-product-grid">{range.products.map((product) => <article id={product.id} key={product.id} className="svx-product-card"><div className="svx-product-image"><Image src={product.image} alt={product.alt} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" /></div><div className="svx-product-copy"><p className="eyebrow">{product.meta}</p><h3>{product.title}</h3><p>{product.description}</p>{product.specs.length > 0 && <ul>{product.specs.map((spec) => <li key={spec}>{spec}</li>)}</ul>}<a className="svx-text-link" href={`/contact?product=${encodeURIComponent(range.name)}&reference=${encodeURIComponent(product.title)}`}>Enquire about this style <ArrowUpRight size={16} aria-hidden="true" /></a></div></article>)}</div>
      </section>
      <section className="section-shell svx-related"><h2>Explore another range</h2><div>{productRanges.filter((item) => item.slug !== range.slug).map((item) => <a className="svx-text-link" key={item.slug} href={`/${item.slug}`}>{item.name}<ArrowUpRight size={17} aria-hidden="true" /></a>)}</div></section>
    </>
  );
}
