import { Metadata } from "next";

import GalleryView from "@/components/galleryPage/GalleryView";
import HomeBottomCTA from "@/components/homepage/HomeBottomCTA";
import JsonLd from "@/components/seo/JsonLd";
import { SECTION_NAMES, pageSchema } from "@/components/seo/seo";
import { getGallery } from "@/lib/sanity/queries/gallery";
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
    namespace: "galleryPage",
    path: ROUTES.GALLERY,
  });
}

const GalleryPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;
  const events = await getGallery().catch(() => []);
  const ld = pageSchema({
    locale,
    type: ["CollectionPage", "ImageGallery"],
    path: ROUTES.GALLERY,
    name: SECTION_NAMES.gallery[locale],
    crumbs: [{ name: SECTION_NAMES.gallery[locale], path: ROUTES.GALLERY }],
    extra: events.flatMap(ev =>
      (ev.images ?? []).slice(0, 6).map(img => ({
        "@type": "ImageObject",
        contentUrl: img.url,
        name: ev.title[locale] || ev.title.uk,
        caption: ev.description[locale] || ev.description.uk,
      }))
    ),
  });

  return (
    <>
      <JsonLd data={ld} />
      <GalleryView lang={locale} />
      <HomeBottomCTA />
    </>
  );
};

export default GalleryPage;
