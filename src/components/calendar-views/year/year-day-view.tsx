import dayjs from "dayjs";

import classnames from "classnames";

type Props = {
  day: Date;
  isInMonth: boolean;
};

export function YearDayView({ day: _day, isInMonth }: Props) {
  const day = dayjs(_day);
  const isToday = dayjs().format("YYYY-MM-DD") === day.format("YYYY-MM-DD");
  return (
    <button
      className={classnames(
        "w-6 h-6 grid place-content-center rounded-full transition duration-300",
        {
          "hover:bg-gray-200": !isToday,
          "text-gray-800": isInMonth,
          "text-gray-500": !isInMonth,
          "text-white bg-blue-500 hover:bg-blue-600": isToday && isInMonth,
        },
      )}
    >
      {day.format("D")}
    </button>
  );
}
