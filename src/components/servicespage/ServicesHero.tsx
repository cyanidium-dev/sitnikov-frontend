import { getTranslations } from "next-intl/server";

const ServicesHero = async () => {
  const t = await getTranslations("servicepage.hero");

  return (
    <section className="relative h-[647px] max-md:pt-[120px] md:h-[493px] xl:h-[520px]">
      <div className="container flex h-full max-w-[1280px] flex-col justify-between md:flex-row md:pt-[388px]">
        <p className="z-10 max-w-[268px] font-micra uppercase md:w-[250px]">
          {t("subtitle")}
        </p>

        <div className="bg-dark px-[22px] py-8 text-light max-md:-mx-5 max-md:rounded-2xl md:absolute md:right-0 md:top-0 md:h-full md:w-[58%] md:rounded-l-2xl md:text-right">
          <div className="top-[156px] max-xl:right-[32px] md:absolute xl:left-[415px]">
            <h1 className="font-micra text-[24px] uppercase md:mb-8 xl:text-[44px]">
              {t("title")}
            </h1>
            <p className="left-8 top-[210px] text-[12px] font-light max-md:absolute max-md:max-w-[155px] max-md:text-dark md:ml-auto md:w-[240px] md:text-[14px]">
              {t("descr")}
            </p>

            <div className="absolute max-md:hidden md:-bottom-[190px] md:-left-[410px] md:h-[488px] md:w-[503px] md:bg-[url('/images/servicespage/services-hero-person-desk.webp')]" />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-[40px] right-0 -z-[5] h-[575px] w-[351px] max-md:bg-[url('/images/servicespage/services-hero-person-mob.webp')] md:hidden" />
    </section>
  );
};

export default ServicesHero;
