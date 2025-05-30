import { getMessages, getTranslations } from "next-intl/server";
import Image from "next/image";

import ExperienceAccordion from "../shared/accordion/Accordion";
import { AccordionItem } from "../shared/accordion/AccordionRow";

const ExperienceCareerPath = async () => {
  const t = await getTranslations("experiencePage.careerPath");
  const messages = await getMessages();

  const careerPathList = messages.experiencePage.careerPath
    .careerPathList as AccordionItem[];

  return (
    <section className="relative py-[120px] xl:py-[100px]">
      <div className="container max-w-[1280px]">
        <h2 className="hidden">{t("title")}</h2>

        <div className="flex flex-col gap-16 xl:flex-row xl:gap-6">
          <ExperienceAccordion
            data={careerPathList}
            className="max-xl:mx-auto max-xl:max-w-[400px]"
          />

          <div className="relative h-[217px] w-full rounded-lg max-xl:mx-auto max-xl:max-w-[400px] xl:h-[424px] xl:w-[578px] xl:shrink-0">
            <Image
              src={
                "/images/experiencePage/experience-careerPath-university.webp"
              }
              fill
              sizes="(max-width: 768px) 400px, 578px"
              className="h-auto object-cover"
              alt="Фото університету"
            />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-[160px] right-0 h-[361px] w-[335px] bg-[url('/images/experiencePage/experience-careerPath-decor.webp')] xl:hidden" />
    </section>
  );
};

export default ExperienceCareerPath;
