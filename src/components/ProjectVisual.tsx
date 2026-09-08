import type { Project } from "../data/content";
import { StatusBadge } from "./StatusBadge";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.thumbnail) {
    const fit = project.thumbnailFit ?? "cover";
    return (
      <div className="relative aspect-4/3 w-full overflow-hidden border border-line bg-panel group">
        <div className="relative flex h-9 items-center gap-1.5 border-b border-line bg-bg/90 px-4 z-10">
          <span className="h-2 w-2 rounded-full border border-fg" />
          <span className="h-2 w-2 rounded-full border border-faint" />
          <span className="h-2 w-2 rounded-full border border-faint" />
          <span className="ml-2 truncate font-mono text-[11px] text-faint">
            {project.name.toLowerCase().replace(/\s+/g, "-")} — {project.category.toLowerCase()}
          </span>
          <div className="ml-auto">
            <StatusBadge status={project.status} />
          </div>
        </div>
        <div className={`relative h-[calc(100%-2.25rem)] w-full overflow-hidden ${fit === "contain" ? "flex items-center justify-center bg-panel" : "bg-bg"}`}>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={fit === "contain" ? "flex h-full w-full items-center justify-center p-6" : "block h-full w-full"}
            >
              <img
                src={project.thumbnail}
                alt={`${project.name} preview`}
                className={fit === "contain"
                  ? "max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  : "h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                }
              />
              {/* Hover overlay */}
              <span className="absolute inset-0 top-9 flex items-center justify-center bg-fg/0 transition-colors duration-300 group-hover:bg-fg/60">
                <span className="flex items-center gap-2 font-mono text-[14px] font-medium text-bg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Visit site
                  <svg aria-hidden viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path d="M4 12L12 4M12 4H5M12 4v7" />
                  </svg>
                </span>
              </span>
            </a>
          ) : (
            <img
              src={project.thumbnail}
              alt={`${project.name} preview`}
              className={fit === "contain"
                ? "max-h-full max-w-full object-contain"
                : "h-full w-full object-cover object-top"
              }
            />
          )}
        </div>
      </div>
    );
  }

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
