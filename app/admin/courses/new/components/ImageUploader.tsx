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

export const ImageUploader = ({ }: Props) => {
    return (
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
    );
};
