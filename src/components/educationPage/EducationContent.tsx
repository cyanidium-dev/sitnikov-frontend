"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { CourseItem } from "@/lib/sanity/types/queryTypes";
import { Locale } from "@/types/locale";

import EducationFilter from "./EducationFilter";

const EducationContent = () => {
  const router = useRouter();
  const params = useParams();

  const lang = params.locale as Locale;
  const selectedCategory = params.category as string | undefined;

  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentCourseCategory, setCurrentCourseCategory] = useState<
    string | null
  >(selectedCategory || null);

  useEffect(() => {
    async function fetchCourses() {
      if (!currentCourseCategory) return;

      setLoading(true);
      try {
        const res = await fetch(`/api/courses/${currentCourseCategory}`);
        const data: CourseItem[] = await res.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, [currentCourseCategory]);

  const handleCategoryChange = (categoryValue: string) => {
    setCurrentCourseCategory(categoryValue);
    router.push(`/${lang}/education/${categoryValue}`);
  };

  return (
    <section className="pb-[120px] pt-[50px] xl:pb-[200px] xl:pt-[100px]">
      <div className="container max-w-[1280px]">
        <EducationFilter
          onClick={handleCategoryChange}
          currentCourseCategory={currentCourseCategory}
          lang={lang}
        />

        {loading ? (
          <p>Загрузка...</p>
        ) : (
          <ul>
            {courses.map(course => (
              <li key={course.title.uk}>{course.title[lang]}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default EducationContent;
