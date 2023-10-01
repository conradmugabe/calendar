import { Logo } from "@/components/common/logo";
import { HeaderNavigation } from "@/components/layout/header/header-navigation";
import { HeaderDateLabel } from "@/components/layout/header/header-date-label";
import { HeaderTodayNavigation } from "@/components/layout/header/header-today-navigation";
import { CalendarViewToggler } from "@/components/layout/header/header-view-toggler";
import { CalendarSettings } from "@/calendar/services";

type Props = {
  settings: CalendarSettings;
};

export function Header({ settings }: Props) {
  return (
    <header className="p-4 border-b">
      <nav className="flex items-center">
        <Logo />
        <div className="ml-32 flex items-center gap-8">
          <HeaderTodayNavigation />
          <div className="grid grid-cols-2">
            <HeaderNavigation settings={settings} />
          </div>
          <HeaderDateLabel />
        </div>
        <div>
          <CalendarViewToggler settings={settings} />
        </div>
      </nav>
    </header>
  );
}
