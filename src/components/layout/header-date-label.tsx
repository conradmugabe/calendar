"use client";
import { useParams } from "next/navigation";

import dayjs from "dayjs";

export function HeaderDateLabel() {
  const params = useParams();

  let year = params?.allParams?.[0] || String(new Date().getFullYear());
  let month = params?.allParams?.[1] || String(new Date().getMonth() + 1);
  const date = new Date(Number(year), Number(month) - 1);

  return <span>{dayjs(date).format("MMMM YYYY")}</span>;
}
