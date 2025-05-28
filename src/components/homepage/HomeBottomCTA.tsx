import { getTranslations } from "next-intl/server";

import ButtonOrLink from "../shared/button/ButtonOrLink ";

const HomeBottomCTA = async () => {
  const t = await getTranslations("homepage.bottomCTA");

  return (
    <section className="relative mb-[120px] bg-[url('/images/homepage/home-bottomCTA-bg.webp')] bg-cover bg-no-repeat pb-[26px] pt-16 text-light xl:mb-[200px] xl:h-[623px] xl:pt-[88px]">
      <div className="container relative z-20 max-w-[1280px]">
        <div className="relative mb-[91px] flex flex-col gap-6 xl:mb-16 xl:flex-col-reverse xl:gap-7">
          <h2 className="font-micra text-[24px] max-xl:max-w-[374px] xl:w-[610px] xl:text-[40px]">
            {t("title")}
          </h2>
          <p className="w-[171px] font-light xl:w-[480px]">{t("descr")}</p>
        </div>

        <div className="relative z-[1] flex max-w-[374px] flex-col gap-4">
          <ButtonOrLink variant="outlined">
            {t("buttonConsultation")}
          </ButtonOrLink>
          <ButtonOrLink variant="transparent">{t("buttonCourse")}</ButtonOrLink>
        </div>
      </div>

      <div className="absolute -right-[123px] bottom-0 z-10 h-[484px] w-[388px] bg-[url('/images/homepage/home-bottomCTA-person-mob.webp')] bg-no-repeat object-cover xl:-right-[162px] xl:h-[861px] xl:w-[690px] xl:bg-[url('/images/homepage/home-bottomCTA-person-desk.webp')]" />
    </section>
  );
};

export default HomeBottomCTA;
