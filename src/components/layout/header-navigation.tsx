"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

function handleMoveToPrev() {}

function handleMoveToNext() {}

export function HeaderNavigation() {
  return (
    <>
      <button
        className="h-9 w-9 rounded-full transition duration-300 grid place-content-center hover:bg-gray-100"
        onClick={() => handleMoveToPrev()}
      >
        <ChevronLeft className="stroke-gray-700" />
      </button>
      <button
        className="h-9 w-9 rounded-full transition duration-300 grid place-content-center hover:bg-gray-100"
        onClick={() => handleMoveToNext()}
      >
        <ChevronRight className="stroke-gray-700" />
      </button>
    </>
  );
}
