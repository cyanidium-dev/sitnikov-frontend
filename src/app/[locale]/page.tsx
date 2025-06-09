import HomeAdvantages from "@/components/homepage/HomeAdvantages";
import HeroBottomCTA from "@/components/homepage/HomeBottomCTA";
import HomeCourses from "@/components/homepage/HomeCourses";
import HeroExperience from "@/components/homepage/HomeExperience";
import HomeHero from "@/components/homepage/HomeHero";
import HeroKnowledge from "@/components/homepage/HomeKnowledge";
import HeroPublications from "@/components/homepage/HomePublications";
import HeroTopCTA from "@/components/homepage/HomeTopCTA";
import { Locale } from "@/types/locale";

export default async function Homeasync({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <>
      <HomeHero />
      <HomeCourses />
      <HomeAdvantages />
      <HeroTopCTA />
      <HeroPublications lang={locale} />
      <HeroKnowledge />
      <HeroExperience />
      <HeroBottomCTA />
    </>
  );
}
