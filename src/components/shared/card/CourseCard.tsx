import { cn } from "@/utils/cn";

import ButtonOrLink from "../button/ButtonOrLink ";
import { ArrowInCircleIcon } from "../icons";

interface ICourseCardProps {
  title: string;
  descr: string;
  variant: "light" | "accent" | "dark";
  href: string;
  className?: string;
  ariaLabel: string;
}

const CourseCard = ({
  variant,
  descr,
  title,
  href,
  className,
  ariaLabel,
}: ICourseCardProps) => {
  const wrapperStyles = cn(
    "relative w-full flex flex-col rounded overflow-hidden",
    variant === "light" &&
      "h-[308px] bg-light text-dark p-6 text-right xl:w-[380px] xl:h-[308px]",
    variant === "accent" &&
      "h-[242px] bg-accent text-light p-6 pt-7 xl:w-[380px] xl:h-[242px]",
    variant === "dark" &&
      "h-[424px] bg-dark text-light p-6 pt-7 border border-solid border-[1px] border-light xl:w-[280px] xl:h-[570px]",
    className
  );

  const titleStyles = cn(
    "z-[3] font-micra text-[24px] mb-6",
    variant === "light" && "",
    variant === "accent" && "",
    variant === "dark" && "max-w-[265px]"
  );

  const descrStyles = cn(
    "z-[3] font-light mb-auto w-[135px] xl:w-[167px] max-xl:text-[14px] ",
    variant === "light" && "ml-auto",
    variant === "accent" && "",
    variant === "dark" && "text-right ml-auto"
  );

  const linkStyles = cn(
    "flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-light p-0 xl:h-[70px] xl:w-[70px]",
    variant === "light" && "ml-auto",
    variant === "accent" && "ml-auto xl:absolute xl:top-7 xl:right-6",
    variant === "dark" && "ml-auto"
  );

  const imgStyles = cn(
    "absolute z-[1] bg-no-repeat",
    variant === "light" &&
      "bottom-0 left-0 h-[308px] bg-contain w-[382px] bg-[url('/images/homepage/home-courses-person-1.webp')]",
    variant === "accent" && "",
    variant === "dark" &&
      "-bottom-[10px] -left-[20px] w-[463px] h-[335px] bg-contain bg-[url('/images/homepage/home-courses-person-2-mob.webp')] xl:bottom-0 xl:left-0 xl:h-[482px] xl:w-[280px] xl:bg-[url('/images/homepage/home-courses-person-2-desk.webp')]"
  );

  return (
    <article>
      <div className={wrapperStyles}>
        <h3 className={titleStyles}>{title}</h3>
        <p className={descrStyles}>{descr}</p>

        <div className="z-[3]">
          <ButtonOrLink
            href={href}
            className={linkStyles}
            ariaLabel={ariaLabel}
          >
            <ArrowInCircleIcon className="h-[31px] w-[31px] text-dark" />
          </ButtonOrLink>
        </div>

        <div className={imgStyles} />

        {variant === "accent" && (
          <div className="absolute bottom-0 right-0 h-[121px] w-[150px] bg-[url('/images/homepage/home-courses-publ-decor-mob.webp')] bg-no-repeat xl:h-[133px] xl:w-[189px] xl:bg-[url('/images/homepage/home-courses-publ-decor-desk.webp')]" />
        )}
      </div>
    </article>
  );
};

export default CourseCard;
