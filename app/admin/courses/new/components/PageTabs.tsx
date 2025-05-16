import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseDetails } from "./CourseDetails";
import { CourseStructure } from "./CourseStructure";
import { CourseSettings } from "./CourseSettings";
import { ICourseContentBlock } from "./ContentBlock";

export interface ICourseData {
  title: string,
  shortDescription: string,
  description: string,
  level: string,
  category: string,
  imageUrl: string,
  blocks: ICourseContentBlock[]
}

type Props = {
  courseData: ICourseData,
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  onSelectChange: (name: string, value: string) => void,
  isSubmitting: boolean,
  onSaveDraft: (status: 'draft' | 'published') => void,
};

export default function PageTabs({ courseData, onInputChange, onSelectChange, isSubmitting, onSaveDraft }: Props) {
  return (
    <Tabs defaultValue="details">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="details">Course Details</TabsTrigger>
        <TabsTrigger value="content">Course Content</TabsTrigger>
        <TabsTrigger value="settings">Course Settings</TabsTrigger>
      </TabsList>

      <TabsContent value="details" className="space-y-6 mt-6">
        <CourseDetails
          courseData={courseData}
          onInputChange={onInputChange}
          onSelectChange={onSelectChange}
          isSubmitting={isSubmitting}
          onSaveDraft={onSaveDraft}
        />
      </TabsContent>

      <TabsContent value="content" className="space-y-6 mt-6">
        <CourseStructure
          courseData={courseData}
          isSubmitting={isSubmitting}
          onSaveDraft={onSaveDraft} />
      </TabsContent>

      <TabsContent value="settings" className="space-y-6 mt-6">
        <CourseSettings />
      </TabsContent>
    </Tabs>
  );
}
