import { Metadata } from "next";

import AnnouncementsView from "@/components/announcementsPage/AnnouncementsView";
import HomeBottomCTA from "@/components/homepage/HomeBottomCTA";
import JsonLd from "@/components/seo/JsonLd";
import { SECTION_NAMES, pageSchema, sentenceCase } from "@/components/seo/seo";
import { ORG_ID, PERSON_ID } from "@/components/seo/siteSchema";
import { getAllAnnouncements } from "@/lib/sanity/queries/queries";
import { ROUTES } from "@/constants/routes";
import { generatePageMetadata } from "@/utils/generatePageMetaData";
import { SITE_URL } from "@/utils/getBaseUrl";
import { Locale } from "@/types/locale";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    namespace: "announcementsPage",
    path: ROUTES.ANNOUNCEMENTS,
  });
}

const AnnouncementsPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;
  // only upcoming events go to the markup (past/test announcements are skipped)
  const now = Date.now();
  const events = (await getAllAnnouncements().catch(() => [])).filter(
    e => new Date(e.startDate).getTime() >= now
  );
  const ld = pageSchema({
    locale,
    type: "CollectionPage",
    path: ROUTES.ANNOUNCEMENTS,
    name: SECTION_NAMES.announcements[locale],
    crumbs: [
      { name: SECTION_NAMES.announcements[locale], path: ROUTES.ANNOUNCEMENTS },
    ],
    // each announcement is an online event of the school
    extra: events.map(e => ({
      "@type": "EducationEvent",
      name: sentenceCase(e.title[locale] || e.title.uk),
      description: e.description[locale] || e.description.uk,
      startDate: e.startDate,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      location: {
        "@type": "VirtualLocation",
        url: `${SITE_URL}/${locale}${ROUTES.ANNOUNCEMENTS}`,
      },
      ...(e.previewImage?.url && { image: e.previewImage.url }),
      organizer: { "@id": ORG_ID },
      performer: { "@id": PERSON_ID },
      inLanguage: locale,
    })),
  });

  return (
    <>
      <JsonLd data={ld} />
      <AnnouncementsView lang={locale} />
      <HomeBottomCTA />
    </>
  );
};

export default AnnouncementsPage;
