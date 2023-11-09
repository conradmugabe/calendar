"use client";

import { UserButton, useUser } from "@clerk/nextjs";

export function ProfileDropdown() {
  const { isLoaded, user } = useUser();

  if (isLoaded && user) return <UserButton afterSignOutUrl="/" />;

  return <div>Loading...</div>;
}
