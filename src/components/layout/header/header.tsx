import { auth } from "@clerk/nextjs";

import { Logo } from "@/components/common/logo";
import { HeaderNavigation } from "@/components/layout/header/header-navigation";
import { HeaderDateLabel } from "@/components/layout/header/header-date-label";
import { HeaderTodayNavigation } from "@/components/layout/header/header-today-navigation";
import { CalendarViewToggler } from "@/components/layout/header/header-view-toggler";
import { calendarSettingsService } from "@/calendar";
import { ProfileDropdown } from "@/components/compound/profile-dropdown";

export async function Header() {
  const { userId } = auth();
  if (!userId) return null;

  const settings = await calendarSettingsService.get({ userId });

  return (
    <header className="border-b p-4">
      <nav className="flex items-center">
        <Logo />
        <div className="ml-32 flex items-center gap-8">
          <HeaderTodayNavigation />
          <div className="grid grid-cols-2">
            <HeaderNavigation settings={settings} />
          </div>
          <HeaderDateLabel />
        </div>
        <div className="ml-auto flex items-center space-x-2">
          <CalendarViewToggler settings={settings} />
          <ProfileDropdown />
        </div>
      </nav>
    </header>
  );
}
