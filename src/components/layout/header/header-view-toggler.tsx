"use client";
import Link from "next/link";

import classnames from "classnames";
import dayjs from "dayjs";

import { TCalendarSettings } from "@/calendar/services";
import { useCalendarUrl } from "@/hooks/use-calendar-url";

type Props = {
  settings: TCalendarSettings;
};

const links = [
  { href: "/day", label: "Day" },
  { href: "/week", label: "Week" },
  { href: "/month", label: "Month" },
  { href: "/year", label: "Year" },
];

export function CalendarViewToggler({ settings }: Props) {
  const { date, view } = useCalendarUrl({ defaultView: settings.view });
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
              "grid h-10 place-content-center border px-4",
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
