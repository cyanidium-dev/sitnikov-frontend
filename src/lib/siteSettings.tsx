import { cache } from "react";

import { client } from "@/lib/sanity";
import { L10n } from "@/lib/sanity/types/courseBlocks";
import { siteConfig } from "@/constants/siteConfig";

export { SOCIAL_ICONS } from "@/components/shared/socialIcons";

/** Plain social link (safe to pass to client components). */
export type SocialLink = { label: string; href: string };

type Settings = {
  phone?: string;
  email?: string;
  telegram?: string;
  facebook?: string;
  linkedin?: string;
  youtube?: string;
  instagram?: string;
  tiktok?: string;
  googleReviewsUrl?: string;
  videoCard?: {
    url?: string;
    title?: L10n;
    caption?: L10n;
    uploadDate?: string;
  };
};

const SOCIALS = [
  ["Facebook", "facebook"],
  ["Instagram", "instagram"],
  ["Telegram", "telegram"],
  ["LinkedIn", "linkedin"],
  ["YouTube", "youtube"],
  ["TikTok", "tiktok"],
] as const;

/**
 * Contacts and links from the admin («Налаштування сайту»); every empty
 * field falls back to the defaults in constants/siteConfig.
 */
export const getSiteConfig = cache(async () => {
  const s = await client
    .fetch<Settings | null>(
      `*[_id == "siteSettings"][0]{ phone, email, telegram, facebook, linkedin,
        youtube, instagram, tiktok, googleReviewsUrl, videoCard }`,
      {},
      { next: { revalidate: 300 } }
    )
    .catch(() => null);

  const fallback = (label: string) =>
    siteConfig.socialLinks.find(l => l.label === label)?.href ?? "#";
  const socialLinks: SocialLink[] = SOCIALS.map(([label, key]) => ({
    label,
    href: s?.[key] || fallback(label),
  })).filter(l => l.href && l.href !== "#");

  return {
    phone: s?.phone || siteConfig.phone,
    email: s?.email || siteConfig.email,
    socialLinks,
    telegram: socialLinks.find(l => l.label === "Telegram")?.href,
    googleReviewsUrl: s?.googleReviewsUrl || "",
    videoCard: s?.videoCard?.url ? s.videoCard : null,
  };
});

export type SiteConfig = Awaited<ReturnType<typeof getSiteConfig>>;
