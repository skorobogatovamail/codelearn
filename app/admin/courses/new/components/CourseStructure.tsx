import React, { useState } from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ContentBlock, ICourseContentBlock } from './ContentBlock';
import { ICourseData } from './PageTabs';

interface Props {
    courseData: ICourseData,
    isSubmitting: boolean,
    onSaveDraft: (status: 'draft' | 'published') => void,
}

export const CourseStructure = ({ courseData, onSaveDraft, isSubmitting }: Props) => {

    const [blocks, setBlocks] = useState<ICourseContentBlock[]>([])

    return (
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
                    {blocks.map(block => (
                        <ContentBlock block={block} />
                    ))}
                    <Button
                        onClick={() => onSaveDraft("draft")}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Saving..." : "Save Course Details"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
