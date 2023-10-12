import { cn } from "@/utils/cn-utils";

export function Logo({ className }: { className?: string }) {
  return (
    <h1
      className={cn(
        "text-base sm:text-lg md:text-xl font-semibold text-gray-800",
        className,
      )}
    >
      Calendar
    </h1>
  );
}
