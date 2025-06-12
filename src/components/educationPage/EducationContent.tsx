"use client";

import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useParams, useRouter } from "next/navigation";

import { usePaginationPage } from "@/hooks/usePaginationPage";

import { CourseItem } from "@/lib/sanity/types/queryTypes";
import { COURSES_PER_PAGE } from "@/constants/pagination";
import { Locale } from "@/types/locale";

import Pagination from "../shared/paginator/Paginator";
import EducationFilter from "./EducationFilter";
import EducationList from "./EducationList";

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

  const totalPages = Math.ceil(courses.length / COURSES_PER_PAGE);
  const { currentPage, changePage } = usePaginationPage(totalPages);
  const startIdx = (currentPage - 1) * COURSES_PER_PAGE;
  const paginatedData = courses.slice(startIdx, startIdx + COURSES_PER_PAGE);

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
          <BeatLoader color="#5188FF" className="mx-auto mt-[50px] w-[100px]" />
        ) : (
          <EducationList courses={paginatedData} lang={lang} />
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={changePage}
        />
      </div>
    </section>
  );
};

export default EducationContent;
