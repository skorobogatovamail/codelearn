// import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import React from "react";
import CoursePageContent from "./components/CoursePageContent";

interface Params {
  params: { courseId: string };
}

export interface ModuleLecture {
  id: number;
  title: string;
  duration?: string;
  completed?: boolean;
  type?: string;
}

export interface CourseModule {
  id: number;
  title: string;
  description: string;
  progress: number;
  lectures: ModuleLecture[];
}

export interface Course {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  modules: CourseModule[];
  duration: string;
  level: string;
  image: string;
}

const CoursePage = ({ params }: Params) => {
  const course = {
    id: Number.parseInt(params.courseId),
    title: "JavaScript Essentials",
    description: "Master the core concepts of JavaScript programming",
    longDescription:
      "This comprehensive course covers everything you need to know about JavaScript, from basic syntax to advanced concepts like closures, promises, and async/await. You'll build real-world projects and solve coding challenges to reinforce your learning.",
    modules: [
      {
        id: 1,
        title: "JavaScript Basics",
        description: "Introduction to JavaScript syntax and fundamentals",
        progress: 100,
        lectures: [
          {
            id: 1,
            title: "Introduction to JavaScript",
            duration: "15 min",
            completed: true,
            type: "video",
          },
          {
            id: 2,
            title: "Variables and Data Types",
            duration: "25 min",
            completed: true,
            type: "text",
          },
          {
            id: 3,
            title: "Operators and Expressions",
            duration: "20 min",
            completed: true,
            type: "text",
          },
          {
            id: 4,
            title: "Control Flow",
            duration: "30 min",
            completed: true,
            type: "interactive",
          },
        ],
      },
      {
        id: 2,
        title: "Functions and Objects",
        description: "Working with functions, objects, and arrays",
        progress: 75,
        lectures: [
          {
            id: 5,
            title: "Functions in JavaScript",
            duration: "30 min",
            completed: true,
            type: "text",
          },
          {
            id: 6,
            title: "Objects and Properties",
            duration: "25 min",
            completed: true,
            type: "interactive",
          },
          {
            id: 7,
            title: "Arrays and Methods",
            duration: "35 min",
            completed: true,
            type: "text",
          },
          {
            id: 8,
            title: "Advanced Functions",
            duration: "40 min",
            completed: false,
            type: "interactive",
          },
        ],
      },
      {
        id: 3,
        title: "DOM Manipulation",
        description: "Interacting with the Document Object Model",
        progress: 0,
        lectures: [
          {
            id: 9,
            title: "Introduction to the DOM",
            duration: "20 min",
            completed: false,
            type: "video",
          },
          {
            id: 10,
            title: "Selecting DOM Elements",
            duration: "25 min",
            completed: false,
            type: "interactive",
          },
          {
            id: 11,
            title: "Modifying DOM Elements",
            duration: "30 min",
            completed: false,
            type: "text",
          },
          {
            id: 12,
            title: "Event Handling",
            duration: "35 min",
            completed: false,
            type: "interactive",
          },
        ],
      },
    ],
    duration: "20 hours",
    level: "Intermediate",
    image: "/placeholder.svg?height=400&width=800",
  };

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <CoursePageContent course={course} />
      {/* <Footer /> */}
    </div>
  );
};

export default CoursePage;
