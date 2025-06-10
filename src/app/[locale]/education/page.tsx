"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const EducationPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/education/free-courses");
  }, [router]);

  return null;
};

export default EducationPage;
