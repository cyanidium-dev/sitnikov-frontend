"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

import { track } from "@/lib/analytics/track";

import {
  CONSENT_CHANGED_EVENT,
  Consent,
  readConsent,
} from "../cookies/consent";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-SHD2CN19M2";
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "zfioiskill";

/**
 * Preview copies (NEXT_PUBLIC_NOINDEX=1) never send data to the client's
 * analytics unless NEXT_PUBLIC_ANALYTICS_DEBUG=1.
 */
const ENABLED =
  process.env.NEXT_PUBLIC_NOINDEX !== "1" ||
  process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "1";

/** Consent Mode v2 defaults: everything denied until the visitor accepts. */
const consentDefaults = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
var c = null;
try { c = JSON.parse(localStorage.getItem('sitnikov-consent')); } catch (e) {}
var s = c && c.analytics ? 'granted' : 'denied';
gtag('consent', 'default', {
  analytics_storage: s, ad_storage: s, ad_user_data: s, ad_personalization: s,
  functionality_storage: 'granted', security_storage: 'granted',
  wait_for_update: 500
});
`;

/** Clicks on phone, Telegram and e-mail links become analytics events. */
const useContactClicks = () => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.("a");
      const href = link?.getAttribute("href") || "";
      if (href.startsWith("tel:")) track("click_phone", { link_url: href });
      else if (href.startsWith("mailto:"))
        track("click_email", { link_url: href });
      else if (/t\.me\/|telegram\.me\//.test(href))
        track("click_telegram", { link_url: href });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);
};

const Analytics = () => {
  const [consent, setConsent] = useState<Consent | null>(null);
  useContactClicks();

  useEffect(() => {
    setConsent(readConsent());
    const onChange = (e: Event) =>
      setConsent((e as CustomEvent<Consent>).detail);
    window.addEventListener(CONSENT_CHANGED_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, onChange);
  }, []);

  if (!ENABLED) return null;

  return (
    <>
      <Script id="consent-default" strategy="afterInteractive">
        {consentDefaults}
      </Script>

      {GTM_ID ? (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      ) : (
        GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`gtag('js', new Date()); gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )
      )}

      {/* Clarity sets its own cookies, so it waits for consent */}
      {CLARITY_ID && consent?.analytics && (
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${CLARITY_ID}");`}
        </Script>
      )}
    </>
  );
};

export default Analytics;
