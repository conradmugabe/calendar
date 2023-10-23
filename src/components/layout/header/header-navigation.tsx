"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { useCalendarNavigation } from "@/hooks/use-calendar-navigation";
import { CalendarSettings } from "@/calendar/services";

type Props = {
  settings: CalendarSettings;
};

export function HeaderNavigation({ settings }: Props) {
  const { moveToNext, moveToPrev } = useCalendarNavigation({
    defaultView: settings.view,
  });

  return (
    <>
      <button
        className="grid h-9 w-9 place-content-center rounded-full transition duration-300 hover:bg-gray-100"
        onClick={() => moveToPrev()}
      >
        <ChevronLeft className="stroke-gray-700" />
      </button>
      <button
        className="grid h-9 w-9 place-content-center rounded-full transition duration-300 hover:bg-gray-100"
        onClick={() => {
          moveToNext();
        }}
      >
        <ChevronRight className="stroke-gray-700" />
      </button>
    </>
  );
}
