import { ArrowUpRight, Mail } from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { CookieSettingsButton } from "@/components/layout/CookieSettingsButton";
import { navItems, services } from "@/data/site-content";
import { siteConfig } from "@/lib/site-config";

const productLinks = ["Footballs", "Socks", "Bags", "T-shirts"];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <div className="footer-primary">
          <div className="footer-brand">
            <a className="brand-mark" href="/" aria-label="SportsVentureX home">
              <BrandLogo className="brand-logo" />
            </a>
            <p>
              Custom sports goods developed with practical product thinking,
              considered branding, and production-ready detail.
            </p>
            <div className="footer-contact-actions">
              <a className="footer-cta" href="/#contact">
                Send a project enquiry
                <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
              </a>
              <a className="footer-email" href={`mailto:${siteConfig.contactEmail}`}>
                <Mail size={15} strokeWidth={1.8} aria-hidden="true" />
                <span>{siteConfig.contactEmail}</span>
              </a>
            </div>
          </div>

          <div className="footer-directory">
            <nav className="footer-column" aria-label="Footer navigation">
              <h2>Explore</h2>
              {navItems.map((item) => (
                <a key={item.href} href={`/${item.href}`}>{item.label}</a>
              ))}
            </nav>

            <nav className="footer-column" aria-label="Product ranges">
              <h2>Products</h2>
              {productLinks.map((product) => (
                <a key={product} href="/#catalogue">{product}</a>
              ))}
            </nav>

            <nav className="footer-column" aria-label="Services">
              <h2>Capabilities</h2>
              {services.map((service) => (
                <a key={service.title} href="/#solutions">{service.title}</a>
              ))}
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>SportsVentureX. Making sport more considered.</p>
          <nav className="footer-links" aria-label="Legal and privacy">
            <a href="/privacy-policy">Privacy policy</a>
            <a href="/terms">Terms</a>
          </nav>
          <div className="footer-cookie-row">
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
