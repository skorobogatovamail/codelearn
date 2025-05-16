import React from 'react';

import { Save } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';

interface Props {
}

export const CourseSettings = ({ }: Props) => {

    return (
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
                        onValueChange={(value) => onSelectChange("status", value)}
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
                    onClick={() => onSaveDraft("draft")}
                    disabled={isSubmitting}
                >
                    <Save className="h-4 w-4" />
                    {isSubmitting ? "Saving..." : "Save Settings"}
                </Button>
            </CardFooter>
        </Card>
    );
};
