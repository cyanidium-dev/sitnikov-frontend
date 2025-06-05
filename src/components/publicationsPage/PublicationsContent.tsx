import { getAllPublications } from "@/lib/sanity/queries/queries";
import { Locale } from "@/types/locale";

import PublicationsPaginatedList from "../shared/publicationList/PublicationsPaginatedList";

export const revalidate = 3600;

// const publicationList = [
//   {
//     title: "Огляд судової практики Верховного Суду",
//     description:
//       "Огляд судової практики пропоную почати зі справи, цікавої з точки зору неоднозначності...",
//     imgSrc: "/images/homepage/home-publications-first.webp",
//     timeToRead: "6 хв на читання",
//   },
//   {
//     title: "Історичні та законодавчі аспекти",
//     description:
//       "Дослідження генези розвитку правових засад звернення до суду за захистом прав, свобод...",
//     imgSrc: "/images/homepage/home-publications-second.webp",
//     timeToRead: "6 хв на читання",
//   },
//   {
//     title: "Вирішення податкових спорів досвідом",
//     description:
//       "Важливою гарантією захисту прав, свобод та інтересів будь-якої особи від свавілля...",
//     imgSrc: "/images/homepage/home-publications-third.webp",
//     timeToRead: "6 хв на читання",
//   },
//   {
//     title: "Історичні та законодавчі аспекти1",
//     description:
//       "Дослідження генези розвитку правових засад звернення до суду за захистом прав, свобод...",
//     imgSrc: "/images/homepage/home-publications-second.webp",
//     timeToRead: "6 хв на читання",
//   },
//   {
//     title: "Вирішення податкових спорів досвідом1",
//     description:
//       "Важливою гарантією захисту прав, свобод та інтересів будь-якої особи від свавілля...",
//     imgSrc: "/images/homepage/home-publications-third.webp",
//     timeToRead: "6 хв на читання",
//   },
//   {
//     title: "Огляд судової практики Верховного Суду1",
//     description:
//       "Огляд судової практики пропоную почати зі справи, цікавої з точки зору неоднозначності...",
//     imgSrc: "/images/homepage/home-publications-first.webp",
//     timeToRead: "6 хв на читання",
//   },
// ];

const PublicationsContent = async ({ lang }: { lang: Locale }) => {
  const publList = await getAllPublications();
  console.log(`🚀 ~ PublicationsPage ~ publList:`, publList);

  return <PublicationsPaginatedList publicationList={publList} lang={lang} />;
};

export default PublicationsContent;
