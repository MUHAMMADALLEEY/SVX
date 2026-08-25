import { BrandLogo } from "@/components/brand/BrandLogo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <a className="brand-mark" href="#top">
          <BrandLogo className="brand-logo" />
        </a>
        <p>Making sport more considered.</p>
      </div>
    </footer>
  );
}
