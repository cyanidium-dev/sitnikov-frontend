"use client";

import { useState } from "react";

import { cn } from "@/utils/cn";

import AccordionRow from "./AccordionRow";
import { AccordionItem } from "./type";

interface IAccordionProps {
  data: AccordionItem[];
  className?: string;
}

const Accordion = ({ data, className }: IAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <ul className={cn("flex flex-col gap-10", className)}>
      {data.map((data, index) => (
        <AccordionRow
          key={index}
          data={data}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </ul>
  );
};

export default Accordion;
