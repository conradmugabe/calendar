import { redirect } from "next/navigation";

import { WeekView } from "@/components/calendar-views";
import { getWeekView } from "@/calendar/utils";

type Props = {
  params: {
    allParams?: string[];
  };
};

export default function WeekPage({ params: { allParams } }: Props) {
  let currentYear = allParams?.[0];
  let currentMonth = allParams?.[1];
  let currentDay = allParams?.[2];

  if (!currentYear || !currentMonth || !currentDay) redirect("/week");

  const week = getWeekView();

  return <WeekView week={week} />;
}
