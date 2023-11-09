"use client";

import { UserButton, useUser } from "@clerk/nextjs";

import { Skeleton } from "@/components/common/skeleton";

export function ProfileDropdown() {
  const { isLoaded, user } = useUser();

  if (isLoaded && user) return <UserButton afterSignOutUrl="/" />;

  return <Skeleton className="h-8 w-8 rounded-full bg-gray-400" />;
}
