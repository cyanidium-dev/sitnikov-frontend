import HeroKnowledge from "@/components/homepage/HeroKnowledge";
import HeroTopCTA from "@/components/homepage/HeroTopCTA";
import HomeAdvantages from "@/components/homepage/HomeAdvantages";
import HomeHero from "@/components/homepage/HomeHero";

export default async function Home() {
  return (
    <>
      <HomeHero />
      <HomeAdvantages />
      <HeroTopCTA />
      <HeroKnowledge />
    </>
  );
}
