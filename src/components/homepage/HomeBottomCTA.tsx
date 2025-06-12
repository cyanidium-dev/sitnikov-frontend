import { getTranslations } from "next-intl/server";

import { APPLICATION } from "@/constants/application";
import { ROUTES } from "@/constants/routes";
import { fadeInAnimation } from "@/helpers/animation";

import ModalTrigger from "../module/modal/ModalTrigger";
import AnimatedWrapper from "../shared/animated/AnimatedWrapper";
import ButtonOrLink from "../shared/button/ButtonOrLink ";

const HomeBottomCTA = async () => {
  const t = await getTranslations("homepage.bottomCTA");

  return (
    <section className="relative mb-[120px] bg-[url('/images/homepage/home-bottomCTA-bg-mob.webp')] bg-cover bg-no-repeat pb-[26px] pt-16 text-light md:bg-[url('/images/homepage/home-bottomCTA-bg-desk.webp')] xl:mb-[200px] xl:h-[623px] xl:pt-[88px]">
      <div className="container relative z-20 max-w-[1280px]">
        <AnimatedWrapper
          animation={fadeInAnimation({ y: -50 })}
          className="relative mb-[91px] flex flex-col gap-6 xl:mb-16 xl:flex-col-reverse xl:gap-7"
        >
          <h2 className="font-micra text-[24px] max-xl:max-w-[374px] xl:w-[610px] xl:text-[40px]">
            {t("title")}
          </h2>
          <p className="w-[171px] font-light xl:w-[480px]">{t("descr")}</p>
        </AnimatedWrapper>

        <AnimatedWrapper
          animation={fadeInAnimation({ y: 50, delay: 0.3 })}
          className="flex max-w-[374px] flex-col gap-4"
        >
          <ModalTrigger
            variant="consultation"
            buttonVariant="light"
            messageFrom={APPLICATION.CONSULTATION}
          />
          <ButtonOrLink href={ROUTES.FREE_EDUCATION} variant="transparent">
            {t("buttonCourse")}
          </ButtonOrLink>
        </AnimatedWrapper>
      </div>

      <AnimatedWrapper
        animation={fadeInAnimation({ x: 150, delay: 0.5, scale: 0.8 })}
        className="absolute bottom-0 right-0 h-full w-full"
      >
        <div className="absolute -right-[30px] bottom-0 z-10 h-[591px] w-[360px] bg-[url('/images/homepage/home-bottomCTA-person-mob.webp')] bg-no-repeat object-cover xl:-right-[162px] xl:h-[861px] xl:w-[690px] xl:bg-[url('/images/homepage/home-bottomCTA-person-desk.webp')]" />
        <div className="absolute bottom-0 right-0 z-[8] h-[581px] w-[744px] bg-no-repeat object-cover xl:bg-[url('/images/homepage/home-bottomCTA-decor-desk.webp')]" />
      </AnimatedWrapper>
    </section>
  );
};

export default HomeBottomCTA;
