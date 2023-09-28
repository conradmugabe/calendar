import dayjs from "dayjs";

import { Logo } from "@/components/common/logo";
import { HeaderNavigation } from "./header-navigation";

export function Header() {
  const currentMonth = dayjs().month();

  return (
    <header className="p-4 border-b">
      <nav className="flex items-center">
        <Logo />
        <div className="ml-32 flex items-center gap-8">
          <button className="h-9 px-4 border border-gray-300 rounded text-sm font-medium">
            Today
          </button>
          <div className="grid grid-cols-2">
            <HeaderNavigation />
          </div>
          <span>
            {dayjs(new Date(dayjs().year(), currentMonth)).format("MMMM YYYY")}
          </span>
        </div>
      </nav>
    </header>
  );
}
