import { getServerSession } from "next-auth";

import { nextAuthOptions } from "@/auth/next-auth";
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
  const session = await getServerSession(nextAuthOptions);
  const settings = await calendarSettingsService.get();

  if (session) {
    let view: React.ReactNode;
    if (settings.view === "day") {
      view = <DayView />;
    }
    if (settings.view === "week") {
      const week = getWeekView();
      view = <WeekView week={week} />;
    }
    if (settings.view === "year") {
      view = <YearView />;
    } else {
      const month = getMonthView();
      const urlDate = new Date();
      view = <MonthView month={month} urlDate={urlDate} />;
    }

    return <AppMainTemplate>{view}</AppMainTemplate>;
  }

  return <LandingPage />;
}
