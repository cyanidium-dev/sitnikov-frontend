import { PublicationItem } from "@/lib/sanity/types/queryTypes";
import { cn } from "@/utils/cn";
import { Locale } from "@/types/locale";

import PublicationCard from "../card/PublicationCard";

interface IPublicationListProps {
  data: PublicationItem[];
  lang: Locale;
  className?: string;
}

const PublicationList = ({ data, className, lang }: IPublicationListProps) => {
  const listStyles = cn(
    "grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 md:mx-auto md:max-w-[804px] xl:max-w-full",
    className
  );

  return (
    <ul className={listStyles}>
      {data.map(({ description, title, slug, mainImageMobile }) => (
        <li key={slug} className="mx-auto w-full max-w-[400px]">
          <PublicationCard
            description={description[lang]}
            imgSrc={mainImageMobile?.asset.url}
            info={"6 хв на читання"}
            title={title[lang]}
          />
        </li>
      ))}
    </ul>
  );
};

export default PublicationList;
