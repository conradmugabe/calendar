import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/components/common/logo";
import calendarViewPic from "../../../../public/calendar.png";

export function LandingPage() {
  return (
    <section className="h-screen w-screen overflow-hidden bg-gray-100">
      <div className="mx-auto h-full max-w-5xl p-1 sm:px-4 xl:px-0">
        <header className="flex items-center justify-between py-2 sm:py-4 lg:py-6">
          <Link href="/">
            <Logo />
          </Link>
          <Link href="/sign-in">
            <button className="h-10 whitespace-nowrap rounded-md bg-gray-800 px-4 text-sm font-medium text-white hover:shadow-lg">
              Log in
            </button>
          </Link>
        </header>
        <div className="relative">
          <div className="absolute -left-72 h-96 w-96 rounded-full bg-purple-100 blur-xl md:-left-40 md:top-10" />
          <div className="absolute -bottom-[28rem] -right-20 h-96 w-96 rounded-full bg-yellow-100 blur-3xl md:-bottom-96 md:-right-12" />
          <div className="relative flex flex-col items-center space-y-5 pt-16 lg:pt-20">
            <h1 className="text-center text-4xl font-semibold text-gray-800 md:text-5xl">
              Online Calendar
            </h1>
            <p className="mx-auto px-2 text-center text-sm font-normal text-gray-500 md:w-8/12 md:text-base">
              Make scheduling easy for you. Features that help you create
              events, invite others, manage group calendars, and organize team
              events with shareable calendars.
            </p>
            <div className="space-x-2">
              <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold tracking-wide text-gray-800 shadow-md">
                Share
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold tracking-wide text-gray-800 shadow-md">
                Schedule
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold tracking-wide text-gray-800 shadow-md">
                Organize
              </span>
            </div>
          </div>
        </div>
        <div className="relative mt-16 h-full overflow-hidden rounded-3xl">
          <Image
            src={calendarViewPic}
            alt="calendar view"
            className="object-cover"
            fill
            priority
          />
        </div>
      </div>
    </section>
  );
}
