import {
  AccordionContent,
  LocalizedShortBlockContent,
  LocalizedString,
  SanityImage,
} from "./shared";

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

export type CourseCategoryItem = {
  title: LocalizedString;
  slug: string;
};
