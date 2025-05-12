import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code, FileText, ImageIcon, Link2, PlayCircle, Plus, Save } from "lucide-react"
import LectureEditor from "@/components/LectureEditor"
import CodeEditor from "@/components/CodeEditor"

export default function AdminLecturePage({
    params,
}: {
    params: {
        courseId: string
        moduleId: string
        lectureId: string
    }
}) {
    // Mock data for a specific lecture
    const lecture = {
        id: Number.parseInt(params.lectureId),
        moduleId: Number.parseInt(params.moduleId),
        courseId: Number.parseInt(params.courseId),
        title: "Variables and Data Types",
        type: "text",
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
                    explanation: "Array is not a primitive data type. It's an object that can store multiple values.",
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
                    explanation: "In JavaScript, typeof null returns 'object', which is considered a bug in the language.",
                },
            ],
        },
        codingChallenge: {
            id: 1,
            title: "Data Type Conversion",
            description: "Complete the function that converts between different data types as specified.",
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
    }

    return (
        <div className="flex flex-col min-h-screen">
            <header className="border-b">
                <div className="container flex items-center justify-between py-4">
                    <Link href="/admin" className="flex items-center gap-2 text-xl font-bold">
                        <BookOpen className="h-6 w-6" />
                        <span>CodeLearn Admin</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link href="/admin/profile">
                            <Button variant="ghost" className="rounded-full size-10 p-0">
                                <span className="sr-only">Profile</span>
                                <img
                                    src="/placeholder.svg?height=40&width=40"
                                    alt="Admin Profile"
                                    className="rounded-full"
                                    width={40}
                                    height={40}
                                />
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>
            <div className="flex flex-col md:flex-row flex-1">
                <aside className="w-full md:w-64 border-r bg-slate-50 p-4">
                    <nav className="space-y-2">
                        <Link href="/admin/dashboard" className="flex items-center gap-2 p-2 rounded-md text-sm hover:bg-slate-100">
                            Dashboard
                        </Link>
                        <Link
                            href="/admin/courses"
                            className="flex items-center gap-2 p-2 rounded-md text-sm bg-slate-200 font-medium"
                        >
                            Courses
                        </Link>
                        <Link href="/admin/users" className="flex items-center gap-2 p-2 rounded-md text-sm hover:bg-slate-100">
                            Users
                        </Link>
                        <Link href="/admin/settings" className="flex items-center gap-2 p-2 rounded-md text-sm hover:bg-slate-100">
                            Settings
                        </Link>
                    </nav>
                </aside>
                <main className="flex-1 p-6">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Link href="/admin/courses">
                                        <span className="hover:underline">Courses</span>
                                    </Link>
                                    <span>/</span>
                                    <Link href={`/admin/courses/${params.courseId}`}>
                                        <span className="hover:underline">JavaScript Essentials</span>
                                    </Link>
                                    <span>/</span>
                                    <span>Variables and Data Types</span>
                                </div>
                                <h1 className="text-2xl font-bold mt-2">Edit Lecture</h1>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Button variant="outline">Preview</Button>
                                <Button className="gap-1">
                                    <Save className="h-4 w-4" /> Save Changes
                                </Button>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Lecture Details</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="grid gap-2">
                                            <label htmlFor="title" className="text-sm font-medium">
                                                Lecture Title
                                            </label>
                                            <input
                                                id="title"
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                defaultValue={lecture.title}
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <label htmlFor="type" className="text-sm font-medium">
                                                Lecture Type
                                            </label>
                                            <select
                                                id="type"
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                defaultValue={lecture.type}
                                            >
                                                <option value="text">Text Lecture</option>
                                                <option value="video">Video Lecture</option>
                                                <option value="interactive">Interactive Lecture</option>
                                            </select>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Tabs defaultValue="content">
                                <TabsList className="grid w-full grid-cols-4">
                                    <TabsTrigger value="content">Content</TabsTrigger>
                                    <TabsTrigger value="code-examples">Code Examples</TabsTrigger>
                                    <TabsTrigger value="quiz">Quiz</TabsTrigger>
                                    <TabsTrigger value="coding-challenge">Coding Challenge</TabsTrigger>
                                </TabsList>
                                <TabsContent value="content" className="mt-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Lecture Content</CardTitle>
                                            <CardDescription>Create and edit the main content of your lecture</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="border rounded-md overflow-hidden">
                                                <div className="bg-slate-50 border-b p-2 flex items-center gap-2">
                                                    <Button variant="ghost" size="sm" className="h-8">
                                                        <FileText className="h-4 w-4 mr-1" /> Text
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="h-8">
                                                        <ImageIcon className="h-4 w-4 mr-1" /> Image
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="h-8">
                                                        <Code className="h-4 w-4 mr-1" /> Code
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="h-8">
                                                        <Link2 className="h-4 w-4 mr-1" /> Link
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="h-8">
                                                        <PlayCircle className="h-4 w-4 mr-1" /> Video
                                                    </Button>
                                                </div>
                                                <LectureEditor initialContent={lecture.content} />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                                <TabsContent value="code-examples" className="mt-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Code Examples</CardTitle>
                                            <CardDescription>Add interactive code examples to your lecture</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-6">
                                                {lecture.codeExamples.map((example, index) => (
                                                    <div key={example.id} className="border rounded-md overflow-hidden">
                                                        <div className="bg-slate-50 border-b p-3 flex justify-between items-center">
                                                            <input
                                                                type="text"
                                                                className="flex h-9 w-full max-w-sm rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                                defaultValue={example.title}
                                                                placeholder="Example Title"
                                                            />
                                                            <Button variant="ghost" size="sm" className="text-red-600">
                                                                Remove
                                                            </Button>
                                                        </div>
                                                        <CodeEditor code={example.code} language="javascript" />
                                                    </div>
                                                ))}
                                                <Button className="gap-1">
                                                    <Plus className="h-4 w-4" /> Add Code Example
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                                <TabsContent value="quiz" className="mt-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Quiz Questions</CardTitle>
                                            <CardDescription>Create quiz questions to test student knowledge</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-6">
                                                {lecture.quiz.questions.map((question, index) => (
                                                    <div key={question.id} className="border rounded-md p-4">
                                                        <div className="space-y-4">
                                                            <div className="flex justify-between items-start">
                                                                <div className="grid gap-2 flex-1">
                                                                    <label className="text-sm font-medium">Question {index + 1}</label>
                                                                    <input
                                                                        type="text"
                                                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                                        defaultValue={question.text}
                                                                    />
                                                                </div>
                                                                <Button variant="ghost" size="sm" className="text-red-600 mt-6">
                                                                    Remove
                                                                </Button>
                                                            </div>
                                                            <div className="space-y-3">
                                                                <label className="text-sm font-medium">Answer Options</label>
                                                                {question.options.map((option) => (
                                                                    <div key={option.id} className="flex items-center gap-2">
                                                                        <input
                                                                            type="radio"
                                                                            id={`q${question.id}_${option.id}`}
                                                                            name={`question_${question.id}_correct`}
                                                                            className="h-4 w-4"
                                                                            defaultChecked={option.id === question.correctAnswer}
                                                                        />
                                                                        <input
                                                                            type="text"
                                                                            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                                            defaultValue={option.text}
                                                                        />
                                                                        <Button variant="ghost" size="sm" className="text-red-600">
                                                                            Remove
                                                                        </Button>
                                                                    </div>
                                                                ))}
                                                                <Button variant="outline" size="sm" className="gap-1">
                                                                    <Plus className="h-3 w-3" /> Add Option
                                                                </Button>
                                                            </div>
                                                            <div className="grid gap-2">
                                                                <label className="text-sm font-medium">Explanation (shown after answering)</label>
                                                                <textarea
                                                                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                                    defaultValue={question.explanation}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                <Button className="gap-1">
                                                    <Plus className="h-4 w-4" /> Add Question
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                                <TabsContent value="coding-challenge" className="mt-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Coding Challenge</CardTitle>
                                            <CardDescription>Create a coding challenge for students to solve</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                <div className="grid gap-2">
                                                    <label className="text-sm font-medium">Challenge Title</label>
                                                    <input
                                                        type="text"
                                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                        defaultValue={lecture.codingChallenge.title}
                                                    />
                                                </div>
                                                <div className="grid gap-2">
                                                    <label className="text-sm font-medium">Challenge Description</label>
                                                    <textarea
                                                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                        defaultValue={lecture.codingChallenge.description}
                                                    />
                                                </div>
                                                <div className="grid gap-2">
                                                    <label className="text-sm font-medium">Initial Code (shown to students)</label>
                                                    <div className="border rounded-md overflow-hidden">
                                                        <CodeEditor code={lecture.codingChallenge.initialCode} language="javascript" />
                                                    </div>
                                                </div>
                                                <div className="grid gap-2">
                                                    <label className="text-sm font-medium">Solution Code (not shown to students)</label>
                                                    <div className="border rounded-md overflow-hidden">
                                                        <CodeEditor code={lecture.codingChallenge.solution} language="javascript" />
                                                    </div>
                                                </div>
                                                <div className="grid gap-2">
                                                    <label className="text-sm font-medium">Expected Output</label>
                                                    <textarea
                                                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono"
                                                        defaultValue={lecture.codingChallenge.expectedOutput}
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
