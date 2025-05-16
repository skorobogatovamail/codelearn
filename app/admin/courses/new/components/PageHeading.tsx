import { Button } from "@/components/ui/button";
import { ChevronLeft, Link } from "lucide-react";
import React from "react";

export default function PageHeading() {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <Link href="/admin/courses">
          <Button variant="ghost" size="sm" className="gap-1">
            <ChevronLeft className="h-4 w-4" /> Back to Courses
          </Button>
        </Link>
      </div>
      <h1 className="text-2xl font-bold">Create New Course</h1>
      <p className="text-gray-500">
        Fill in the details to create a new course
      </p>
    </div>
  );
}
