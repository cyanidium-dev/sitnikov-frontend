import PublicationList from "../shared/publicationList/PublicationList";

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

const PublicationsContent = () => {
  return (
    <section className="relative overflow-hidden pb-[194px] pt-[329px] md:pb-[96px] md:pt-[82px]">
      <div className="container relative max-w-[1280px]">
        <PublicationList data={publicationList} className="mb-8" />

        <div className="mx-auto h-[42px] w-[300px] bg-dark"></div>

        <div className="absolute left-0 top-[276px] -z-[5] h-[352px] w-[282px] max-md:hidden md:bg-[url('/images/publications/publications-decor-top-desk.webp')]" />
        <div className="absolute -bottom-[74px] right-0 -z-[5] h-[433px] w-[357px] max-md:hidden md:bg-[url('/images/publications/publications-decor-mid-desk.webp')]" />
      </div>

      <div className="absolute left-0 top-[80px] -z-[5] h-[312px] w-[281px] max-md:bg-[url('/images/publications/publications-decor-top-mob.webp')] md:hidden" />
      <div className="absolute right-0 top-[35%] -z-[5] h-[312px] w-[233px] max-md:bg-[url('/images/publications/publications-decor-mid-1-mob.webp')] md:hidden" />
      <div className="absolute left-0 top-[67%] -z-[5] h-[312px] w-[175px] max-md:bg-[url('/images/publications/publications-decor-mid-2-mob.webp')] md:hidden" />
      <div className="absolute -bottom-[220px] left-0 -z-[5] h-[411px] w-[360px] max-md:bg-[url('/images/publications/publications-decor-bot-mob.webp')] md:hidden" />

      <div className="absolute -bottom-[200px] left-0 -z-[5] h-[430px] w-[415px] max-md:hidden md:bg-[url('/images/publications/publications-decor-bot-desk.webp')]" />
    </section>
  );
};

export default PublicationsContent;
