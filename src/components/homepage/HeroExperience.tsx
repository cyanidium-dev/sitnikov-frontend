import { getTranslations } from "next-intl/server";
import Image from "next/image";

// type ExperienceItem = {
//   title: string;
//   descr: string;
// };

const HeroExperience = async () => {
  const t = await getTranslations("homepage.experience");

  //   const messages = await getMessages();

  //   const experienceList = messages.homepage.experience
  //     .experienceList as ExperienceItem[];

  return (
    <section className="py-[120px]">
      <div className="container max-w-[1280px] max-md:max-w-[400px]">
        <div className="xl:flex xl:gap-5">
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

        {/* <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
          {publicationsList.map(({ descr, imgSrc, timeToRead, title }) => (
            <li key={title} className="mx-auto h-full max-w-[400px]">
              <PublicationCard
                descr={descr}
                imgSrc={imgSrc}
                timeToRead={timeToRead}
                title={title}
              />
            </li>
          ))}
        </ul> */}
      </div>
    </section>
  );
};

export default HeroExperience;
