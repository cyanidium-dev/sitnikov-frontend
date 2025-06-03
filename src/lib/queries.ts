import { GalleryItem } from "@/types/galleryItem";

import { client } from "./sanity";

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
