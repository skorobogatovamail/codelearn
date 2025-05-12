import React from "react";
import { CourseCard } from "./CourseCard";
import { cn } from "@/lib/utils";
import { Course, Module } from "@prisma/client";

interface CoursesListProps {
  classname?: string;
  courses: (Course & { modules: Module[] })[];
}

export const CoursesList = ({ classname, courses }: CoursesListProps) => {
  return (
    <div className={cn(classname, "flex gap-4 justify-space-between flex-wrap")}>
      {courses.map((el) => (
        <CourseCard key={el.id} card={el} />
      ))}
    </div>
  );
};
