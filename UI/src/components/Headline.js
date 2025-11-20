"use client";

export default function Headline() {
  return (
    <div className="pt-10 w-full flex flex-col items-center bg:white pb-10">
      {/* Main Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-black dark:text-white tracking-tight text-center drop-shadow-sm">
        Code Review Assistant
      </h1>

      {/* Decorative underline */}
      <div className="mt-4 w-80 h-[4px] rounded-full bg-black dark:bg-white opacity-80"></div>

      {/* Sub heading / tagline */}
      <p className="mt-5 text-lg text-gray-500 dark:text-gray-300 text-center max-w-xl">
        Automatically analyze, debug, improve, and enhance your code with AI powered insights.
      </p>
    </div>
  );
}