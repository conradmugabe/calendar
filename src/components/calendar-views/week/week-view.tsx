import { WeekDayView } from "./week-day-view";

type Props = {
  week: Date[];
};

export function WeekView({ week }: Props) {
  return (
    <section className="grid h-full w-full grid-cols-7">
      {week.map((date, index) => (
        <WeekDayView key={index} date={date} />
      ))}
    </section>
  );
}
