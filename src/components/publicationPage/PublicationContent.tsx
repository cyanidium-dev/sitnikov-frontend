import { Block, SanityImage } from "@/lib/sanity/types/shared";

interface IPublicationContentProps {
  content: (Block | SanityImage)[];
  gallery?: SanityImage[];
}

const PublicationContent = ({ content, gallery }: IPublicationContentProps) => {
  return <div>PublicationContent</div>;
};

export default PublicationContent;
