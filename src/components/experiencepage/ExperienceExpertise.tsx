import { getMessages, getTranslations } from "next-intl/server";

import Accordion from "../shared/accordion/Accordion";
import { AccordionItem } from "../shared/accordion/type";

const ExperienceExpertise = async () => {
  const t = await getTranslations("experiencePage.expertise");
  const messages = await getMessages();

  const expertiseList = messages.experiencePage.expertise
    .expertiseList as AccordionItem[];

  return (
    <section className="relative bg-dark pb-[441px] pt-[52px] text-light xl:h-[796px] xl:pb-[158px] xl:pt-[88px]">
      <div className="container max-w-[1280px]">
        <h2 className="hidden">{t("title")}</h2>

        <div className="flex flex-col gap-16 xl:flex-row xl:gap-6">
          <Accordion
            data={expertiseList}
            className="ml-auto max-xl:mx-auto max-xl:max-w-[400px] xl:w-[751px]"
          />
        </div>
      </div>

      <div className="absolute bottom-0 h-[546px] w-[360px] bg-[url('/images/experiencePage/experience-expertise-person-mob.webp')] max-xl:right-0 xl:left-0 xl:h-[767px] xl:w-[533px] xl:bg-[url('/images/experiencePage/experience-expertise-person-desk.webp')]" />
    </section>
  );
};

export default ExperienceExpertise;
