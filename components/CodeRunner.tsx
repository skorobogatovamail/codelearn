"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface CodeRunnerProps {
  code: string;
  language?: string;
  defaultOutput?: string;
}

export default function CodeRunner({
  code,
  language = "javascript",
  defaultOutput = "",
}: CodeRunnerProps) {
  const [value, setValue] = useState(code);
  const [output, setOutput] = useState(defaultOutput);
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);

    // This is a simplified simulation of code execution
    // In a real implementation, you would use a sandboxed environment
    setTimeout(() => {
      try {
        // Create a mock console.log that captures output
        const logs: string[] = [];
        const mockConsole = {
          log: (...args: unknown[]) => {
            logs.push(
              args
                .map((arg) =>
                  typeof arg === "object" ? JSON.stringify(arg) : String(arg)
                )
                .join(" ")
            );
          },
        };

        // Replace console.log in the code with our mock
        const codeToRun = value.replace(/console\.log\(/g, "mockConsole.log(");

        // Execute the code in a new Function context
        // Note: This is not secure for production use
        new Function("mockConsole", codeToRun)(mockConsole);

        setOutput(logs.join("\n"));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setOutput(`Error: ${error.message}`);
      }
      setIsRunning(false);
    }, 500);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
      <div className="relative">
        <div className="flex items-center justify-between bg-slate-800 text-white px-4 py-2 text-xs">
          <span>{language}</span>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-xs text-white hover:text-white hover:bg-slate-700"
              onClick={() => setValue(code)}
            >
              Reset
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-xs text-white hover:text-white hover:bg-slate-700 gap-1"
              onClick={runCode}
              disabled={isRunning}
            >
              <Play className="h-3 w-3" /> Run
            </Button>
          </div>
        </div>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full min-h-[200px] p-4 font-mono text-sm bg-slate-900 text-slate-50 outline-none resize-y"
        />
      </div>
      <div className="flex flex-col">
        <div className="bg-slate-800 text-white px-4 py-2 text-xs">Output</div>
        <div className="flex-1 p-4 font-mono text-sm bg-slate-100 whitespace-pre-wrap overflow-auto min-h-[200px]">
          {isRunning
            ? "Running..."
            : output || "// Code output will appear here"}
        </div>
      </div>
    </div>
  );
}
