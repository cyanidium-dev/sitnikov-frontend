import { GalleryItem, PublicationItem } from "@/lib/sanity/types/queryTypes";

import { client } from "../../sanity";

export const gallery = async (): Promise<GalleryItem[]> => {
  return await client.fetch<GalleryItem[]>(`
      *[_type == "gallery"] {
        title,
        description,
        images[] {
          asset->{
            url,
          },
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
          asset->{url},
          description
        },
        mainImage{
          asset->{url},
          description
        },
        mainImageMobile{
          asset->{url},
          description
        },
        "slug": slug.current,
        description,
        content,
        gallery[]{
          asset->{url},
          description
        }
      }
    `);
};

export const getAllAnnouncement = async () => {
  return await client.fetch(`
    *[_type == "announcement"] | order(startDate desc) {
      title,
      description,
      startDate
    }`);
};
