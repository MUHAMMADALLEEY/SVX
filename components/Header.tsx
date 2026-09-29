'use client';

import { useState } from 'react';
import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';
import { openContactBrief } from '@/components/ContactBriefModal';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#4e9dff] transition-colors py-1"
        >
          Network
        </a>
        <a
          href="/#products"
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#4e9dff] transition-colors py-1"
        >
          Products
        </a>
        <a
          href="/#buyers"
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#4e9dff] transition-colors py-1"
        >
          Buyers
        </a>
        <a
          href="/#process"
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#4e9dff] transition-colors py-1"
        >
          Process
        </a>
        <a
          href="#contact"
          onClick={(event) => {
            event.preventDefault();
            setMenuOpen(false);
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
