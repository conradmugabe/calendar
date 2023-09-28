"use client";

import { useParams, useRouter } from "next/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeaderNavigation() {
  const router = useRouter();
  const params = useParams();

  const currenYear = params?.allParams?.[0] || String(new Date().getFullYear());
  const currentMonth =
    params?.allParams?.[1] || String(new Date().getMonth() + 1);

  function handleMoveToNext() {
    const nextMonth =
      Number(currentMonth) + 1 > 12 ? 1 : Number(currentMonth) + 1;
    const nextYear = nextMonth === 1 ? Number(currenYear) + 1 : currenYear;

    if (
      nextMonth === new Date().getMonth() + 1 &&
      nextYear === new Date().getFullYear()
    ) {
      router.push("/month");
    }
    router.push(`/month/${nextYear}/${nextMonth}/1`);
  }

  function handleMoveToPrev() {
    const prevMonth =
      Number(currentMonth) - 1 < 1 ? 12 : Number(currentMonth) - 1;
    const prevYear = prevMonth === 12 ? Number(currenYear) - 1 : currenYear;
    if (
      prevMonth === new Date().getMonth() + 1 &&
      prevYear === new Date().getFullYear()
    ) {
      router.push("/month");
    }
    router.push(`/month/${prevYear}/${prevMonth}/1`);
  }

  return (
    <>
      <button
        className="h-9 w-9 rounded-full transition duration-300 grid place-content-center hover:bg-gray-100"
        onClick={() => handleMoveToPrev()}
      >
        <ChevronLeft className="stroke-gray-700" />
      </button>
      <button
        className="h-9 w-9 rounded-full transition duration-300 grid place-content-center hover:bg-gray-100"
        onClick={() => handleMoveToNext()}
      >
        <ChevronRight className="stroke-gray-700" />
      </button>
    </>
  );
}
