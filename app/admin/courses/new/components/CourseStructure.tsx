import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';

interface Props {
}

export const CourseStructure = ({ }: Props) => {

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
