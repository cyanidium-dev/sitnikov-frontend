import { useTranslations } from "next-intl";

import ButtonOrLink from "../shared/button/ButtonOrLink ";

const HomeHero = () => {
  const t = useTranslations("HomePage.hero");

  return (
    <section className="relative h-dvh pt-[108px] xl:pt-[185px]">
      <div className="container flex h-full max-w-[1280px] flex-col leading-[1.22]">
        <div>
          <p className="mb-5 font-micra text-xl xl:mb-7 xl:w-[251px]">
            {t("subtitle")}
          </p>
          <p className="w-[157px] text-xs font-light xl:w-[177px] xl:text-sm">
            {t("descr")}
          </p>
        </div>

        <div className="fixed bottom-[84px] right-[30px] mt-auto flex w-[296px] flex-col gap-8 xl:relative xl:ml-auto xl:w-[475px] xl:flex-col-reverse xl:gap-7">
          <h1 className="font-micra text-2xl leading-[1.22] text-light xl:text-[44px]">
            {t("title")}
          </h1>
          <ButtonOrLink>{t("button")}</ButtonOrLink>
        </div>
      </div>

      <div className="fixed bottom-2 right-[10px] -z-40 h-[334px] w-[340px] rounded-2xl bg-[url('/images/homepage/home-hero-bg.webp')] bg-cover xl:-right-[29px] xl:h-[98%] xl:w-[830px]" />
      <div className="fixed -right-[112px] bottom-2 -z-30 aspect-[404/606] h-[606px] w-[404px] rounded-2xl bg-[url('/images/homepage/home-hero-person.webp')] bg-cover xl:-bottom-[17px] xl:right-[552px] xl:h-[100%] xl:w-auto" />
    </section>
  );
};

export default HomeHero;
