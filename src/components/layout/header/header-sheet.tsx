"use client";
import Link from "next/link";

import dayjs from "dayjs";
import classNames from "classnames";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/common/sheet";
import { Button, buttonVariants } from "@/components/common/button";
import { Logo } from "@/components/common/logo";
import { useCalendarUrl } from "@/hooks/use-calendar-url";

const links = [
  { href: "/day", label: "Day" },
  { href: "/week", label: "Week" },
  { href: "/month", label: "Month" },
];

export function HeaderSheet() {
  const { date, view } = useCalendarUrl();
  const isToday =
    dayjs().format("YYYY-MM-DD") === dayjs(date).format("YYYY-MM-DD");

  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-8 w-8 md:h-10 md:w-10" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 pr-4">
        <SheetHeader>
          <SheetTitle className="p-3 text-left">
            <Logo className="text-3xl" />
          </SheetTitle>
        </SheetHeader>
        <div className="mt-10 grid gap-1">
          {links.map(({ href, label }) => {
            const endingUrl = isToday
              ? ""
              : `/${date.getFullYear()}/${
                  date.getMonth() + 1
                }/${date.getDate()}`;

            const url = `${href}${endingUrl}`;
            const isActive = view === label.toLowerCase();
            return (
              <Link
                key={href}
                href={url}
                className={buttonVariants({
                  className: classNames(
                    "rounded-l-none rounded-r-full",
                    { "bg-gray-800 text-white": isActive },
                    { "bg-white text-gray-800 hover:bg-gray-200": !isActive },
                  ),
                })}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
