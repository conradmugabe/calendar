// import { getMonthView, getWeekView } from "@/calendar/utils";
// import { calendarSettingsService } from "@/calendar";
// import {
//   DayView,
//   MonthView,
//   WeekView,
//   YearView,
// } from "@/components/calendar-views";

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

export default function LandingPage() {
  return (
    <section className="h-screen w-screen bg-gray-100 overflow-hidden">
      <div className="max-w-5xl h-full mx-auto p-1 sm:px-4 xl:px-0">
        <div className="flex items-center justify-between py-2 sm:py-4 lg:py-6">
          <h1 className="text-xl font-semibold text-gray-800">Calendar</h1>
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="px-4 py-2 rounded-md bg-white text-sm font-medium text-gray-800 whitespace-nowrap hover:shadow-lg">
              Sign in
            </button>
            <button className="px-4 py-2 rounded-md bg-gray-800 text-sm font-medium text-white whitespace-nowrap hover:shadow-lg">
              Sign up
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center pt-16 space-y-5 lg:pt-20">
          <h1 className="text-4xl text-center font-semibold text-gray-800 md:text-5xl">
            Online Calendar
          </h1>
          <p className="text-sm px-2 text-center font-normal text-gray-500 md:w-8/12 mx-auto md:text-base">
            Make scheduling easy for you. Features that help you create events,
            invite others, manage group calendars, and organize team events with
            shareable calendars.
          </p>
          <div className="space-x-2">
            <span className="text-xs px-4 py-2 rounded-full shadow-md font-semibold tracking-wide text-gray-800">
              Share
            </span>
            <span className="text-xs px-4 py-2 rounded-full shadow-md font-semibold tracking-wide text-gray-800">
              Schedule
            </span>
            <span className="text-xs px-4 py-2 rounded-full shadow-md font-semibold tracking-wide text-gray-800">
              Organize
            </span>
          </div>
        </div>
        <div className="bg-black h-full rounded-3xl mt-16"></div>
      </div>
    </section>
  );
}
