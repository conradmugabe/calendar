import Link from "next/link";

import classnames from "classnames";

import { CalendarSettings } from "@/calendar/services";

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
  return (
    <div className="grid grid-cols-4">
      {links.map(({ href, label }) => {
        const isActive = settings.view === label.toLowerCase();
        return (
          <Link
            href={href}
            key={href}
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
