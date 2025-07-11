import { CourseItem } from "@/lib/sanity/types/courseTypes";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/utils/cn";
import { Locale } from "@/types/locale";
import { listVariants } from "@/helpers/animation";

import AnimatedList from "../shared/animated/AnimatedList";
import AnimatedListItem from "../shared/animated/AnimatedListItem";
import ButtonOrLink from "../shared/button/ButtonOrLink ";
import { ArrowInCircleIcon } from "../shared/icons";
import styles from "./styles.module.css";

interface IEducationListProps {
  courses: CourseItem[];
  lang: Locale;
}

const EducationList = ({ courses, lang }: IEducationListProps) => {
  // const testArr = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const animationKey = courses.map(item => item.title[lang]).join("-");

  return (
    <AnimatedList
      key={animationKey}
      initial="hidden"
      animate="visible"
      viewport={{ once: false, amount: 0.1 }}
      animation={listVariants({ staggerChildren: 0.3 })}
      className={styles.list}
    >
      {courses.map(({ title, description, slug, courseType }) => (
        <AnimatedListItem
          direction="down"
          key={title[lang]}
          className={cn(
            "flex flex-col items-center rounded-lg bg-dark px-11 py-16 text-light",
            "relative",
            styles.item
          )}
        >
          <h3 className="mb-4 font-micra text-[22px] uppercase">
            {title[lang]}
          </h3>
          <p className="text-[20px] font-light">{description[lang]}</p>

          <ButtonOrLink
            href={`${ROUTES.EDUCATION}/${courseType.slug}/${slug}`}
            className="absolute bottom-2 right-2 ml-auto mt-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-transparent p-0 xl:h-[70px] xl:w-[70px]"
            // className={linkStyles}
            // ariaLabel={ariaLabel}
          >
            <ArrowInCircleIcon className="h-[31px] w-[31px] bg-dark text-light" />
          </ButtonOrLink>
        </AnimatedListItem>
      ))}

      {/* {testArr.map((item, index) => (
        <li
          key={index}
          className={cn(
            "flex items-center justify-center bg-dark text-[50px]",
            styles.item
          )}
        >
          <p className="text-light">{item}</p>
        </li>
      ))} */}
    </AnimatedList>
  );
};

export default EducationList;
