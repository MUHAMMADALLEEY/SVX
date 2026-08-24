import Image from "next/image";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { products } from "@/data/site-content";

export function ProductSection() {
  return (
    <section id="products" className="section-shell content-section product-section">
      <SectionIntro
        eyebrow="What we make"
        title="A focused product range."
        description="Core sports goods, developed with the room to make each product feel distinctly yours."
      />

      <div className="product-list">
        {products.map((product, index) => (
          <article key={product.name} className="product-row reveal" style={{ transitionDelay: `${index * 80}ms` }}>
            <div className="product-title">
              <p className="product-kicker">{product.eyebrow}</p>
              <h3>{product.name}</h3>
            </div>
            <div className="product-visual">
              <Image src={product.image} alt={`${product.name} product visual`} fill sizes="(max-width: 720px) 100vw, 24vw" />
            </div>
            <div className="product-detail">
              <p>{product.description}</p>
              <ul>
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
