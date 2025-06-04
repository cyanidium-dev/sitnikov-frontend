import PublicationsHero from "@/components/publicationsPage/PublicationsHero";
import PublicationsPaginatedList from "@/components/shared/publicationList/PublicationsPaginatedList";

const publicationList = [
  {
    title: "Огляд судової практики Верховного Суду",
    descr:
      "Огляд судової практики пропоную почати зі справи, цікавої з точки зору неоднозначності...",
    imgSrc: "/images/homepage/home-publications-first.webp",
    timeToRead: "6 хв на читання",
  },
  {
    title: "Історичні та законодавчі аспекти",
    descr:
      "Дослідження генези розвитку правових засад звернення до суду за захистом прав, свобод...",
    imgSrc: "/images/homepage/home-publications-second.webp",
    timeToRead: "6 хв на читання",
  },
  {
    title: "Вирішення податкових спорів досвідом",
    descr:
      "Важливою гарантією захисту прав, свобод та інтересів будь-якої особи від свавілля...",
    imgSrc: "/images/homepage/home-publications-third.webp",
    timeToRead: "6 хв на читання",
  },
  {
    title: "Історичні та законодавчі аспекти1",
    descr:
      "Дослідження генези розвитку правових засад звернення до суду за захистом прав, свобод...",
    imgSrc: "/images/homepage/home-publications-second.webp",
    timeToRead: "6 хв на читання",
  },
  {
    title: "Вирішення податкових спорів досвідом1",
    descr:
      "Важливою гарантією захисту прав, свобод та інтересів будь-якої особи від свавілля...",
    imgSrc: "/images/homepage/home-publications-third.webp",
    timeToRead: "6 хв на читання",
  },
  {
    title: "Огляд судової практики Верховного Суду1",
    descr:
      "Огляд судової практики пропоную почати зі справи, цікавої з точки зору неоднозначності...",
    imgSrc: "/images/homepage/home-publications-first.webp",
    timeToRead: "6 хв на читання",
  },
];

const PublicationsPage = () => {
  return (
    <>
      <PublicationsHero />
      <PublicationsPaginatedList publicationList={publicationList} />
    </>
  );
};

export default PublicationsPage;
