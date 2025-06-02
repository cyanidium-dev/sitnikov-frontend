import { getTranslations } from "next-intl/server";

const GalleryHero = async () => {
  const t = await getTranslations("galleryPage.hero");

  return (
    <section className="relative rounded-b-2xl bg-teal-600 max-xl:pt-[507px]">
      <div className="h-[207px] w-full max-w-[1280px] bg-dark px-8 pt-12 text-light max-xl:mx-auto max-xl:rounded-2xl xl:ml-auto xl:flex xl:h-[520px] xl:w-[58%] xl:flex-col-reverse xl:justify-between xl:rounded-l-2xl xl:px-[50px] xl:pb-12 xl:pl-[154px] xl:pt-[125px]">
        <div className="max-w-[400px] max-xl:mx-auto xl:ml-auto xl:text-right">
          <h1 className="mb-4 font-micra text-[22px] uppercase xl:text-[44px]">
            {t("title")}
          </h1>
          <p className="left-8 top-[124px] font-micra uppercase leading-[1.3] max-xl:absolute max-xl:w-[80%] max-xl:max-w-[400px] xl:text-[18px]">
            {t("subtitle")}
          </p>
        </div>

        <p className="text-[14px] font-light max-xl:mx-auto max-xl:max-w-[400px] xl:w-[310px]">
          {t("descr")}
        </p>
      </div>
    </section>
  );
};

export default GalleryHero;
