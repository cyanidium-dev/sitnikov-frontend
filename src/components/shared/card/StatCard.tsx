import { cn } from "@/utils/cn";

interface IStatCardProps {
  title: string;
  number: string;
  decorPosition?: "bottom-right" | "top-right";
  className?: string;
}

const StatCard = ({ number, title, decorPosition }: IStatCardProps) => {
  const decorStyles = cn(
    "absolute bg-no-repeat",
    !decorPosition && "hidden",
    decorPosition === "top-right" &&
      "top-0 right-0 w-[107px] h-[125px] bg-[url('/images/homepage/home-courses-decor-2-mob.webp')] xl:w-[131px] xl:h-[154px] xl:bg-[url('/images/homepage/home-courses-decor-2-desk.webp')]",
    decorPosition === "bottom-right" &&
      "bottom-0 right-0 w-[128px] h-[131px] bg-[url('/images/homepage/home-courses-decor-1-mob.webp')] xl:w-[153px] xl:h-[134px] xl:bg-[url('/images/homepage/home-courses-decor-1-desk.webp')]"
  );

  return (
    <div className="relative flex h-full flex-col justify-center overflow-hidden pl-8">
      <p className="mb-3 font-micra text-[44px] xl:text-[58px]">{number}</p>
      <p className="text-[20px] font-light">{title}</p>

      <div className={decorStyles} />
    </div>
  );
};
export default StatCard;
