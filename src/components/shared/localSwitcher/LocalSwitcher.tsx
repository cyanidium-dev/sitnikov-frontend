"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Locale } from "@/types/locale";

export default function LocaleSwitcher() {
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
        <span className="text-14med xl:text-16bold">
          {currentLocale === "uk" ? "UA" : "RU"}
        </span>
        <Image
          src="/images/icons/arrow.svg"
          alt="arrow icon"
          width="12"
          height="12"
          className={`size-3 xl:size-4 ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition duration-300 ease-in-out`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-1 w-[65px] bg-white shadow-md rounded-[8px] z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {locales.map(locale => (
              <button
                key={locale}
                onClick={() => handleLocaleChange(locale)}
                className={`w-full flex items-center px-4 py-2`}
              >
                <span
                  className={`  ${
                    currentLocale === locale
                      ? "text-blue text-14med xl:text-16med"
                      : "text-black text-14reg xl:text-16reg"
                  }`}
                >
                  {locale === "uk" ? "UA" : "RU"}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
