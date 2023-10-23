"use client";

import { useEffect, useState } from "react";

import classnames from "classnames";

import { convertTo12Hour, getCurrentTime } from "@/utils/date-utils";

type Props = {
  isToday: boolean;
  time: string;
};

export function WeekMinuteView({ isToday, time }: Props) {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [currentHour, currentMinute] = currentTime.split(":");
  const hour = convertTo12Hour(Number(currentHour));
  const isCurrentHour = time === hour;
  const showTimeBar = isToday && isCurrentHour;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[20px] border border-b-0 border-r-0">
      <div
        className={classnames("absolute flex w-full items-center", {
          hidden: !showTimeBar,
        })}
        style={{ top: `${currentMinute}%` }}
      >
        <div className="h-3 w-3 rounded-full bg-red-600" />
        <div className="h-[2px] w-full bg-red-600" />
      </div>
    </div>
  );
}
