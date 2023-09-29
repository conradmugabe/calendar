import { Plus } from "lucide-react";

export function CreateEventButton() {
  return (
    <button className="h-14 px-8 flex items-center gap-3 rounded-full shadow-md shadow-black/20 transition duration-300 hover:shadow-lg hover:shadow-black/25">
      <Plus className="stroke-[3]" />
      <span className="text-sm font-medium">Create</span>
    </button>
  );
}
