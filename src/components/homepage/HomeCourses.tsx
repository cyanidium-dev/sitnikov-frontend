import { getMessages, getTranslations } from "next-intl/server";

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
        <ul className="mb-[120px] flex flex-col gap-5 md:flex-row xl:mb-[200px]">
          {statList.map((card, index) => (
            <li
              key={index}
              className="mx-auto h-[147px] w-full max-w-[400px] rounded-lg bg-[linear-gradient(188.33deg,_#FFFFFF_32.98%,_#677BB6_181.07%)] xl:h-[188px]"
            >
              <StatCard {...card} />
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-5 max-xl:mx-auto max-xl:max-w-[400px] xl:flex-row">
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

          <ul className="mb-4 flex flex-col gap-5 xl:flex-row">
            <div className="flex flex-col gap-5 xl:flex-col-reverse">
              <li>
                <CourseCard {...courseList[0]} />
              </li>
              <li>
                <CourseCard {...courseList[1]} />
              </li>
            </div>
            <li>
              <CourseCard {...courseList[2]} />
            </li>
          </ul>
        </div>

        <p className="text-[12px] font-light">
          Юридичні знання, які реально працюють у практиці, а не лише в теорії.
        </p>
      </div>
    </section>
  );
};

export default HomeCourses;
