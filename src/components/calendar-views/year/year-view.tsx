import { YearMonthView } from "./year-month-view";

type Props = {
  urlDate?: Date;
};

export function YearView({ urlDate = new Date() }: Props) {
  const months = new Array(12).fill(null);

  return (
    <section className="h-full w-ful p-4 pb-10 pr-10 pl-0 grid grid-cols-4 gap-10">
      {months.map((_, index) => (
        <YearMonthView key={index} monthIndex={index} urlDate={urlDate} />
      ))}
    </section>
  );
}
