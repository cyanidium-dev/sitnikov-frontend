"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { CourseItem } from "@/lib/sanity/types/queryTypes";

const CATEGORIES = [
  {
    value: "free-courses",
    label: {
      uk: "Безкоштовні курси",
      ru: "Бесплатные курсы",
    },
  },
  {
    value: "webinars",
    label: {
      uk: "Окремі вебінари",
      ru: "Отдельные вебинары",
    },
  },
  {
    value: "special-courses",
    label: {
      uk: "Спеціальні курси",
      ru: "Специальные курсы",
    },
  },
  {
    value: "consulting",
    label: {
      uk: "Колективний консалтинг",
      ru: "Колективний консалтинг",
    },
  },
];

const EducationContent = () => {
  const [currentCourseCategory, setCurrentCourseCategory] = useState();
  console.log(
    `🚀 ~ EducationContent ~ currentCourseCategory:`,
    currentCourseCategory
  );
  const [loading, setLoading] = useState(true);
  const params = useParams();
  console.log(`🚀 ~ EducationContent ~ params:`, params);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch("/api/courses");
        const data: CourseItem[] = await res.json();
        console.log(`🚀 ~ fetchCourses ~ data:`, data);
        // setCourseCategory(data);
      } catch (error) {
        console.error("Ошибка загрузки курсов:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  if (loading) return <div>Загрузка...</div>;

  return (
    <section>
      <div className="container max-w-[1280px]"></div>
    </section>
  );
};

export default EducationContent;
