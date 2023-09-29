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

  if (!currentYear || !currentMonth) redirect("/day");

  let year = Number(currentYear);
  let month = Number(currentMonth);
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

  //   const monthView = getMonthView(month - 1, year);

  return <DayView />;
}
