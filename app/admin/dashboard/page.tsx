import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ChevronRight, GraduationCap, LineChart, Plus, Users } from "lucide-react"

export default function AdminDashboardPage() {
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
                        <Link
                            href="/admin/dashboard"
                            className="flex items-center gap-2 p-2 rounded-md text-sm bg-slate-200 font-medium"
                        >
                            Dashboard
                        </Link>
                        <Link href="/admin/courses" className="flex items-center gap-2 p-2 rounded-md text-sm hover:bg-slate-100">
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
                                <h1 className="text-2xl font-bold">Dashboard</h1>
                                <p className="text-gray-500">Welcome back, Teacher</p>
                            </div>
                            <div className="flex gap-2">
                                <Link href="/admin/courses/new">
                                    <Button className="gap-1">
                                        <Plus className="h-4 w-4" /> Create Course
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-medium text-gray-500">Total Courses</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between">
                                        <div className="text-2xl font-bold">3</div>
                                        <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                                            <BookOpen className="h-4 w-4" />
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">2 published, 1 draft</div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-medium text-gray-500">Total Students</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between">
                                        <div className="text-2xl font-bold">128</div>
                                        <div className="rounded-full bg-green-100 p-2 text-green-600">
                                            <Users className="h-4 w-4" />
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">+12 this week</div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-medium text-gray-500">Completion Rate</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between">
                                        <div className="text-2xl font-bold">68%</div>
                                        <div className="rounded-full bg-amber-100 p-2 text-amber-600">
                                            <GraduationCap className="h-4 w-4" />
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">+5% from last month</div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-medium text-gray-500">Total Revenue</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between">
                                        <div className="text-2xl font-bold">$1,280</div>
                                        <div className="rounded-full bg-purple-100 p-2 text-purple-600">
                                            <LineChart className="h-4 w-4" />
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">+$320 this month</div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Recent Courses</CardTitle>
                                    <CardDescription>Your recently created or updated courses</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-3 rounded-md border hover:bg-slate-50">
                                            <div>
                                                <div className="font-medium">JavaScript Essentials</div>
                                                <div className="text-xs text-gray-500">Last updated: 2 days ago</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">Published</div>
                                                <Link href="/admin/courses/2">
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <ChevronRight className="h-4 w-4" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between p-3 rounded-md border hover:bg-slate-50">
                                            <div>
                                                <div className="font-medium">React Development</div>
                                                <div className="text-xs text-gray-500">Last updated: 1 week ago</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800">Draft</div>
                                                <Link href="/admin/courses/3">
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <ChevronRight className="h-4 w-4" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between p-3 rounded-md border hover:bg-slate-50">
                                            <div>
                                                <div className="font-medium">HTML & CSS Fundamentals</div>
                                                <div className="text-xs text-gray-500">Last updated: 2 weeks ago</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">Published</div>
                                                <Link href="/admin/courses/1">
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <ChevronRight className="h-4 w-4" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Student Activity</CardTitle>
                                    <CardDescription>Recent student enrollments and completions</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-3 rounded-md border hover:bg-slate-50">
                                            <div className="flex items-center gap-3">
                                                <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                                                    <Users className="h-4 w-4" />
                                                </div>
                                                <div>
                                                    <div className="font-medium">New Enrollment</div>
                                                    <div className="text-xs text-gray-500">JavaScript Essentials</div>
                                                </div>
                                            </div>
                                            <div className="text-xs text-gray-500">2 hours ago</div>
                                        </div>
                                        <div className="flex items-center justify-between p-3 rounded-md border hover:bg-slate-50">
                                            <div className="flex items-center gap-3">
                                                <div className="rounded-full bg-green-100 p-2 text-green-600">
                                                    <GraduationCap className="h-4 w-4" />
                                                </div>
                                                <div>
                                                    <div className="font-medium">Course Completed</div>
                                                    <div className="text-xs text-gray-500">HTML & CSS Fundamentals</div>
                                                </div>
                                            </div>
                                            <div className="text-xs text-gray-500">Yesterday</div>
                                        </div>
                                        <div className="flex items-center justify-between p-3 rounded-md border hover:bg-slate-50">
                                            <div className="flex items-center gap-3">
                                                <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                                                    <Users className="h-4 w-4" />
                                                </div>
                                                <div>
                                                    <div className="font-medium">New Enrollment</div>
                                                    <div className="text-xs text-gray-500">HTML & CSS Fundamentals</div>
                                                </div>
                                            </div>
                                            <div className="text-xs text-gray-500">2 days ago</div>
                                        </div>
                                        <div className="flex items-center justify-between p-3 rounded-md border hover:bg-slate-50">
                                            <div className="flex items-center gap-3">
                                                <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                                                    <Users className="h-4 w-4" />
                                                </div>
                                                <div>
                                                    <div className="font-medium">New Enrollment</div>
                                                    <div className="text-xs text-gray-500">JavaScript Essentials</div>
                                                </div>
                                            </div>
                                            <div className="text-xs text-gray-500">3 days ago</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
