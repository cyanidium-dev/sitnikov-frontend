import { Metadata } from "next";

import HomeBottomCTA from "@/components/homepage/HomeBottomCTA";
import PublicationsPageView from "@/components/publications/PublicationsPageView";
import JsonLd from "@/components/seo/JsonLd";
import {
  SECTION_NAMES,
  itemList,
  pageSchema,
  sentenceCase,
} from "@/components/seo/seo";
import { PERSON_ID } from "@/components/seo/siteSchema";
import { getAllPublications } from "@/lib/sanity/queries/queries";
import { ROUTES } from "@/constants/routes";
import { generatePageMetadata } from "@/utils/generatePageMetaData";
import { Locale } from "@/types/locale";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    namespace: "publicationsPage",
    path: ROUTES.PUBLICATIONS,
  });
}

const PublicationsPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;
  const posts = await getAllPublications().catch(() => []);
  const ld = pageSchema({
    locale,
    type: ["CollectionPage", "Blog"],
    path: ROUTES.PUBLICATIONS,
    name: SECTION_NAMES.publications[locale],
    crumbs: [
      { name: SECTION_NAMES.publications[locale], path: ROUTES.PUBLICATIONS },
    ],
    mainEntity: {
      ...itemList(
        locale,
        posts.map(p => ({
          name: sentenceCase(p.title[locale] || p.title.uk),
          path: `${ROUTES.PUBLICATIONS}/${p.slug}`,
        }))
      ),
      author: { "@id": PERSON_ID },
    },
  });

  return (
    <>
      <JsonLd data={ld} />
      <PublicationsPageView lang={locale} />
      <HomeBottomCTA />
    </>
  );
};

export default PublicationsPage;
