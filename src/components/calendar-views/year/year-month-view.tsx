import React from "react";

import { getMonthView } from "@/calendar/utils";
import { YearDayView } from "./year-day-view";

type Props = {
  monthIndex: number;
  year?: number;
};

const dayShort = ["S", "M", "T", "W", "T", "F", "S"];

export function YearMonthView({ monthIndex, year }: Props) {
  const monthName = new Date(2000, monthIndex).toLocaleString("default", {
    month: "long",
  });
  const month = getMonthView(monthIndex, year, 6);

  return (
    <article className="grid gap-2 text-xs font-medium">
      <h3 className="text-sm font-semibold text-gray-500 pl-1">{monthName}</h3>
      <div className="grid grid-cols-7">
        <>
          {dayShort.map((d) => (
            <div key={d} className="h-6 w-6 grid place-content-center">
              {d}
            </div>
          ))}
        </>
        <>
          {month.map((week, index) => (
            <React.Fragment key={index}>
              {week.map((day, idx) => {
                const isInMonth = day.getMonth() === monthIndex;
                return (
                  <YearDayView key={idx} day={day} isInMonth={isInMonth} />
                );
              })}
            </React.Fragment>
          ))}
        </>
      </div>
    </article>
  );
}
