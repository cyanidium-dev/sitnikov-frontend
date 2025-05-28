import Image from "next/image";

import InfoBox from "../InfoBox";
import ButtonOrLink from "../button/ButtonOrLink ";
import { ArrowInCircleIcon, ClockIcon } from "../icons";

export type PublicationItem = {
  title: string;
  descr: string;
  imgSrc: string;
  timeToRead: string;
};

const PublicationCard = ({
  descr,
  imgSrc,
  timeToRead,
  title,
}: PublicationItem) => {
  return (
    <article className="h-full">
      <InfoBox variant="withImage" classname="relative h-full">
        <div className="h-[200px]">
          <Image
            src={imgSrc}
            alt="картинка до публікації"
            fill
            sizes="400px"
            className="max-h-[200px] rounded-lg object-cover"
          />
        </div>

        <div className="absolute left-6 top-[177px] w-[210px] rounded-[8px] p-[1px] before:absolute before:inset-0 before:z-0 before:rounded-[8px] before:bg-gradient-to-br before:from-[#EAEBFF] before:to-[#091129] before:content-['']">
          <div className="relative z-[1] flex gap-3 rounded-[8px] bg-white px-[22px] py-3 text-dark">
            <ClockIcon className="h-5 w-5 shrink-0" />
            <span className="font-light leading-[1.3]">{timeToRead}</span>
          </div>
        </div>

        <h3 className="mb-4 mt-[42px] font-micra text-xl leading-[1.22] tracking-normal xl:mb-6 xl:text-[24px]">
          {title}
        </h3>

        <div className="flex items-end gap-[18px]">
          <p className="line-clamp-5 tracking-normal">{descr}</p>

          <ButtonOrLink
            href="#"
            className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-[8px] bg-[linear-gradient(157.5deg,_#7F9EE3_14.64%,_#46577D_174.32%)] p-0"
          >
            <ArrowInCircleIcon className="h-[31px] w-[31px]" />
          </ButtonOrLink>
        </div>
      </InfoBox>
    </article>
  );
};

export default PublicationCard;
