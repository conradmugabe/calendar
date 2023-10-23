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
      <header className="flex flex-col justify-center py-2">
        <h3
          className={classnames(
            "w-12 text-center text-xs font-medium uppercase",
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
            "grid h-12 w-12 place-content-center rounded-full text-2xl transition duration-300",
            { "bg-blue-500 text-white hover:bg-blue-600": isToday },
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
