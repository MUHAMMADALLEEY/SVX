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
    default: "SportsVentureX | Custom Sports Goods Manufacturer Europe",
    template: "%s | SportsVentureX",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "SportsVentureX" }],
  keywords: [
    "custom sports goods manufacturer",
    "sports goods OEM",
    "custom football manufacturer",
    "sports merchandise manufacturer",
    "custom socks production",
    "branded sports bags",
    "custom sports apparel",
    "sports goods wholesaler",
    "sports product development Europe",
    "sports equipment manufacturer UK",
    "custom sports goods Germany",
    "sports goods manufacturing France",
    "branded sportswear production",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "SportsVentureX | European Custom Sports Goods Manufacturer",
    description: "Design and produce custom-branded sports goods. Footballs, socks, bags, apparel — OEM/ODM for European brands.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SportsVentureX custom sports goods manufacturing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SportsVentureX | European Custom Sports Goods Manufacturer",
    description: "Design and produce custom-branded sports goods. Footballs, socks, bags, apparel — OEM/ODM for European brands.",
    images: ["/opengraph-image"],
  },
  icons: { icon: "/icon.svg" },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SportsVentureX",
  "url": siteConfig.url,
  "description": siteConfig.description,
  "logo": `${siteConfig.url}/icon.svg`,
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
  },
  "areaServed": ["GB", "DE", "FR", "NL", "SE", "NO", "DK"],
  "slogan": "Custom sports goods for growing European brands",
};

const productSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Footballs",
    "manufacturer": { "@type": "Organization", "name": "SportsVentureX" },
    "description": "Custom manufactured footballs for training, match play, and promotional use. Available in multiple sport formats with custom panels and branding for European brands.",
    "brand": { "@type": "Brand", "name": "SportsVentureX" },
    "category": "Sports Equipment",
    "keywords": "custom footballs, branded sports balls, football manufacturer",
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Socks",
    "manufacturer": { "@type": "Organization", "name": "SportsVentureX" },
    "description": "Custom performance socks and lifestyle socks. Crew, quarter, and ankle styles with multipacks, custom colors, logos, and premium construction for sports brands.",
    "brand": { "@type": "Brand", "name": "SportsVentureX" },
    "category": "Sports Apparel",
    "keywords": "custom socks, branded socks, performance socks manufacturer",
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Bags",
    "manufacturer": { "@type": "Organization", "name": "SportsVentureX" },
    "description": "Water-repellent sports bags including backpacks and waist packs. 600D Oxford fabric with custom colors, prints, trims, and branding options for European sports retailers.",
    "brand": { "@type": "Brand", "name": "SportsVentureX" },
    "category": "Sports Accessories",
    "keywords": "custom sports bags, branded backpacks, sports merchandise manufacturer",
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom T-Shirts",
    "manufacturer": { "@type": "Organization", "name": "SportsVentureX" },
    "description": "Custom performance and cotton T-shirts with athletic and relaxed fits. Premium fabrics with custom prints, colors, and branding for sports brands and retailers.",
    "brand": { "@type": "Brand", "name": "SportsVentureX" },
    "category": "Sports Apparel",
    "keywords": "custom t-shirts, branded athletic wear, sports merchandise",
  },
];

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {productSchemas.map((schema, index) => (
          <script
            key={`product-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
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
