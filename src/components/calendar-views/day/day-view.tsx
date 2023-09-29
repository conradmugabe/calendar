import dayjs from "dayjs";
import classnames from "classnames";

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
    <section className="h-full w-ful">
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
        <h3
          className={classnames(
            "h-12 w-12 text-2xl grid place-content-center rounded-full",
            { "text-white bg-blue-600": isToday },
          )}
        >
          {day.format("D")}
        </h3>
      </header>
    </section>
  );
}
