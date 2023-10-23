import { CreateEventButton } from "./create-event-button";
import { SmallCalendar } from "./small-calendar";

export function SideNav() {
  return (
    <aside className="w-72 space-y-8 p-4">
      <CreateEventButton />
      <SmallCalendar />
    </aside>
  );
}
