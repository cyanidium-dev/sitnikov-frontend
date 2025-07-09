import { Metadata } from "next";
import { Locale } from "next-intl";

import EducationContent from "@/components/educationPage/EducationContent";
import EducationHero from "@/components/educationPage/EducationHero";
import { getCourseCategories } from "@/lib/sanity/queries/courses";
import { ROUTES } from "@/constants/routes";
import { generatePageMetadata } from "@/utils/generatePageMetaData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    namespace: "educationPage",
    path: ROUTES.EDUCATION,
  });
}

const EducationPage = async () => {
  const courseCategories = await getCourseCategories();

  return (
    <>
      <EducationHero />
      <EducationContent courseCategories={courseCategories} />
    </>
  );
};

export default EducationPage;
