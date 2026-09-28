import type {Metadata} from 'next';
import {Barlow_Condensed, Inter} from 'next/font/google';
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
  title: 'SVX | Manufacturing & Sourcing',
  description: 'SVX is a buyer-focused manufacturing and sourcing partner for socks, sportswear, footballs, bags and multi-category retail programmes.',
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23070a10'/%3E%3Cpath d='M9 21h23v7H16v5h16v8H9V21zm24 0h8l4 10 5-10h8L45 43z' fill='white'/%3E%3C/svg%3E",
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
      </body>
    </html>
  );
}
