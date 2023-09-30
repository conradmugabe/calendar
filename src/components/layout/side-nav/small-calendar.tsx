"use client";

import { useEffect, useState } from "react";

import { getMonthView } from "@/calendar/utils";
import { SmallMonthView } from "@/components/calendar-views/month/small-month-view";
import { useCalendarUrl } from "@/hooks/use-calendar-url";

export function SmallCalendar() {
  const { date: urlDate } = useCalendarUrl();
  const [date, setDate] = useState(urlDate);
  const month = getMonthView(date.getMonth(), date.getFullYear(), 6);
  const _year = date.getFullYear();
  const _month = date.getMonth();
  const _date = date.getDate();

  useEffect(() => {
    setDate(urlDate);
  }, [_date, _month, _year]);

  return (
    <SmallMonthView
      currentDate={date}
      month={month}
      urlDate={urlDate}
      setDate={setDate}
    />
  );
}
