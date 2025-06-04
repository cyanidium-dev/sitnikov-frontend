import AnnouncementsHero from "@/components/announcementsPage/AnnouncementsHero";
import PublicationsPaginatedList from "@/components/shared/publicationList/PublicationsPaginatedList";

const publicationList = [
  {
    title: "Огляд судової практики Верховного Суду",
    descr:
      "Огляд судової практики пропоную почати зі справи, цікавої з точки зору неоднозначності...",
    imgSrc: "",
    timeToRead: "Початок: 19.05.2025 о 19:00",
  },
  {
    title: "Історичні та законодавчі аспекти",
    descr:
      "Дослідження генези розвитку правових засад звернення до суду за захистом прав, свобод...",
    imgSrc: "",
    timeToRead: "Початок: 19.05.2025 о 19:00",
  },
  {
    title: "Вирішення податкових спорів досвідом",
    descr:
      "Важливою гарантією захисту прав, свобод та інтересів будь-якої особи від свавілля...",
    imgSrc: "",
    timeToRead: "Початок: 19.05.2025 о 19:00",
  },
  {
    title: "Історичні та законодавчі аспекти1",
    descr:
      "Дослідження генези розвитку правових засад звернення до суду за захистом прав, свобод...",
    imgSrc: "",
    timeToRead: "Початок: 19.05.2025 о 19:00",
  },
  {
    title: "Вирішення податкових спорів досвідом1",
    descr:
      "Важливою гарантією захисту прав, свобод та інтересів будь-якої особи від свавілля...",
    imgSrc: "",
    timeToRead: "Початок: 19.05.2025 о 19:00",
  },
  {
    title: "Огляд судової практики Верховного Суду1",
    descr:
      "Огляд судової практики пропоную почати зі справи, цікавої з точки зору неоднозначності...",
    imgSrc: "",
    timeToRead: "Початок: 19.05.2025 о 19:00",
  },
];

const AnnouncementsPage = () => {
  return (
    <>
      <AnnouncementsHero />
      <PublicationsPaginatedList publicationList={publicationList} />
    </>
  );
};

export default AnnouncementsPage;
