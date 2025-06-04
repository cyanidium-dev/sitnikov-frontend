import { cn } from "@/utils/cn";

import PublicationCard, { PublicationItem } from "../card/PublicationCard";

interface IPublicationListProps {
  data: PublicationItem[];
  className?: string;
}

const PublicationList = ({ data, className }: IPublicationListProps) => {
  const listStyles = cn(
    "grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 md:mx-auto md:max-w-[804px] xl:max-w-full",
    className
  );

  return (
    <ul className={listStyles}>
      {data.map(({ descr, imgSrc, timeToRead, title }) => (
        <li key={title} className="mx-auto w-full max-w-[400px]">
          <PublicationCard
            descr={descr}
            imgSrc={imgSrc}
            timeToRead={timeToRead}
            title={title}
          />
        </li>
      ))}
    </ul>
  );
};

export default PublicationList;
