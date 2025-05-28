import { getMessages, getTranslations } from "next-intl/server";

import CourseCard from "../shared/card/CourseCard";

type StatItem = {
  title: string;
  number: string;
};

type CourseItem = {
  title: string;
  descr: string;
  imgSrc?: string;
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
          {statList.map(({ number, title }) => (
            <li
              key={title}
              className="mx-auto flex h-[147px] w-full max-w-[400px] flex-col justify-center rounded-lg bg-[linear-gradient(188.33deg,_#FFFFFF_32.98%,_#677BB6_181.07%)] pl-8 xl:h-[188px]"
            >
              <p className="mb-3 font-micra text-[44px] xl:text-[58px]">
                {number}
              </p>
              <p className="text-[20px] font-light">{title}</p>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-5 xl:flex-row">
          <div className="relative h-[424px] rounded-[4px] p-[1px] before:absolute before:inset-0 before:z-0 before:rounded-[4px] before:bg-[linear-gradient(326.45deg,_#071434_-11.97%,_#9CBBFF_99.8%)] before:content-[''] xl:h-[570px] xl:w-[480px]">
            <div className="relative z-[1] h-full rounded-[4px] bg-[url('/images/homepage/home-courses-main.webp')] object-cover px-6 pt-16 text-light xl:h-[570px] xl:w-[480px]">
              <h2 className="mb-6 font-micra text-[32px]">{t("title")}</h2>
              <p className="w-[130px] text-[14px] font-light">{t("descr")}</p>
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
