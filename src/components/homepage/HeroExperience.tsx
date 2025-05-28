import { getMessages, getTranslations } from "next-intl/server";
import Image from "next/image";

import InfoBox from "../shared/InfoBox";

type ExperienceItem = {
  title: string;
  descr: string;
};

const HeroExperience = async () => {
  const t = await getTranslations("homepage.experience");

  const messages = await getMessages();

  const experienceList = messages.homepage.experience
    .experienceList as ExperienceItem[];

  return (
    <section className="py-[120px]">
      <div className="container max-w-[1280px] max-md:max-w-[400px]">
        <div className="mb-20 xl:flex xl:gap-5">
          <div className="max-xl:mb-10">
            <div className="flex flex-col gap-5 xl:mb-8 xl:w-[349px] xl:flex-col-reverse xl:gap-7">
              <h2 className="font-micra text-2xl leading-[1.22] xl:text-[40px]">
                {t("title")}
              </h2>

              <p className="font-light leading-[1.22]">{t("descr-1")}</p>
            </div>

            <div className="relative hidden xl:block xl:h-[234px] xl:w-[480px]">
              <Image
                src="/images/homepage/home-experience-small.webp"
                alt="картинка до публікації"
                fill
                sizes="400px"
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="max-md:-mx-8">
            <div className="relative mb-16 h-[174px] max-md:mx-auto max-md:w-screen max-md:max-w-[400px] md:h-[328px] xl:mb-6 xl:w-[680px]">
              <Image
                src="/images/homepage/home-experience-large.webp"
                alt="картинка до публікації"
                fill
                sizes="(max-width: 786px) 100vw, 60vw"
                className="rounded-[4px] object-cover"
              />
            </div>

            <p className="font-light leading-[1.22] max-md:mx-8">
              {t("descr-2")}
            </p>
          </div>
        </div>

        <ul className="grid gap-4 md:grid-cols-2 xl:md:grid-cols-3 xl:gap-5">
          {experienceList.map(({ title, descr }) => (
            <li key={title}>
              <InfoBox classname="xl:bg-[linear-gradient(152.98deg,_#FFFFFF_16.89%,_#C0D4FF_274.64%)]">
                <h3 className="mb-4 font-micra text-2xl leading-[1.22] xl:w-[230px]">
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
    </section>
  );
};

export default HeroExperience;
