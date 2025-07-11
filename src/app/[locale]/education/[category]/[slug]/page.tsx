import CourseContent from "@/components/coursePage/CourseContent";
import CourseHero from "@/components/coursePage/CourseHero";
import { getCourseBySlug } from "@/lib/sanity/queries/courses";
import { Locale } from "@/types/locale";

const CoursePage = async ({
  params,
}: {
  params: Promise<{ locale: Locale; category: string; slug: string }>;
}) => {
  const { locale, slug } = await params;

  const course = await getCourseBySlug(slug);

  if (!course) return null;

  return (
    <>
      <CourseHero
        title={course.title[locale]}
        descr={course.description[locale]}
      />
      <CourseContent course={course} lang={locale} />
    </>
  );
};

export default CoursePage;
