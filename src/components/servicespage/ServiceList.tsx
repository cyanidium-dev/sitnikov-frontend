import { cn } from "@/utils/cn";

interface IServiceListProps {
  data: string[];
  className?: string;
}

const ServiceList = ({ data, className }: IServiceListProps) => {
  return (
    <ul className={cn("flex flex-col gap-4 md:gap-[18px]", className)}>
      {data.map((item, index) => (
        <li
          key={index}
          className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-[linear-gradient(168.67deg,_#AFC8FF_8.35%,_#FFFFFF_129%)] xl:pl-8 xl:before:h-5 xl:before:w-5"
        >
          <p className="leading-[1.4] max-xl:text-[14px]">{item}</p>
        </li>
      ))}
    </ul>
  );
};
export default ServiceList;
