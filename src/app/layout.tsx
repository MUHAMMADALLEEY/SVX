import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ThemeProvider } from "@/context/ThemeContext";
import { MotionController } from "@/components/ui/MotionController";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const themeInitializationScript = `
  (() => {
    try {
      const savedTheme = window.localStorage.getItem("sportsventurex-theme");
      const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      const theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : preferredTheme;
      document.documentElement.classList.toggle("theme-dark", theme === "dark");
    } catch {
      document.documentElement.classList.toggle(
        "theme-dark",
        window.matchMedia("(prefers-color-scheme: dark)").matches,
      );
    }
  })();
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SportsVentureX | Custom Sports Goods Manufacturing",
    template: "%s | SportsVentureX",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "custom sports goods",
    "football manufacturer",
    "custom socks",
    "custom bags",
    "sports product development",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: "SportsVentureX | Custom Sports Goods Manufacturing",
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SportsVentureX custom sports goods" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SportsVentureX | Custom Sports Goods Manufacturing",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  icons: { icon: "/icon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <a className="skip-link" href="#main-content">Skip to main content</a>
          <MotionController />
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
