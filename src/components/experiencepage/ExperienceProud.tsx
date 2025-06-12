import { getMessages, getTranslations } from "next-intl/server";

import { motion } from "framer-motion";

import { fadeInAnimation, listVariants } from "@/helpers/animation";

import InfoBox from "../shared/InfoBox";
import AnimatedListItem from "../shared/animated/AnimatedListItem";
import AnimatedWrapper from "../shared/animated/AnimatedWrapper";

type ProudItem = {
  title: string;
  descr: string;
};

const ExperienceProud = async () => {
  const t = await getTranslations("experiencePage.proud");
  const messages = await getMessages();

  const proudList = messages.experiencePage.proud.proudList as ProudItem[];
  const columns = [
    proudList.slice(0, 2),
    proudList.slice(2, 4),
    proudList.slice(4, 6),
  ];

  return (
    <section className="relative overflow-hidden pb-[120px] pt-[152px] xl:pb-[200px] xl:pt-[100px]">
      <div className="container max-w-[1280px]">
        <AnimatedWrapper animation={fadeInAnimation({ y: -50 })}>
          <h2 className="mx-auto mb-[52px] max-w-[490px] text-center font-micra text-[24px] xl:mb-[60px] xl:text-[40px]">
            {t("title")}
          </h2>
        </AnimatedWrapper>

        <div className="relative mx-auto flex flex-col gap-4 max-md:max-w-[400px] md:flex-row md:justify-between md:gap-6">
          {columns.map((column, colIdx) => (
            <AnimatedWrapper
              as={motion.ul}
              viewport={{ once: true, amount: 0.4 }}
              animation={listVariants()}
              key={colIdx}
              className="flex flex-col gap-4 md:w-[32%]"
            >
              {column.map(({ title, descr }, idx) => (
                <AnimatedListItem key={idx} className="h-full">
                  <InfoBox
                    variant="gradient"
                    classname="flex flex-col gap-4 h-full md:pb-[35px] md:pt-8"
                  >
                    <h3 className="font-micra text-[22px] xl:text-[24px]">
                      {title}
                    </h3>
                    <p className="font-light max-xl:text-[14px]">{descr}</p>
                  </InfoBox>
                </AnimatedListItem>
              ))}
            </AnimatedWrapper>
          ))}
          <div className="absolute -bottom-[223px] left-0 -z-[3] h-[507px] w-[511px] bg-no-repeat max-md:hidden md:bg-[url('/images/experiencePage/experience-proud-decor-desk.webp')]" />
        </div>
      </div>

      <div className="absolute -top-[355px] left-0 -z-[3] h-[715px] w-[360px] max-md:bg-[url('/images/experiencePage/experience-proud-decor-top-mob.webp')] md:hidden" />
      <div className="absolute bottom-[450px] right-0 -z-[3] h-[780px] w-[308px] max-md:bg-[url('/images/experiencePage/experience-proud-decor-mid-mob.webp')] md:hidden" />
      <div className="absolute -bottom-[300px] left-0 -z-[3] h-[762px] w-[307px] max-md:bg-[url('/images/experiencePage/experience-proud-decor-bot-mob.webp')] md:hidden" />
    </section>
  );
};

export default ExperienceProud;
