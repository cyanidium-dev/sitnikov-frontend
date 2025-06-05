import {
  getAllPublicationSlugs,
  getPublicationBySlug,
} from "@/lib/sanity/queries/queries";
import { Locale } from "@/types/locale";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;

  const post = await getPublicationBySlug(slug);

  if (!post) return {};

  const { title, description, previewImage } = post;

  return {
    title: title[locale],
    description: description[locale],
    openGraph: {
      title: title[locale],
      description: description[locale],
      images: previewImage?.url ? [previewImage?.url] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: title[locale],
      description: description[locale],
      images: previewImage?.url ? [previewImage?.url] : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPublicationSlugs();

  const languages = ["uk", "ru"];
  return posts.flatMap(post =>
    languages.map(lang => ({
      slug: post.slug,
      lang,
    }))
  );
}

const PublicationPage = () => {
  return <div>PublicationPage</div>;
};

export default PublicationPage;
