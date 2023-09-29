import { DayMinuteView } from "@/components/calendar-views/day/day-minute-view";

type Props = {
  isToday: boolean;
};

export function DayTimeView({ isToday }: Props) {
  const times = ["12 AM"];
  for (let i = 1; i <= 11; i++) {
    times.push(`${i} AM`);
  }
  times.push("12 PM");
  for (let i = 1; i <= 11; i++) {
    times.push(`${i} PM`);
  }

  return (
    <main className="overflow-y-visible pr-4">
      {times.map((time) => (
        <DayMinuteView key={time} time={time} isToday={isToday} />
      ))}
    </main>
  );
}
