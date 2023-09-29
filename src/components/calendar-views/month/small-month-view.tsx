import React from "react";

import { SmallMonthDayView } from "./small-month-day-view";

type Props = {
  month: Date[][];
  urlDate: Date;
};

export function SmallMonthView({ month, urlDate }: Props) {
  return (
    <div>
      <div className="w-full grid grid-cols-7">
        {month.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((day, idx) => (
              <SmallMonthDayView key={idx} day={day} urlDate={urlDate} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
