import { getMonthView, getWeekView } from "@/calendar/utils";
import { calendarSettingsService } from "@/calendar";
import {
  DayView,
  MonthView,
  WeekView,
  YearView,
} from "@/components/calendar-views";

export default async function Home() {
  const settings = await calendarSettingsService.get();

  if (settings.view === "day") {
    return <DayView />;
  }

  if (settings.view === "week") {
    const week = getWeekView();

    return <WeekView week={week} />;
  }

  if (settings.view === "year") {
    return <YearView />;
  }

  const month = getMonthView();
  const urlDate = new Date();

  return <MonthView month={month} urlDate={urlDate} />;
}
