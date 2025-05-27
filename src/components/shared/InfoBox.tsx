import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

interface IInfoBoxProps {
  children: ReactNode;
  variant?: "basic" | "gradient" | "withImage";
  classname?: string;
}

const InfoBox = ({ children, variant = "basic", classname }: IInfoBoxProps) => {
  const baseStyles = cn(
    "rounded-lg ",
    variant === "basic" &&
      "bg-light p-8 pt-6 md:min-h-[170px] xl:min-h-[209px]",
    classname
  );

  return (
    <div className="relative rounded-lg p-[1px] before:absolute before:inset-0 before:z-[-1] before:rounded-lg before:bg-gradient-to-br before:from-[#213767] before:to-[#CBDBFF]">
      <div className={baseStyles}>{children}</div>
    </div>
  );
};

export default InfoBox;
