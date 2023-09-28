"use client";

import { useParams, useRouter } from "next/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeaderNavigation() {
  const router = useRouter();
  const params = useParams();

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const year = params?.allParams?.[0] || String(currentYear);
  const month = params?.allParams?.[1] || String(currentMonth);

  function handleMoveToNext() {
    const nextMonth = Number(month) + 1 > 12 ? 1 : Number(month) + 1;
    const nextYear = nextMonth === 1 ? Number(year) + 1 : Number(year);
    if (nextMonth === currentMonth && nextYear === currentYear) {
      router.push("/month");
      return;
    }
    router.push(`/month/${nextYear}/${nextMonth}/1`);
  }

  function handleMoveToPrev() {
    const prevMonth = Number(month) - 1 < 1 ? 12 : Number(month) - 1;
    const prevYear = prevMonth === 12 ? Number(year) - 1 : Number(year);
    if (prevMonth === currentMonth && prevYear === currentYear) {
      router.push("/month");
      return;
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
