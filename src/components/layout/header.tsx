import Link from "next/link";

import { Logo } from "@/components/common/logo";
import { HeaderNavigation } from "@/components/layout/header-navigation";
import { HeaderDateLabel } from "@/components/layout/header-date-label";
import { HeaderTodayNavigation } from "@/components/layout/header-today-navigation";

export function Header() {
  return (
    <header className="p-4 border-b">
      <nav className="flex items-center">
        <Logo />
        <div className="ml-32 flex items-center gap-8">
          <HeaderTodayNavigation />
          <div className="grid grid-cols-2">
            <HeaderNavigation />
          </div>
          <HeaderDateLabel />
        </div>
      </nav>
    </header>
  );
}
