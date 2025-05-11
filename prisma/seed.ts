import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create users
  const alice = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      name: "Alice",
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      email: "bob@prisma.io",
      name: "Bob",
    },
  });

  // Create courses with modules and lectures
  const javascriptCourse = await prisma.course.upsert({
    where: { title: "JavaScript Essentials" },
    update: {},
    create: {
      title: "JavaScript Essentials",
      description: "Master the core concepts of JavaScript programming",
      duration: "20 hours",
      level: "Intermediate",
      image: "/placeholder.svg?height=400&width=800",
      modules: {
        create: [
          {
            title: "JavaScript Basics",
            description: "Introduction to JavaScript syntax and fundamentals",
            progress: 100,
            lectures: {
              create: [
                {
                  title: "Introduction to JavaScript",
                  duration: "15 min",
                  completed: true,
                  type: "video",
                },
                {
                  title: "Variables and Data Types",
                  duration: "25 min",
                  completed: true,
                  type: "text",
                },
                {
                  title: "Operators and Expressions",
                  duration: "20 min",
                  completed: true,
                  type: "text",
                },
                {
                  title: "Control Flow",
                  duration: "30 min",
                  completed: true,
                  type: "interactive",
                },
              ],
            },
          },
          {
            title: "Functions and Objects",
            description: "Working with functions, objects, and arrays",
            progress: 75,
            lectures: {
              create: [
                {
                  title: "Functions in JavaScript",
                  duration: "30 min",
                  completed: true,
                  type: "text",
                },
                {
                  title: "Objects and Properties",
                  duration: "25 min",
                  completed: true,
                  type: "interactive",
                },
                {
                  title: "Arrays and Methods",
                  duration: "35 min",
                  completed: true,
                  type: "text",
                },
                {
                  title: "Advanced Functions",
                  duration: "40 min",
                  completed: false,
                  type: "interactive",
                },
              ],
            },
          },
          {
            title: "DOM Manipulation",
            description: "Interacting with the Document Object Model",
            progress: 0,
            lectures: {
              create: [
                {
                  title: "Introduction to the DOM",
                  duration: "20 min",
                  completed: false,
                  type: "video",
                },
                {
                  title: "Selecting DOM Elements",
                  duration: "25 min",
                  completed: false,
                  type: "interactive",
                },
                {
                  title: "Modifying DOM Elements",
                  duration: "30 min",
                  completed: false,
                  type: "text",
                },
                {
                  title: "Event Handling",
                  duration: "35 min",
                  completed: false,
                  type: "interactive",
                },
              ],
            },
          },
        ],
      },
    },
  });

  const htmlCssCourse = await prisma.course.upsert({
    where: { title: "HTML & CSS Fundamentals" },
    update: {},
    create: {
      title: "HTML & CSS Fundamentals",
      description:
        "Learn the building blocks of web development with HTML and CSS",
      duration: "12 hours",
      level: "Beginner",
      image: "/placeholder.svg?height=400&width=600",
      modules: {
        create: [
          {
            title: "HTML Basics",
            description: "Introduction to HTML structure and elements",
            progress: 100,
            lectures: {
              create: [
                {
                  title: "HTML Document Structure",
                  duration: "20 min",
                  completed: true,
                  type: "video",
                },
                {
                  title: "Common HTML Elements",
                  duration: "30 min",
                  completed: true,
                  type: "interactive",
                },
              ],
            },
          },
          {
            title: "CSS Fundamentals",
            description: "Styling web pages with CSS",
            progress: 50,
            lectures: {
              create: [
                {
                  title: "CSS Selectors and Properties",
                  duration: "25 min",
                  completed: true,
                  type: "text",
                },
                {
                  title: "Box Model and Layout",
                  duration: "35 min",
                  completed: false,
                  type: "interactive",
                },
              ],
            },
          },
        ],
      },
    },
  });

  const reactCourse = await prisma.course.upsert({
    where: { title: "React Development" },
    update: {},
    create: {
      title: "React Development",
      description: "Build modern web applications with React",
      duration: "25 hours",
      level: "Advanced",
      image: "/placeholder.svg?height=400&width=600",
      modules: {
        create: [
          {
            title: "React Basics",
            description: "Introduction to React components and JSX",
            progress: 30,
            lectures: {
              create: [
                {
                  title: "What is React?",
                  duration: "20 min",
                  completed: true,
                  type: "video",
                },
                {
                  title: "Components and Props",
                  duration: "30 min",
                  completed: false,
                  type: "text",
                },
              ],
            },
          },
          {
            title: "State Management",
            description: "Managing application state in React",
            progress: 0,
            lectures: {
              create: [
                {
                  title: "useState Hook",
                  duration: "25 min",
                  completed: false,
                  type: "interactive",
                },
                {
                  title: "useEffect Hook",
                  duration: "35 min",
                  completed: false,
                  type: "text",
                },
              ],
            },
          },
        ],
      },
    },
  });

  // Обновляем лекцию "Variables and Data Types" с полным контентом
  await prisma.lecture.update({
    where: {
      title_moduleId: {
        title: "Variables and Data Types",
        moduleId: 1, // ID модуля "JavaScript Basics"
      },
    },
    data: {
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
      codeExamples: {
        create: [
          {
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
      },
      quizQuestions: {
        create: [
          {
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
      codingChallenges: {
        create: [
          {
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
  if (typeof value === "number") {
    return String(value);
  }
  else if (typeof value === "string") {
    return Number(value);
  }
  else if (typeof value === "boolean") {
    return !value;
  }
  else {
    return "Unsupported type";
  }
}`,
            expectedOutput: `"42"
123
false
"Unsupported type"`,
          },
        ],
      },
    },
  });

  console.log({
    users: { alice, bob },
    courses: { javascriptCourse, htmlCssCourse, reactCourse },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
