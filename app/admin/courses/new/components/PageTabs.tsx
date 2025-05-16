import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Save } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {};

export default function PageTabs({}: Props) {
  return (
    <Tabs defaultValue="details">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="details">Course Details</TabsTrigger>
        <TabsTrigger value="content">Course Content</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>

      <TabsContent value="details" className="space-y-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>
              Provide the basic information about your course that students will
              see
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <label htmlFor="title" className="text-sm font-medium">
                Course Title <span className="text-red-500">*</span>
              </label>
              <Input
                id="title"
                name="title"
                value={courseData.title}
                onChange={handleInputChange}
                placeholder="e.g. JavaScript Fundamentals"
              />
              <p className="text-xs text-gray-500">
                Choose a clear, specific title that describes what students will
                learn
              </p>
            </div>

            <div className="grid gap-2">
              <label htmlFor="shortDescription" className="text-sm font-medium">
                Short Description <span className="text-red-500">*</span>
              </label>
              <Input
                id="shortDescription"
                name="shortDescription"
                value={courseData.shortDescription}
                onChange={handleInputChange}
                placeholder="e.g. Learn the core concepts of JavaScript"
              />
              <p className="text-xs text-gray-500">
                A brief summary that appears in course listings (max 150
                characters)
              </p>
            </div>

            <div className="grid gap-2">
              <label htmlFor="description" className="text-sm font-medium">
                Full Description <span className="text-red-500">*</span>
              </label>
              <Textarea
                id="description"
                name="description"
                value={courseData.description}
                onChange={handleInputChange}
                placeholder="Provide a detailed description of what your course covers..."
                className="min-h-[150px]"
              />
              <p className="text-xs text-gray-500">
                Explain what students will learn, prerequisites, and why they
                should take this course
              </p>
            </div>

            <div className="grid gap-2">
              <label htmlFor="level" className="text-sm font-medium">
                Difficulty Level <span className="text-red-500">*</span>
              </label>
              <Select
                value={courseData.level}
                onValueChange={(value) => handleSelectChange("level", value)}
              >
                <SelectTrigger id="level">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <label htmlFor="category" className="text-sm font-medium">
                Category <span className="text-red-500">*</span>
              </label>
              <Select
                value={courseData.category}
                onValueChange={(value) => handleSelectChange("category", value)}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="html-css">HTML & CSS</SelectItem>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="node">Node.js</SelectItem>
                  <SelectItem value="fullstack">Full Stack</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Course Image</CardTitle>
            <CardDescription>
              Upload an image that represents your course
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                <div className="mb-4 bg-slate-100 rounded-lg p-4">
                  <img
                    src={
                      courseData.imageUrl ||
                      "/placeholder.svg?height=200&width=400"
                    }
                    alt="Course image placeholder"
                    className="mx-auto"
                    width={400}
                    height={200}
                  />
                </div>
                <p className="text-sm text-gray-500 mb-2">
                  Drag and drop an image, or click to browse (16:9 ratio
                  recommended)
                </p>
                <Button variant="outline" size="sm">
                  Upload Image
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                Recommended size: 1280x720 pixels (16:9 ratio). Max file size:
                5MB.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button
            className="gap-1"
            onClick={() => handleSubmit("draft")}
            disabled={isSubmitting}
          >
            <Save className="h-4 w-4" />
            {isSubmitting ? "Saving..." : "Save Details"}
          </Button>
        </div>
      </TabsContent>

      <TabsContent value="content" className="space-y-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Course Structure</CardTitle>
            <CardDescription>
              Organize your course into modules and lectures
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center p-8 border-2 border-dashed rounded-lg">
              <h3 className="text-lg font-medium mb-2">
                Save Course Details First
              </h3>
              <p className="text-gray-500 mb-4">
                Please save the course details before adding modules and
                lectures.
              </p>
              <Button
                onClick={() => handleSubmit("draft")}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save Course Details"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="settings" className="space-y-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Course Settings</CardTitle>
            <CardDescription>
              Configure additional settings for your course
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <label htmlFor="status" className="text-sm font-medium">
                Course Status
              </label>
              <Select
                defaultValue="draft"
                onValueChange={(value) => handleSelectChange("status", value)}
              >
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <label htmlFor="visibility" className="text-sm font-medium">
                Visibility
              </label>
              <Select defaultValue="public">
                <SelectTrigger id="visibility">
                  <SelectValue placeholder="Select visibility" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="private">
                    Private (Invitation Only)
                  </SelectItem>
                  <SelectItem value="unlisted">
                    Unlisted (Hidden from Browse)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <label htmlFor="price" className="text-sm font-medium">
                Price
              </label>
              <Select defaultValue="free">
                <SelectTrigger id="price">
                  <SelectValue placeholder="Select price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <label htmlFor="enrollment" className="text-sm font-medium">
                Enrollment
              </label>
              <Select defaultValue="open">
                <SelectTrigger id="enrollment">
                  <SelectValue placeholder="Select enrollment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Open (Anyone can enroll)</SelectItem>
                  <SelectItem value="approval">Requires Approval</SelectItem>
                  <SelectItem value="closed">
                    Closed (No new enrollments)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <label htmlFor="certificate" className="text-sm font-medium">
                Completion Certificate
              </label>
              <Select defaultValue="yes">
                <SelectTrigger id="certificate">
                  <SelectValue placeholder="Select certificate option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">
                    Yes (Issue certificate on completion)
                  </SelectItem>
                  <SelectItem value="no">No (No certificate)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              className="gap-1"
              onClick={() => handleSubmit("draft")}
              disabled={isSubmitting}
            >
              <Save className="h-4 w-4" />
              {isSubmitting ? "Saving..." : "Save Settings"}
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
