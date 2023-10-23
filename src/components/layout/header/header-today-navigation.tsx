"use client";

import { useCalendarUrl } from "@/hooks/use-calendar-url";
import { useRouter } from "next/navigation";

export function HeaderTodayNavigation() {
  const router = useRouter();
  const { isDayView, isMonthView, isWeekView, isYearView } = useCalendarUrl();

  function handleOnClick() {
    if (isMonthView) {
      router.push("/month");
      return;
    } else if (isYearView) {
      router.push("/year");
      return;
    } else if (isDayView) {
      router.push("/day");
      return;
    } else if (isWeekView) {
      router.push("/week");
      return;
    }
  }

  return (
    <button
      onClick={handleOnClick}
      className="grid h-9 place-content-center rounded border border-gray-300 px-4 text-sm font-medium transition duration-300 hover:bg-gray-100"
    >
      Today
    </button>
  );
}
