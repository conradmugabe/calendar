import { cn } from "@/utils/cn-utils";

export function Logo({ className }: { className?: string }) {
  return (
    <h1
      className={cn(
        "text-base font-semibold text-gray-800 sm:text-lg md:text-xl",
        className,
      )}
    >
      Calendar
    </h1>
  );
}
