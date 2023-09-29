import dayjs from "dayjs";

import classnames from "classnames";
import Link from "next/link";

type Props = {
  day: Date;
  isInMonth: boolean;
  urlDate: Date;
};

export function YearDayView({ day: _day, isInMonth, urlDate }: Props) {
  const day = dayjs(_day);
  const isToday = dayjs().format("YYYY-MM-DD") === day.format("YYYY-MM-DD");
  const isSelected =
    dayjs(urlDate).format("YYYY-MM-DD") === day.format("YYYY-MM-DD");
  const endingUrl = isToday
    ? ""
    : `/${day.year()}/${day.month() + 1}/${day.date()}`;

  return (
    <Link
      href={`/year${endingUrl}`}
      className={classnames(
        "w-6 h-6 grid place-content-center rounded-full transition duration-300",
        {
          "hover:bg-gray-200": !isSelected && !isToday,
          "text-gray-800": isInMonth,
          "text-gray-500": !isInMonth && !isSelected && !isToday,
          "text-white bg-blue-500 hover:bg-blue-600": isToday && isInMonth,
          "text-blue-600 bg-blue-200 hover:bg-blue-300":
            isSelected && !isToday && isInMonth,
          "text-gray-500 bg-gray-200 hover:bg-gray-300":
            isSelected && !isToday && !isInMonth,
        },
      )}
    >
      {day.format("D")}
    </Link>
  );
}
