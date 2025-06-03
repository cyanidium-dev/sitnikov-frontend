import { getTranslations } from "next-intl/server";

const GalleryHero = async () => {
  const t = await getTranslations("galleryPage.hero");

  return (
    <section className="relative max-md:rounded-b-2xl max-md:pt-[507px]">
      <div className="h-[207px] w-full max-w-[1280px] bg-dark px-8 pt-12 text-light max-md:mx-auto max-md:rounded-2xl md:ml-auto md:flex md:h-[440px] md:w-[58%] md:flex-col-reverse md:justify-between md:rounded-l-2xl md:px-[50px] md:pb-12 md:pl-[154px] md:pt-[125px] xl:h-[520px]">
        <div className="max-w-[400px] max-md:mx-auto md:ml-auto md:text-right">
          <h1 className="mb-4 font-micra text-[22px] uppercase xl:text-[44px]">
            {t("title")}
          </h1>
          <p className="left-8 top-[124px] font-micra uppercase leading-[1.3] max-md:absolute max-md:w-[80%] max-md:max-w-[400px] xl:text-[18px]">
            {t("subtitle")}
          </p>
        </div>

        <p className="text-[14px] font-light max-md:mx-auto max-md:max-w-[400px] md:w-[310px]">
          {t("descr")}
        </p>

        <div className="absolute bottom-[207px] right-[30%] h-[269px] w-[360px] bg-[url('/images/galleryPage/gallery-hero-person-mob.webp')] max-xl:translate-x-1/4 md:bottom-0 md:right-1/2 xl:-bottom-[50px] xl:h-[446px] xl:w-[713px] xl:translate-x-[15%] xl:bg-[url('/images/galleryPage/gallery-hero-person-desk.webp')]" />
      </div>

      <div className="absolute left-0 top-0 -z-[5] h-full w-full bg-[url('/images/galleryPage/gallery-hero-bg-mob.webp')] bg-cover bg-no-repeat md:w-[45%] md:bg-[url('/images/galleryPage/gallery-hero-bg-desk.webp')]" />
    </section>
  );
};

export default GalleryHero;
