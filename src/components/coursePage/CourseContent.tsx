import { CourseItem } from "@/lib/sanity/types/courseTypes";
import { Locale } from "@/types/locale";
import { fadeInAnimation } from "@/helpers/animation";

import Accordion from "../shared/accordion/Accordion";
import AnimatedWrapper from "../shared/animated/AnimatedWrapper";

interface ICourseContentProps {
  course: CourseItem;
  lang: Locale;
}

const CourseContent = ({ course, lang }: ICourseContentProps) => {
  const { firstBlock, secondBlock } = course;

  return (
    <section className="py-[120px]">
      <div className="container max-w-[1280px]">
        <AnimatedWrapper animation={fadeInAnimation({ y: -50 })}>
          <h2 className="mb-10 font-micra text-[22px] uppercase xl:text-[40px] xl:leading-[1.4]">
            {firstBlock.title[lang]}
          </h2>
        </AnimatedWrapper>

        <AnimatedWrapper animation={fadeInAnimation({ y: -50, delay: 0.3 })}>
          {firstBlock.content[lang].map(({ text }) => (
            <p key={text} className="text-[18px] xl:leading-[1.6]">
              {text}
            </p>
          ))}
        </AnimatedWrapper>

        {secondBlock && (
          <AnimatedWrapper animation={fadeInAnimation({ x: 50, delay: 0.5 })}>
            <h2 className="mb-[52px] mt-[120px] font-micra text-[22px] uppercase xl:mb-[40px] xl:text-[40px] xl:leading-[1.4]">
              {secondBlock.title[lang]}
            </h2>
          </AnimatedWrapper>
        )}

        {secondBlock && (
          <Accordion
            data={secondBlock.accordion}
            lang={lang}
            className="gap-4 xl:gap-6"
          />
        )}
      </div>
    </section>
  );
};

export default CourseContent;
