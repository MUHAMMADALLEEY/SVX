import type {Metadata} from 'next';
import {Barlow_Condensed, Inter} from 'next/font/google';
import ContactBriefModal from '@/components/ContactBriefModal';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import {siteConfig} from '@/lib/site-config';
import './globals.css';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'SVX | Manufacturing & Sourcing',
    template: '%s | SVX',
  },
  description: 'SVX is a buyer-focused manufacturing and sourcing partner for socks, sportswear, footballs, bags and multi-category retail programmes.',
  alternates: {canonical: '/'},
  icons: {
    icon: [
      {url: '/icon.svg?v=2', type: 'image/svg+xml'},
      {url: '/favicon.ico?v=2', sizes: 'any'},
    ],
    apple: [{url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png'}],
  },
  openGraph: {
    title: 'SVX | Manufacturing & Sourcing',
    description: 'SVX is a buyer-focused manufacturing and sourcing partner for socks, sportswear, footballs, bags and multi-category retail programmes.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SVX | Manufacturing & Sourcing',
    description: 'SVX is a buyer-focused manufacturing and sourcing partner for socks, sportswear, footballs, bags and multi-category retail programmes.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${barlowCondensed.variable} ${inter.variable}`}
    >
      <body
        suppressHydrationWarning
        className="bg-[#070a10] text-[#f5f7fa] font-sans antialiased"
      >
        {children}
        <ContactBriefModal />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
