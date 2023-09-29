import dayjs from "dayjs";
import classnames from "classnames";

type Props = {
  day: Date;
  urlDate: Date;
};

export function SmallMonthDayView({ day, urlDate }: Props) {
  const isSelected =
    dayjs(day).format("YYYY-MM-DD") === dayjs(urlDate).format("YYYY-MM-DD");
  const isToday =
    dayjs().format("YYYY-MM-DD") === dayjs(day).format("YYYY-MM-DD");
  const isCurrentMonth =
    dayjs(day).format("YYYY-MM") === dayjs(urlDate).format("YYYY-MM");

  return (
    <button
      onClick={() => {}}
      className={classnames(
        "h-7 w-7 text-xs font-medium rounded-full transition duration-300",
        { "text-white bg-blue-500 hover:bg-blue-600": isToday },
        { "hover:bg-gray-200": !isSelected },
        { "text-gray-400": !isCurrentMonth },
      )}
    >
      {dayjs(day).format("D")}
    </button>
  );
}
