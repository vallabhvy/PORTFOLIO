import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { Project } from "../data/content";
import { StatusBadge } from "./StatusBadge";
import { fadeUp, viewportOnce } from "../lib/motion";

export function ProjectCardCompact({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="group flex flex-col border border-line bg-panel p-6 transition-colors hover:bg-bg"
    >
      {/* Header */}
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="font-mono text-[12px] text-faint">
          {project.index}
        </span>
        <StatusBadge status={project.status} />
      </div>

      {/* Title */}
      <h4 className="mb-2 font-sans text-[18px] font-bold leading-snug tracking-[-0.01em]">
        {project.name}
      </h4>

      {/* Category */}
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
        {project.category}
      </p>

      {/* Summary */}
      <p className="mb-5 flex-1 text-[14px] leading-relaxed text-ink line-clamp-3">
        {project.summary}
      </p>

      {/* Tech stack — icons only */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) =>
          tech.icon ? (
            <span
              key={tech.name}
              title={tech.name}
              className="flex h-7 w-7 items-center justify-center border border-line bg-bg text-fg"
            >
              <tech.icon aria-hidden size={14} />
              <span className="sr-only">{tech.name}</span>
            </span>
          ) : (
            <span
              key={tech.name}
              className="flex h-7 items-center border border-line bg-bg px-2 font-mono text-[10px] text-faint"
            >
              {tech.name}
            </span>
          )
        )}
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4 border-t border-line pt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[12px] text-muted transition-colors hover:text-fg"
          >
            <FiGithub aria-hidden size={13} /> GitHub
            <FiArrowUpRight aria-hidden size={12} />
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[12px] text-muted transition-colors hover:text-fg"
          >
            Live demo
            <FiArrowUpRight aria-hidden size={12} />
          </a>
        )}
      </div>
    </motion.article>
  );
}
