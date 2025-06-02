import GalleryContent from "@/components/galleryPage/GalleryContent";
import GalleryHero from "@/components/galleryPage/GalleryHero";
import { Locale } from "@/types/locale";

const GalleryPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;

  return (
    <>
      <GalleryHero />
      <GalleryContent lang={locale} />
    </>
  );
};

export default GalleryPage;
