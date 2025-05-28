import { cn } from "@/utils/cn";

import ButtonOrLink from "../button/ButtonOrLink ";
import { ArrowInCircleIcon } from "../icons";

interface ICourseCardProps {
  title: string;
  descr: string;
  imgSrc?: string;
  variant: "light" | "accent" | "dark";
  href: string;
  className?: string;
}

const CourseCard = ({
  variant,
  descr,
  title,
  href,
  className,
}: ICourseCardProps) => {
  const wrapperStyles = cn(
    "w-full flex flex-col rounded",
    variant === "light" &&
      "h-[308px] bg-light text-dark p-6 text-right xl:w-[380px] xl:h-[308px]",
    variant === "accent" &&
      "h-[242px] bg-accent text-light p-6 pt-7 xl:w-[380px] xl:h-[242px]",
    variant === "dark" &&
      "h-[424px] bg-dark text-light p-6 pt-7 border border-solid border-[1px] border-light xl:w-[280px] xl:h-[570px]",
    className
  );

  const titleStyles = cn(
    "font-micra text-[24px] mb-6",
    variant === "light" && "",
    variant === "accent" && "",
    variant === "dark" && ""
  );

  const descrStyles = cn(
    "font-light mb-auto w-[135px] xl:w-[167px] max-xl:text-[14px] ",
    variant === "light" && "ml-auto",
    variant === "accent" && "",
    variant === "dark" && ""
  );

  const linkStyles = cn(
    "flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-light p-0 xl:h-[70px] xl:w-[70px]",
    variant === "light" && "ml-auto",
    variant === "accent" && "ml-auto",
    variant === "dark" && "ml-auto"
  );

  return (
    <article>
      <div className={wrapperStyles}>
        <h3 className={titleStyles}>{title}</h3>
        <p className={descrStyles}>{descr}</p>
        <ButtonOrLink href={href} className={linkStyles}>
          <ArrowInCircleIcon className="h-[31px] w-[31px] text-dark" />
        </ButtonOrLink>
      </div>
    </article>
  );
};

export default CourseCard;
