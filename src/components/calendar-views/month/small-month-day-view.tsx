import { useRouter } from "next/navigation";

import dayjs from "dayjs";
import classnames from "classnames";

import { useCalendarUrl } from "@/hooks/use-calendar-url";

type Props = {
  day: Date;
  urlDate: Date;
  currentDate: Date;
  setDate: (date: Date) => void;
};

export function SmallMonthDayView({
  day,
  urlDate,
  currentDate,
  setDate,
}: Props) {
  const { isDayView, isMonthView, isWeekView, isYearView } = useCalendarUrl();
  const router = useRouter();

  const isSelected =
    dayjs(day).format("YYYY-MM-DD") === dayjs(urlDate).format("YYYY-MM-DD");
  const isToday =
    dayjs().format("YYYY-MM-DD") === dayjs(day).format("YYYY-MM-DD");
  const isCurrentMonth =
    dayjs(day).format("YYYY-MM") === dayjs(currentDate).format("YYYY-MM");

  const endingUrl = isToday
    ? ""
    : `/${day.getFullYear()}/${day.getMonth() + 1}/${day.getDate()}`;

  function handleOnClick() {
    if (!isCurrentMonth) {
      setDate(day);
    }
    if (isDayView) {
      router.push(`/day${endingUrl}`);
    } else if (isMonthView) {
      router.push(`/month${endingUrl}`);
    } else if (isWeekView) {
      router.push(`/week${endingUrl}`);
    } else if (isYearView) {
      router.push(`/year${endingUrl}`);
    }
  }

  return (
    <button
      onClick={() => handleOnClick()}
      className={classnames(
        "h-7 w-7 rounded-full text-xs font-medium transition duration-300",
        {
          "bg-blue-500 text-white hover:bg-blue-600": isToday,
        },
        { "hover:bg-gray-200": !isSelected && !isToday },
        { "text-gray-400": !isCurrentMonth },
        {
          "bg-blue-200 text-blue-600 hover:bg-blue-300": isSelected && !isToday,
        },
      )}
    >
      {dayjs(day).format("D")}
    </button>
  );
}
