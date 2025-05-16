import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
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
import { ImageUploader } from './ImageUploader';
import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';


interface Props {
    courseData: {
        title: string,
        shortDescription: string,
        description: string,
        level: string,
        category: string,
        imageUrl: string,
    },
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onSelectChange: (name: string, value: string) => void,
    isSubmitting: boolean,
    onSaveDraft: (status: 'draft' | 'published') => void,
}

export const CourseDetails = ({ courseData, onInputChange, onSelectChange, isSubmitting, onSaveDraft }: Props) => {

    return (
        <>
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
                            onChange={onInputChange}
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
                            onChange={onInputChange}
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
                            onChange={onInputChange}
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
                            onValueChange={(value) => onSelectChange("level", value)}
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
                            onValueChange={(value) => onSelectChange("category", value)}
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

            <ImageUploader />
            <div className="flex justify-end">
                <Button
                    className="gap-1"
                    onClick={() => onSaveDraft("draft")}
                    disabled={isSubmitting}
                >
                    <Save className="h-4 w-4" />
                    {isSubmitting ? "Saving..." : "Save Details"}
                </Button>
            </div>
        </>
    );
};
