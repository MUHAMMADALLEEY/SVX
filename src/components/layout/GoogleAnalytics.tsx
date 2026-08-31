"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type GoogleAnalyticsProps = {
  measurementId?: string;
};

export function GoogleAnalytics({
  measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
}: GoogleAnalyticsProps) {
  const pathname = usePathname();
  const analyticsId = measurementId?.trim();
  const analyticsIdJson = JSON.stringify(analyticsId);

  useEffect(() => {
    if (!analyticsId || !window.gtag) return;

    window.gtag("config", analyticsId, {
      page_path: `${window.location.pathname}${window.location.search}`,
    });
  }, [analyticsId, pathname]);

  if (!analyticsId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());
          gtag("config", ${analyticsIdJson}, { send_page_view: false });
        `}
      </Script>
    </>
  );
}
