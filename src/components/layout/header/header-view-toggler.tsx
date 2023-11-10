"use client";

import classnames from "classnames";
import dayjs from "dayjs";
import axios from "axios";

import { TCalendarSettings } from "@/calendar/services";
import { useCalendarUrl } from "@/hooks/use-calendar-url";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const { date, view } = useCalendarUrl({ defaultView: settings.view });
  const isToday =
    dayjs().format("YYYY-MM-DD") === dayjs(date).format("YYYY-MM-DD");

  async function handleViewChange(props: { view: string; url: string }) {
    await axios.patch("/api/v1/settings", {
      view: props.view,
      userId: settings.userId,
    });
    router.push(props.url);
  }

  return (
    <div className="grid grid-cols-4">
      {links.map(({ href, label }) => {
        const endingUrl = isToday
          ? ""
          : `/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

        const url = `${href}${endingUrl}`;
        const isActive = view === label.toLowerCase();
        return (
          <button
            key={href}
            onClick={async () =>
              await handleViewChange({ view: label.toLowerCase(), url })
            }
            className={classnames(
              "grid h-10 place-content-center border px-4",
              { "bg-gray-200": isActive },
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
