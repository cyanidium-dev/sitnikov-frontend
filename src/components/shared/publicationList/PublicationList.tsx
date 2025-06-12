import { motion } from "framer-motion";

import {
  AnnouncementItem,
  PublicationItem,
} from "@/lib/sanity/types/queryTypes";
import { cn } from "@/utils/cn";
import { mapItemToCardProps } from "@/utils/mapItemToCardProps";
import { Locale } from "@/types/locale";
import { listVariants } from "@/helpers/animation";

import AnimatedListItem from "../animated/AnimatedListItem";
import AnimatedWrapper from "../animated/AnimatedWrapper";
import PublicationCard from "../card/PublicationCard";

interface IPublicationListProps {
  data: PublicationItem[] | AnnouncementItem[];
  lang: Locale;
  className?: string;
}

const PublicationList = ({ data, className, lang }: IPublicationListProps) => {
  const listStyles = cn(
    "grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 md:mx-auto md:max-w-[804px] xl:max-w-full",
    className
  );

  return (
    <AnimatedWrapper
      as={motion.ul}
      viewport={{ once: true, amount: 0.4 }}
      animation={listVariants({ staggerChildren: 0.5 })}
      className={listStyles}
    >
      {data.map(item => {
        const cardProps = mapItemToCardProps(item, lang);

        return (
          <AnimatedListItem
            key={item.title[lang]}
            className="mx-auto w-full max-w-[400px]"
          >
            <PublicationCard {...cardProps} />
          </AnimatedListItem>
        );
      })}
    </AnimatedWrapper>
  );
};

export default PublicationList;
