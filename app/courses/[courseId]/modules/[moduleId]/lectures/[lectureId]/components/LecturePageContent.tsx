import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  CodeIcon,
  FileText,
  PlayCircle,
} from "lucide-react";
import CodeEditor from "@/components/CodeEditor";
import CodeRunner from "@/components/CodeRunner";
import { ModuleLecture } from "@/app/courses/[courseId]/page";

interface LecturePageContentProps {
  lecture: ModuleLecture;
  params: {
    courseId: string;
    moduleId: string;
    lectureId: string;
  };
}

export const LecturePageContent = ({
  lecture,
  params,
}: LecturePageContentProps) => {
  return (
    <div className="flex-1 flex flex-col md:flex-row">
      <aside className="w-full md:w-64 lg:w-80 border-r bg-slate-50 p-4 overflow-auto">
        <div className="sticky top-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Module Content</h2>
            <Button variant="ghost" size="sm">
              <CheckCircle className="h-4 w-4 mr-1" /> Mark Complete
            </Button>
          </div>
          <div className="space-y-1">
            <Link
              href={`/courses/${params.courseId}/modules/${params.moduleId}/lectures/1`}
              className={`flex items-center gap-2 p-2 rounded-md text-sm ${
                lecture.id === 1
                  ? "bg-slate-200 font-medium"
                  : "hover:bg-slate-100"
              }`}
            >
              <PlayCircle className="h-4 w-4" />
              <span>Introduction to JavaScript</span>
            </Link>
            <Link
              href={`/courses/${params.courseId}/modules/${params.moduleId}/lectures/2`}
              className={`flex items-center gap-2 p-2 rounded-md text-sm ${
                lecture.id === 2
                  ? "bg-slate-200 font-medium"
                  : "hover:bg-slate-100"
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>Variables and Data Types</span>
            </Link>
            <Link
              href={`/courses/${params.courseId}/modules/${params.moduleId}/lectures/3`}
              className={`flex items-center gap-2 p-2 rounded-md text-sm ${
                lecture.id === 3
                  ? "bg-slate-200 font-medium"
                  : "hover:bg-slate-100"
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>Operators and Expressions</span>
            </Link>
            <Link
              href={`/courses/${params.courseId}/modules/${params.moduleId}/lectures/4`}
              className={`flex items-center gap-2 p-2 rounded-md text-sm ${
                lecture.id === 4
                  ? "bg-slate-200 font-medium"
                  : "hover:bg-slate-100"
              }`}
            >
              <CodeIcon className="h-4 w-4" />
              <span>Control Flow</span>
            </Link>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="container max-w-4xl py-6 px-4">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold">{lecture.title}</h1>
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2">
                  {lecture.prev && (
                    <Link
                      href={`/courses/${params.courseId}/modules/${params.moduleId}/lectures/${lecture.prev.id}`}
                    >
                      <Button variant="outline" size="sm" className="gap-1">
                        <ArrowLeft className="h-4 w-4" /> {lecture.prev.title}
                      </Button>
                    </Link>
                  )}
                </div>
                <div className="flex gap-2">
                  {lecture.next && (
                    <Link
                      href={`/courses/${params.courseId}/modules/${params.moduleId}/lectures/${lecture.next.id}`}
                    >
                      <Button variant="outline" size="sm" className="gap-1">
                        {lecture.next.title} <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Lecture Content</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: lecture.content }}
                />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h2 className="text-xl font-bold">Interactive Code Examples</h2>
              {lecture.codeExamples.map((example) => (
                <Card key={example.id} className="overflow-hidden">
                  <CardHeader className="bg-slate-50 border-b">
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CodeRunner
                      code={example.code}
                      language="javascript"
                      defaultOutput={example.output}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold">Knowledge Check</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Quiz</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {lecture.quiz.questions.map((question) => (
                    <div key={question.id} className="space-y-3">
                      <h3 className="font-medium">{question.text}</h3>
                      <div className="space-y-2">
                        {question.options.map((option) => (
                          <div
                            key={option.id}
                            className="flex items-center gap-2"
                          >
                            <input
                              type="radio"
                              id={`q${question.id}_${option.id}`}
                              name={`question_${question.id}`}
                              className="h-4 w-4"
                            />
                            <label htmlFor={`q${question.id}_${option.id}`}>
                              {option.text}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Button>Check Answers</Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold">Coding Challenge</h2>
              <Card>
                <CardHeader className="bg-slate-50 border-b">
                  <CardTitle>{lecture.codingChallenge.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="mb-4">{lecture.codingChallenge.description}</p>
                  <Tabs defaultValue="code">
                    <TabsList className="mb-4">
                      <TabsTrigger value="code">Your Code</TabsTrigger>
                      <TabsTrigger value="tests">Tests</TabsTrigger>
                      <TabsTrigger value="hint">Hint</TabsTrigger>
                    </TabsList>
                    <TabsContent value="code" className="mt-0">
                      <CodeEditor
                        code={lecture.codingChallenge.initialCode}
                        language="javascript"
                      />
                      <div className="flex justify-between mt-4">
                        <Button variant="outline">Reset Code</Button>
                        <div className="space-x-2">
                          <Button variant="outline">Run Tests</Button>
                          <Button>Submit Solution</Button>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="tests" className="mt-0">
                      <div className="bg-slate-50 p-4 rounded-md font-mono text-sm">
                        <p>// Test cases</p>
                        <p>
                          console.log(convertTypes(42)); // Should return "42"
                        </p>
                        <p>
                          console.log(convertTypes("123")); // Should return 123
                        </p>
                        <p>
                          console.log(convertTypes(true)); // Should return
                          false
                        </p>
                        <p>
                          console.log(convertTypes(null)); // Should return
                          "Unsupported type"
                        </p>
                      </div>
                    </TabsContent>
                    <TabsContent value="hint" className="mt-0">
                      <div className="bg-slate-50 p-4 rounded-md">
                        <p>
                          Hint: Use the <code>typeof</code> operator to
                          determine the type of the input value.
                        </p>
                        <p>
                          For string to number conversion, you can use the{" "}
                          <code>Number()</code> function.
                        </p>
                        <p>
                          For number to string conversion, you can use the{" "}
                          <code>String()</code> function.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex gap-2">
                {lecture.prev && (
                  <Link
                    href={`/courses/${params.courseId}/modules/${params.moduleId}/lectures/${lecture.prev.id}`}
                  >
                    <Button variant="outline" className="gap-1">
                      <ArrowLeft className="h-4 w-4" /> Previous Lecture
                    </Button>
                  </Link>
                )}
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <CheckCircle className="h-4 w-4 mr-1" /> Mark Complete
                </Button>
                {lecture.next && (
                  <Link
                    href={`/courses/${params.courseId}/modules/${params.moduleId}/lectures/${lecture.next.id}`}
                  >
                    <Button className="gap-1">
                      Next Lecture <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
