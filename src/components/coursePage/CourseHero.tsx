const CourseHero = () => {
  return (
    <section className="relative h-[771px] overflow-hidden rounded-b-2xl bg-dark pt-[136px] text-light md:h-[520px]">
      <div className="container max-w-[1280px]">
        <div className="relative z-10 w-[300px] md:ml-auto md:w-[464px] md:text-right">
          <h1 className="mb-6 font-micra text-[22px] uppercase md:mb-[21px] md:text-[32px] xl:text-[40px]">
            Вступ до юриспруденції
          </h1>
          <p className="ml-auto max-w-[236px] text-[14px] font-light max-md:mr-[110px]">
            Дізнайся, що таке право, які існують його галузі, та яку роль
            відіграє юрист у суспільстві.
          </p>
        </div>
      </div>

      <div className="absolute -bottom-[350px] -left-[250px] h-[562px] w-[562px] bg-[url('/images/coursePage/course-hero-decor-mob.webp')] md:-bottom-[205px] md:-left-[130px] md:bg-[url('/images/coursePage/course-hero-decor-desk.webp')]" />

      <div className="absolute bottom-0 h-[411px] w-[309px] bg-[url('/images/coursePage/course-hero-themis-mob.webp')] bg-cover max-md:right-0 md:left-[10%] md:h-[410px] md:w-[407px] md:bg-[url('/images/coursePage/course-hero-themis-desk.webp')] xl:h-[520px] xl:w-[517px]" />
    </section>
  );
};

export default CourseHero;
