import { redirect } from "next/navigation";

import { getMonthView } from "@/calendar/utils";
import { DayView } from "@/components/calendar-views";

type Props = {
  params: {
    allParams?: string[];
  };
};

export default function DayPage({ params: { allParams } }: Props) {
  let currentYear = allParams?.[0];
  let currentMonth = allParams?.[1];
  let currentDay = allParams?.[2];

  if (!currentYear || !currentMonth || !currentDay) redirect("/day");

  // Check if year and date are valid and in the range of 1000-9999 for the year

  let year = Number(currentYear);
  let month = Number(currentMonth);
  let day = Number(currentDay);
  if (month > 12) {
    month = 12;
  }
  if (month < 1) {
    month = 1;
  }
  if (year > 9999) {
    year = 9999;
  }
  if (year < 1000) {
    year = 1000;
  }

  return <DayView dateProps={{ day, month, year }} />;
}
