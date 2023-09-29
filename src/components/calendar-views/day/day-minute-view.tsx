"use client";

import { useEffect, useState } from "react";

import classnames from "classnames";

function getCurrentTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const time = `${hours}:${minutes}`;
  return time;
}

function convertTo12Hour(currentHour: number): string {
  const hour = currentHour % 12 || 12;
  const period = currentHour < 12 ? "AM" : "PM";
  return `${hour} ${period}`;
}

type Props = {
  time: string;
  isToday: boolean;
};

export function DayMinuteView({ isToday, time }: Props) {
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
    <div className="relative h-[60px] border border-b-0 border-r-0">
      {time}
      <div
        className={classnames("flex items-center absolute w-full", {
          hidden: !showTimeBar,
        })}
        style={{ top: `${currentMinute}%` }}
      >
        <div className="h-3 w-3 bg-red-600 rounded-full" />
        <div className="h-[2px] w-full bg-red-600" />
      </div>
    </div>
  );
}
