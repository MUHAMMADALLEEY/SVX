import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import BrandLogo from '@/components/BrandLogo';
import { ContactBriefButton } from '@/components/ContactBriefModal';
import styles from './bags-page.module.css';

type BagCategory = {
  title: string;
  label: string;
  description: string;
  image: string;
  features: string[];
};

const bagCategories: BagCategory[] = [
  { title: 'Football Bags', label: 'Football', image: '/images/bags/B1.webp', description: 'Large organised kit bags developed for match day, training and club travel.', features: ['Separate boot compartment', 'Reinforced carry system', 'Club colours and branding'] },
  { title: 'Gym Bags', label: 'Training', image: '/images/bags/B3.webp', description: 'Compact training holdalls with practical storage and ventilation for daily workouts.', features: ['Ventilated shoe pocket', 'Padded shoulder strap', 'Water-resistant fabric options'] },
  { title: 'Basic Backpacks', label: 'Everyday', image: '/images/bags/B2.webp', description: 'Dependable everyday backpacks with clean styling and comfortable organisation.', features: ['Dual zip compartments', 'Side bottle pockets', 'Padded adjustable straps'] },
  { title: 'High-Tech Backpacks', label: 'Engineered', image: '/images/bags/B8.webp', description: 'Advanced technical packs combining ergonomic support with modern utility features.', features: ['Moulded back support', 'Device and cable organisation', 'Technical trim options'] },
  { title: 'School Bags', label: 'School', image: '/images/bags/B4.webp', description: 'Hard-wearing school backpacks designed for books, equipment and repeated daily use.', features: ['Spacious compartments', 'Reinforced stress points', 'School colour matching'] },
  { title: 'Team Bags', label: 'Teamwear', image: '/images/bags/B5.webp', description: 'Professional team kit bags for clubs, academies, schools and organisations.', features: ['Large kit capacity', 'Player-number options', 'Repeat programme control'] },
  { title: 'Football Boot Bags', label: 'Footwear', image: '/images/bags/B6.webp', description: 'Compact structured carriers that keep football boots protected and separated.', features: ['Ventilated mesh panel', 'Easy-clean lining', 'Strong dual zipper'] },
  { title: 'Duffle Bags', label: 'Duffle', image: '/images/bags/B7.webp', description: 'Versatile premium duffles for sport, weekend travel and active lifestyles.', features: ['Wide main opening', 'End storage pocket', 'Multiple size options'] },
  { title: 'Trolley Bags', label: 'Wheeled', image: '/images/bags/B12.webp', description: 'High-capacity wheeled bags engineered for easy team and long-distance travel.', features: ['Telescopic handle', 'Durable wheel system', 'Protected reinforced base'] },
  { title: 'Laptop Backpacks', label: 'Business', image: '/images/bags/B9.webp', description: 'Smart professional packs with organised protection for work and technology.', features: ['Padded laptop section', 'Business organisation', 'Clean urban profile'] },
  { title: 'Hydration Backpacks', label: 'Running', image: '/images/bags/B10.webp', description: 'Lightweight close-fitting packs for running, endurance and outdoor training.', features: ['Front hydration pockets', 'Breathable mesh harness', 'Reflective detail options'] },
  { title: 'Travel Carry-Ons', label: 'Travel', image: '/images/bags/B11.webp', description: 'Cabin-ready travel packs with secure, efficient organisation for every journey.', features: ['Clamshell access', 'Compression straps', 'Luggage pass-through'] },
  { title: 'Crossbody Bags', label: 'Accessory', image: '/images/bags/B13.webp', description: 'Compact everyday bags for phones, documents and essential personal items.', features: ['Adjustable shoulder strap', 'Secure zipped pockets', 'Retail colour programmes'] },
];

const developmentSteps = [
  'Market, use and target price',
  'Dimensions, fabric and construction',
  'Organisation, colour and branding',
  'Sampling, testing and approval',
  'Production, packaging and delivery',
];

export const metadata: Metadata = {
  title: 'Custom Bags Product Development | SVX',
  description: 'Explore 13 custom SVX bag categories for football, training, school, teamwear, business, running and travel programmes.',
  alternates: { canonical: '/products/bags' },
};

export default function BagsPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.shell}>
            <Link className={styles.backLink} href="/#products"><span aria-hidden="true">←</span> Back to product categories</Link>
            <p className={styles.eyebrow}>SVX bags · product development</p>
            <h1>Carry more.<span>Perform better.</span></h1>
            <p className={styles.heroCopy}>From team football equipment to technical travel and performance packs, SVX develops construction, materials, organisation, branding and packaging around each buyer&apos;s market.</p>
            <dl className={styles.stats}>
              <div><dt>13</dt><dd>Product categories</dd></div>
              <div><dt>30</dt><dd>Years of experience</dd></div>
              <div><dt>1</dt><dd>Accountable partner</dd></div>
            </dl>
          </div>
        </section>

        <section className={styles.catalogue} aria-labelledby="bag-category-heading">
          <div className={styles.shell}>
            <div className={styles.catalogueIntro}>
              <div><p className={styles.eyebrow}>Complete bags capability</p><h2 id="bag-category-heading">Select a<br />category</h2></div>
              <p>Every SVX bag can be developed around your dimensions, fabric, colours, compartments, trims, logo application, testing requirements and retail packaging.</p>
            </div>

            <div className={styles.grid}>
              {bagCategories.map((category, index) => (
                <article className={styles.card} key={category.title}>
                  <div className={styles.cardImage}>
                    <Image src={category.image} alt={`SVX ${category.title.toLowerCase()} development example`} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" priority={index < 3} />
                    <ContactBriefButton className={styles.cardAction} defaultCategory="Bags" defaultProduct={category.title}>
                      Select this category <span aria-hidden="true">↗</span>
                    </ContactBriefButton>
                  </div>
                  <div className={styles.cardBody}>
                    <p className={styles.cardIndex}>{String(index + 1).padStart(2, '0')} / {category.label}</p>
                    <h3>{category.title}</h3>
                    <p className={styles.cardDescription}>{category.description}</p>
                    <ul>{category.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.process} aria-labelledby="bag-process-heading">
          <div className={`${styles.shell} ${styles.processLayout}`}>
            <div><p className={styles.eyebrow}>Built around your brief</p><h2 id="bag-process-heading">Concept to<br />delivery.</h2></div>
            <ol>{developmentSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></li>)}</ol>
          </div>
        </section>
      </main>

      <footer>
        <div className="flex items-center text-white h-10"><BrandLogo className="h-8 w-auto" /></div>
        <span>BAGS · PRODUCT DEVELOPMENT · GLOBAL SOURCING</span>
        <a className="footer-email" href="mailto:sales@sportsventurex.com">sales@sportsventurex.com</a>
        <a href="/">BACK TO MAIN WEBSITE</a>
      </footer>
    </>
  );
}
