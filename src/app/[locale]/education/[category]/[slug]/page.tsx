import { getTranslations } from "next-intl/server";
import { notFound, permanentRedirect } from "next/navigation";

import CourseBuilder from "@/components/coursePage/builder/CourseBuilder";
import JsonLd from "@/components/seo/JsonLd";
import { SECTION_NAMES, breadcrumbs, clamp } from "@/components/seo/seo";
import { ORG_ID, PERSON_ID } from "@/components/seo/siteSchema";
import { getCourseBySlug, getCoursePage } from "@/lib/sanity/queries/courses";
import { ROUTES } from "@/constants/routes";
import { normalizeTitle } from "@/utils/courseImage";
import { SITE_URL } from "@/utils/getBaseUrl";
import { legacyToSections } from "@/utils/legacyCourse";
import { Locale } from "@/types/locale";

type Params = Promise<{ locale: Locale; category: string; slug: string }>;

const coursePath = (category: string, slug: string) =>
  `${ROUTES.EDUCATION}/${category}/${slug}`;

export async function generateMetadata({ params }: { params: Params }) {
  const { locale, slug } = await params;

  const post = await getCourseBySlug(slug);

  if (!post) return {};

  const { title, description, previewImage } = post;
  const path = coursePath(post.courseType.slug, post.slug);

  const name = normalizeTitle(title[locale] || title.uk);
  // keep the title within ~65 characters so Google does not cut it
  const long = `${name} — ${locale === "ru" ? "курс Александра Сытникова" : "курс Олександра Ситникова"}`;
  const short = `${name} — ${locale === "ru" ? "курс Сытникова" : "курс Ситникова"}`;
  const seoTitle =
    post.seoTitle?.[locale] ||
    post.seoTitle?.uk ||
    (long.length <= 65 ? long : short.length <= 65 ? short : name);
  const seoDescr =
    post.seoDescription?.[locale] ||
    clamp(description[locale] || description.uk || "");

  return {
    title: seoTitle,
    description: seoDescr,
    alternates: {
      canonical: `${SITE_URL}/${locale}${path}`,
      languages: {
        uk: `${SITE_URL}/uk${path}`,
        ru: `${SITE_URL}/ru${path}`,
        "x-default": `${SITE_URL}/uk${path}`,
      },
    },
    openGraph: {
      title: seoTitle,
      description: seoDescr,
      url: `${SITE_URL}/${locale}${path}`,
      images: previewImage?.url ? [previewImage.url] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title[locale],
      description: description[locale],
      images: previewImage?.url ? [previewImage?.url] : [],
    },
  };
}

const CoursePage = async ({ params }: { params: Params }) => {
  const { locale, category, slug } = await params;

  const [course, page] = await Promise.all([
    getCourseBySlug(slug),
    getCoursePage(slug).catch(() => null),
  ]);

  if (!course) notFound();

  // one address per course: a wrong category in the URL redirects to the real one
  if (course.courseType?.slug && course.courseType.slug !== category) {
    permanentRedirect(`/${locale}${coursePath(course.courseType.slug, slug)}`);
  }

  const { title, description, mainImage, previewImage } = course;

  const coursePrices = (page?.course?.sections ?? [])
    .flatMap(s => (s._type === "coursePackagesBlock" ? (s.packages ?? []) : []))
    .map(p => p.price)
    .filter((p): p is number => typeof p === "number" && p > 0);
  const offers = coursePrices.length
    ? {
        "@type": "AggregateOffer",
        priceCurrency: "UAH",
        lowPrice: Math.min(...coursePrices),
        highPrice: Math.max(...coursePrices),
        offerCount: coursePrices.length,
        category: "Paid",
      }
    : category === "free-courses"
      ? { "@type": "Offer", price: 0, priceCurrency: "UAH", category: "Free" }
      : undefined;
  const catName =
    course.courseType?.title?.[locale] ||
    course.courseType?.title?.uk ||
    category;

  const courseLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: title[locale],
    description: description[locale],
    url: `${SITE_URL}/${locale}${coursePath(category, slug)}`,
    inLanguage: locale,
    image: previewImage?.url || mainImage?.url,
    provider: { "@id": ORG_ID },
    instructor: { "@id": PERSON_ID },
    ...(offers && { offers }),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      instructor: { "@id": PERSON_ID },
      ...(page?.course?.flowStart && { startDate: page.course.flowStart }),
    },
  };
  const crumbsLd = {
    "@context": "https://schema.org",
    ...breadcrumbs(locale, [
      { name: SECTION_NAMES.education[locale], path: ROUTES.EDUCATION },
      { name: catName, path: `${ROUTES.EDUCATION}/${category}` },
      {
        name: normalizeTitle(title[locale] || title.uk),
        path: coursePath(category, slug),
      },
    ]),
  };

  // Courses built in the constructor use their blocks; older courses get the
  // same design from their existing content (description, program, videos).
  const t = await getTranslations({ locale, namespace: "courseBuilder" });
  const sections = page?.course?.sections?.length
    ? page.course.sections
    : legacyToSections(course, {
        lessons: count => t("lessonsCount", { count }),
        online: t("factOnline"),
        videos: t("factVideos"),
      });

  return (
    <>
      <JsonLd data={courseLd} />
      <JsonLd data={crumbsLd} />
      <CourseBuilder
        locale={locale}
        data={{
          title,
          description,
          slug,
          category: course.courseType,
          mainImage,
          flowStart: page?.course?.flowStart,
          priceValidUntil: page?.course?.priceValidUntil,
          sections,
          trainer: page?.trainer,
        }}
      />
    </>
  );
};

export default CoursePage;
