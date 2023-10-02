import { CalendarSettings } from "@/calendar/services";
import Link from "next/link";

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
      {links.map(({ href, label }) => (
        <Link
          href={href}
          key={href}
          className="px-4 h-10 border grid place-content-center"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
