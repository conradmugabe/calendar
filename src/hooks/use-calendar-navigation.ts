import { useRouter } from "next/navigation";

import { useCalendarUrl } from "@/hooks/use-calendar-url";
import {
  getNextDate,
  getNextMonth,
  getNextYear,
  getPrevDate,
  getPrevMonth,
  getPrevYear,
  isCurrentMonth,
  isCurrentYear,
  isToday,
} from "@/utils/date-utils";

export function useCalendarNavigation() {
  const { date, isDayView, isMonthView, isYearView } = useCalendarUrl();
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
    }
  }

  return { moveToNext, moveToPrev };
}
