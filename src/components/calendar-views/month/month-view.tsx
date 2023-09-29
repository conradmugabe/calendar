import React from "react";

import { MonthDayView } from "./month-day-view";

type Props = {
  month: Date[][];
  urlDate: Date;
};

export function MonthView({ month, urlDate }: Props) {
  return (
    <div className="h-full w-ful grid grid-cols-7">
      {month.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((day, idx) => (
            <MonthDayView key={idx} day={day} index={index} urlDate={urlDate} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
