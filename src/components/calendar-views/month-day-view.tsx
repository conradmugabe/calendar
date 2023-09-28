import dayjs from "dayjs";
import classnames from "classnames";

type Props = {
  day: Date;
  index: number;
};

export function MonthDayView({ day: _day, index }: Props) {
  const day = dayjs(_day);
  const isToday = dayjs().format("YYYY-MM-DD") === day.format("YYYY-MM-DD");

  return (
    <div className="flex flex-col py-2 border-l border-b">
      <header className="flex flex-col text-xs font-medium">
        {index === 0 && (
          <div className="text-center uppercase">{day.format("ddd")}</div>
        )}
        <div className="self-center flex items-center gap-1">
          <p>{day.format("D") === "1" && day.format("MMM")}</p>
          <button
            className={classnames(
              "w-6 h-6 rounded-full transition duration-300 hover:bg-gray-200",
              { "text-white bg-blue-500 hover:bg-blue-600": isToday },
            )}
          >
            {day.format("D")}
          </button>
        </div>
      </header>
    </div>
  );
}
