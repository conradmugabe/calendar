import { redirect } from "next/navigation";

import { getMonthView } from "@/calendar/utils";
import { MonthView } from "@/components/calendar-views";

type Props = {
  params: {
    allParams?: string[];
  };
};

export default function MonthPage({ params: { allParams } }: Props) {
  let currentYear = allParams?.[0];
  let currentMonth = allParams?.[1];

  if (!currentYear || !currentMonth) redirect("/month");

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

  const monthView = getMonthView(month - 1, year);

  return <MonthView month={monthView} />;
}
