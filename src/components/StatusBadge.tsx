import { cn } from "../lib/cn";

export function StatusBadge({ status }: { status: string }) {
  const active = status.toLowerCase() === "active";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em]",
        active ? "border border-line text-faint" : "bg-fg text-bg"
      )}
      aria-label={`Status: ${status}`}
    >
      <span className="relative flex h-[6px] w-[6px]">
        {!active && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bg opacity-70" />
        )}
        <span
          className={cn(
            "relative inline-flex h-[6px] w-[6px] rounded-full",
            active ? "bg-faint" : "bg-bg"
          )}
        />
      </span>
      {status}
    </span>
  );
}
