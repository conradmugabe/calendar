import { getWeekView } from "@/calendar/utils";
import { WeekView } from "@/components/calendar-views";

export default function WeekPage() {
  const week = getWeekView();

  return <WeekView week={week} />;
}
