"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCalendarNavigation } from "@/hooks/use-calendar-navigation";

export function HeaderNavigation() {
  const { moveToNext, moveToPrev } = useCalendarNavigation();

  return (
    <>
      <button
        className="h-9 w-9 rounded-full transition duration-300 grid place-content-center hover:bg-gray-100"
        onClick={() => moveToPrev()}
      >
        <ChevronLeft className="stroke-gray-700" />
      </button>
      <button
        className="h-9 w-9 rounded-full transition duration-300 grid place-content-center hover:bg-gray-100"
        onClick={() => moveToNext()}
      >
        <ChevronRight className="stroke-gray-700" />
      </button>
    </>
  );
}
