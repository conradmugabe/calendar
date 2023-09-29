import React from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { SmallMonthDayView } from "./small-month-day-view";
import { getNextMonth, getPrevMonth } from "@/utils/date-utils";

type Props = {
  month: Date[][];
  urlDate: Date;
  date: Date;
};

export function SmallMonthView({ date, month, urlDate }: Props) {
  return (
    <div>
      <div className="grid grid-cols-7">
        <div></div>
        <div className="grid grid-cols-2">
          <button
            className="h-7 w-7 rounded-full transition duration-300 grid place-content-center hover:bg-gray-100"
            onClick={() => getNextMonth(date)}
          >
            <ChevronLeft className="stroke-gray-700" size={16} />
          </button>
          <button
            className="h-7 w-7 rounded-full transition duration-300 grid place-content-center hover:bg-gray-100"
            onClick={() => getPrevMonth(date)}
          >
            <ChevronRight className="stroke-gray-700" size={16} />
          </button>
        </div>
      </div>
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
