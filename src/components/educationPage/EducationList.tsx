import { CourseItem } from "@/lib/sanity/types/courseTypes";
import { cn } from "@/utils/cn";
import { Locale } from "@/types/locale";
import { listVariants } from "@/helpers/animation";

import AnimatedList from "../shared/animated/AnimatedList";
import AnimatedListItem from "../shared/animated/AnimatedListItem";
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
      {courses.map(({ title, description }) => (
        <AnimatedListItem
          direction="down"
          key={title[lang]}
          className={cn(
            "flex flex-col items-center rounded-lg bg-dark px-11 py-16 text-light",
            styles.item
          )}
        >
          <h3 className="mb-4 font-micra text-[22px] uppercase">
            {title[lang]}
          </h3>
          <p className="text-[20px] font-light">{description[lang]}</p>
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
