import { YearMonthView } from "./year-month-view";

type Props = {
  year?: number;
};

export function YearView({ year }: Props) {
  const months = new Array(12).fill(null);

  return (
    <section className="h-full w-ful p-4 pb-10 pr-10 pl-0 grid grid-cols-4 gap-10">
      {months.map((_, index) => (
        <YearMonthView key={index} monthIndex={index} year={year} />
      ))}
    </section>
  );
}
