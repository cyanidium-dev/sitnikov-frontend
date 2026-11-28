import {
  AccordionContent,
  LocalizedFullContent,
  LocalizedString,
  SanityImage,
} from "./shared";

export type CourseItem = {
  seoTitle?: { uk?: string; ru?: string };
  seoDescription?: { uk?: string; ru?: string };
  title: LocalizedString;
  description: LocalizedString;
  slug: string;
  courseType: {
    slug: string;
    title: LocalizedString;
  };
  previewImage?: SanityImage;
  mainImage?: SanityImage;
  mainImageMobile?: SanityImage;
  firstBlock: {
    title: LocalizedString;
    content: LocalizedFullContent;
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
