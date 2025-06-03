// import Image from "next/image";

import { GalleryItem } from "@/types/galleryItem";
import { Locale } from "@/types/locale";

import GallerySlider from "../shared/gallerySlider/GallerySlider";

interface IGalleryPaginatedProps {
  data?: GalleryItem;
  lang?: Locale;
}

// const GalleryPaginated = ({ data, lang }: IGalleryPaginatedProps) => {
const GalleryPaginated = () => {
  // const { description, title } = data;

  return (
    <section className="pb-[128px] pt-[120px]">
      <div className="container max-w-[1280px]">
        {/* <h2>{title[lang]}</h2>
        <p>{description[lang]}</p>
        <Image src="" alt="" width={100} height={100} /> */}

        <h2 className="mb-4 font-micra text-[22px]">
          Право & Суспільство: сучасні виклики
        </h2>
        <p className="mb-[52px] font-light">
          Всеукраїнська конференція з актуальних питань конституційного,
          цивільного та кримінального права
        </p>
      </div>

      <GallerySlider variant="light" title="123" />

      <div className="bg-dark">
        <GallerySlider variant="dark" title="234" />
      </div>
    </section>
  );
};

export default GalleryPaginated;
