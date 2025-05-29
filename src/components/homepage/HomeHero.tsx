import { getTranslations } from "next-intl/server";

import ButtonOrLink from "../shared/button/ButtonOrLink ";

const HomeHero = async () => {
  const t = await getTranslations("homepage.hero");

  return (
    <section className="relative h-dvh overflow-hidden pt-[108px] xl:pt-[185px]">
      <div className="container flex h-full max-w-[1280px] flex-col leading-[1.22]">
        <div>
          <p className="mb-5 font-micra text-[20px] xl:mb-7 xl:w-[251px]">
            {t("subtitle")}
          </p>
          <p className="w-[157px] text-[12px] font-light xl:w-[177px] xl:text-[14px]">
            {t("descr")}
          </p>
        </div>

        <div className="absolute bottom-[84px] right-[30px] mt-auto flex w-[296px] flex-col gap-8 xl:relative xl:ml-auto xl:w-[475px] xl:flex-col-reverse xl:gap-7">
          <h1 className="font-micra text-2xl leading-[1.22] text-light xl:text-[44px]">
            {t("title")}
          </h1>
          <ButtonOrLink>{t("button")}</ButtonOrLink>
        </div>
      </div>

      <div className="absolute bottom-2 right-[10px] -z-40 h-[334px] w-[340px] rounded-2xl bg-[url('/images/homepage/home-hero-bg.webp')] bg-cover xl:-right-[29px] xl:h-[98%] xl:w-[65%]" />
      <div className="absolute -right-[112px] bottom-2 -z-30 aspect-[628/832] h-[606px] w-[404px] rounded-2xl bg-[url('/images/homepage/home-hero-person.webp')] bg-cover xl:-bottom-[17px] xl:right-[42%] xl:h-[100%] xl:w-auto" />
    </section>
  );
};

export default HomeHero;
