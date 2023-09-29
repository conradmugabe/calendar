import { useParams, usePathname } from "next/navigation";

export function useCalendarUrl() {
  const params = useParams();
  const pathname = usePathname();

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();
  const year = params?.allParams?.[0] || String(currentYear);
  const month = params?.allParams?.[1] || String(currentMonth);
  const day = params?.allParams?.[2] || String(currentDay);

  const date = new Date(Number(year), Number(month) - 1, Number(day));

  const isMonthView = pathname.startsWith("/month");
  const isYearView = pathname.startsWith("/year");
  const isDayView = pathname.startsWith("/day");

  return {
    year,
    month,
    day,
    date,
    isMonthView,
    isYearView,
    isDayView,
  };
}
