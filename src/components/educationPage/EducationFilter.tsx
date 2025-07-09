import { CourseCategoryItem } from "@/lib/sanity/types/courseTypes";
import { Locale } from "@/types/locale";

// import { listVariants } from "@/helpers/animation";

// import AnimatedList from "../shared/animated/AnimatedList";
// import AnimatedListItem from "../shared/animated/AnimatedListItem";
import ButtonOrLink from "../shared/button/ButtonOrLink ";

interface IEducationFilterProps {
  onClick: (val: string) => void;
  lang: Locale;
  currentCourseCategory: string | undefined;
  courseCategories: CourseCategoryItem[];
}

const EducationFilter = ({
  onClick,
  lang,
  currentCourseCategory,
  courseCategories,
}: IEducationFilterProps) => {
  return (
    <div className="mb-4 overflow-x-auto xl:mb-[54px]">
      {/* <AnimatedList
        initial="hidden"
        animate="visible"
        viewport={{ once: false, amount: 0 }}
        animation={listVariants({ staggerChildren: 0.35 })}
        className="flex w-[928px] flex-row gap-4"
      >
        {courseCategories.map(({ slug, title }) => (
          <AnimatedListItem key={slug} direction="left">
            <ButtonOrLink
              onClick={() => onClick(slug)}
              variant={
                currentCourseCategory === slug ? "dark" : "light-gradient"
              }
              className="whitespace-nowrap rounded-lg px-6 py-4 text-[16px] before:rounded-lg after:rounded-lg"
            >
              {title[lang]}
            </ButtonOrLink>
          </AnimatedListItem>
        ))}
      </AnimatedList> */}

      <ul className="flex w-[928px] flex-row gap-4">
        {courseCategories.map(({ slug, title }) => (
          <li key={slug}>
            <ButtonOrLink
              onClick={() => onClick(slug)}
              variant={
                currentCourseCategory === slug ? "dark" : "light-gradient"
              }
              className="whitespace-nowrap rounded-lg px-6 py-4 text-[16px] before:rounded-lg after:rounded-lg"
            >
              {title[lang]}
            </ButtonOrLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationFilter;
