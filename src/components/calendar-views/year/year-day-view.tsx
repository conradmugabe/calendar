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
        "grid h-6 w-6 place-content-center rounded-full transition duration-300",
        {
          "hover:bg-gray-200": !isSelected && !isToday,
          "text-gray-800": isInMonth,
          "text-gray-500": !isInMonth && !isSelected && !isToday,
          "bg-blue-500 text-white hover:bg-blue-600": isToday && isInMonth,
          "bg-blue-200 text-blue-600 hover:bg-blue-300":
            isSelected && !isToday && isInMonth,
          "bg-gray-200 text-gray-500 hover:bg-gray-300":
            isSelected && !isToday && !isInMonth,
        },
      )}
    >
      {day.format("D")}
    </Link>
  );
}
