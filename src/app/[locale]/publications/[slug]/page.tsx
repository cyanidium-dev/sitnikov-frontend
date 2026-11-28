import { notFound } from "next/navigation";

import HomeBottomCTA from "@/components/homepage/HomeBottomCTA";
import ArticleView from "@/components/publications/ArticleView";
import JsonLd from "@/components/seo/JsonLd";
import {
  SECTION_NAMES,
  breadcrumbs,
  pageDescription,
  plainText,
  sentenceCase,
  titleWithBrand,
} from "@/components/seo/seo";
import { ORG_ID, PERSON_ID } from "@/components/seo/siteSchema";
import {
  getAllPublications,
  getPublicationBySlug,
} from "@/lib/sanity/queries/queries";
import { ROUTES } from "@/constants/routes";
import { normalizeTitle } from "@/utils/courseImage";
import { SITE_URL } from "@/utils/getBaseUrl";
import { getReadingTimeMinutes } from "@/utils/getReadingTimeMinutes";
import { mapItemToCardProps } from "@/utils/mapItemToCardProps";
import { Locale } from "@/types/locale";

// export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;

  const post = await getPublicationBySlug(slug);

  if (!post) return {};

  const {
    title,
    description,
    previewImage,
    content,
    seoTitle,
    seoDescription,
  } = post;

  const path = `${ROUTES.PUBLICATIONS}/${slug}`;
  const name = sentenceCase(title[locale] || title.uk);
  const metaTitle =
    seoTitle?.[locale] || seoTitle?.uk || titleWithBrand(name, locale);
  // short admin descriptions («Від скарги до позовної заяви») get the article lead
  const seoDescr =
    seoDescription?.[locale] ||
    pageDescription(
      description[locale],
      plainText(content?.[locale] ?? content?.uk)
    );

  return {
    title: metaTitle,
    description: seoDescr,
    alternates: {
      canonical: `${SITE_URL}/${locale}${path}`,
      languages: {
        uk: `${SITE_URL}/uk${path}`,
        ru: `${SITE_URL}/ru${path}`,
        "x-default": `${SITE_URL}/uk${path}`,
      },
    },
    openGraph: {
      url: `${SITE_URL}/${locale}${path}`,
      title: name,
      description: seoDescr,
      images: previewImage?.url ? [previewImage.url] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: title[locale],
      description: description[locale],
      images: previewImage?.url ? [previewImage?.url] : [],
    },
  };
}

// export async function generateStaticParams() {
//   const posts = await getAllPublicationSlugs();

//   const languages = ["uk", "ru"];

//   return posts.flatMap(post =>
//     languages.map(lang => ({
//       slug: post.slug,
//       lang,
//     }))
//   );
// }

const PublicationPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) => {
  const { locale, slug } = await params;
  const post = await getPublicationBySlug(slug);

  if (!post) return notFound();

  const { title, description, content, gallery, mainImage } = post;

  const readingTime = getReadingTimeMinutes(content, locale);

  const headline = sentenceCase(title[locale] || title.uk);
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description: pageDescription(
      description[locale],
      plainText(content?.[locale] ?? content?.uk)
    ),
    image: post.previewImage?.url || mainImage?.url,
    inLanguage: locale,
    mainEntityOfPage: `${SITE_URL}/${locale}${ROUTES.PUBLICATIONS}/${slug}`,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
  };
  const crumbsLd = {
    "@context": "https://schema.org",
    ...breadcrumbs(locale, [
      { name: SECTION_NAMES.publications[locale], path: ROUTES.PUBLICATIONS },
      { name: headline, path: `${ROUTES.PUBLICATIONS}/${slug}` },
    ]),
  };

  const related = (await getAllPublications().catch(() => []))
    .filter(p => p.slug !== slug)
    .slice(0, 3)
    .map(p => {
      const c = mapItemToCardProps(p, locale);
      return {
        href: c.href ?? `/${locale}${ROUTES.PUBLICATIONS}`,
        title: normalizeTitle(c.title),
        description: c.description,
        info: c.info,
      };
    });

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={crumbsLd} />
      <ArticleView
        title={normalizeTitle(title[locale] || title.uk)}
        description={description[locale]}
        readingTime={readingTime}
        content={content[locale]?.length ? content[locale] : content.uk}
        gallery={gallery}
        related={related}
      />
      <HomeBottomCTA />
    </>
  );
};

export default PublicationPage;
