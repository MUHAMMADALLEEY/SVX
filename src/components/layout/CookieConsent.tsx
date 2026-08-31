"use client";

import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@/components/layout/GoogleAnalytics";

const consentStorageKey = "sportsventurex-cookie-consent";
export const openCookieSettingsEvent = "sportsventurex:open-cookie-settings";

type ConsentChoice = "accepted" | "rejected" | null;

function readConsent(): ConsentChoice {
  try {
    const value = window.localStorage.getItem(consentStorageKey);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentChoice>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
    setIsReady(true);

    const openSettings = () => setConsent(null);
    window.addEventListener(openCookieSettingsEvent, openSettings);
    return () => window.removeEventListener(openCookieSettingsEvent, openSettings);
  }, []);

  function saveConsent(choice: Exclude<ConsentChoice, null>) {
    try {
      window.localStorage.setItem(consentStorageKey, choice);
    } catch {
      // Consent still applies for the current page when storage is unavailable.
    }
    setConsent(choice);
  }

  return (
    <>
      {consent === "accepted" ? (
        <>
          <Analytics />
          <GoogleAnalytics />
        </>
      ) : null}
      {isReady && consent === null ? (
        <aside
          className="cookie-consent"
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
        >
          <div>
            <strong id="cookie-consent-title">Your privacy choices</strong>
            <p id="cookie-consent-description">
              We use optional analytics, including Google Analytics, to understand site performance. Essential
              site functions work without analytics. Read our <a href="/privacy-policy">privacy policy</a>.
            </p>
          </div>
          <div className="cookie-consent-actions">
            <button type="button" className="button button-secondary" onClick={() => saveConsent("rejected")}>
              Reject analytics
            </button>
            <button type="button" className="button button-primary" onClick={() => saveConsent("accepted")}>
              Accept analytics
            </button>
          </div>
        </aside>
      ) : null}
    </>
  );
}
