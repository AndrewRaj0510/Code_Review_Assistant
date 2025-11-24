"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeViewer({ onCodeChange }) {
  const [mode, setMode] = useState(""); 
  const [code, setCode] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      setCode(event.target.result);
      onCodeChange(event.target.result);
    };
    reader.readAsText(file);
  };

  const handleCodeChange = (value) => {
    setCode(value);
    onCodeChange(value);
  };

  return (
    <div className="flex flex-col items-center w-full">

      {/* Buttons */}
      <div className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 bg-black text-white dark:bg-white dark:text-black mb-6">
        <button
          onClick={() => setMode("enter")}
          className="px-4 py-2 rounded-full text-black bg-white dark:text-white dark:bg-black hover:scale-105 hover:shadow-lg"
        >
          Enter Code
        </button>

        <span className="text-white dark:text-black font-semibold">or</span>

        <label className="px-4 py-2 rounded-full text-black bg-white dark:text-white dark:bg-black hover:scale-105 hover:shadow-lg">
          Upload File
          <input type="file" className="hidden" onChange={handleFileUpload} />
        </label>
      </div>

      {/* Code Input Box with Line Numbers */}
      {mode === "enter" ? (
        <div className="w-full max-w-3xl h-64 mb-4 flex border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900">

          {/* Line Numbers */}
          <div className="py-4 px-3 text-right select-none bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-mono text-sm overflow-hidden">
            {code.split("\n").map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Textarea */}
          <textarea
            className="flex-1 p-4 font-mono text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 focus:outline-none resize-none overflow-auto"
            placeholder="Paste your code here..."
            value={code}
            onChange={(e) => handleCodeChange(e.target.value)}
          />
        </div>
      ) : fileName ? (
        <div className="w-full max-w-3xl p-4 mb-4 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-center">
          Uploaded File: <span className="font-mono">{fileName}</span>
        </div>
      ) : null}

      {/* Code Preview */}
      {code && (
        <div className="w-full max-w-3xl mb-4 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
          <SyntaxHighlighter
            language="javascript"
            style={
              typeof window !== "undefined" &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
                ? oneDark
                : oneLight
            }
            showLineNumbers
            wrapLines
            lineNumberStyle={{ color: "#9ca3af", paddingRight: "10px" }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}