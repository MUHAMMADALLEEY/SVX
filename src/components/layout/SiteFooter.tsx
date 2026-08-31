import { BrandLogo } from "@/components/brand/BrandLogo";
import { CookieSettingsButton } from "@/components/layout/CookieSettingsButton";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <a className="brand-mark" href="/" aria-label="SportsVentureX home">
          <BrandLogo className="brand-logo" />
        </a>
        <div className="footer-meta">
          <p>Making sport more considered.</p>
          <nav className="footer-links" aria-label="Legal and privacy">
            <a href="/privacy-policy">Privacy policy</a>
            <a href="/terms">Terms</a>
            <CookieSettingsButton />
          </nav>
        </div>
      </div>
    </footer>
  );
}
