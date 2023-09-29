import { WeekDayView } from "./week-day-view";

type Props = {
  week: Date[];
};

export function WeekView({ week }: Props) {
  console.log("week", week);
  return (
    <section className="h-full w-full grid grid-cols-7">
      {week.map((date, index) => (
        <WeekDayView key={index} date={date} />
      ))}
    </section>
  );
}
