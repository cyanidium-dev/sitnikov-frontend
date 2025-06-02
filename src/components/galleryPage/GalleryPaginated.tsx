// import Image from "next/image";

import { GalleryItem } from "@/types/galleryItem";
import { Locale } from "@/types/locale";

interface IGalleryPaginatedProps {
  data: GalleryItem;
  lang: Locale;
}

const GalleryPaginated = ({ data, lang }: IGalleryPaginatedProps) => {
  const { description, title } = data;
  console.log(`🚀 ~ GalleryPaginated ~ description:`, description);

  return (
    <section>
      <div className="container max-w-[1280px]">
        <h1>{title[lang]}</h1>
        <p>{description[lang]}</p>
        {/* <Image src="" alt="" width={100} height={100} /> */}
      </div>
    </section>
  );
};

export default GalleryPaginated;
