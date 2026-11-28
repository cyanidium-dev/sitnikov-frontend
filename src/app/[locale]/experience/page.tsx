import { Metadata } from "next";
import { Locale } from "next-intl";

import AboutCases from "@/components/experiencepage/AboutCases";
import AboutExpertise from "@/components/experiencepage/AboutExpertise";
import AboutHero from "@/components/experiencepage/AboutHero";
import AboutPath from "@/components/experiencepage/AboutPath";
import HomeBottomCTA from "@/components/homepage/HomeBottomCTA";
import JsonLd from "@/components/seo/JsonLd";
import { SECTION_NAMES, pageSchema } from "@/components/seo/seo";
import { PERSON_ID } from "@/components/seo/siteSchema";
import { ROUTES } from "@/constants/routes";
import { generatePageMetadata } from "@/utils/generatePageMetaData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    namespace: "experiencePage",
    path: ROUTES.EXPERIENCE,
  });
}

const ExperiencePage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;
  const ld = pageSchema({
    locale,
    type: ["AboutPage", "ProfilePage"],
    path: ROUTES.EXPERIENCE,
    name: SECTION_NAMES.experience[locale],
    crumbs: [
      { name: SECTION_NAMES.experience[locale], path: ROUTES.EXPERIENCE },
    ],
    mainEntity: { "@id": PERSON_ID },
  });

  return (
    <>
      <JsonLd data={ld} />
      <AboutHero />
      <AboutPath />
      <AboutExpertise />
      <AboutCases />
      <HomeBottomCTA />
    </>
  );
};

export default ExperiencePage;
