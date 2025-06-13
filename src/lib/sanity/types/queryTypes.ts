import {
  AccordionContent,
  LocalizedShortBlockContent,
  LocalizedString,
  SanityImage,
} from "./shared";

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
  content: LocalizedShortBlockContent;
  gallery?: SanityImage[];
};

export type AnnouncementItem = {
  title: LocalizedString;
  previewImage?: SanityImage;
  description: LocalizedString;
  startDate: string;
};

export type CourseItem = {
  title: LocalizedString;
  description: LocalizedString;
  courseType: {
    slug: string;
    title: LocalizedString;
  };
  previewImage?: SanityImage;
  mainImage?: SanityImage;
  mainImageMobile?: SanityImage;
  firstBlock: {
    title: LocalizedString;
    content: LocalizedShortBlockContent;
  };
  secondBlock: {
    title: LocalizedString;
    accordion: AccordionContent[];
  };
};
