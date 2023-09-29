"use client";

import { getMonthView } from "@/calendar/utils";
import { SmallMonthView } from "@/components/calendar-views/month/small-month-view";
import { useCalendarUrl } from "@/hooks/use-calendar-url";
import { useState } from "react";

export function SmallCalendar() {
  const { date: urlDate } = useCalendarUrl();
  const month = getMonthView(urlDate.getMonth(), urlDate.getFullYear(), 6);
  const [date, setDate] = useState(urlDate);

  return <SmallMonthView month={month} urlDate={urlDate} date={date} />;
}
