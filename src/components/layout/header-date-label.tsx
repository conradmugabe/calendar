"use client";

import dayjs from "dayjs";

import { useCalendarUrl } from "@/hooks/use-calendar-url";

export function HeaderDateLabel() {
  const { date, isDayView, isMonthView, isYearView } = useCalendarUrl();

  if (isYearView) {
    return <span>{dayjs(date).format("YYYY")}</span>;
  }
  if (isMonthView) {
    return <span>{dayjs(date).format("MMMM YYYY")}</span>;
  }
  if (isDayView) {
    return <span>{dayjs(date).format("MMMM D, YYYY")}</span>;
  }
  return null;
}
