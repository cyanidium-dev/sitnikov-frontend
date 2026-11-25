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
    fbq?: (...args: unknown[]) => void;
  }
}

/** Our events → Meta Pixel standard events (Pixel loads only after consent). */
const META_EVENTS: Record<string, string> = {
  generate_lead: "Lead",
  begin_checkout: "InitiateCheckout",
  purchase: "Purchase",
  click_phone: "Contact",
  click_telegram: "Contact",
  click_email: "Contact",
};

export const track = (event: string, params: EventParams = {}) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  window.gtag?.("event", event, params);
  const meta = META_EVENTS[event];
  if (meta && window.fbq) {
    const { value, currency } = params;
    window.fbq(
      "track",
      meta,
      value !== undefined ? { value, currency: currency ?? "UAH" } : {}
    );
  }
};
