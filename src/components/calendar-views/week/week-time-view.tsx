import { WeekMinuteView } from "./week-minute-view";

type Props = {
  isToday: boolean;
  date: Date;
};

export function WeekTimeView({ isToday }: Props) {
  const times = ["12 AM"];
  for (let i = 1; i <= 11; i++) {
    times.push(`${i} AM`);
  }
  times.push("12 PM");
  for (let i = 1; i <= 11; i++) {
    times.push(`${i} PM`);
  }

  return (
    <main className="overflow-y-visible">
      {times.map((time) => (
        <WeekMinuteView key={time} time={time} isToday={isToday} />
      ))}
    </main>
  );
}
