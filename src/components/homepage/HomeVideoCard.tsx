import { getTranslations } from "next-intl/server";

import { pick } from "@/lib/sanity/types/courseBlocks";
import { getSiteConfig } from "@/lib/siteSettings";
import { extractVideoId } from "@/utils/extractVideoId";

import YouTubeLite from "../coursePage/builder/YouTubeLite";
import JsonLd from "../seo/JsonLd";
import SectionHead from "./SectionHead";

/** Video business card of the lawyer — shown once a YouTube link is set in the admin. */
const HomeVideoCard = async ({ locale }: { locale: string }) => {
  const site = await getSiteConfig();
  const card = site.videoCard;
  const id = extractVideoId(card?.url ?? "");
  if (!card || !id) return null;
  const t = await getTranslations("homepage.videoCard");
  const title = pick(card.title, locale) || t("title");
  const caption = pick(card.caption, locale) || t("descr");

  return (
    <section className="bg-light py-14 md:py-20 xl:py-[100px]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: title,
          description: caption,
          thumbnailUrl: [
            `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
            `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
          ],
          ...(card.uploadDate && { uploadDate: card.uploadDate }),
          embedUrl: `https://www.youtube.com/embed/${id}`,
          url: `https://www.youtube.com/watch?v=${id}`,
          inLanguage: locale,
        }}
      />
      <div className="container grid max-w-[1280px] grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <SectionHead title={title} descr={caption} className="mb-0 md:mb-0" />
        </div>
        <div className="lg:col-span-8">
          <YouTubeLite id={id} title={title} />
        </div>
      </div>
    </section>
  );
};

export default HomeVideoCard;
