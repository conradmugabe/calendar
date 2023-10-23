import { nextAuthOptions } from "@/auth/next-auth";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/common/dropdown-menu";
import { Logo } from "@/components/common/logo";

import { Header } from "@/components/layout";
import { HeaderSheet } from "@/components/layout/header/header-sheet";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(nextAuthOptions);
  const user = session?.user;

  return (
    <main className="h-screen w-screen overflow-hidden">
      <header className="flex items-center justify-between p-1">
        <div>
          <Logo className="hidden md:block" />
          <HeaderSheet />
        </div>
        <div className="flex items-center gap-2">
          <button className="h-8 w-8 border-2 md:hidden"></button>
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full">
              <Avatar className="h-8 w-8 md:h-10 md:w-10">
                <AvatarImage src={user?.image || ""} alt={user?.name || ""} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/api/auth/signout" className="">
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main>
        <aside></aside>
        {children}
      </main>
    </main>
  );
}
