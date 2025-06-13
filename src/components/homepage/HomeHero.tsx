import { getTranslations } from "next-intl/server";

import { ROUTES } from "@/constants/routes";
import { fadeInAnimation } from "@/helpers/animation";

import AnimatedWrapper from "../shared/animated/AnimatedWrapper";
import ButtonOrLink from "../shared/button/ButtonOrLink ";

const HomeHero = async () => {
  const t = await getTranslations("homepage.hero");

  return (
    <section className="relative h-dvh min-h-[773px] overflow-hidden pt-[108px] xl:pt-[185px]">
      <div className="container flex h-full max-w-[1280px] flex-col leading-[1.22]">
        <AnimatedWrapper animation={fadeInAnimation({ x: -50 })}>
          <p className="mb-5 max-w-[400px] font-micra text-[20px] xl:mb-7 xl:w-[251px]">
            {t("subtitle")}
          </p>
          <p className="mr-[142px] max-w-[250px] text-[12px] font-light xl:w-[177px] xl:text-[14px]">
            {t("descr")}
          </p>
        </AnimatedWrapper>

        <AnimatedWrapper
          animation={fadeInAnimation({ x: 50, delay: 1 })}
          className="absolute bottom-[84px] right-[30px] mt-auto flex w-[296px] flex-col gap-8 xl:relative xl:ml-auto xl:w-[475px] xl:flex-col-reverse xl:gap-7"
        >
          <h1 className="font-micra text-[24px] text-light xl:text-[44px]">
            {t("title")}
          </h1>

          <ButtonOrLink href={ROUTES.FREE_EDUCATION}>
            {t("button")}
          </ButtonOrLink>
        </AnimatedWrapper>
      </div>

      <AnimatedWrapper
        animation={fadeInAnimation({ y: -50, delay: 0.5, scale: 0.8 })}
        className="absolute bottom-0 right-0 -z-30 h-[614px] w-[315px] bg-[url('/images/homepage/home-hero-person-mob.webp')] bg-cover md:-bottom-[17px] md:right-[27%] md:aspect-[628/832] md:h-[85%] md:w-auto md:bg-[url('/images/homepage/home-hero-person-desk.webp')] xl:right-[42%] xl:h-[100%]"
      />

      <AnimatedWrapper
        animation={fadeInAnimation({ x: 50, delay: 0.5 })}
        className="absolute bottom-2 right-[10px] -z-40 h-[334px] w-[340px] rounded-2xl bg-[url('/images/homepage/home-hero-bg.webp')] bg-cover md:-right-[29px] md:h-[98%] md:w-[55%] xl:w-[65%]"
      />
    </section>
  );
};

export default HomeHero;
