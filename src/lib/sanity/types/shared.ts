export type SanityImage = {
  url: string;
  description?: string | null;
};

export type LocalizedString = {
  uk: string;
  ru: string;
};

export type Block = {
  style?: string;
  markDefs?: {
    href: string;
  }[];
  children: {
    marks?: string[];
    text: string;
  }[];
};

export type LocalizedBlockContent = {
  uk: (Block | SanityImage)[];
  ru: (Block | SanityImage)[];
};
