'use client';

import { useState } from 'react';
import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';
import { openContactBrief } from '@/components/ContactBriefModal';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  function closeNavigation() {
    setMenuOpen(false);
    setProductsOpen(false);
  }

  return (
    <header className="fixed z-30">
      <Link className="logo text-white" href="/" aria-label="SVX home">
        <BrandLogo className="h-8 md:h-9 w-auto" />
      </Link>

      <nav
        aria-label="Main navigation"
        className={`${
          menuOpen
            ? '!flex fixed top-[74px] left-0 right-0 bg-[#070a10] p-6 flex-col border-b border-white/15 gap-5 shadow-2xl z-40'
            : 'hidden md:flex'
        }`}
      >
        <a
          href="/#network"
          onClick={closeNavigation}
          className="hover:text-[#4e9dff] transition-colors py-1"
        >
          Network
        </a>
        <div className={`nav-product-menu${productsOpen ? ' is-open' : ''}`}>
          <button
            type="button"
            className="nav-products-trigger"
            aria-expanded={productsOpen}
            aria-controls="product-range-menu"
            onClick={() => setProductsOpen((open) => !open)}
          >
            Products <span aria-hidden="true">⌄</span>
          </button>
          <div id="product-range-menu" className="nav-product-dropdown">
            <p>Product ranges</p>
            <Link href="/products/socks" onClick={closeNavigation}><strong>Socks</strong><span>22 specialist categories</span></Link>
            <Link href="/products/bags" onClick={closeNavigation}><strong>Bags</strong><span>13 carry solutions</span></Link>
            <Link href="/products/footballs" onClick={closeNavigation}><strong>Footballs</strong><span>8 purpose-built ranges</span></Link>
            <Link href="/products/apparel" onClick={closeNavigation}><strong>Apparel</strong><span>13 product categories</span></Link>
            <a className="nav-product-all" href="/#products" onClick={closeNavigation}>View all products <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <a
          href="/#buyers"
          onClick={closeNavigation}
          className="hover:text-[#4e9dff] transition-colors py-1"
        >
          Buyers
        </a>
        <a
          href="/#process"
          onClick={closeNavigation}
          className="hover:text-[#4e9dff] transition-colors py-1"
        >
          Process
        </a>
        <a
          href="#contact"
          onClick={(event) => {
            event.preventDefault();
            closeNavigation();
            openContactBrief();
          }}
          className="hover:text-[#4e9dff] transition-colors py-1"
        >
          Contact us
        </a>
      </nav>

      <div className="flex items-center gap-3">
        <a className="cta mini hidden md:inline-flex" href="#contact" onClick={(event) => { event.preventDefault(); openContactBrief(); }}>
          START A BRIEF <span>↗</span>
        </a>
        <button
          className="menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>
    </header>
  );
}
