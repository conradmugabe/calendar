import { auth } from "@clerk/nextjs";

import { LandingPage } from "@/components/layout/landing-page";
import { AppMainTemplate } from "@/components/layout";
import { calendarSettingsService } from "@/calendar";
import {
  DayView,
  MonthView,
  WeekView,
  YearView,
} from "@/components/calendar-views";
import { getWeekView, getMonthView } from "@/calendar/utils";

export default async function MainPage() {
  const { userId } = auth();

  if (!userId) {
    return <LandingPage />;
  }

  const settings = await calendarSettingsService.get({ userId });
  let view: React.ReactNode;

  if (settings.view === "day") {
    view = <DayView />;
  } else if (settings.view === "week") {
    const week = getWeekView();
    view = <WeekView week={week} />;
  } else if (settings.view === "year") {
    view = <YearView />;
  } else {
    const month = getMonthView();
    const urlDate = new Date();
    view = <MonthView month={month} urlDate={urlDate} />;
  }

  return <AppMainTemplate>{view}</AppMainTemplate>;
}
