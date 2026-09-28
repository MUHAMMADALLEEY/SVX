'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed md:absolute z-30">
      <a className="logo" href="#top" aria-label="SVX home">
        <Image
          src="/assets/logo-wide.png"
          alt="SVX"
          width={148}
          height={51}
          priority
          referrerPolicy="no-referrer"
          className="h-full w-full object-contain"
        />
      </a>

      <nav
        aria-label="Main navigation"
        className={`${
          menuOpen
            ? '!flex fixed top-[74px] left-0 right-0 bg-[#070a10] p-6 flex-col border-b border-white/15 gap-5 shadow-2xl z-40'
            : 'hidden md:flex'
        }`}
      >
        <a
          href="#network"
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#4e9dff] transition-colors py-1"
        >
          Network
        </a>
        <a
          href="#products"
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#4e9dff] transition-colors py-1"
        >
          Products
        </a>
        <a
          href="#buyers"
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#4e9dff] transition-colors py-1"
        >
          Buyers
        </a>
        <a
          href="#process"
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#4e9dff] transition-colors py-1"
        >
          Process
        </a>
      </nav>

      <div className="flex items-center gap-3">
        <a className="cta mini hidden md:inline-flex" href="#contact">
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
