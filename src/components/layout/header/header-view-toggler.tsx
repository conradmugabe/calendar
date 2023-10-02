"use client";
import Link from "next/link";

import classnames from "classnames";
import dayjs from "dayjs";

import { CalendarSettings } from "@/calendar/services";
import { useCalendarUrl } from "@/hooks/use-calendar-url";

type Props = {
  settings: CalendarSettings;
};

const links = [
  { href: "/day", label: "Day" },
  { href: "/week", label: "Week" },
  { href: "/month", label: "Month" },
  { href: "/year", label: "Year" },
];

export function CalendarViewToggler({ settings }: Props) {
  const { date, view } = useCalendarUrl();
  const isToday =
    dayjs().format("YYYY-MM-DD") === dayjs(date).format("YYYY-MM-DD");

  return (
    <div className="grid grid-cols-4">
      {links.map(({ href, label }) => {
        const endingUrl = isToday
          ? ""
          : `/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

        const url = `${href}${endingUrl}`;
        const isActive = view === label.toLowerCase();
        return (
          <Link
            key={href}
            href={url}
            className={classnames(
              "px-4 h-10 border grid place-content-center",
              { "bg-gray-200": isActive },
            )}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
