import Image from "next/image";

import InfoBox from "../InfoBox";
import IconButtonOrLink from "../button/IconButtonOrLink";
import { ClockIcon } from "../icons";

interface IPublicationCardProps {
  description: string;
  imgSrc?: string;
  info: string;
  title: string;
}

const PublicationCard = ({
  description,
  imgSrc,
  info,
  title,
}: IPublicationCardProps) => {
  return (
    <article className="h-full">
      <InfoBox variant="withImage" classname="relative h-full">
        <div className="relative -mx-6 -mt-6 h-[200px]">
          <Image
            src={
              imgSrc ||
              "/images/publications/publication-card-default-image.webp"
            }
            alt="картинка до публікації"
            fill
            sizes="400px"
            className="max-h-[200px] rounded-lg object-cover"
          />
        </div>

        <div className="absolute left-6 top-[177px] min-w-[210px] max-w-[298px] rounded-[8px] p-[1px] before:absolute before:inset-0 before:z-0 before:rounded-[8px] before:bg-gradient-to-br before:from-[#EAEBFF] before:to-[#091129] before:content-['']">
          <div className="relative z-[1] flex gap-3 rounded-[8px] bg-white px-[22px] py-3 text-dark">
            <ClockIcon className="h-5 w-5 shrink-0" />
            <span className="text-nowrap font-light leading-[1.3]">{info}</span>
          </div>
        </div>

        <h3 className="mb-4 mt-[42px] font-micra text-xl leading-[1.22] tracking-normal xl:mb-6 xl:text-[24px]">
          {title}
        </h3>

        <div className="flex items-end gap-[18px]">
          <p className="line-clamp-5 tracking-normal">{description}</p>

          <IconButtonOrLink href="#" />
        </div>
      </InfoBox>
    </article>
  );
};

export default PublicationCard;
