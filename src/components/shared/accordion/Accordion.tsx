"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { AccordionContent } from "@/lib/sanity/types/shared";
import { cn } from "@/utils/cn";
import { Locale } from "@/types/locale";
import { listVariants } from "@/helpers/animation";

import AnimatedWrapper from "../animated/AnimatedWrapper";
import AccordionCourseRow from "./AccordionCourseRow";
import AccordionRow from "./AccordionRow";
import { AccordionItem } from "./type";

interface IAccordionProps {
  data: AccordionItem[] | AccordionContent[];
  className?: string;
  lang?: Locale;
}

const Accordion = ({ data, className, lang }: IAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isCourse = "tags" in data[0];

  const handleToggle = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <AnimatedWrapper
      as={motion.ul}
      viewport={{ once: true, amount: 0.4 }}
      animation={listVariants({ staggerChildren: 0.3 })}
      className={cn("flex flex-col gap-10", className)}
    >
      {isCourse
        ? data.map((item, index) => (
            <AccordionCourseRow
              key={index}
              data={item as AccordionContent}
              lang={lang}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))
        : data.map((item, index) => (
            <AccordionRow
              key={index}
              data={item as AccordionItem}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
    </AnimatedWrapper>
  );
};

export default Accordion;
