export type SanityImage = {
  url: string;
  description?: string | null;
};

export type LocalizedString = {
  uk: string;
  ru: string;
};

export type Block = {
  _key: string;
  _type: "block";
  style?: string;
  markDefs: {
    _key: string;
    _type: "link";
    href: string;
  }[];
  children: {
    _key: string;
    _type: "span";
    text: string;
    marks?: string[];
  }[];
};

export type LocalizedBlockContent = {
  uk: (Block | SanityImage)[];
  ru: (Block | SanityImage)[];
};

export type ShortBlock = {
  text: string;
};

export type LocalizedShortBlockContent = {
  uk: ShortBlock[];
  ru: ShortBlock[];
};
