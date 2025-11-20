"use client";

export default function Background({ children }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 transition-all duration-300">
      {children}
    </div>
  );
}