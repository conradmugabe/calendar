// import { getMonthView, getWeekView } from "@/calendar/utils";
// import { calendarSettingsService } from "@/calendar";
// import {
//   DayView,
//   MonthView,
//   WeekView,
//   YearView,
// } from "@/components/calendar-views";

import Link from "next/link";

import { Logo } from "@/components/common/logo";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "@/auth/next-auth";
import { LandingPage } from "@/components/layout/landing-page";

// export default async function Home() {
//   const settings = await calendarSettingsService.get();

//   if (settings.view === "day") {
//     return <DayView />;
//   }

//   if (settings.view === "week") {
//     const week = getWeekView();

//     return <WeekView week={week} />;
//   }

//   if (settings.view === "year") {
//     return <YearView />;
//   }

//   const month = getMonthView();
//   const urlDate = new Date();

//   return <MonthView month={month} urlDate={urlDate} />;
// }

export default async function MainPage() {
  const session = await getServerSession(nextAuthOptions);
  if (session) {
    redirect("/r");
  }

  return <LandingPage />;
}
