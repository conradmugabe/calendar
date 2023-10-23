import Link from "next/link";

import dayjs from "dayjs";
import classnames from "classnames";

type Props = {
  day: Date;
  index: number;
  urlDate: Date;
};

export function MonthDayView({ day: _day, index, urlDate }: Props) {
  const day = dayjs(_day);
  const isToday = dayjs().format("YYYY-MM-DD") === day.format("YYYY-MM-DD");
  const isSameMonth =
    dayjs(urlDate).format("YYYY-MM") === day.format("YYYY-MM");

  return (
    <div className="flex flex-col border-b border-l py-2">
      <header className="flex flex-col text-xs font-medium">
        {index === 0 && (
          <div className="text-center uppercase">{day.format("ddd")}</div>
        )}
        <div className="flex items-center gap-1 self-center">
          <p
            className={classnames({
              "text-black": isSameMonth,
              "text-gray-500": !isSameMonth,
            })}
          >
            {day.format("D") === "1" && day.format("MMM")}
          </p>
          <Link
            href={`/day/${day.year()}/${day.month() + 1}/${day.date()}`}
            className={classnames(
              "grid h-6 w-6 place-content-center rounded-full transition duration-300 ",
              { "bg-blue-500 text-white hover:bg-blue-600": isToday },
              { "hover:bg-gray-200": !isToday },
              { "text-black": isSameMonth && !isToday },
              { "text-gray-500": !isSameMonth },
            )}
          >
            {day.format("D")}
          </Link>
        </div>
      </header>
    </div>
  );
}
