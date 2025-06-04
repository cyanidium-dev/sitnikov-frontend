import { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/utils/cn";

interface ButtonOrLinkProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  variant?: "dark" | "light" | "transparent";
  disabled?: boolean;
  isLoading?: boolean;
  ariaLabel?: string;
  external?: boolean;
}

const ButtonOrLink = ({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  variant = "dark",
  disabled,
  isLoading,
  ariaLabel,
  external = false,
}: ButtonOrLinkProps) => {
  const baseStyles = cn(
    "group relative flex text-sm leading-[20px] font-medium items-center justify-center overflow-hidden rounded-full w-full py-[18px] transition duration-300 ease-out active:scale-95",
    variant === "dark" &&
      "relative text-white before:absolute before:inset-0 before:rounded-full before:z-[-1] before:p-[1px] before:bg-[linear-gradient(90deg,_#304F94_0%,_#6582C2_100%)] before:content-[''] after:absolute after:inset-[1px] after:rounded-full after:z-[-1] after:bg-[linear-gradient(94.05deg,_#091129_-15.57%,_#001C58_140.61%)] after:content-['']",
    variant === "light" &&
      "text-dark after:bg-light relative before:absolute before:inset-0 before:z-[-1] before:rounded-full before:bg-[linear-gradient(90deg,_#304F94_0%,_#6582C2_100%)] before:p-[1px] before:content-[''] after:absolute after:inset-[1px] after:z-[-1] after:rounded-full after:content-['']",
    variant === "transparent" &&
      "border-1 border-light text-light border border-solid bg-transparent",
    disabled || isLoading ? "opacity-50 cursor-not-allowed" : "",
    className
  );

  const content = isLoading ? "Loading..." : children;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={baseStyles}
          aria-label={ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} aria-label={ariaLabel} className={baseStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={baseStyles}
    >
      {content}

      <span className="via-blue/30 absolute left-[-150%] top-0 h-full w-full skew-x-[-40deg] bg-gradient-to-r from-white/20 to-white/20 opacity-70 transition-all duration-[800ms] ease-in-out group-[focus-visible]:left-[120%] xl:group-hover:left-[120%]" />
    </button>
  );
};

export default ButtonOrLink;
