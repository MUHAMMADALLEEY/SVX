'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import { openContactBrief } from '@/components/ContactBriefModal';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function cancelProductsClose() {
    if (productsCloseTimer.current) {
      clearTimeout(productsCloseTimer.current);
      productsCloseTimer.current = null;
    }
  }

  function openProducts() {
    cancelProductsClose();
    setProductsOpen(true);
  }

  function scheduleProductsClose() {
    cancelProductsClose();
    productsCloseTimer.current = setTimeout(() => {
      setProductsOpen(false);
      productsCloseTimer.current = null;
    }, 300);
  }

  useEffect(() => () => cancelProductsClose(), []);

  function closeNavigation() {
    cancelProductsClose();
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
            ? '!flex fixed top-[74px] left-0 right-0 max-h-[calc(100dvh-74px)] overflow-y-auto bg-[#070a10] p-6 flex-col border-b border-white/15 gap-5 shadow-2xl z-40'
            : 'hidden md:flex'
        }`}
      >
        <Link
          href="/#network"
          onClick={closeNavigation}
          className="hover:text-[#4e9dff] transition-colors py-1"
        >
          Network
        </Link>
        <div
          className={`nav-product-menu${productsOpen ? ' is-open' : ''}`}
          onMouseEnter={openProducts}
          onMouseLeave={scheduleProductsClose}
        >
          <button
            type="button"
            className="nav-products-trigger"
            aria-expanded={productsOpen}
            aria-controls="product-range-menu"
            onClick={() => {
              cancelProductsClose();
              setProductsOpen((open) => !open);
            }}
          >
            Products <span aria-hidden="true">⌄</span>
          </button>
          <div id="product-range-menu" className="nav-product-dropdown">
            <p>Product ranges</p>
            <div className="nav-product-grid">
              <Link href="/products/socks" onClick={closeNavigation}><strong>Socks</strong><span>35 specialist products</span></Link>
              <Link href="/products/bags" onClick={closeNavigation}><strong>Bags</strong><span>18 carry solutions</span></Link>
              <Link href="/products/footballs" onClick={closeNavigation}><strong>Footballs</strong><span>11 purpose-built ranges</span></Link>
              {/* <Link href="/products/apparel" onClick={closeNavigation}><strong>Apparel</strong><span>13 product categories</span></Link>
              <Link href="/products/sports-products" onClick={closeNavigation}><strong>Sports Products</strong><span>19 product groups</span></Link>
              <Link href="/products/hockey" onClick={closeNavigation}><strong>Hockey</strong><span>4 equipment groups</span></Link>
              <Link href="/products/cricket" onClick={closeNavigation}><strong>Cricket</strong><span>4 equipment groups</span></Link>
              <Link href="/products/pickleball-padel" onClick={closeNavigation}><strong>Pickleball &amp; Padel</strong><span>5 racket directions</span></Link> */}
            </div>
            <Link className="nav-product-all" href="/#products" onClick={closeNavigation}>View all products <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <Link
          href="/#brands"
          onClick={closeNavigation}
          className="hover:text-[#4e9dff] transition-colors py-1"
        >
          Brands
        </Link>
        <Link
          href="/#process"
          onClick={closeNavigation}
          className="hover:text-[#4e9dff] transition-colors py-1"
        >
          Process
        </Link>
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
          {menuOpen ? (
            <X aria-hidden="true" strokeWidth={2.4} />
          ) : (
            <Menu aria-hidden="true" strokeWidth={2.4} />
          )}
        </button>
      </div>
    </header>
  );
}
