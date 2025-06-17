import { getTranslations } from "next-intl/server";

import { APPLICATION } from "@/constants/application";
import { fadeInAnimation } from "@/helpers/animation";

import ModalTrigger from "../module/modal/ModalTrigger";
import AnimatedWrapper from "../shared/animated/AnimatedWrapper";

const HomeTopCTA = async () => {
  const t = await getTranslations("homepage.topCTA");

  return (
    <section className="relative h-[616px] bg-dark bg-[url('/images/homepage/home-topCTA-bg.webp')] bg-cover bg-no-repeat pb-[54px] pt-16 text-light xl:h-[589px] xl:pt-[88px]">
      <div className="container relative z-20 max-w-[1280px]">
        <AnimatedWrapper
          animation={fadeInAnimation({ x: -50 })}
          className="relative mb-[154px] xl:mb-11"
        >
          <h2 className="mb-6 font-micra text-[24px] max-xl:max-w-[374px] xl:w-[610px] xl:text-[40px]">
            {t("title")}
          </h2>
          <p className="w-[180px] font-light leading-[1.32] tracking-normal xl:absolute xl:left-[553px] xl:top-0 xl:w-[370px]">
            {t("descr")}
          </p>
        </AnimatedWrapper>

        <AnimatedWrapper animation={fadeInAnimation({ y: 50, delay: 0.4 })}>
          <ModalTrigger
            variant="consultation"
            buttonVariant="light"
            buttonClassName="max-w-[374px]"
            messageFrom={APPLICATION.CONSULTATION}
          />
        </AnimatedWrapper>
      </div>

      <AnimatedWrapper
        animation={fadeInAnimation({ x: 50, delay: 0.7, scale: 0.8 })}
        className="absolute -right-[138px] bottom-0 z-10 h-[566px] w-[454px] bg-[url('/images/homepage/home-topCTA-person-mob.webp')] bg-contain bg-no-repeat xl:-right-[162px] xl:h-[861px] xl:w-[690px] xl:bg-[url('/images/homepage/home-topCTA-person-desk.webp')]"
      />

      <AnimatedWrapper
        animation={fadeInAnimation({ x: 50, delay: 0.7, scale: 0.8 })}
        className="absolute -right-[50px] bottom-[83px] z-[5] h-[281px] w-[176px] rounded-full bg-[#5188FF] blur-[246px] xl:-bottom-[45px] xl:right-0 xl:h-[523px] xl:w-[328px]"
      />
    </section>
  );
};

export default HomeTopCTA;
