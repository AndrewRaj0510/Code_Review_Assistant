"use client";

export default function ReviewPanel({ review }) {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-md shadow-md mt-4 whitespace-pre-wrap">
      {review || "No review yet."}
    </div>
  );
}