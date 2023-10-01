import { useRouter } from "next/navigation";

import { useCalendarUrl } from "@/hooks/use-calendar-url";
import {
  getNextDate,
  getNextMonth,
  getNextWeek,
  getNextYear,
  getPrevDate,
  getPrevMonth,
  getPrevWeek,
  getPrevYear,
  isToday,
} from "@/utils/date-utils";

function getUrlEnding(date: Date) {
  return `/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

type Props = {
  defaultView: string;
};

export function useCalendarNavigation(props?: Props) {
  const { date, isDayView, isMonthView, isWeekView, isYearView } =
    useCalendarUrl(props);
  const router = useRouter();

  function moveToNext() {
    if (isMonthView) {
      const nextMonth = getNextMonth(date);
      if (isToday(nextMonth)) {
        router.push("/month");
        return;
      }
      router.push(`/month${getUrlEnding(nextMonth)}`);
    } else if (isYearView) {
      const nextYear = getNextYear(date);
      if (isToday(nextYear)) {
        router.push("/year");
        return;
      }
      router.push(`/year${getUrlEnding(nextYear)}`);
    } else if (isDayView) {
      const nextDate = getNextDate(date);
      if (isToday(nextDate)) {
        router.push("/day");
        return;
      }
      router.push(`/day${getUrlEnding(nextDate)}`);
    } else if (isWeekView) {
      const nextWeek = getNextWeek(date);
      if (isToday(nextWeek)) {
        router.push("/week");
        return;
      }
      router.push(`/week${getUrlEnding(nextWeek)}`);
    }
  }

  function moveToPrev() {
    if (isMonthView) {
      const prevMonth = getPrevMonth(date);
      if (isToday(prevMonth)) {
        router.push("/month");
        return;
      }
      router.push(`/month${getUrlEnding(prevMonth)}`);
    } else if (isYearView) {
      const prevYear = getPrevYear(date);
      if (isToday(prevYear)) {
        router.push("/year");
        return;
      }
      router.push(`/year${getUrlEnding(prevYear)}`);
    } else if (isDayView) {
      const prevDate = getPrevDate(date);
      if (isToday(prevDate)) {
        router.push("/day");
        return;
      } else {
        router.push(`/day${getUrlEnding(prevDate)}`);
      }
    } else if (isWeekView) {
      const prevWeek = getPrevWeek(date);
      if (isToday(prevWeek)) {
        router.push("/week");
        return;
      }
      router.push(`/week${getUrlEnding(prevWeek)}`);
    }
  }

  return { moveToNext, moveToPrev };
}
