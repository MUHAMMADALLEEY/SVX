"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { useTheme } from "@/context/ThemeContext";
import { navItems } from "@/data/site-content";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const isDarkMode = theme === "dark";
  const isHomePage = pathname === "/";

  function resolveHref(href: string) {
    return href.startsWith("#") && !isHomePage ? `/${href}` : href;
  }

  useEffect(() => {
    const updateNavigation = () => {
      const viewportPosition = window.scrollY + 180;
      const activeSection = isHomePage
        ? [...navItems].reverse().find((item) => {
            if (!item.href.startsWith("#")) return false;
            const section = document.querySelector(item.href);
            return section ? section.getBoundingClientRect().top + window.scrollY <= viewportPosition : false;
          })
        : undefined;

      setIsScrolled(window.scrollY > 20);
      setActiveHref(activeSection?.href ?? (isHomePage ? "" : pathname));
      setScrollProgress(window.scrollY / Math.max(document.documentElement.scrollHeight - window.innerHeight, 1));
    };

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    return () => window.removeEventListener("scroll", updateNavigation);
  }, [isHomePage, pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <header className={`header-wrap ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="site-header">
        <a className="brand-mark" href={isHomePage ? "#top" : "/"} aria-label="SportsVentureX home" onClick={() => setIsOpen(false)}>
          <BrandLogo className="brand-logo" />
        </a>
        <nav id="primary-navigation" className={`nav-links ${isOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              className={activeHref === item.href ? "is-active" : ""}
              href={resolveHref(item.href)}
              aria-current={activeHref === item.href ? "location" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-mobile-cta" href="/contact" onClick={() => setIsOpen(false)}>Request a quote</a>
        </nav>
        <div className="header-actions">
          <a className="header-cta" href="/contact">Request a quote</a>
          <button
            className="theme-icon-button"
            type="button"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to night mode"}
            title={isDarkMode ? "Switch to light mode" : "Switch to night mode"}
            aria-pressed={isDarkMode}
            onClick={toggleTheme}
          >
            <span aria-hidden="true">{isDarkMode ? "\u263c" : "\u263e"}</span>
          </button>
          <button
            className={`menu-toggle ${isOpen ? "is-open" : ""}`}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <span className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} aria-hidden="true" />
    </header>
  );
}
