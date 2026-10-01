'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type GoogleAnalyticsProps = {
  measurementId?: string;
};

export default function GoogleAnalytics({
  measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
}: GoogleAnalyticsProps) {
  const pathname = usePathname();
  const isFirstPage = useRef(true);
  const analyticsId = measurementId?.trim();

  useEffect(() => {
    if (isFirstPage.current) {
      isFirstPage.current = false;
      return;
    }

    window.gtag?.('config', analyticsId, {
      page_path: `${window.location.pathname}${window.location.search}`,
    });
  }, [analyticsId, pathname]);

  if (!analyticsId || !/^G-[A-Z0-9]+$/i.test(analyticsId)) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analyticsId)}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${JSON.stringify(analyticsId)});
        `}
      </Script>
    </>
  );
}
