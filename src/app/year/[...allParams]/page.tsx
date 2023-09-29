import { redirect } from "next/navigation";

import { YearView } from "@/components/calendar-views";

type Props = {
  params: {
    allParams?: string[];
  };
};

export default function YearPage({ params: { allParams } }: Props) {
  let currentYear = allParams?.[0];

  if (!currentYear) redirect("/month");

  let year = Number(currentYear);
  if (year > 9999) {
    year = 9999;
  }
  if (year < 1000) {
    year = 1000;
  }

  return <YearView year={year} />;
}
