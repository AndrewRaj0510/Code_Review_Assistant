"use client";

import { useState } from "react";
import { getReview } from "../services/api";
import { FiCopy } from "react-icons/fi";

export default function ReviewPanel({ code }) {
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  function removeThinkTags(text) {
    return text.replace(/<think>[\s\S]*?<\/think>/gi, "");
  }

  const handleReview = async () => {
    if (!code.trim()) return alert("Please enter or upload code first!");

    setLoading(true);

    try {
      const result = await getReview(code);
      setReview(removeThinkTags(result.review));
    } catch (error) {
      console.error(error);
      setReview("Error: Failed to get review from backend.");
    }

    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(review);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="bg-gray-800 dark:bg-gray-200 p-5 rounded-lg shadow-md min-h-[400px] w-full max-w-3xl relative">

        {/* === Review Button === */}
        <div className="w-full flex justify-center mt-2">
          <button
            onClick={handleReview}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Reviewing..." : "Review Code"}
          </button>
        </div>

        {/* === COPY BUTTON (STICKY TOP-RIGHT) === */}
        {review && (
          <button
            onClick={copyToClipboard}
            className="absolute top-3 right-3 bg-black/30 dark:bg-white/50 backdrop-blur-md p-2 rounded-lg hover:scale-110 transition flex items-center"
          >
            <FiCopy className="text-white dark:text-black" size={18} />
            {copied && (
              <span className="ml-2 text-xs text-white dark:text-black">
                Copied!
              </span>
            )}
          </button>
        )}

        {/* === REVIEW TEXT === */}
        {review && (
          <div className="mt-6 p-4 whitespace-pre-wrap text-white dark:text-black overflow-y-auto max-h-[500px]">
            {review}
          </div>
        )}
      </div>
    </div>
  );
}