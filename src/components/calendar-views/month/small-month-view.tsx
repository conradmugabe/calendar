import React from "react";

import dayjs from "dayjs";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { getNextMonth, getPrevMonth } from "@/utils/date-utils";
import { SmallMonthDayView } from "./small-month-day-view";

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
            className="grid h-7 w-7 place-content-center rounded-full transition duration-300 hover:bg-gray-100"
            onClick={() => {
              const _date = getPrevMonth(currentDate);
              setDate(_date);
            }}
          >
            <ChevronLeft className="stroke-gray-700" size={16} />
          </button>
          <button
            className="grid h-7 w-7 place-content-center rounded-full transition duration-300 hover:bg-gray-100"
            onClick={() => {
              const _date = getNextMonth(currentDate);
              setDate(_date);
            }}
          >
            <ChevronRight className="stroke-gray-700" size={16} />
          </button>
        </div>
      </div>
      <div className="grid w-full grid-cols-7">
        {month.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((day, idx) => (
              <SmallMonthDayView
                key={idx}
                day={day}
                urlDate={urlDate}
                currentDate={currentDate}
                setDate={setDate}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
