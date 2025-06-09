import { CourseItem } from "@/lib/sanity/types/queryTypes";
import { Locale } from "@/types/locale";

import Accordion from "../shared/accordion/Accordion";

interface ICourseContentProps {
  course: CourseItem;
  lang: Locale;
}

const CourseContent = ({ course, lang }: ICourseContentProps) => {
  const { firstBlock, secondBlock } = course;

  const { title: firstTitle, content } = firstBlock;
  const { accordion, title: secondTitle } = secondBlock;
  console.log(`🚀 ~ CourseContent ~ accordion:`, accordion);

  return (
    <section className="py-[120px]">
      <div className="container max-w-[1280px]">
        <h2 className="mb-10 font-micra text-[22px] uppercase">
          {firstTitle[lang]}
        </h2>
        {content[lang].map(({ text }) => (
          <p key={text} className="xl:leading-[1.6]">
            {text}
          </p>
        ))}

        <h2 className="mt-[120px] font-micra text-[22px] uppercase">
          {secondTitle[lang]}
        </h2>

        <Accordion data={accordion} lang={lang} className="gap-4 xl:gap-6" />
      </div>
    </section>
  );
};

export default CourseContent;
