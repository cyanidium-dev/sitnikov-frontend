import { Locale } from "@/types/locale";

import ButtonOrLink from "../shared/button/ButtonOrLink ";
import { CATEGORIES } from "./EducationContent";

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
      <div className="flex w-[928px] flex-row gap-4">
        {CATEGORIES.map(category => (
          <ButtonOrLink
            key={category.value}
            onClick={() => onClick(category.value)}
            variant={
              currentCourseCategory === category.value
                ? "dark"
                : "light-gradient"
            }
            className="whitespace-nowrap rounded-lg px-6 py-4 before:rounded-lg after:rounded-lg"
          >
            {category.label[lang]}
          </ButtonOrLink>
        ))}
      </div>
    </div>
  );
};

export default EducationFilter;
