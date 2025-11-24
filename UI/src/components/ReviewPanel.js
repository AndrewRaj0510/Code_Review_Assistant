"use client";

import { useState } from "react";
import { getReview } from "../services/api";

export default function ReviewPanel({ code }) {
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    if (!code.trim()) return alert("Please enter or upload code first!");

    setLoading(true);

    try {
      const result = await getReview(code);
      setReview(result.review);
    } catch (error) {
      console.error(error);
      setReview("Error: Failed to get review from backend.");
    }

    setLoading(false);
  };

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="bg-gray-800 dark:bg-gray-200 p-5 rounded-lg shadow-md min-h-[400px] w-full max-w-3xl">
        <div className="w-full flex justify-center mt-6">
          <button
            onClick={handleReview}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Reviewing..." : "Review Code"}  
          </button>
        </div>
        {review && (
          <div className="mt-6 p-4 whitespace-pre-wrap text-white dark:text-black">
            {review}
          </div>
        )}
      </div>
    </div>
  );
}