import CourseContent from "@/components/coursePage/CourseContent";
import CourseHero from "@/components/coursePage/CourseHero";
import { getCoursesByCategory } from "@/lib/sanity/queries/queries";
import { Locale } from "@/types/locale";

const CoursePage = async ({
  params,
  // slug
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) => {
  const { locale } = await params;

  // Use slug for getting course by slug
  const allCourses = await getCoursesByCategory("free-courses");

  return (
    <>
      <CourseHero
        title={allCourses[0].title[locale]}
        descr={allCourses[0].description[locale]}
      />
      <CourseContent course={allCourses[0]} lang={locale} />
    </>
  );
};

export default CoursePage;
