import { Block, SanityImage } from "@/lib/sanity/types/shared";

import GallerySlider from "../shared/gallerySlider/GallerySlider";

interface IPublicationContentProps {
  title: string;
  content: (Block | SanityImage)[];
  gallery?: SanityImage[];
}

const PublicationContent = ({
  // content,
  gallery,
  title,
}: IPublicationContentProps) => {
  return (
    <article>
      <div className="container max-w-[1280px]">
        <p className="py-[120px] md:py-[100px]">some text</p>

        {gallery && (
          <GallerySlider
            wrapperClassName="mb-[46px]"
            gallery={gallery}
            imgAlt={title}
            sliderId="1"
          />
        )}
      </div>
    </article>
  );
};

export default PublicationContent;
