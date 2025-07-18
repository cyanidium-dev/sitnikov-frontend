import { LocalizedShortBlockContent } from "@/lib/sanity/types/shared";
import { Locale } from "@/types/locale";

const AVERAGE_WORDS_PER_MINUTE = 200;

export const getReadingTimeMinutes = (
  content: LocalizedShortBlockContent,
  lang: Locale
): string => {
  const textArray = content[lang]
    .flatMap(section => section.text)
    .filter(Boolean);

  const wordCount = textArray.join(" ").split(/\s+/).filter(Boolean).length;

  const readingTimeMinutes = Math.ceil(wordCount / AVERAGE_WORDS_PER_MINUTE);

  const textReadingTime =
    lang === "uk"
      ? readingTimeMinutes + " " + "хв на читання"
      : readingTimeMinutes + " " + "мин на чтение";

  return textReadingTime;
};
