"use client";

import { usePathname, useRouter } from "next/navigation";

export function HeaderTodayNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  function handleOnClick() {
    if (pathname.startsWith("/month")) {
      router.push("/month");
      return;
    } else if (pathname.startsWith("/year")) {
      router.push("/year");
      return;
    } else if (pathname.startsWith("/day")) {
      router.push("/day");
      return;
    }
  }

  return (
    <button
      onClick={handleOnClick}
      className="h-9 px-4 border border-gray-300 rounded text-sm font-medium grid place-content-center transition duration-300 hover:bg-gray-100"
    >
      Today
    </button>
  );
}
