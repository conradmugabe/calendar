"use client";
import { useParams, usePathname } from "next/navigation";

import dayjs from "dayjs";

export function HeaderDateLabel() {
  const params = useParams();
  const pathname = usePathname();

  let year = params?.allParams?.[0] || String(new Date().getFullYear());
  let month = params?.allParams?.[1] || String(new Date().getMonth() + 1);
  const date = new Date(Number(year), Number(month) - 1);

  if (pathname.startsWith("/year")) {
    return <span>{year}</span>;
  }
  return <span>{dayjs(date).format("MMMM YYYY")}</span>;
}
