"use client";

import { openCookieSettingsEvent } from "@/components/layout/CookieConsent";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="footer-link-button"
      onClick={() => window.dispatchEvent(new Event(openCookieSettingsEvent))}
    >
      Cookie settings
    </button>
  );
}
