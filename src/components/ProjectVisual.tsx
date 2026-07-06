import type { Project } from "../data/content";
import { StatusBadge } from "./StatusBadge";

export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="relative aspect-4/3 w-full overflow-hidden border border-line bg-panel">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative flex h-9 items-center gap-1.5 border-b border-line bg-bg/70 px-4">
        <span className="h-2 w-2 rounded-full border border-fg" />
        <span className="h-2 w-2 rounded-full border border-faint" />
        <span className="h-2 w-2 rounded-full border border-faint" />
        <span className="ml-2 truncate font-mono text-[11px] text-faint">
          {project.name.toLowerCase().replace(/\s+/g, "-")} — {project.category.toLowerCase()}
        </span>
      </div>

      <div className="relative flex h-[calc(100%-2.25rem)] flex-col justify-between p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="font-mono text-[13px] text-faint">
            {project.index}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <div className="font-mono leading-none text-fg">
          <span className="block text-[clamp(40px,7vw,72px)] font-bold tracking-[-0.04em]">
            {project.name.split(" ")[0]}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {project.stack.map((tech) =>
            tech.icon ? (
              <span
                key={tech.name}
                title={tech.name}
                className="flex h-9 w-9 items-center justify-center border border-line bg-bg text-fg"
              >
                <tech.icon aria-hidden size={18} />
                <span className="sr-only">{tech.name}</span>
              </span>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
