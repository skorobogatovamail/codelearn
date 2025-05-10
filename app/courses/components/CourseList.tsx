import React from "react";
import { Card, CourseCard } from "./CourseCard";
import { cn } from "@/lib/utils";

interface CoursesListProps {
  classname?: string;
  courses: Card[];
}

export const CoursesList = ({ classname, courses }: CoursesListProps) => {
  return (
    <div className={cn(classname, "flex gap-4 ")}>
      {courses.map((el) => (
        <CourseCard key={el.id} card={el} />
      ))}
    </div>
  );
};
