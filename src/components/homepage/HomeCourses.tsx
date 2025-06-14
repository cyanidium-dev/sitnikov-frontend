import { getMessages, getTranslations } from "next-intl/server";

import { ROUTES } from "@/constants/routes";
import { fadeInAnimation, listVariants } from "@/helpers/animation";

import AnimatedList from "../shared/animated/AnimatedList";
import AnimatedListItem from "../shared/animated/AnimatedListItem";
import AnimatedWrapper from "../shared/animated/AnimatedWrapper";
import ButtonOrLink from "../shared/button/ButtonOrLink ";
import CourseCard from "../shared/card/CourseCard";
import StatCard from "../shared/card/StatCard";

type StatItem = {
  title: string;
  number: string;
  decorPosition?: "bottom-right" | "top-right";
};

type CourseItem = {
  title: string;
  descr: string;
  href: string;
  variant: "light" | "accent" | "dark";
};

const HomeCourses = async () => {
  const t = await getTranslations("homepage.courses");

  const messages = await getMessages();

  const statList = messages.homepage.courses.stats as StatItem[];
  const courseList = messages.homepage.courses.courseList as CourseItem[];

  return (
    <section className="bg-dark pb-[110px] pt-20">
      <div className="container max-w-[1280px]">
        <AnimatedList
          viewport={{ once: true, amount: 0.4 }}
          animation={listVariants({ staggerChildren: 0.5 })}
          className="mb-[120px] flex flex-col gap-5 md:flex-row xl:mb-[200px]"
        >
          {statList.map((card, index) => (
            <AnimatedListItem
              key={index}
              className="mx-auto h-[147px] w-full max-w-[400px] list-none rounded-lg bg-[linear-gradient(188.33deg,_#FFFFFF_32.98%,_#677BB6_181.07%)] xl:h-[188px]"
            >
              <StatCard {...card} />
            </AnimatedListItem>
          ))}
        </AnimatedList>

        <div className="flex flex-col gap-5 max-xl:mx-auto max-xl:max-w-[400px] xl:mb-8 xl:flex-row">
          <AnimatedWrapper animation={fadeInAnimation({ x: -50 })}>
            <div className="relative h-[424px] rounded-[4px] p-[1px] before:absolute before:inset-0 before:z-0 before:rounded-[4px] before:bg-[linear-gradient(326.45deg,_#071434_-11.97%,_#9CBBFF_99.8%)] before:content-[''] xl:h-[570px] xl:w-[480px]">
              <div className="relative z-[1] h-full rounded-[4px] bg-[url('/images/homepage/home-courses-main.webp')] object-cover px-6 pt-16 text-light xl:h-[570px] xl:w-[480px]">
                <h2 className="mb-6 font-micra text-[32px] xl:w-[291px] xl:text-[48px]">
                  {t("title")}
                </h2>
                <p className="w-[130px] text-[14px] font-light xl:w-[291px] xl:text-[20px]">
                  {t("descr")}
                </p>

                <div className="absolute bottom-0 left-0 h-[186px] w-[238px] bg-[url('/images/homepage/home-courses-main-decor-mob.webp')] xl:h-[265px] xl:w-[294px] xl:bg-[url('/images/homepage/home-courses-main-decor-desk.webp')]" />
              </div>
            </div>
          </AnimatedWrapper>

          <AnimatedList
            viewport={{ once: true, amount: 0.4 }}
            animation={listVariants()}
            className="flex flex-col gap-5 max-xl:mb-4 xl:flex-row"
          >
            <div className="flex flex-col gap-5 xl:flex-col-reverse">
              <AnimatedListItem direction="left">
                <CourseCard {...courseList[0]} ariaLabel={t("a11yLink")} />
              </AnimatedListItem>
              <AnimatedListItem direction="left">
                <CourseCard {...courseList[1]} ariaLabel={t("a11yLink")} />
              </AnimatedListItem>
            </div>
            <AnimatedListItem direction="left">
              <CourseCard {...courseList[2]} ariaLabel={t("a11yLink")} />
            </AnimatedListItem>
          </AnimatedList>
        </div>

        <AnimatedWrapper
          animation={fadeInAnimation({ y: 50 })}
          className="flex flex-col gap-10 max-xl:mx-auto max-xl:max-w-[400px] xl:flex-row xl:justify-between"
        >
          <p className="text-[12px] font-light text-light max-xl:mx-auto max-xl:max-w-[400px] xl:mr-auto xl:w-[480px] xl:text-[20px]">
            {t("tagline")}
          </p>

          <ButtonOrLink
            href={ROUTES.FREE_EDUCATION}
            variant="light"
            className="bg-light xl:w-[318px]"
          >
            {t("button")}
          </ButtonOrLink>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default HomeCourses;
