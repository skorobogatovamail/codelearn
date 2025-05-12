"use client"

import { Header } from "@/app/components/Header";
// import { Footer } from "@/app/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LecturePageContent } from "./components/LecturePageContent";
import { use, useEffect, useState } from "react";
import { CodeExample, CodingChallenge, Lecture, QuizQuestion } from "@prisma/client";
import { Api } from "@/services/api-client";
import { CheckCircle, CodeIcon, FileText, PlayCircle } from "lucide-react";

interface Params {
  params: Promise<{
    courseId: string;
    moduleId: string;
    lectureId: string;
  }>;
}

export default function LecturePage({ params }: Params) {
  const { courseId, moduleId, lectureId } = use(params);
  console.log(courseId, moduleId, lectureId)


  const [lecture, setLecture] = useState<Lecture & { codeExamples: CodeExample[] } & { quizQuestions: QuizQuestion[] } & { codingChallenges: CodingChallenge[] } | null>(null)

  useEffect(() => {
    Api.lectures.get(moduleId, lectureId).then((data) => setLecture(data))
  }, [lectureId])
  // Mock data for a specific lecture
  //   const lecture = {
  //     id: Number.parseInt(params.lectureId),
  //     moduleId: Number.parseInt(params.moduleId),
  //     courseId: Number.parseInt(params.courseId),
  //     title: "Variables and Data Types",
  //     content: `
  //       <h2>JavaScript Variables and Data Types</h2>
  //       <p>In JavaScript, you can declare variables using <code>var</code>, <code>let</code>, or <code>const</code>.</p>
  //       <ul>
  //         <li><code>var</code>: Function-scoped variable (older way)</li>
  //         <li><code>let</code>: Block-scoped variable that can be reassigned</li>
  //         <li><code>const</code>: Block-scoped variable that cannot be reassigned</li>
  //       </ul>
  //       <h3>Primitive Data Types</h3>
  //       <ul>
  //         <li><strong>String</strong>: Text values like "Hello World"</li>
  //         <li><strong>Number</strong>: Numeric values like 42 or 3.14</li>
  //         <li><strong>Boolean</strong>: true or false</li>
  //         <li><strong>undefined</strong>: Variable declared but not assigned a value</li>
  //         <li><strong>null</strong>: Intentional absence of any object value</li>
  //         <li><strong>Symbol</strong>: Unique and immutable primitive value</li>
  //         <li><strong>BigInt</strong>: Integers of arbitrary length</li>
  //       </ul>
  //     `,
  //     codeExamples: [
  //       {
  //         id: 1,
  //         title: "Variable Declaration",
  //         code: `// Using let (recommended for variables that will change)
  // let age = 25;
  // age = 26; // This is allowed

  // // Using const (recommended for variables that won't change)
  // const PI = 3.14159;
  // // PI = 3; // This would cause an error

  // // Different data types
  // const name = "John"; // String
  // const isActive = true; // Boolean
  // const score = 85.5; // Number
  // const nothing = null; // Null
  // let undefinedVar; // Undefined

  // console.log(typeof name); // "string"
  // console.log(typeof isActive); // "boolean"
  // console.log(typeof score); // "number"
  // console.log(typeof nothing); // "object" (this is a known quirk in JavaScript)
  // console.log(typeof undefinedVar); // "undefined"`,
  //         output: `"string"
  // "boolean"
  // "number"
  // "object"
  // "undefined"`,
  //       },
  //       {
  //         id: 2,
  //         title: "Working with Strings",
  //         code: `// String concatenation
  // const firstName = "John";
  // const lastName = "Doe";
  // const fullName = firstName + " " + lastName;
  // console.log(fullName);

  // // Template literals (modern way)
  // const greeting = \`Hello, \${firstName} \${lastName}!\`;
  // console.log(greeting);

  // // String methods
  // console.log(greeting.length); // Length of string
  // console.log(greeting.toUpperCase()); // Convert to uppercase
  // console.log(greeting.split(",")); // Split into array`,
  //         output: `"John Doe"
  // "Hello, John Doe!"
  // 16
  // "HELLO, JOHN DOE!"
  // ["Hello", " John Doe!"]`,
  //       },
  //     ],
  //     quiz: {
  //       questions: [
  //         {
  //           id: 1,
  //           text: "Which of the following is NOT a primitive data type in JavaScript?",
  //           options: [
  //             { id: "a", text: "String" },
  //             { id: "b", text: "Number" },
  //             { id: "c", text: "Array" },
  //             { id: "d", text: "Boolean" },
  //           ],
  //           correctAnswer: "c",
  //           explanation:
  //             "Array is not a primitive data type. It's an object that can store multiple values.",
  //         },
  //         {
  //           id: 2,
  //           text: "What will be the output of: console.log(typeof null);",
  //           options: [
  //             { id: "a", text: "null" },
  //             { id: "b", text: "undefined" },
  //             { id: "c", text: "object" },
  //             { id: "d", text: "string" },
  //           ],
  //           correctAnswer: "c",
  //           explanation:
  //             "In JavaScript, typeof null returns 'object', which is considered a bug in the language.",
  //         },
  //       ],
  //     },
  //     codingChallenge: {
  //       id: 1,
  //       title: "Data Type Conversion",
  //       description:
  //         "Complete the function that converts between different data types as specified.",
  //       initialCode: `function convertTypes(value) {
  //   // 1. If value is a number, convert it to a string
  //   // 2. If value is a string, convert it to a number (or NaN if not possible)
  //   // 3. If value is a boolean, return the opposite boolean
  //   // 4. For any other type, return "Unsupported type"

  //   // Your code here
  // }

  // // Test cases
  // console.log(convertTypes(42));
  // console.log(convertTypes("123"));
  // console.log(convertTypes(true));
  // console.log(convertTypes(null));`,
  //       solution: `function convertTypes(value) {
  //   // 1. If value is a number, convert it to a string
  //   if (typeof value === "number") {
  //     return String(value);
  //   }
  //   // 2. If value is a string, convert it to a number (or NaN if not possible)
  //   else if (typeof value === "string") {
  //     return Number(value);
  //   }
  //   // 3. If value is a boolean, return the opposite boolean
  //   else if (typeof value === "boolean") {
  //     return !value;
  //   }
  //   // 4. For any other type, return "Unsupported type"
  //   else {
  //     return "Unsupported type";
  //   }
  // }

  // // Test cases
  // console.log(convertTypes(42));
  // console.log(convertTypes("123"));
  // console.log(convertTypes(true));
  // console.log(convertTypes(null));`,
  //       expectedOutput: `"42"
  // 123
  // false
  // "Unsupported type"`,
  //     },
  //     next: {
  //       id: 3,
  //       title: "Operators and Expressions",
  //     },
  //     prev: {
  //       id: 1,
  //       title: "Introduction to JavaScript",
  //     },
  //   };
  useEffect(() => {
    console.log('lecture', lecture)
  }, [lectureId])


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex flex-col md:flex-row">
        {lecture && <aside className="w-full md:w-64 lg:w-80 border-r bg-slate-50 p-4 overflow-auto">
          <div className="sticky top-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">Module Content</h2>
              <Button variant="ghost" size="sm">
                <CheckCircle className="h-4 w-4 mr-1" /> Mark Complete
              </Button>
            </div>
            <div className="space-y-1">
              <Link
                href={`/courses/${courseId}/modules/${moduleId}/lectures/1`}
                className={`flex items-center gap-2 p-2 rounded-md text-sm ${lecture.id === 1
                  ? "bg-slate-200 font-medium"
                  : "hover:bg-slate-100"
                  }`}
              >
                <PlayCircle className="h-4 w-4" />
                <span>Introduction to JavaScript</span>
              </Link>
              <Link
                href={`/courses/${courseId}/modules/${moduleId}/lectures/2`}
                className={`flex items-center gap-2 p-2 rounded-md text-sm ${lecture.id === 2
                  ? "bg-slate-200 font-medium"
                  : "hover:bg-slate-100"
                  }`}
              >
                <FileText className="h-4 w-4" />
                <span>Variables and Data Types</span>
              </Link>
              <Link
                href={`/courses/${courseId}/modules/${moduleId}/lectures/3`}
                className={`flex items-center gap-2 p-2 rounded-md text-sm ${lecture.id === 3
                  ? "bg-slate-200 font-medium"
                  : "hover:bg-slate-100"
                  }`}
              >
                <FileText className="h-4 w-4" />
                <span>Operators and Expressions</span>
              </Link>
              <Link
                href={`/courses/${courseId}/modules/${moduleId}/lectures/4`}
                className={`flex items-center gap-2 p-2 rounded-md text-sm ${lecture.id === 4
                  ? "bg-slate-200 font-medium"
                  : "hover:bg-slate-100"
                  }`}
              >
                <CodeIcon className="h-4 w-4" />
                <span>Control Flow</span>
              </Link>
            </div>
          </div>
        </aside>}
        {lecture && <LecturePageContent lecture={lecture} courseId={courseId} moduleId={moduleId} lectureId={lectureId} />}
      </div>

      {/* <Footer /> */}
    </div>
  );
}
