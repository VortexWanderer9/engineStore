import React from "react";

export default function LoadingCircle() {
  return (
    <div className="flex items-center justify-center p-4" role="status">
      <div
        className="w-8 h-8 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"
      ></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

