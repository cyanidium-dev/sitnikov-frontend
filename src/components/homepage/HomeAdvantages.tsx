import { getMessages, getTranslations } from "next-intl/server";

import * as motion from "motion/react-client";

import { fadeInAnimation, listVariants } from "@/helpers/animation";

import InfoBox from "../shared/InfoBox";
import AnimatedListItem from "../shared/animated/AnimatedListItem";
import AnimatedWrapper from "../shared/animated/AnimatedWrapper";

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
          <AnimatedWrapper
            animation={fadeInAnimation({ x: -50 })}
            className="mb-[60px] md:mb-12"
          >
            <h2 className="mb-4 font-micra text-[24px] xl:text-[48px]">
              {t("title")}
            </h2>
            <p className="font-light">{t("descr")}</p>
          </AnimatedWrapper>

          <AnimatedWrapper
            as={motion.ul}
            viewport={{ once: true, amount: 0.4 }}
            animation={listVariants({ staggerChildren: 0.5 })}
            className="grid gap-4 md:grid-cols-2"
          >
            {advantageList.map(({ title, descr }) => (
              <AnimatedListItem key={title} className="h-full">
                <InfoBox classname="flex flex-col gap-4 justify-start">
                  <h3 className="font-micra text-[24px]">{title}</h3>
                  <p className="font-light max-xl:text-[14px]">{descr}</p>
                </InfoBox>
              </AnimatedListItem>
            ))}
          </AnimatedWrapper>
        </div>
      </div>

      <AnimatedWrapper
        animation={fadeInAnimation({ x: -50, delay: 0.4, scale: 0.8 })}
        className="hidden xl:absolute xl:bottom-[143px] xl:left-0 xl:-z-20 xl:block xl:h-[821px] xl:w-[547px] xl:bg-[url('/images/homepage/home-advantages-person.webp')] xl:bg-no-repeat"
      />

      <div className="absolute left-0 top-0 -z-[8] h-[774px] w-[353px] bg-no-repeat object-cover max-xl:bg-[url('/images/homepage/home-advantages-decor-top-mob.webp')]" />
      <div className="absolute bottom-0 right-0 -z-[8] h-[368px] w-[360px] bg-no-repeat object-cover max-xl:bg-[url('/images/homepage/home-advantages-decor-bottom-mob.webp')]" />
    </section>
  );
};

export default HomeAdvantages;
