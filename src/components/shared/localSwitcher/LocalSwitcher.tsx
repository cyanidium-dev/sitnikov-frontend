"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/utils/cn";
import { Locale } from "@/types/locale";

const LocaleSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const currentLocale = useLocale();
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const locales = routing.locales;

  const handleLocaleChange = (newLocale: Locale) => {
    const hash = window.location.hash;

    const newPath = `${pathName}${hash}?${searchParams.toString()}`;

    router.replace(newPath, { locale: newLocale });

    setIsOpen(false);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClickOutside, handleKeyDown]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 outline-none"
      >
        <span className="font-bold leading-tight text-light">
          {currentLocale === "uk" ? "UA" : "RU"}
        </span>
        <Image
          src="/images/icons/arrow.svg"
          alt="arrow icon"
          width="16"
          height="16"
          className={cn(
            "size-4 transition duration-300 ease-in-out",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </button>

      {/* CSS transition instead of framer-motion: keeps ~40 KB of JS off every page */}
      <div
        className={cn(
          "absolute right-0 z-50 mt-1 w-[65px] rounded-[8px] bg-light shadow-md transition-[opacity,transform,visibility] duration-300",
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2.5 opacity-0"
        )}
      >
        {locales.map(locale => (
          <button
            key={locale}
            onClick={() => handleLocaleChange(locale)}
            className={`flex w-full items-center px-4 py-2`}
          >
            <span
              className={` ${
                currentLocale === locale
                  ? "text-14med xl:text-16med text-accent"
                  : "text-14reg xl:text-16reg text-dark"
              }`}
            >
              {locale === "uk" ? "UA" : "RU"}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LocaleSwitcher;
