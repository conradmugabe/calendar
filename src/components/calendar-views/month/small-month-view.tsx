import React from "react";

import dayjs from "dayjs";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { SmallMonthDayView } from "./small-month-day-view";
import { getNextMonth, getPrevMonth } from "@/utils/date-utils";

type Props = {
  month: Date[][];
  urlDate: Date;
  currentDate: Date;
  setDate: (date: Date) => void;
};

export function SmallMonthView({
  currentDate,
  month,
  urlDate,
  setDate,
}: Props) {
  return (
    <div>
      <div className="grid grid-cols-7">
        <div className="col-span-5">
          {dayjs(currentDate).format("MMMM YYYY")}
        </div>
        <div className="col-span-2 grid grid-cols-2">
          <button
            className="h-7 w-7 rounded-full transition duration-300 grid place-content-center hover:bg-gray-100"
            onClick={() => {
              const _date = getPrevMonth(currentDate);
              setDate(_date);
            }}
          >
            <ChevronLeft className="stroke-gray-700" size={16} />
          </button>
          <button
            className="h-7 w-7 rounded-full transition duration-300 grid place-content-center hover:bg-gray-100"
            onClick={() => {
              const _date = getNextMonth(currentDate);
              setDate(_date);
            }}
          >
            <ChevronRight className="stroke-gray-700" size={16} />
          </button>
        </div>
      </div>
      <div className="w-full grid grid-cols-7">
        {month.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((day, idx) => (
              <SmallMonthDayView
                key={idx}
                day={day}
                urlDate={urlDate}
                currentDate={currentDate}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
