import Image from "next/image";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { ContactBriefButton } from "@/components/ContactBriefModal";
import Header from "@/components/Header";
import defaultStyles from "./bags/bags-page.module.css";

export type CatalogueItem = {
  title: string;
  label: string;
  description: string;
  image: string;
  features: string[];
  alt?: string;
};

type CatalogueStat = {
  value: string;
  label: string;
};

type ProductCataloguePageProps = {
  category: string;
  categorySlug: string;
  heroEyebrow: string;
  headline: string;
  headlineAccent: string;
  heroCopy: string;
  stats: CatalogueStat[];
  catalogueEyebrow: string;
  catalogueHeading: [string, string];
  catalogueCopy: string;
  items: CatalogueItem[];
  processHeading: [string, string];
  developmentSteps: string[];
  footerLine: string;
  footerEnd?: { label: string; href?: string };
  getItemAlt?: (item: CatalogueItem) => string;
  imagePriorityCount?: number;
  styles?: typeof defaultStyles;
};

export default function ProductCataloguePage({
  category,
  categorySlug,
  heroEyebrow,
  headline,
  headlineAccent,
  heroCopy,
  stats,
  catalogueEyebrow,
  catalogueHeading,
  catalogueCopy,
  items,
  processHeading,
  developmentSteps,
  footerLine,
  footerEnd = { label: "BACK TO MAIN WEBSITE", href: "/" },
  getItemAlt,
  imagePriorityCount = 3,
  styles = defaultStyles,
}: ProductCataloguePageProps) {
  const categoryHeadingId = `${categorySlug}-category-heading`;
  const processHeadingId = `${categorySlug}-process-heading`;

  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.shell}>
            <Link className={styles.backLink} href="/#products">
              <span aria-hidden="true">←</span> Back to product categories
            </Link>
            <p className={styles.eyebrow}>{heroEyebrow}</p>
            <h1>{headline}<span>{headlineAccent}</span></h1>
            <p className={styles.heroCopy}>{heroCopy}</p>
            <dl className={styles.stats}>
              {stats.map((stat) => (
                <div key={stat.label}><dt>{stat.value}</dt><dd>{stat.label}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <section className={styles.catalogue} aria-labelledby={categoryHeadingId}>
          <div className={styles.shell}>
            <div className={styles.catalogueIntro}>
              <div>
                <p className={styles.eyebrow}>{catalogueEyebrow}</p>
                <h2 id={categoryHeadingId}>{catalogueHeading[0]}<br />{catalogueHeading[1]}</h2>
              </div>
              <p>{catalogueCopy}</p>
            </div>

            <div className={styles.grid}>
              {items.map((item, index) => (
                <article className={styles.card} key={item.title}>
                  <div className={styles.cardImage}>
                    <Image
                      src={item.image}
                      alt={item.alt ?? getItemAlt?.(item) ?? `SVX ${item.title.toLowerCase()} development example`}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                      priority={index < imagePriorityCount}
                    />
                    <ContactBriefButton
                      className={styles.cardAction}
                      defaultCategory={category}
                      defaultProduct={item.title}
                    >
                      Select this category <span aria-hidden="true">↗</span>
                    </ContactBriefButton>
                  </div>
                  <div className={styles.cardBody}>
                    <p className={styles.cardIndex}>
                      {String(index + 1).padStart(2, "0")} / {item.label}
                    </p>
                    <h3>{item.title}</h3>
                    <p className={styles.cardDescription}>{item.description}</p>
                    <ul>{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.process} aria-labelledby={processHeadingId}>
          <div className={`${styles.shell} ${styles.processLayout}`}>
            <div>
              <p className={styles.eyebrow}>Built around your brief</p>
              <h2 id={processHeadingId}>{processHeading[0]}<br />{processHeading[1]}</h2>
            </div>
            <ol>
              {developmentSteps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <footer>
        <div className="flex items-center text-white h-10">
          <BrandLogo className="h-8 w-auto" />
        </div>
        <span>{footerLine}</span>
        <a className="footer-email" href="mailto:sales@sportsventurex.com">sales@sportsventurex.com</a>
        {footerEnd.href ? <a href={footerEnd.href}>{footerEnd.label}</a> : <span>{footerEnd.label}</span>}
      </footer>
    </>
  );
}
