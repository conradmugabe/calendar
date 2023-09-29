import Link from "next/link";

import dayjs from "dayjs";
import classnames from "classnames";

import { WeekTimeView } from "./week-time-view";

type Props = {
  date: Date;
};

export function WeekDayView({ date }: Props) {
  const day = dayjs(date);
  const isToday = dayjs().format("YYYY-MM-DD") === day.format("YYYY-MM-DD");

  return (
    <article>
      <header className="py-2 flex flex-col justify-center">
        <h3
          className={classnames(
            "text-xs text-center uppercase font-medium w-12",
            {
              "text-blue-600": isToday,
              "text-gray-600": !isToday,
            },
          )}
        >
          {day.format("ddd")}
        </h3>
        <Link
          href={`/day/${day.year()}/${day.month() + 1}/${day.date()}`}
          className={classnames(
            "h-12 w-12 text-2xl grid place-content-center rounded-full transition duration-300",
            { "text-white bg-blue-500 hover:bg-blue-600": isToday },
            { "text-gray-500 hover:bg-gray-200": !isToday },
          )}
        >
          {day.format("D")}
        </Link>
      </header>
      <WeekTimeView date={date} isToday={isToday} />
    </article>
  );
}
