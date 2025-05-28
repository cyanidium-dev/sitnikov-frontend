import HomeAdvantages from "@/components/homepage/HomeAdvantages";
import HeroBottomCTA from "@/components/homepage/HomeBottomCTA";
import HeroExperience from "@/components/homepage/HomeExperience";
import HomeHero from "@/components/homepage/HomeHero";
import HeroKnowledge from "@/components/homepage/HomeKnowledge";
import HeroPublications from "@/components/homepage/HomePublications";
import HeroTopCTA from "@/components/homepage/HomeTopCTA";

export default async function Home() {
  return (
    <>
      <HomeHero />
      <HomeAdvantages />
      <HeroTopCTA />
      <HeroPublications />
      <HeroKnowledge />
      <HeroExperience />
      <HeroBottomCTA />
    </>
  );
}
