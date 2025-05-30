import { getTranslations } from "next-intl/server";
import Image from "next/image";

const ExperienceHero = async () => {
  const t = await getTranslations("experiencePage.hero");

  return (
    <section className="relative bg-[linear-gradient(153.1deg,_#FFFFFF_16.83%,_#C0D4FF_172.17%)] pb-[99px] pt-[124px] md:h-[528px] xl:overflow-hidden">
      <div className="container max-md:max-w-[462px] md:max-w-[1280px]">
        <div className="max-md:mr-auto max-md:max-w-[190px]">
          <h1 className="mb-7 font-micra text-[24px] max-xl:leading-[1.6] max-md:mx-auto max-md:max-w-[400px] md:mb-8 md:text-[48px]">
            {t.rich("title", {
              span: chunks => <span className="text-[#00279D]">{chunks}</span>,
            })}
          </h1>

          <div className="md:w-[374px] xl:ml-auto">
            <p className="font-light max-md:text-[13px]">{t("descr1")}</p>
            <p className="font-light max-md:text-[13px]">{t("descr2")}</p>
          </div>
        </div>
      </div>

      <div className="absolute z-[5] h-[221px] w-full max-w-[400px] max-xl:-bottom-[177px] max-xl:left-1/2 max-xl:-translate-x-1/2 md:h-[301px] md:max-w-[829px] xl:bottom-0 xl:left-0">
        <Image
          src="/images/experiencePage/experience-hero-photo.webp"
          fill
          sizes="(max-width: 768px) 400px, 829px"
          alt={t("imgAlt")}
          className="object-cover max-xl:rounded-b-3xl xl:rounded-r-xl"
        />
        <div className="absolute -bottom-[22px] -right-[100px] -z-[1] h-[328px] w-[426px] max-xl:hidden xl:bg-[url('/images/experiencePage/experience-hero-leftDecor-desk.webp')]" />
      </div>

      <div className="absolute bottom-0 right-0 h-[410px] w-[156px] bg-[url('/images/experiencePage/experience-hero-decor-mob.webp')] xl:h-[253px] xl:w-[230px] xl:bg-[url('/images/experiencePage/experience-hero-rightDecor-desk.webp')]" />
    </section>
  );
};

export default ExperienceHero;
