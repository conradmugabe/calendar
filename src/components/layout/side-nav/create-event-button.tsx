"use client";

import { lazy, useState } from "react";

import { Plus, X } from "lucide-react";
import { CreateEventForm } from "@/forms/event-form";

const Overlay = lazy(() => import("@/components/common/overlay"));

export function CreateEventButton() {
  const [isOpen, setIsOpen] = useState(false);

  function onClose() {
    setIsOpen(false);
  }

  function onOpen() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        className="flex h-14 items-center gap-3 rounded-full px-8 shadow-md shadow-black/20 transition duration-300 hover:shadow-lg hover:shadow-black/25"
        onClick={() => {
          onOpen();
        }}
      >
        <Plus className="stroke-[3]" />
        <span className="text-sm font-medium">Create</span>
      </button>
      <Overlay isOpen={isOpen} onClose={onClose}>
        <div
          className="w-96 overflow-hidden rounded-md bg-white shadow-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between bg-gray-100 px-4 py-2">
            <div />
            <button
              onClick={() => onClose()}
              className="grid h-6 w-6 place-content-center rounded-full transition duration-300 hover:bg-gray-200"
            >
              <X size={16} />
            </button>
          </div>
          <CreateEventForm onClose={onClose} />
        </div>
      </Overlay>
    </>
  );
}
