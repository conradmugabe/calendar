"use client";

import { useEffect, useMemo, useState } from "react";

import { getMonthView } from "@/calendar/utils";
import { SmallMonthView } from "@/components/calendar-views/month/small-month-view";
import { useCalendarUrl } from "@/hooks/use-calendar-url";

export function SmallCalendar() {
  const { date: urlDate } = useCalendarUrl();
  const [date, setDate] = useState(urlDate);
  const _year = date.getFullYear();
  const _month = date.getMonth();
  const _date = date.getDate();
  const month = useMemo(() => getMonthView(_month, _year, 6), [_month, _year]);

  useEffect(() => {
    setDate(new Date(_year, _month, _date));
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
