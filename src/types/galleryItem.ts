interface GalleryImage {
  asset: {
    url: string;
  };
  description?: string | null;
}

export interface GalleryItem {
  title: {
    ru: string;
    uk: string;
  };
  description: {
    ru: string;
    uk: string;
  };
  images: GalleryImage[];
}
