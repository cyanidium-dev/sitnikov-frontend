import {
  AnnouncementItem,
  CourseItem,
  GalleryItem,
  PublicationItem,
} from "@/lib/sanity/types/queryTypes";

import { client } from "../../sanity";

export const gallery = async (): Promise<GalleryItem[]> => {
  return await client.fetch<GalleryItem[]>(`
      *[_type == "gallery"] {
        title,
        description,
        images[] {
          "url": asset->url,
          description
        }
      }
    `);
};

export const getAllPublications = async (): Promise<PublicationItem[]> => {
  return await client.fetch<PublicationItem[]>(`
      *[_type == "post"] | order(_createdAt desc) {
        title,
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
        "slug": slug.current,
        description,
        "content": {
          "uk": content.uk[]{
            "text": children[].text
          },
          "ru": content.ru[]{
            "text": children[].text
          }
        },
        gallery[]{
          "url": asset->url,
          description
        }
      }
    `);
};

export const getPaginatedPublications = async (
  limit = 3
): Promise<PublicationItem[]> => {
  return await client.fetch<PublicationItem[]>(
    `
      *[_type == "post"] | order(_createdAt desc)[0...$limit] {
        title,
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
        "slug": slug.current,
        description,
        content,
        gallery[]{
          "url": asset->url,
          description
        }
      }
    `,
    { limit }
  );
};

export const getPublicationBySlug = async (
  slug: string
): Promise<PublicationItem> => {
  return await client.fetch<PublicationItem>(
    `
      *[_type == "post" && slug.current == $slug][0] {
        title,
        previewImage{
         "url": asset->url
        },
        mainImage{
         "url": asset->url
        },
        mainImageMobile{
         "url": asset->url
        },
        "slug": slug.current,
        description,
        "content": {
          "uk": content.uk[]{
            "text": children[].text
          },
          "ru": content.ru[]{
            "text": children[].text
          }
        },
        gallery[]{
          "url": asset->url
        }
      }
    `,
    { slug }
  );
};

export const getAllPublicationSlugs = async (): Promise<{ slug: string }[]> => {
  return await client.fetch<{ slug: string }[]>(
    `*[_type == "post"] { "slug": slug.current }`
  );
};

export const getAllAnnouncements = async (): Promise<AnnouncementItem[]> => {
  return await client.fetch<AnnouncementItem[]>(`
    *[_type == "announcement"] | order(startDate desc) {
      title,
      description,
      startDate,
      previewImage{
         "url": asset->url
        },
    }`);
};

export const getAllCourses = async () => {
  return await client.fetch(`*[_type == "course"]`);
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
