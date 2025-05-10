import { Header } from "@/app/components/Header";
// import { Footer } from "@/app/components/Footer";
import { LecturePageContent } from "./components/LecturePageContent";

export default function LecturePage({
  params,
}: {
  params: {
    courseId: string;
    moduleId: string;
    lectureId: string;
  };
}) {
  // Mock data for a specific lecture
  const lecture = {
    id: Number.parseInt(params.lectureId),
    moduleId: Number.parseInt(params.moduleId),
    courseId: Number.parseInt(params.courseId),
    title: "Variables and Data Types",
    content: `
      <h2>JavaScript Variables and Data Types</h2>
      <p>In JavaScript, you can declare variables using <code>var</code>, <code>let</code>, or <code>const</code>.</p>
      <ul>
        <li><code>var</code>: Function-scoped variable (older way)</li>
        <li><code>let</code>: Block-scoped variable that can be reassigned</li>
        <li><code>const</code>: Block-scoped variable that cannot be reassigned</li>
      </ul>
      <h3>Primitive Data Types</h3>
      <ul>
        <li><strong>String</strong>: Text values like "Hello World"</li>
        <li><strong>Number</strong>: Numeric values like 42 or 3.14</li>
        <li><strong>Boolean</strong>: true or false</li>
        <li><strong>undefined</strong>: Variable declared but not assigned a value</li>
        <li><strong>null</strong>: Intentional absence of any object value</li>
        <li><strong>Symbol</strong>: Unique and immutable primitive value</li>
        <li><strong>BigInt</strong>: Integers of arbitrary length</li>
      </ul>
    `,
    codeExamples: [
      {
        id: 1,
        title: "Variable Declaration",
        code: `// Using let (recommended for variables that will change)
let age = 25;
age = 26; // This is allowed

// Using const (recommended for variables that won't change)
const PI = 3.14159;
// PI = 3; // This would cause an error

// Different data types
const name = "John"; // String
const isActive = true; // Boolean
const score = 85.5; // Number
const nothing = null; // Null
let undefinedVar; // Undefined

console.log(typeof name); // "string"
console.log(typeof isActive); // "boolean"
console.log(typeof score); // "number"
console.log(typeof nothing); // "object" (this is a known quirk in JavaScript)
console.log(typeof undefinedVar); // "undefined"`,
        output: `"string"
"boolean"
"number"
"object"
"undefined"`,
      },
      {
        id: 2,
        title: "Working with Strings",
        code: `// String concatenation
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log(fullName);

// Template literals (modern way)
const greeting = \`Hello, \${firstName} \${lastName}!\`;
console.log(greeting);

// String methods
console.log(greeting.length); // Length of string
console.log(greeting.toUpperCase()); // Convert to uppercase
console.log(greeting.split(",")); // Split into array`,
        output: `"John Doe"
"Hello, John Doe!"
16
"HELLO, JOHN DOE!"
["Hello", " John Doe!"]`,
      },
    ],
    quiz: {
      questions: [
        {
          id: 1,
          text: "Which of the following is NOT a primitive data type in JavaScript?",
          options: [
            { id: "a", text: "String" },
            { id: "b", text: "Number" },
            { id: "c", text: "Array" },
            { id: "d", text: "Boolean" },
          ],
          correctAnswer: "c",
          explanation:
            "Array is not a primitive data type. It's an object that can store multiple values.",
        },
        {
          id: 2,
          text: "What will be the output of: console.log(typeof null);",
          options: [
            { id: "a", text: "null" },
            { id: "b", text: "undefined" },
            { id: "c", text: "object" },
            { id: "d", text: "string" },
          ],
          correctAnswer: "c",
          explanation:
            "In JavaScript, typeof null returns 'object', which is considered a bug in the language.",
        },
      ],
    },
    codingChallenge: {
      id: 1,
      title: "Data Type Conversion",
      description:
        "Complete the function that converts between different data types as specified.",
      initialCode: `function convertTypes(value) {
  // 1. If value is a number, convert it to a string
  // 2. If value is a string, convert it to a number (or NaN if not possible)
  // 3. If value is a boolean, return the opposite boolean
  // 4. For any other type, return "Unsupported type"
  
  // Your code here
}

// Test cases
console.log(convertTypes(42));
console.log(convertTypes("123"));
console.log(convertTypes(true));
console.log(convertTypes(null));`,
      solution: `function convertTypes(value) {
  // 1. If value is a number, convert it to a string
  if (typeof value === "number") {
    return String(value);
  }
  // 2. If value is a string, convert it to a number (or NaN if not possible)
  else if (typeof value === "string") {
    return Number(value);
  }
  // 3. If value is a boolean, return the opposite boolean
  else if (typeof value === "boolean") {
    return !value;
  }
  // 4. For any other type, return "Unsupported type"
  else {
    return "Unsupported type";
  }
}

// Test cases
console.log(convertTypes(42));
console.log(convertTypes("123"));
console.log(convertTypes(true));
console.log(convertTypes(null));`,
      expectedOutput: `"42"
123
false
"Unsupported type"`,
    },
    next: {
      id: 3,
      title: "Operators and Expressions",
    },
    prev: {
      id: 1,
      title: "Introduction to JavaScript",
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <LecturePageContent lecture={lecture} params={params} />
      {/* <Footer /> */}
    </div>
  );
}
