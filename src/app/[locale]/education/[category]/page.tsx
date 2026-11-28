import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import FinalCta from "@/components/coursePage/builder/FinalCta";
import EducationContent from "@/components/educationPage/EducationContent";
import EducationHero from "@/components/educationPage/EducationHero";
import JsonLd from "@/components/seo/JsonLd";
import { SECTION_NAMES, itemList, pageSchema } from "@/components/seo/seo";
import {
  getCourseCategories,
  getCoursesByCategory,
} from "@/lib/sanity/queries/courses";
import { ROUTES } from "@/constants/routes";
import { generatePageMetadata } from "@/utils/generatePageMetaData";
import { Locale } from "@/types/locale";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; category: string }>;
}): Promise<Metadata> {
  const { locale, category } = await params;
  const t = await getTranslations({ locale, namespace: "educationCategories" });
  const own = t.has(`${category}.metaTitle`);

  // every category has its own title/description (not the «Навчання» ones)
  return generatePageMetadata({
    locale,
    namespace: "educationPage",
    path: `${ROUTES.EDUCATION}/${category}`,
    overrides: own
      ? {
          title: t(`${category}.metaTitle`),
          description: t(`${category}.metaDescr`),
        }
      : {},
  });
}

const EducationCategoryPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale; category: string }>;
}) => {
  const { locale, category } = await params;

  const courseCategories = await getCourseCategories();
  if (!courseCategories.some(c => c.slug === category)) notFound();
  const allCourses = await getCoursesByCategory(category);
  const cat = courseCategories.find(c => c.slug === category);
  const catName = cat?.title?.[locale] || cat?.title?.uk || category;
  const catPath = `${ROUTES.EDUCATION}/${category}`;
  const ld = pageSchema({
    locale,
    type: "CollectionPage",
    path: catPath,
    name: catName,
    crumbs: [
      { name: SECTION_NAMES.education[locale], path: ROUTES.EDUCATION },
      { name: catName, path: catPath },
    ],
    mainEntity: itemList(
      locale,
      allCourses.map(c => ({
        name: c.title[locale] || c.title.uk,
        path: `${catPath}/${c.slug}`,
      }))
    ),
  });

  return (
    <>
      <JsonLd data={ld} />
      <EducationHero />
      <EducationContent
        courseCategories={courseCategories}
        allCourses={allCourses}
        lang={locale}
      />
      <FinalCta course={locale === "ru" ? "Подбор курса" : "Підбір курсу"} />
    </>
  );
};

export default EducationCategoryPage;
