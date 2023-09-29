import { getMonthView } from "@/calendar/utils";
import { MonthView } from "@/components/calendar-views";

export default function MonthPage() {
  const month = getMonthView();
  const urlDate = new Date();

  return <MonthView month={month} urlDate={urlDate} />;
}
