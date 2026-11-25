/**
 * One place to send analytics events.
 * Events go to the GTM dataLayer and, when GA4 is loaded directly, to gtag.
 * Nothing is sent until the visitor accepts analytics cookies (Consent Mode).
 */
type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const track = (event: string, params: EventParams = {}) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  window.gtag?.("event", event, params);
};
