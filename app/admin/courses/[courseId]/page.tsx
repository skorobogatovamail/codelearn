import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Edit, FileText, GripVertical, Plus, Save, Trash2 } from "lucide-react"

export default function AdminCoursePage({ params }: { params: { courseId: string } }) {
    // Mock data for a specific course
    const course = {
        id: Number.parseInt(params.courseId),
        title: "JavaScript Essentials",
        description: "Master the core concepts of JavaScript programming",
        modules: [
            {
                id: 1,
                title: "JavaScript Basics",
                description: "Introduction to JavaScript syntax and fundamentals",
                lectures: [
                    { id: 1, title: "Introduction to JavaScript", type: "video" },
                    { id: 2, title: "Variables and Data Types", type: "text" },
                    { id: 3, title: "Operators and Expressions", type: "text" },
                    { id: 4, title: "Control Flow", type: "interactive" },
                ],
            },
            {
                id: 2,
                title: "Functions and Objects",
                description: "Working with functions, objects, and arrays",
                lectures: [
                    { id: 5, title: "Functions in JavaScript", type: "text" },
                    { id: 6, title: "Objects and Properties", type: "interactive" },
                    { id: 7, title: "Arrays and Methods", type: "text" },
                    { id: 8, title: "Advanced Functions", type: "interactive" },
                ],
            },
            {
                id: 3,
                title: "DOM Manipulation",
                description: "Interacting with the Document Object Model",
                lectures: [
                    { id: 9, title: "Introduction to the DOM", type: "video" },
                    { id: 10, title: "Selecting DOM Elements", type: "interactive" },
                    { id: 11, title: "Modifying DOM Elements", type: "text" },
                    { id: 12, title: "Event Handling", type: "interactive" },
                ],
            },
        ],
        status: "Published",
        lastUpdated: "2023-11-20",
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
                                <div className="flex items-center gap-2">
                                    <Link href="/admin/courses">
                                        <Button variant="ghost" size="sm">
                                            Courses
                                        </Button>
                                    </Link>
                                    <span>/</span>
                                    <span className="font-medium">{course.title}</span>
                                </div>
                                <h1 className="text-2xl font-bold mt-2">{course.title}</h1>
                                <p className="text-gray-500">{course.description}</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Button variant="outline" className="gap-1">
                                    <Edit className="h-4 w-4" /> Edit Details
                                </Button>
                                <Button variant="outline" className="gap-1">
                                    <Save className="h-4 w-4" /> Save Draft
                                </Button>
                                <Button className="gap-1">Publish Course</Button>
                            </div>
                        </div>

                        <Tabs defaultValue="modules">
                            <TabsList className="grid w-full grid-cols-3 mb-6">
                                <TabsTrigger value="modules">Modules & Lectures</TabsTrigger>
                                <TabsTrigger value="settings">Course Settings</TabsTrigger>
                                <TabsTrigger value="preview">Preview</TabsTrigger>
                            </TabsList>
                            <TabsContent value="modules" className="space-y-6">
                                <div className="flex justify-end">
                                    <Button className="gap-1">
                                        <Plus className="h-4 w-4" /> Add Module
                                    </Button>
                                </div>

                                {course.modules.map((module) => (
                                    <Card key={module.id} className="relative">
                                        <div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-move opacity-50 hover:opacity-100">
                                            <GripVertical className="h-5 w-5" />
                                        </div>
                                        <CardHeader className="pl-10">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <CardTitle>{module.title}</CardTitle>
                                                    <CardDescription>{module.description}</CardDescription>
                                                </div>
                                                <div className="flex gap-2">
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600">
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="pl-10">
                                            <div className="space-y-2">
                                                {module.lectures.map((lecture) => (
                                                    <div
                                                        key={lecture.id}
                                                        className="flex items-center justify-between p-3 rounded-md border bg-white hover:bg-slate-50"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="cursor-move opacity-50 hover:opacity-100">
                                                                <GripVertical className="h-4 w-4" />
                                                            </div>
                                                            <div className="rounded-full p-1.5 bg-slate-100">
                                                                <FileText className="h-4 w-4" />
                                                            </div>
                                                            <div>
                                                                <div className="font-medium">{lecture.title}</div>
                                                                <div className="text-xs text-gray-500">
                                                                    {lecture.type === "video"
                                                                        ? "Video Lecture"
                                                                        : lecture.type === "interactive"
                                                                            ? "Interactive Lecture"
                                                                            : "Text Lecture"}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <Link href={`/admin/courses/${course.id}/modules/${module.id}/lectures/${lecture.id}`}>
                                                                <Button variant="ghost" size="sm">
                                                                    Edit
                                                                </Button>
                                                            </Link>
                                                            <Button variant="ghost" size="sm" className="text-red-600">
                                                                Delete
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ))}
                                                <Button variant="outline" className="w-full gap-1 mt-2">
                                                    <Plus className="h-4 w-4" /> Add Lecture
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </TabsContent>
                            <TabsContent value="settings">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Course Settings</CardTitle>
                                        <CardDescription>Configure your course settings and metadata</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="grid gap-2">
                                                <label htmlFor="title" className="text-sm font-medium">
                                                    Course Title
                                                </label>
                                                <input
                                                    id="title"
                                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                    defaultValue={course.title}
                                                />
                                            </div>
                                            <div className="grid gap-2">
                                                <label htmlFor="description" className="text-sm font-medium">
                                                    Course Description
                                                </label>
                                                <textarea
                                                    id="description"
                                                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                    defaultValue={course.description}
                                                />
                                            </div>
                                            <div className="grid gap-2">
                                                <label htmlFor="status" className="text-sm font-medium">
                                                    Course Status
                                                </label>
                                                <select
                                                    id="status"
                                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                    defaultValue={course.status}
                                                >
                                                    <option value="Draft">Draft</option>
                                                    <option value="Published">Published</option>
                                                    <option value="Archived">Archived</option>
                                                </select>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-end">
                                        <Button>Save Settings</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="preview">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Course Preview</CardTitle>
                                        <CardDescription>Preview how your course will appear to students</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex justify-center">
                                            <iframe
                                                src={`/courses/${course.id}?preview=true`}
                                                className="border rounded-md w-full aspect-[16/9] max-w-3xl"
                                                title="Course Preview"
                                            />
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-center">
                                        <Button variant="outline" className="gap-1">
                                            Open in New Tab
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </main>
            </div>
        </div>
    )
}
