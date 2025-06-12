import { motion } from "framer-motion";

import { COURSE_CATEGORIES } from "@/constants/courseCategories";
import { Locale } from "@/types/locale";
import { listVariants } from "@/helpers/animation";

import AnimatedListItem from "../shared/animated/AnimatedListItem";
import AnimatedWrapper from "../shared/animated/AnimatedWrapper";
import ButtonOrLink from "../shared/button/ButtonOrLink ";

interface IEducationFilterProps {
  onClick: (val: string) => void;
  lang: Locale;
  currentCourseCategory: string | null;
}

const EducationFilter = ({
  onClick,
  lang,
  currentCourseCategory,
}: IEducationFilterProps) => {
  return (
    <div className="mb-4 overflow-x-auto xl:mb-[54px]">
      <AnimatedWrapper
        as={motion.ul}
        initial="hidden"
        animate="visible"
        viewport={{ once: false, amount: 0 }}
        animation={listVariants({ staggerChildren: 0.35 })}
        className="flex w-[928px] flex-row gap-4"
      >
        {COURSE_CATEGORIES.map(category => (
          <AnimatedListItem key={category.value} direction="left">
            <ButtonOrLink
              onClick={() => onClick(category.value)}
              variant={
                currentCourseCategory === category.value
                  ? "dark"
                  : "light-gradient"
              }
              className="whitespace-nowrap rounded-lg px-6 py-4 text-[16px] before:rounded-lg after:rounded-lg"
            >
              {category.label[lang]}
            </ButtonOrLink>
          </AnimatedListItem>
        ))}
      </AnimatedWrapper>
    </div>
  );
};

export default EducationFilter;
