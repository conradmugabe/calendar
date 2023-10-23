import dayjs from "dayjs";
import classnames from "classnames";

import { DayTimeView } from "@/components/calendar-views/day/day-time-view";

type Props = {
  dateProps?: { year: number; month: number; day: number };
};

function getDate(props?: { year: number; month: number; day: number }) {
  if (!props) return new Date();
  return new Date(props.year, props.month - 1, props.day);
}

export function DayView({ dateProps }: Props) {
  const date = getDate(dateProps);
  const day = dayjs(date);
  const isToday = dayjs().format("YYYY-MM-DD") === day.format("YYYY-MM-DD");

  return (
    <section className="flex h-full w-full flex-col">
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
        <h3
          className={classnames(
            "grid h-12 w-12 place-content-center rounded-full text-2xl",
            { "bg-blue-600 text-white": isToday },
          )}
        >
          {day.format("D")}
        </h3>
      </header>
      <DayTimeView isToday={isToday} />
    </section>
  );
}
