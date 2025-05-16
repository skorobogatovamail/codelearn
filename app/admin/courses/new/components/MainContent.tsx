"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ActionButtons from "./ActionButtons";
import PageHeading from "./PageHeading";
import PageTabs from "./PageTabs";

interface Props {
  classname?: string;
}

export const MainContent = ({ classname }: Props) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [courseData, setCourseData] = useState({
    title: "",
    shortDescription: "",
    description: "",
    level: "",
    category: "",
    imageUrl: "/placeholder.svg?height=400&width=600",
    content: []
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCourseData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setCourseData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (status: "draft" | "published") => {
    try {
      setIsSubmitting(true);
      setError(null);

      // Validate required fields
      if (!courseData.title) {
        return;
      }

      // const result = await createCourse({
      //     ...courseData,
      //     status,
      //     authorId: "", // This will be set by the server action
      // })
      const result = { course: { id: 1 } };

      if (result.success) {
        // Redirect to the course edit page
        router.push(`/admin/courses/${result.course.id}`);
      } else {
        setError(result.error || "Failed to create course");
      }
    } catch (error) {
      console.error("Error creating course:", error);
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";

      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main className="flex-1 p-6">
      <div className="flex flex-col gap-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-between">
          <PageHeading />
          <ActionButtons
            isSubmitting={isSubmitting}
            onSaveDraft={() => handleSubmit("draft")}
            onPublish={() => handleSubmit("published")}
          />
        </div>
        <PageTabs
          courseData={courseData}
          onInputChange={handleInputChange}
          onSelectChange={handleSelectChange}
          isSubmitting={isSubmitting}
          onSaveDraft={handleSubmit}
        />
      </div>
    </main>
  );
};
