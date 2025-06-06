import { getTranslations } from "next-intl/server";

import { getAllPublications } from "@/lib/sanity/queries/queries";
import { mapItemToCardProps } from "@/utils/mapItemToCardProps";
import { Locale } from "@/types/locale";

import ButtonOrLink from "../shared/button/ButtonOrLink ";
import PublicationCard from "../shared/card/PublicationCard";

const HomePublications = async ({ lang }: { lang: Locale }) => {
  const t = await getTranslations("homepage.publications");

  const publicationList = await getAllPublications();

  return (
    <section className="relative py-[120px] xl:pb-[158px] xl:pt-[200px]">
      <div className="container max-w-[1280px]">
        <div className="mx-auto mb-[52px] flex flex-col max-xl:max-w-[374px] xl:flex-row-reverse xl:items-center xl:justify-between">
          <h2 className="font-micra text-2xl leading-[1.22] tracking-normal max-xl:mb-[20px] xl:max-w-[500px] xl:text-right xl:text-[48px]">
            {t("title")}
          </h2>

          <div className="xl:max-w-[380px]">
            <p className="mb-8 font-light leading-[1.22] tracking-normal">
              {t("descr")}
            </p>
            <ButtonOrLink variant="light">{t("button")}</ButtonOrLink>
          </div>
        </div>

        <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
          {publicationList.map(item => {
            const cardProps = mapItemToCardProps(item, lang);

            return (
              <li
                key={item.title[lang]}
                className="mx-auto h-full max-w-[400px]"
              >
                <PublicationCard {...cardProps} />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="absolute left-0 top-0 -z-[5] h-[218px] w-[232px] bg-[url('/images/homepage/home-publications-decor-mob.webp')] xl:hidden" />
      <div className="absolute -left-[254px] top-[31px] -z-[1] h-[233px] w-[1146px] rotate-[11.31deg] rounded-full bg-[#ffffff] blur-[223px] xl:-left-[45%] xl:hidden" />
    </section>
  );
};

export default HomePublications;
