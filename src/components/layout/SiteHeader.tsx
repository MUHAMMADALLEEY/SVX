"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/site-content";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("sportsventurex-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDarkMode = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDarkMode(shouldUseDarkMode);
    document.documentElement.classList.toggle("theme-dark", shouldUseDarkMode);
  }, []);

  useEffect(() => {
    const updateNavigation = () => {
      const viewportPosition = window.scrollY + 180;
      const activeSection = [...navItems]
        .reverse()
        .find((item) => document.querySelector(item.href)?.getBoundingClientRect().top! + window.scrollY <= viewportPosition);

      setIsScrolled(window.scrollY > 20);
      setActiveHref(activeSection?.href ?? "");
      setScrollProgress(window.scrollY / Math.max(document.documentElement.scrollHeight - window.innerHeight, 1));
    };

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    return () => window.removeEventListener("scroll", updateNavigation);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDarkMode;
    setIsDarkMode(nextTheme);
    document.documentElement.classList.toggle("theme-dark", nextTheme);
    window.localStorage.setItem("sportsventurex-theme", nextTheme ? "dark" : "light");
  };

  return (
    <header className={`header-wrap ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="site-header" aria-label="Main navigation">
        <a className="brand-mark" href="#top" aria-label="SportsVentureX home" onClick={() => setIsOpen(false)}>
          <span className="brand-symbol" aria-hidden="true">SVX</span>
          <span>SportsVentureX</span>
        </a>
        <nav className={`nav-links ${isOpen ? "is-open" : ""}`} aria-label="Site sections">
          {navItems.map((item) => (
            <a
              key={item.href}
              className={activeHref === item.href ? "is-active" : ""}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-mobile-cta" href="#contact" onClick={() => setIsOpen(false)}>Let&apos;s talk</a>
        </nav>
        <div className="header-actions">
          <a className="header-cta" href="#contact">Let&apos;s talk</a>
          <button
            className="theme-icon-button"
            type="button"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to night mode"}
            title={isDarkMode ? "Switch to light mode" : "Switch to night mode"}
            aria-pressed={isDarkMode}
            onClick={toggleTheme}
          >
            <span aria-hidden="true">{isDarkMode ? "☀" : "☾"}</span>
          </button>
          <button
            className={`menu-toggle ${isOpen ? "is-open" : ""}`}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
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
