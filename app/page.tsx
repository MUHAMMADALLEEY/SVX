import Image from 'next/image';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OrbitSection from '@/components/OrbitSection';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        <Hero />

        <section className="intro">
          <p className="eyebrow">BUILT FOR BUYERS</p>
          <h2>
            GLOBAL THINKING.
            <br />
            FACTORY-LEVEL CONTROL.
          </h2>
          <p>
            SVX supports established brands, growing labels, retailers,
            supermarkets, clubs, schools, institutions, distributors and specialist
            organisations—adapting the route to the customer, category and
            commercial target.
          </p>
        </section>

        <OrbitSection />

        <section className="products" id="products">
          <div className="section-head">
            <p className="eyebrow">PRODUCT CATEGORIES</p>
            <h2>
              FROM SPECIALIST
              <br />
              TO STORE-READY.
            </h2>
            <p>
              Own-label, private-label, promotional and licensed-style
              programmes developed around the buyer’s standard—not a fixed
              catalogue.
            </p>
          </div>

          <div className="product-visual">
            <Image
              src="/assets/product-world.png"
              alt="SVX product collection"
              width={1600}
              height={900}
              className="w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="image-tag">SVX PRODUCT LAB / 2026</div>
          </div>

          <div className="category-grid">
            <article>
              <span>01</span>
              <h3>SOCKS</h3>
              <p>
                Performance, dress, lifestyle, workwear, medical, football and
                complete team-sock programmes.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>FOOTBALLS</h3>
              <p>
                From World Cup-standard match balls to training footballs, with
                FIFA-approved manufacturing capability.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>BAGS</h3>
              <p>
                Backpacks, duffles, travel, team, school and technical carry
                solutions.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>APPAREL</h3>
              <p>
                Sportswear, underwear, menswear, workwear and coordinated retail
                collections.
              </p>
            </article>
            <article>
              <span>05</span>
              <h3>SPORTS PRODUCTS</h3>
              <p>
                New product development across training, fitness, club,
                academy and specialist sports categories.
              </p>
            </article>
            <article>
              <span>06</span>
              <h3>ACCESSORIES</h3>
              <p>
                Custom-developed sports, team and lifestyle accessories
                tailored to your brand and market.
              </p>
            </article>
          </div>
        </section>

        <section className="buyers" id="buyers">
          <div className="buyer-intro">
            <p className="eyebrow">CUSTOMER FIT</p>
            <h2>
              DIFFERENT BUYERS.
              <br />
              ONE STANDARD.
            </h2>
            <p>
              We understand that a supermarket programme, specialist brand and
              institutional order each need a different commercial rhythm.
            </p>
          </div>

          <div className="buyer-matrix">
            <article>
              <b>GLOBAL &amp; NATIONAL BRANDS</b>
              <span>Product engineering · standards · scale</span>
            </article>
            <article>
              <b>RETAILERS &amp; DEPARTMENT STORES</b>
              <span>Range building · value · critical path</span>
            </article>
            <article>
              <b>SUPERMARKETS &amp; MASS RETAIL</b>
              <span>Volume · consistency · packaging</span>
            </article>
            <article>
              <b>CLUBS, SCHOOLS &amp; ACADEMIES</b>
              <span>Customisation · durability · access</span>
            </article>
            <article>
              <b>INSTITUTIONS &amp; ORGANISATIONS</b>
              <span>Specification · compliance · reliability</span>
            </article>
            <article>
              <b>START-UPS &amp; GROWING LABELS</b>
              <span>Guidance · development · scalable routes</span>
            </article>
          </div>
        </section>

        <section className="proof">
          <div className="proof-quote">
            <span>“</span>
            <h2>
              WE SPEAK
              <br />
              BUYER.
              <br />
              WE SPEAK
              <br />
              FACTORY.
            </h2>
          </div>

          <div className="proof-body">
            <p className="eyebrow">EXPERIENCE WITHOUT THE NAME-DROPPING</p>
            <p className="large">
              Our team experience spans more than 50 brand programmes and supply
              into many stores across multiple markets.
            </p>
            <p>
              That history is used where it matters: clearer costing, more
              commercial product decisions, practical quality control and fewer
              avoidable delays. Customer confidentiality comes first, so
              relationships are described by capability—not displayed as trophies.
            </p>

            <div className="proof-bars">
              <div>
                <span>BUYER ALIGNMENT</span>
                <i style={{ '--w': '96%' } as React.CSSProperties} />
              </div>
              <div>
                <span>FACTORY VISIBILITY</span>
                <i style={{ '--w': '94%' } as React.CSSProperties} />
              </div>
              <div>
                <span>CATEGORY FLEXIBILITY</span>
                <i style={{ '--w': '91%' } as React.CSSProperties} />
              </div>
              <div>
                <span>DELIVERY DISCIPLINE</span>
                <i style={{ '--w': '95%' } as React.CSSProperties} />
              </div>
            </div>
          </div>
        </section>

        <section className="process" id="process">
          <div className="section-head">
            <p className="eyebrow">A CLEAR ROUTE TO MARKET</p>
            <h2>
              BRIEF TO
              <br />
              DELIVERY.
            </h2>
          </div>

          <ol>
            <li>
              <b>01 / DEFINE</b>
              <span>
                Category, customer, target price, quantity, market and launch date.
              </span>
            </li>
            <li>
              <b>02 / DEVELOP</b>
              <span>
                Materials, design, construction, technical packs, sampling and cost
                options.
              </span>
            </li>
            <li>
              <b>03 / VALIDATE</b>
              <span>
                Fit, performance, testing, compliance, packaging and approval
                standards.
              </span>
            </li>
            <li>
              <b>04 / PRODUCE</b>
              <span>
                Factory placement, production tracking, inline checks and issue
                management.
              </span>
            </li>
            <li>
              <b>05 / DELIVER</b>
              <span>
                Final inspection, documentation, logistics coordination and
                repeat-order learning.
              </span>
            </li>
          </ol>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">A BETTER BRIEF STARTS HERE</p>
          <h2>
            WHAT ARE YOU
            <br />
            READY TO MAKE?
          </h2>
          <p>
            Share the product, target price, approximate quantity, destination
            market and required date. SVX will shape the smartest route forward.
          </p>
          <a
            className="cta light"
            href="mailto:?subject=SVX%20Manufacturing%20%26%20Sourcing%20Brief&body=Product%20category%3A%0ATarget%20price%3A%0AApproximate%20quantity%3A%0AMarket%3A%0ARequired%20date%3A"
          >
            SEND YOUR BRIEF <span>↗</span>
          </a>
        </section>
      </main>

      <footer>
        <div className="bg-white px-3 py-1.5 flex items-center justify-center h-10 w-[125px] overflow-hidden">
          <Image
            src="/assets/logo-wide.png"
            alt="SVX"
            width={125}
            height={40}
            className="h-full w-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <span>MANUFACTURING · SOURCING · PRODUCT DEVELOPMENT</span>
        <span>LONDON (UK) COMMERCIAL OFFICE · GLOBAL MANUFACTURING NETWORK</span>
      </footer>

      <ScrollReveal />
    </>
  );
}
