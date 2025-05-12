"use client"

import { useState } from "react"

interface LectureEditorProps {
    initialContent: string
}

export default function LectureEditor({ initialContent }: LectureEditorProps) {
    const [content, setContent] = useState(initialContent)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full min-h-[400px] p-4 font-mono text-sm outline-none resize-y"
                placeholder="Enter your lecture content here..."
            />
            <div className="p-4 prose max-w-none min-h-[400px] overflow-auto" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}
