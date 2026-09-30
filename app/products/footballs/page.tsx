import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import BrandLogo from '@/components/BrandLogo';
import { ContactBriefButton } from '@/components/ContactBriefModal';
import styles from './footballs-page.module.css';

type FootballCategory = {
  title: string;
  description: string;
  image: string;
  features: string[];
};

const footballCategories: FootballCategory[] = [
  { title: 'Professional', image: '/images/footballs/F3.webp', description: 'Premium match performance with thermally bonded construction, controlled flight and a responsive touch.', features: ['Thermally bonded construction', 'Textured PU match cover', 'Controlled flight performance'] },
  { title: 'Competition', image: '/images/footballs/F8.webp', description: 'High-performance specification for leagues, tournaments and demanding competitive programmes.', features: ['Competition-grade materials', 'Consistent touch and rebound', 'League and tournament options'] },
  { title: 'Club', image: '/images/footballs/F1.webp', description: 'Reliable shape retention, touch and durability for regular match-day use across club levels.', features: ['Durable match construction', 'Reliable shape retention', 'Custom club graphics'] },
  { title: 'Academy', image: '/images/footballs/F2.webp', description: 'Balanced control and dependable flight developed for player progression and academy programmes.', features: ['Balanced touch and flight', 'Player-development focus', 'Multiple size options'] },
  { title: 'Elite Training', image: '/images/footballs/F6.webp', description: 'High-visibility, reinforced performance for intensive sessions and repeated professional use.', features: ['Reinforced construction', 'High-visibility graphics', 'Intensive training durability'] },
  { title: 'Team Training', image: '/images/footballs/F9.webp', description: 'Hard-wearing everyday construction for clubs, schools and organised team programmes.', features: ['Hard-wearing outer cover', 'Dependable air retention', 'Repeat team programmes'] },
  { title: 'Junior & School', image: '/images/footballs/F4.webp', description: 'Bright, engaging designs in sizes 3, 4 and 5 with age-appropriate weight and softer-touch options.', features: ['Sizes 3, 4 and 5', 'Age-appropriate weights', 'Softer-touch options'] },
  { title: 'Custom & Promotional', image: '/images/footballs/F7.webp', description: 'Bespoke colours, panel graphics, branding and packaging developed around every customer brief.', features: ['Bespoke panel graphics', 'Custom colours and branding', 'Retail packaging options'] },
];

const developmentSteps = [
  'Market, use and target price',
  'Construction, materials and performance',
  'Panel design, colour and branding',
  'Sampling, testing and approval',
  'Production, packaging and delivery',
];

export const metadata: Metadata = {
  title: 'Custom Football Product Development | SVX',
  description: 'Explore eight purpose-built custom football programmes for professional, competition, club, academy, training, junior and promotional use.',
  alternates: { canonical: '/products/footballs' },
};

export default function FootballsPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.shell}>
            <Link className={styles.backLink} href="/#products"><span aria-hidden="true">←</span> Back to product categories</Link>
            <p className={styles.eyebrow}>SVX football range · product development</p>
            <h1>Every match.<span>One expert route.</span></h1>
            <p className={styles.heroCopy}>One focused range covering professional matches, club and academy play, training, schools and promotional programmes.</p>
            <dl className={styles.stats}>
              <div><dt>8</dt><dd>Purpose-built ranges</dd></div>
              <div><dt>30</dt><dd>Years of experience</dd></div>
              <div><dt>1</dt><dd>Accountable partner</dd></div>
            </dl>
          </div>
        </section>

        <section className={styles.catalogue} aria-labelledby="football-category-heading">
          <div className={styles.shell}>
            <div className={styles.catalogueIntro}>
              <div><p className={styles.eyebrow}>SVX football range</p><h2 id="football-category-heading">Eight purpose-<br />built designs</h2></div>
              <p>Each programme is developed around its playing level, construction, touch, flight, durability, panel artwork and commercial target.</p>
            </div>

            <div className={styles.grid}>
              {footballCategories.map((category, index) => (
                <article className={styles.card} key={category.title}>
                  <div className={styles.cardImage}>
                    <Image src={category.image} alt={`${category.title} custom SVX football`} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" priority={index < 4} />
                    <ContactBriefButton className={styles.cardAction} defaultCategory="Footballs" defaultProduct={category.title}>
                      Select this category <span aria-hidden="true">↗</span>
                    </ContactBriefButton>
                  </div>
                  <div className={styles.cardBody}>
                    <p className={styles.cardIndex}>{String(index + 1).padStart(2, '0')} / Football</p>
                    <h3>{category.title}</h3>
                    <p className={styles.cardDescription}>{category.description}</p>
                    <ul>{category.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.process} aria-labelledby="football-process-heading">
          <div className={`${styles.shell} ${styles.processLayout}`}>
            <div><p className={styles.eyebrow}>Built around your brief</p><h2 id="football-process-heading">Panel to<br />match-ready.</h2></div>
            <ol>{developmentSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></li>)}</ol>
          </div>
        </section>
      </main>

      <footer>
        <div className="flex items-center text-white h-10"><BrandLogo className="h-8 w-auto" /></div>
        <span>FOOTBALLS · PRODUCT DEVELOPMENT · GLOBAL SOURCING</span>
        <a className="footer-email" href="mailto:sales@sportsventurex.com">sales@sportsventurex.com</a>
        <a href="/">BACK TO MAIN WEBSITE</a>
      </footer>
    </>
  );
}
