import { LocalizedBlockContent, LocalizedString, SanityImage } from "./shared";

export type GalleryItem = {
  title: LocalizedString;
  description: LocalizedString;
  images: SanityImage[];
};

export type PublicationItem = {
  title: LocalizedString;
  previewImage?: SanityImage;
  mainImage?: SanityImage;
  mainImageMobile?: SanityImage;
  slug: string;
  description: LocalizedString;
  content: LocalizedBlockContent;
  gallery?: SanityImage[];
};

export type AnnouncementItem = {
  title: LocalizedString;
  previewImage?: SanityImage;
  description: LocalizedString;
  startDate: string;
};
