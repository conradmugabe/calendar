import Link from "next/link";

import { Logo } from "@/components/common/logo";
import { HeaderNavigation } from "@/components/layout/header-navigation";
import { HeaderDateLabel } from "@/components/layout/header-date-label";

export function Header() {
  return (
    <header className="p-4 border-b">
      <nav className="flex items-center">
        <Logo />
        <div className="ml-32 flex items-center gap-8">
          <Link
            href={"/month"}
            className="h-9 px-4 border border-gray-300 rounded text-sm font-medium grid place-content-center transition duration-300 hover:bg-gray-100"
          >
            Today
          </Link>
          <div className="grid grid-cols-2">
            <HeaderNavigation />
          </div>
          <HeaderDateLabel />
        </div>
      </nav>
    </header>
  );
}
