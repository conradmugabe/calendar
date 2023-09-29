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
  isCurrentMonth,
  isCurrentYear,
  isToday,
  isTodaySelectedInWeek,
} from "@/utils/date-utils";

export function useCalendarNavigation() {
  const { date, isDayView, isMonthView, isWeekView, isYearView } =
    useCalendarUrl();
  const router = useRouter();

  function moveToNext() {
    if (isMonthView) {
      const nextMonth = getNextMonth(date);
      if (isCurrentMonth(nextMonth)) {
        router.push("/month");
        return;
      }
      router.push(
        `/month/${nextMonth.getFullYear()}/${nextMonth.getMonth() + 1}/1`,
      );
    } else if (isYearView) {
      const nextYear = getNextYear(date);
      if (isCurrentYear(nextYear)) {
        router.push("/year");
        return;
      }
      router.push(`/year/${nextYear.getFullYear()}`);
    } else if (isDayView) {
      const nextDate = getNextDate(date);
      if (isToday(nextDate)) {
        router.push("/day");
        return;
      }
      router.push(
        `/day/${nextDate.getFullYear()}/${
          nextDate.getMonth() + 1
        }/${nextDate.getDate()}`,
      );
    } else if (isWeekView) {
      const nextWeek = getNextWeek(date);
      if (isTodaySelectedInWeek(nextWeek)) {
        router.push("/week");
        return;
      }
      router.push(
        `/week/${nextWeek.getFullYear()}/${
          nextWeek.getMonth() + 1
        }/${nextWeek.getDate()}`,
      );
    }
  }

  function moveToPrev() {
    if (isMonthView) {
      const prevMonth = getPrevMonth(date);
      if (isCurrentMonth(prevMonth)) {
        router.push("/month");
        return;
      }
      router.push(
        `/month/${prevMonth.getFullYear()}/${prevMonth.getMonth()}/1`,
      );
    } else if (isYearView) {
      const prevYear = getPrevYear(date);
      if (isCurrentYear(prevYear)) {
        router.push("/year");
        return;
      }
      router.push(`/year/${prevYear.getFullYear()}`);
    } else if (isDayView) {
      const prevDate = getPrevDate(date);
      if (isToday(prevDate)) {
        router.push("/day");
        return;
      } else {
        router.push(
          `/day/${prevDate.getFullYear()}/${
            prevDate.getMonth() + 1
          }/${prevDate.getDate()}`,
        );
      }
    } else if (isWeekView) {
      const prevWeek = getPrevWeek(date);
      if (isTodaySelectedInWeek(prevWeek)) {
        router.push("/week");
        return;
      }
      router.push(
        `/week/${prevWeek.getFullYear()}/${
          prevWeek.getMonth() + 1
        }/${prevWeek.getDate()}`,
      );
    }
  }

  return { moveToNext, moveToPrev };
}
