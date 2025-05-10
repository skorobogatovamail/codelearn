import { cn } from "@/lib/utils";
import React from "react";
import { CoursesList } from "./CourseList";

interface CoursesPageContentProps {
  classname?: string;
}

export const CoursesPageContent = ({ classname }: CoursesPageContentProps) => {
  const courses = [
    {
      id: 1,
      title: "HTML & CSS Fundamentals",
      description:
        "Learn the building blocks of web development with HTML and CSS",
      modules: 5,
      lectures: 24,
      duration: "12 hours",
      level: "Beginner",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "JavaScript Essentials",
      description: "Master the core concepts of JavaScript programming",
      modules: 8,
      lectures: 36,
      duration: "20 hours",
      level: "Intermediate",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "React Development",
      description: "Build modern web applications with React",
      modules: 10,
      lectures: 42,
      duration: "25 hours",
      level: "Advanced",
      image: "/placeholder.svg?height=400&width=600",
    },
  ];
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
        <CoursesList courses={courses} />
      </section>
    </main>
  );
};
