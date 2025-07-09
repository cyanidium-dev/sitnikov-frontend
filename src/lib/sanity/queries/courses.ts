import { client } from "@/lib/sanity";

import { CourseCategoryItem, CourseItem } from "../types/courseTypes";

export const getAllCourses = async () => {
  return await client.fetch(`*[_type == "course"] {
        title,
        description,
        "courseType": {
          "slug": courseType->slug.current,
          "title": courseType->title
        },
        previewImage{
          "url": asset->url,
          description
        },
        mainImage{
          "url": asset->url,
          description
        },
        mainImageMobile{
          "url": asset->url,
          description
        },
        firstBlock{
          title,
          "content": {
            "uk": content.uk[]{
              "text": children[].text
            },
            "ru": content.ru[]{
              "text": children[].text
            }
          }
        },
        secondBlock{
          title,
          accordion
        }
      }`);
};

export const getCoursesByCategory = async (
  categorySlug: string
): Promise<CourseItem[]> => {
  return await client.fetch<CourseItem[]>(
    `
      *[_type == "course" && courseType->slug.current == $categorySlug] {
        title,
        description,
        "courseType": {
          "slug": courseType->slug.current,
          "title": courseType->title
        },
        previewImage{
          "url": asset->url,
          description
        },
        mainImage{
          "url": asset->url,
          description
        },
        mainImageMobile{
          "url": asset->url,
          description
        },
        firstBlock{
          title,
          "content": {
            "uk": content.uk[]{
              "text": children[].text
            },
            "ru": content.ru[]{
              "text": children[].text
            }
          }
        },
        secondBlock{
          title,
          accordion
        }
      }
    `,
    { categorySlug }
  );
};

export const getCourseCategories = async (): Promise<CourseCategoryItem[]> => {
  return await client.fetch<CourseCategoryItem[]>(`*[_type == "courseType"]{
      "slug": slug.current,
      title
      }`);
};
