import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  CheckCircle,
  Clock,
  Code,
  FileText,
  type LucideIcon,
  PlayCircle,
} from "lucide-react";
import { Course } from "../page";

interface Props {
  course: Course;
}

export default function CoursePageContent({ course }: Props) {
  // Mock data for a specific course

  const getIcon = (type: string = "text"): LucideIcon => {
    switch (type) {
      case "video":
        return PlayCircle;
      case "interactive":
        return Code;
      case "text":
      default:
        return FileText;
    }
  };

  return (
    <main className="px-8 sm:px-20 bg-gradient-to-b  from-slate-50 to-white">
      <div className="bg-slate-50 border-b">
        <div className="container py-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium px-2.5 py-0.5 rounded-full bg-slate-200">
                  {course.level}
                </span>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {course.duration}
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight">
                {course.title}
              </h1>
              <p className="text-gray-500 md:text-lg">
                {course.longDescription}
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" className="gap-2">
                  <PlayCircle className="h-4 w-4" /> Continue Learning
                </Button>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Overall Progress:</span> 58%
                </div>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <div className="aspect-video overflow-hidden rounded-xl border bg-white shadow-lg">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-8">
        <Tabs defaultValue="modules">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="modules">Modules</TabsTrigger>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          <TabsContent value="modules" className="space-y-6">
            {course.modules.map((module) => (
              <Card key={module.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                    <div className="text-sm text-gray-500">
                      {module.lectures.length} lectures
                    </div>
                  </div>
                  <CardDescription>{module.description}</CardDescription>
                  <div className="pt-2">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{module.progress}%</span>
                    </div>
                    <Progress value={module.progress} className="h-2" />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y border-t">
                    {module.lectures.map((lecture) => {
                      const Icon = getIcon(lecture.type);
                      return (
                        <Link
                          key={lecture.id}
                          href={`/courses/${course.id}/modules/${module.id}/lectures/${lecture.id}`}
                          className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`rounded-full p-1.5 ${
                                lecture.completed
                                  ? "bg-green-100 text-green-600"
                                  : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {lecture.completed ? (
                                <CheckCircle className="h-4 w-4" />
                              ) : (
                                <Icon className="h-4 w-4" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium">{lecture.title}</div>
                              <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                                <Clock className="h-3 w-3" /> {lecture.duration}
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            {lecture.completed ? "Review" : "Start"}
                          </Button>
                        </Link>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Course Overview</CardTitle>
                <CardDescription>
                  What you will learn in this course
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Course Description
                  </h3>
                  <p className="text-gray-500">{course.longDescription}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Learning Objectives
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Understand JavaScript syntax and core concepts
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Work with functions, objects, and arrays effectively
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Manipulate the DOM to create dynamic web pages
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Handle events and user interactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Build real-world projects using JavaScript</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Prerequisites</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Basic understanding of HTML and CSS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Familiarity with web browsers and developer tools
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="resources">
            <Card>
              <CardHeader>
                <CardTitle>Course Resources</CardTitle>
                <CardDescription>
                  Additional materials to support your learning
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Downloadable Resources
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 p-2 rounded-md border hover:bg-slate-50 transition-colors">
                      <FileText className="h-5 w-5 text-slate-500" />
                      <span className="flex-1">JavaScript Cheat Sheet.pdf</span>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-md border hover:bg-slate-50 transition-colors">
                      <FileText className="h-5 w-5 text-slate-500" />
                      <span className="flex-1">Course Slides.pdf</span>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-md border hover:bg-slate-50 transition-colors">
                      <Code className="h-5 w-5 text-slate-500" />
                      <span className="flex-1">Code Examples.zip</span>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    External Resources
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 p-2 rounded-md border hover:bg-slate-50 transition-colors">
                      <BookOpen className="h-5 w-5 text-slate-500" />
                      <span className="flex-1">
                        MDN JavaScript Documentation
                      </span>
                      <Button variant="outline" size="sm">
                        Visit
                      </Button>
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-md border hover:bg-slate-50 transition-colors">
                      <BookOpen className="h-5 w-5 text-slate-500" />
                      <span className="flex-1">JavaScript.info</span>
                      <Button variant="outline" size="sm">
                        Visit
                      </Button>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
