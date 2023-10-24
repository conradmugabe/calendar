import { Link } from "lucide-react";
import { getServerSession } from "next-auth";

import { nextAuthOptions } from "@/auth/next-auth";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/common/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/common/dropdown-menu";

export async function ProfileDropdown() {
  const session = await getServerSession(nextAuthOptions);
  const user = session?.user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full">
        <Avatar className="h-8 w-8 md:h-10 md:w-10">
          <AvatarImage src={user?.image || ""} alt={user?.name || ""} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/api/auth/signout" className="">
            Logout
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
