"use client";

import { getMonthView } from "@/calendar/utils";
import { SmallMonthView } from "@/components/calendar-views/month/small-month-view";
import { useCalendarUrl } from "@/hooks/use-calendar-url";
import { useState } from "react";

export function SmallCalendar() {
  const { date: urlDate } = useCalendarUrl();
  const [date, setDate] = useState(urlDate);
  const month = getMonthView(date.getMonth(), date.getFullYear(), 6);

  return (
    <SmallMonthView
      currentDate={date}
      month={month}
      urlDate={urlDate}
      setDate={setDate}
    />
  );
}