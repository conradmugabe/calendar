import { CreateEventButton } from "./create-event-button";
import { SmallCalendar } from "./small-calendar";

export function SideNav() {
  return (
    <aside className="w-72 p-4 space-y-8">
      <CreateEventButton />
      <SmallCalendar />
    </aside>
  );
}
