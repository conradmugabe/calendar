import { useParams, usePathname } from "next/navigation";

type Props = {
  defaultView: string;
};

export function useCalendarUrl(props?: Props) {
  const params = useParams();
  const pathname = usePathname();
  const { defaultView } = props || {};

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();
  const year = params?.allParams?.[0] || String(currentYear);
  const month = params?.allParams?.[1] || String(currentMonth);
  const day = params?.allParams?.[2] || String(currentDay);

  const date = new Date(Number(year), Number(month) - 1, Number(day));

  const isYearView =
    (defaultView && defaultView === "year") || pathname.startsWith("/year");
  const isMonthView =
    (defaultView && defaultView === "month") || pathname.startsWith("/month");
  const isWeekView =
    (defaultView && defaultView === "week") || pathname.startsWith("/week");
  const isDayView =
    (defaultView && defaultView === "day") || pathname.startsWith("/day");

  return {
    date,
    day,
    month,
    pathname,
    year,
    isDayView,
    isMonthView,
    isWeekView,
    isYearView,
  };
}
