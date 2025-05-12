"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, Edit, Plus, Search, Trash2 } from "lucide-react"
import { getCourses, deleteCourse } from "@/lib/actions/course-actions"
import { useToast } from "@/hooks/use-toast"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface Course {
    id: number
    title: string
    description: string
    shortDescription: string
    status: string
    level: string
    category: string
    authorId: string
    createdAt: string
    updatedAt: string
    moduleCount: number
    lectureCount: number
}

export default function AdminCoursesPage() {
    const { toast } = useToast()
    const [courses, setCourses] = useState<Course[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [courseToDelete, setCourseToDelete] = useState<number | null>(null)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setLoading(true)
                const result = await getCourses()

                if (result.success) {
                    setCourses(result.courses)
                } else {
                    toast({
                        title: "Error",
                        description: result.error || "Failed to fetch courses",
                        variant: "destructive",
                    })
                }
            } catch (error) {
                console.error("Error fetching courses:", error)
                toast({
                    title: "Error",
                    description: "An unexpected error occurred",
                    variant: "destructive",
                })
            } finally {
                setLoading(false)
            }
        }

        fetchCourses()
    }, [toast])

    const handleDeleteCourse = async () => {
        if (!courseToDelete) return

        try {
            setIsDeleting(true)
            const result = await deleteCourse(courseToDelete)

            if (result.success) {
                setCourses(courses.filter((course) => course.id !== courseToDelete))
                toast({
                    title: "Success",
                    description: "Course deleted successfully",
                })
            } else {
                toast({
                    title: "Error",
                    description: result.error || "Failed to delete course",
                    variant: "destructive",
                })
            }
        } catch (error) {
            console.error("Error deleting course:", error)
            toast({
                title: "Error",
                description: "An unexpected error occurred",
                variant: "destructive",
            })
        } finally {
            setIsDeleting(false)
            setCourseToDelete(null)
        }
    }

    const filteredCourses = courses.filter(
        (course) =>
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString()
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
                                <h1 className="text-2xl font-bold">Courses</h1>
                                <p className="text-gray-500">Manage your courses and their content</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <div className="relative">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                                    <Input
                                        type="search"
                                        placeholder="Search courses..."
                                        className="pl-8 w-full sm:w-[250px]"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <Link href="/admin/courses/new">
                                    <Button className="gap-1">
                                        <Plus className="h-4 w-4" /> New Course
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {loading ? (
                            <div className="grid gap-6">
                                {[1, 2, 3].map((i) => (
                                    <Card key={i} className="animate-pulse">
                                        <CardHeader className="pb-3">
                                            <div className="h-6 bg-slate-200 rounded w-1/3 mb-2"></div>
                                            <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                                        </CardHeader>
                                        <CardContent className="pb-3">
                                            <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
                                        </CardContent>
                                        <CardFooter className="flex justify-between">
                                            <div className="h-8 bg-slate-200 rounded w-24"></div>
                                            <div className="h-8 bg-slate-200 rounded w-32"></div>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        ) : filteredCourses.length === 0 ? (
                            <div className="text-center py-12 border-2 border-dashed rounded-lg">
                                <h3 className="text-lg font-medium mb-2">No courses found</h3>
                                <p className="text-gray-500 mb-4">
                                    {searchTerm ? "Try a different search term" : "Get started by creating your first course"}
                                </p>
                                {!searchTerm && (
                                    <Link href="/admin/courses/new">
                                        <Button className="gap-1">
                                            <Plus className="h-4 w-4" /> Create Course
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        ) : (
                            <div className="grid gap-6">
                                {filteredCourses.map((course) => (
                                    <Card key={course.id}>
                                        <CardHeader className="pb-3">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <CardTitle>{course.title}</CardTitle>
                                                    <CardDescription>{course.shortDescription || course.description}</CardDescription>
                                                </div>
                                                <div
                                                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${course.status === "published"
                                                            ? "bg-green-100 text-green-800"
                                                            : course.status === "archived"
                                                                ? "bg-gray-100 text-gray-800"
                                                                : "bg-amber-100 text-amber-800"
                                                        }`}
                                                >
                                                    {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="pb-3">
                                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                                                <div>
                                                    <span className="font-medium">Modules:</span> {course.moduleCount || 0}
                                                </div>
                                                <div>
                                                    <span className="font-medium">Lectures:</span> {course.lectureCount || 0}
                                                </div>
                                                <div>
                                                    <span className="font-medium">Last Updated:</span> {formatDate(course.updatedAt)}
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex justify-between">
                                            <div className="flex gap-2">
                                                <Link href={`/admin/courses/${course.id}`}>
                                                    <Button variant="outline" size="sm" className="gap-1">
                                                        <Edit className="h-4 w-4" /> Edit
                                                    </Button>
                                                </Link>
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="gap-1 text-red-600 hover:text-red-600 hover:bg-red-50"
                                                            onClick={() => setCourseToDelete(course.id)}
                                                        >
                                                            <Trash2 className="h-4 w-4" /> Delete
                                                        </Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                This will permanently delete the course "{course.title}" and all its content. This
                                                                action cannot be undone.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel onClick={() => setCourseToDelete(null)}>Cancel</AlertDialogCancel>
                                                            <AlertDialogAction
                                                                onClick={handleDeleteCourse}
                                                                className="bg-red-600 hover:bg-red-700"
                                                                disabled={isDeleting}
                                                            >
                                                                {isDeleting ? "Deleting..." : "Delete"}
                                                            </AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </div>
                                            <div className="flex gap-2">
                                                <Link href={`/admin/courses/${course.id}`}>
                                                    <Button size="sm">Manage Content</Button>
                                                </Link>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}
