import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';
import { siteConfig } from '@/lib/site-config';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#070a10] text-[#8f99a8]">
      <div className="w-full mx-auto max-w-[var(--max,1480px)] px-4 sm:px-6 md:px-[34px] py-8 md:py-10">
        {/* Top Section: Brand + Navigation Columns */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 text-center md:text-left">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start lg:col-span-5">
            <Link href="/" aria-label="SVX Home" className="inline-flex justify-center md:justify-start text-white mb-3">
              <BrandLogo variant="white" className="h-7 md:h-8 w-auto text-white" />
            </Link>
            <p className="text-xs text-[#8f99a8] max-w-sm leading-relaxed text-center md:text-left mx-auto md:mx-0">
              OEM / ODM sports goods. Socks, footballs and bags for global brands.
            </p>
          </div>

          {/* Products & Company (2 columns on mobile to conserve vertical space) */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-4 lg:gap-8 text-center md:text-left">
            {/* Products */}
            <div>
              <p className="text-xs font-bold tracking-widest text-white uppercase mb-3">
                PRODUCTS
              </p>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link
                    href="/products/socks"
                    className="text-[#8f99a8] hover:text-white transition-colors"
                  >
                    Socks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/footballs"
                    className="text-[#8f99a8] hover:text-white transition-colors"
                  >
                    Footballs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/bags"
                    className="text-[#8f99a8] hover:text-white transition-colors"
                  >
                    Bags
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-xs font-bold tracking-widest text-white uppercase mb-3">
                COMPANY
              </p>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link
                    href="/#network"
                    className="text-[#8f99a8] hover:text-white transition-colors"
                  >
                    Network
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#brands"
                    className="text-[#8f99a8] hover:text-white transition-colors"
                  >
                    Brands
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#process"
                    className="text-[#8f99a8] hover:text-white transition-colors"
                  >
                    Process
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start lg:col-span-3 text-center md:text-left">
            <p className="text-xs font-bold tracking-widest text-white uppercase mb-3">
              CONTACT
            </p>
            <div className="space-y-1.5 text-xs text-[#8f99a8]">
              <p>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-[#4e9dff] hover:text-white transition-colors font-medium"
                >
                  {siteConfig.contactEmail}
                </a>
              </p>
              <p>London (UK) commercial office</p>
              <p>Global manufacturing network</p>
            </div>
          </div>
        </div>

        {/* Middle Section: Follow Us Social Bar */}
        {/* <div className="my-6 border-y border-white/10 py-3.5 md:py-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 text-center sm:text-left">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-white uppercase">
            FOLLOW US ON SOCIAL MEDIA
          </p>

          <div className="flex items-center justify-center gap-2">
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SportsVentureX LinkedIn"
              className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] text-white/70 transition-all hover:border-[#086dff] hover:bg-[#086dff]/15 hover:text-white"
            >
              <FaLinkedinIn className="h-3.5 w-3.5" />
            </a>
            {siteConfig.facebookUrl ? (
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SportsVentureX Facebook"
                className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] text-white/70 transition-all hover:border-[#086dff] hover:bg-[#086dff]/15 hover:text-white"
              >
                <FaFacebook className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </div>
        </div> */}

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="mt-10 md:mt-12 pt-6 border-t border-white/10 flex flex-row items-center justify-between text-[11px] text-[#6c7889] tracking-wider uppercase">
          <p>© 2026 SPORTSVENTUREX</p>
          <Link
            href="/privacy-policy"
            className="hover:text-white transition-colors"
          >
            PRIVACY
          </Link>
        </div>
      </div>
    </footer>
  );
}

