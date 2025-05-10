"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CodeEditorProps {
  code: string;
  language?: string;
  readOnly?: boolean;
}

export default function CodeEditor({
  code,
  language = "javascript",
  readOnly = false,
}: CodeEditorProps) {
  const [value, setValue] = useState(code);

  return (
    <div className="relative">
      <div className="flex items-center justify-between bg-slate-800 text-white px-4 py-2 text-xs">
        <span>{language}</span>
        {!readOnly && (
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-xs text-white hover:text-white hover:bg-slate-700"
            >
              Format
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-xs text-white hover:text-white hover:bg-slate-700"
            >
              Reset
            </Button>
          </div>
        )}
      </div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full min-h-[200px] p-4 font-mono text-sm bg-slate-900 text-slate-50 outline-none resize-y"
        readOnly={readOnly}
      />
    </div>
  );
}
