import { CourseItem } from "@/lib/sanity/types/queryTypes";
import { cn } from "@/utils/cn";
import { Locale } from "@/types/locale";

import styles from "./styles.module.css";

interface IEducationListProps {
  courses: CourseItem[];
  lang: Locale;
}

const EducationList = ({ courses, lang }: IEducationListProps) => {
  // const testArr = ["1", "2", "3", "4", "5", "6", "7", "8"];

  return (
    <ul className={styles.list}>
      {courses.map(({ title, description }) => (
        <li
          key={title[lang]}
          className={cn(
            "flex flex-col items-center bg-dark px-11 py-16 text-light",
            styles.item
          )}
        >
          <h3 className="mb-4 font-micra text-[32px] uppercase">
            {title[lang]}
          </h3>
          <p className="text-[20px] font-light">{description[lang]}</p>
        </li>
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
    </ul>
  );
};

export default EducationList;
