import { getMonthView } from "@/calendar/utils";
import { MonthView } from "@/components/calendar-views";

export default function MonthPage() {
  const month = getMonthView();

  return <MonthView month={month} />;
}
