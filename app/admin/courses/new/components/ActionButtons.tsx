import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  isSubmitting: boolean;
  onSaveDraft: () => void;
  onPublish: () => void;
};

export default function ActionButtons({
  isSubmitting,
  onSaveDraft,
  onPublish,
}: Props) {
  return (
    <div className="flex gap-2">
      <Button variant="outline" onClick={onSaveDraft} disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Save as Draft"}
      </Button>
      <Button onClick={onPublish} disabled={isSubmitting}>
        {isSubmitting ? "Publishing..." : "Publish Course"}
      </Button>
    </div>
  );
}
