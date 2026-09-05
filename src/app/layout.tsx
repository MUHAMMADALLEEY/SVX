import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { Chatbot } from "@/components/layout/Chatbot";
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: { index: true, follow: true },
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/icon-192x192.png`,
      description: siteConfig.description,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        url: `${siteConfig.url}/#contact`,
      },
    },
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <a className="skip-link" href="#main-content">Skip to main content</a>
          <MotionController />
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <CookieConsent />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
