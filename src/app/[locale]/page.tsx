import { Metadata } from "next";

import HomeAdvantages from "@/components/homepage/HomeAdvantages";
import HeroBottomCTA from "@/components/homepage/HomeBottomCTA";
import HomeCourses from "@/components/homepage/HomeCourses";
import HeroExperience from "@/components/homepage/HomeExperience";
import HomeHero from "@/components/homepage/HomeHero";
import HeroKnowledge from "@/components/homepage/HomeKnowledge";
import HeroPublications from "@/components/homepage/HomePublications";
import HeroTopCTA from "@/components/homepage/HomeTopCTA";
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
    namespace: "homepage",
    path: ROUTES.HOME,
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <>
      <HomeHero />
      <HomeCourses lang={locale} />
      <HomeAdvantages />
      <HeroTopCTA />
      <HeroPublications lang={locale} />
      <HeroKnowledge />
      <HeroExperience />
      <HeroBottomCTA />
    </>
  );
}
