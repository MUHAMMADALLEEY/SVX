import type {Metadata} from 'next';
import localFont from 'next/font/local';
import {Inter} from 'next/font/google';
import ContactBriefModal from '@/components/ContactBriefModal';
import CustomCursor from '@/components/CustomCursor';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import {siteConfig} from '@/lib/site-config';
import './globals.css';

const barlowCondensed = localFont({
  src: [
    {
      path: '../public/fonts/barlow-condensed-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/barlow-condensed-700.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/barlow-condensed-800.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/barlow-condensed-900.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'SVX | Manufacturing & Sourcing',
    template: '%s | SVX',
  },
  description:
    'SVX is a buyer-focused OEM/ODM manufacturing and sourcing partner for custom socks, match and training footballs, and technical sports bags.',
  icons: {
    icon: [
      {url: '/icon.svg?v=2', type: 'image/svg+xml'},
      {url: '/favicon.ico?v=2', sizes: 'any'},
    ],
    apple: [{url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png'}],
  },
  openGraph: {
    title: 'SVX | Custom Socks, Footballs & Bags Manufacturing',
    description:
      'Buyer-focused OEM/ODM sports goods manufacturing and global sourcing partner across custom socks, footballs, and sports bags.',
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: '/assets/product-world.png',
        width: 1200,
        height: 630,
        alt: 'SportsVentureX Product Programme & Sourcing Laboratory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SVX | Custom Socks, Footballs & Bags Manufacturing',
    description:
      'Buyer-focused OEM/ODM sports goods manufacturing and global sourcing partner across custom socks, footballs, and sports bags.',
    images: ['/assets/product-world.png'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${barlowCondensed.variable} ${inter.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-[#070a10] text-[#f5f7fa] font-sans antialiased"
      >
        <JsonLd />
        {children}
        <CustomCursor />
        <ContactBriefModal />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
