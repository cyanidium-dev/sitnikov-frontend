import { getTranslations } from "next-intl/server";

import ButtonOrLink from "../shared/button/ButtonOrLink ";

const HeroKnowledge = async () => {
  const t = await getTranslations("homepage.knowledge");

  return (
    <section className="relative mb-24 h-[598px] overflow-hidden bg-[url('/images/homepage/hero-knowledge-bg.webp')] bg-cover bg-no-repeat pb-[41px] pt-16 text-light xl:h-[623px] xl:py-[104px]">
      <div className="container relative z-20 max-w-[1280px]">
        <div className="max-xl:max-w-[400px] xl:ml-[489px] xl:w-[609px]">
          <div className="mb-[232px] flex flex-col gap-5 xl:mb-16 xl:flex-col-reverse">
            <h2 className="font-micra text-2xl leading-[1.22] tracking-normal xl:text-[40px] xl:leading-[1.22]">
              {t("title")}
            </h2>
            <p className="font-light leading-[1.22] tracking-normal xl:w-[409px] xl:text-base xl:leading-[1.22]">
              {t("descr")}
            </p>
          </div>

          <div className="relative z-[1] max-w-[374px]">
            <ButtonOrLink variant="outlined">{t("button")}</ButtonOrLink>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-[155px] z-10 h-[540px] w-[360px] bg-[url('/images/homepage/hero-knowledge-femida-mob.webp')] bg-no-repeat max-xl:-right-[53px] xl:-bottom-[154px] xl:left-[116px] xl:h-[741px] xl:w-[494px] xl:bg-[url('/images/homepage/hero-knowledge-femida-desk.webp')]" />
    </section>
  );
};

export default HeroKnowledge;
