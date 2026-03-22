'use client';

import React from "react";

export default function Loading({
  size = "md",
  text = "Loading...",
  fullScreen = false,
}) {
  const sizes = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-4",
    lg: "w-12 h-12 border-4",
    xl: "w-16 h-16 border-[6px]",
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`animate-spin rounded-full border-t-transparent border-[#04413D] ${sizes[size]}`}
      />
      {text && (
        <p className="text-sm font-medium text-[#04413D]">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-xl">
          {spinner}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full min-h-[40vh]">
      {spinner}
    </div>
  );
}