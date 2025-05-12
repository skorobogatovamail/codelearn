"use client"

// import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import React, { Suspense, use, useEffect, useState } from "react";
import CoursePageContent from "./components/CoursePageContent";
import { Api } from "@/services/api-client";
import { Course, Lecture, Module } from "@prisma/client";

interface Params {
  params: Promise<{ courseId: string }>;
}

const CoursePage = ({ params }: Params) => {
  const { courseId } = use(params);
  const [course, setCourse] = useState<Course & { modules: (Module & { lectures: Lecture[] }[]) } | null>(null);

  useEffect(() => {
    Api.courses.search(courseId).then((data) => setCourse(data))
  }, [courseId])

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        {course && <CoursePageContent course={course} />}
      </Suspense>

      {/* <Footer /> */}
    </div>
  );
};

export default CoursePage;
