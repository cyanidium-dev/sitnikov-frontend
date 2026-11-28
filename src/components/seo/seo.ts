import { FullContentBlock } from "@/lib/sanity/types/shared";
import { ROUTES } from "@/constants/routes";
import { SITE_URL } from "@/utils/getBaseUrl";

import { ORG_ID, PERSON_ID } from "./siteSchema";

/* ---------- text helpers for <title> / description ---------- */

/** Titles typed in capitals in the admin → sentence case (keeps short abbreviations). */
export const sentenceCase = (s: string) => {
  const letters = s.replace(/[^A-Za-zА-Яа-яІіЇїЄєҐґ]/g, "");
  if (letters.length < 8 || letters !== letters.toUpperCase()) return s;
  const lower = s.toLowerCase();
  // proper names that must stay capitalised
  return (lower.charAt(0).toUpperCase() + lower.slice(1)).replace(
    /(^|[\s«"(])(україн|украин|київ|киев|європ|европ|верховн(?=\w* суд))/g,
    (_, sp: string, w: string) => sp + w.charAt(0).toUpperCase() + w.slice(1)
  );
};

/** Cut at a word boundary so the snippet is not chopped mid-word. */
export const clamp = (s: string, max = 155) => {
  const text = s.replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:—–-]+$/, "") + "…";
};

/** Plain text of the first paragraphs of an article body. */
export const plainText = (blocks: FullContentBlock[] = [], max = 400) =>
  blocks
    .filter(b => b.style === "normal")
    .map(b => b.children.map(c => c.text).join(""))
    .join(" ")
    .slice(0, max);

/**
 * Description of a content page: the admin text if it is informative,
 * otherwise the beginning of the body text.
 */
export const pageDescription = (short: string | undefined, body: string) => {
  const s = (short ?? "").trim();
  if (s.length >= 110) return clamp(s);
  return clamp(s && body && !body.startsWith(s) ? `${s}. ${body}` : body || s);
};

/** «Name | Brand» when it fits into ~60 characters, otherwise the name (cut at a word). */
export const titleWithBrand = (name: string, locale: string, max = 62) => {
  const brand = locale === "ru" ? "Александр Сытников" : "Олександр Ситников";
  const full = `${name} | ${brand}`;
  if (full.length <= max) return full;
  // long titles: the part before «:» if it fits, else a clean cut
  const head = name.split(/:\s/)[0];
  return head.length <= max ? head : clamp(name, max);
};

/* ---------- schema.org ---------- */

const HOME = { uk: "Головна", ru: "Главная" } as const;
export const SECTION_NAMES: Record<
  | "education"
  | "services"
  | "experience"
  | "publications"
  | "announcements"
  | "gallery"
  | "contacts",
  Record<string, string>
> = {
  education: { uk: "Навчання", ru: "Обучение" },
  services: { uk: "Послуги", ru: "Услуги" },
  experience: { uk: "Про мене", ru: "Обо мне" },
  publications: { uk: "Публікації", ru: "Публикации" },
  announcements: { uk: "Анонси", ru: "Анонсы" },
  gallery: { uk: "Галерея заходів", ru: "Галерея мероприятий" },
  contacts: { uk: "Контакти", ru: "Контакты" },
};

type Crumb = { name: string; path: string };
const abs = (locale: string, path: string) =>
  `${SITE_URL}/${locale}${path === "/" ? "" : path}`;

export const breadcrumbs = (locale: string, items: Crumb[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: [
    { name: HOME[locale as "uk" | "ru"] ?? HOME.uk, path: "/" },
    ...items,
  ].map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: abs(locale, c.path),
  })),
});

/** WebPage of a given type + its breadcrumbs, as one @graph. */
export const pageSchema = ({
  locale,
  type = "WebPage",
  path,
  name,
  description,
  crumbs,
  extra = [],
  mainEntity,
}: {
  locale: string;
  type?: string | string[];
  path: string;
  name: string;
  description?: string;
  crumbs: Crumb[];
  extra?: Record<string, unknown>[];
  mainEntity?: Record<string, unknown>;
}) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": type,
      "@id": `${abs(locale, path)}#webpage`,
      url: abs(locale, path),
      name,
      ...(description && { description }),
      inLanguage: locale,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": PERSON_ID },
      publisher: { "@id": ORG_ID },
      breadcrumb: { "@id": `${abs(locale, path)}#breadcrumb` },
      ...(mainEntity && { mainEntity }),
    },
    {
      ...breadcrumbs(locale, crumbs),
      "@id": `${abs(locale, path)}#breadcrumb`,
    },
    ...extra,
  ],
});

export const itemList = (
  locale: string,
  items: { name: string; path: string }[]
) => ({
  "@type": "ItemList",
  numberOfItems: items.length,
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    url: abs(locale, it.path),
  })),
});

export { ROUTES };
