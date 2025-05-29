import { getMessages, getTranslations } from "next-intl/server";

import InfoBox from "../shared/InfoBox";

type AdvantageItem = {
  title: string;
  descr: string;
};

const HomeAdvantages = async () => {
  const t = await getTranslations("homepage.advantages");

  const messages = await getMessages();

  const advantageList = messages.homepage.advantages
    .advantageList as AdvantageItem[];

  return (
    <section className="relative pb-[188px] pt-[60px] xl:pb-[203px] xl:pt-[104px]">
      <div className="container relative max-w-[1280px]">
        <div className="xl:ml-[536px]">
          <div className="mb-[60px] md:mb-12">
            <h2 className="mb-4 font-micra text-2xl leading-[1.22] xl:text-5xl xl:leading-[1.22]">
              {t("title")}
            </h2>
            <p className="font-light leading-[1.22]">{t("descr")}</p>
          </div>

          <ul className="grid gap-4 md:grid-cols-2">
            {advantageList.map(({ title, descr }) => (
              <li key={title} className="h-full">
                <InfoBox classname="flex flex-col gap-4 justify-start">
                  <h3 className="font-micra text-2xl leading-[1.22]">
                    {title}
                  </h3>
                  <p className="text-sm font-light leading-[1.22] tracking-normal xl:text-base xl:leading-[1.22]">
                    {descr}
                  </p>
                </InfoBox>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hidden xl:absolute xl:bottom-[143px] xl:left-0 xl:-z-20 xl:block xl:h-[821px] xl:w-[547px] xl:bg-[url('/images/homepage/home-advantages-person.webp')] xl:bg-no-repeat" />
      <div className="absolute left-0 top-0 -z-[8] h-[774px] w-[353px] bg-no-repeat object-cover max-xl:bg-[url('/images/homepage/home-advantages-decor-top-mob.webp')]" />
      <div className="absolute bottom-0 right-0 -z-[8] h-[368px] w-[360px] bg-no-repeat object-cover max-xl:bg-[url('/images/homepage/home-advantages-decor-bottom-mob.webp')]" />
    </section>
  );
};

export default HomeAdvantages;
