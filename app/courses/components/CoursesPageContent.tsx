"use client"

import { cn } from "@/lib/utils";
import React, { Suspense, useEffect, useState } from "react";
import { CoursesList } from "./CourseList";
import { Api } from "@/services/api-client";
import { Course, Module } from "@prisma/client";

interface CoursesPageContentProps {
  classname?: string;
}

export const CoursesPageContent = ({ classname }: CoursesPageContentProps) => {
  const [courses, setCourses] = useState<(Course & { modules: Module[] })[]>([]);

  useEffect(() => {
    Api.courses.getAll().then((data) => setCourses(data))
  }, [])

  return (
    <main
      className={cn(
        classname,
        "px-8 sm:px-20 bg-gradient-to-b  from-slate-50 to-white"
      )}
    >
      <section className="py-20 flex flex-col gap-5 ">
        <h1 className="text-3xl font-bold tracking-tight">Available Courses</h1>
        <p className="text-gray-500 md:text-lg">
          Browse our collection of interactive frontend development courses
        </p>
        <Suspense fallback={<div>Loading...</div>}>
          {courses && <CoursesList courses={courses} />}
        </Suspense>

      </section>
    </main>
  );
};
