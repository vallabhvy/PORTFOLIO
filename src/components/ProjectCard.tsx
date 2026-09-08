import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { Project } from "../data/content";
import { ProjectVisual } from "./ProjectVisual";
import { StatusBadge } from "./StatusBadge";
import { fadeUp, viewportOnce, stagger } from "../lib/motion";
import { cn } from "../lib/cn";

export function ProjectCard({
  project,
  flip,
  hero = false,
}: {
  project: Project;
  flip: boolean;
  hero?: boolean;
}) {
  if (hero) {
    return (
      <motion.article
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mb-14 border-b border-line pb-14"
      >
        {/* Full-width thumbnail */}
        <motion.div variants={fadeUp} className="mb-10">
          <ProjectVisual project={project} />
        </motion.div>

        {/* Info below */}
        <motion.div variants={fadeUp}>
          <p className="mb-2.5 font-mono text-[13px] text-faint">
            {project.index} / {project.category}
          </p>
          <div className="mb-3.5 flex flex-wrap items-center gap-3">
            <h3 className="font-sans text-[clamp(26px,4vw,38px)] font-bold tracking-[-0.02em]">
              {project.name}
            </h3>
            {project.featured && <FeaturedBadge />}
            <StatusBadge status={project.status} />
          </div>
          <p className="mb-4 max-w-[80ch] text-[15.5px] leading-relaxed text-ink">
            {project.summary}
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {project.blocks.map((block) => (
              <div key={block.label}>
                <dt className="mb-1.5 font-mono text-[11.5px] uppercase tracking-[0.08em] text-faint">
                  {block.label}
                </dt>
                <dd className="m-0 text-[15px] leading-relaxed text-ink">
                  {block.body}
                </dd>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech.name}
                  className="flex items-center gap-1.5 border border-line px-2.5 py-1 font-mono text-[12px]"
                >
                  {tech.icon && <tech.icon aria-hidden size={13} />}
                  {tech.name}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 border-b border-fg pb-0.5 font-mono text-[13px]"
                >
                  <FiGithub aria-hidden /> GitHub
                  <FiArrowUpRight
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}
              {project.demo && <DemoButton href={project.demo} />}
            </div>
          </div>
        </motion.div>
      </motion.article>
    );
  }

  return (
    <motion.article
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="grid grid-cols-1 items-center gap-8 border-b border-line py-14 first:pt-0 last:border-none last:pb-0 md:grid-cols-2 md:gap-14"
    >
      <motion.div
        variants={fadeUp}
        className={cn("md:order-1", flip && "md:order-2")}
      >
        <ProjectVisual project={project} />
      </motion.div>

      <motion.div
        variants={fadeUp}
        className={cn("md:order-2", flip && "md:order-1")}
      >
        <p className="mb-2.5 font-mono text-[13px] text-faint">
          {project.index} / {project.category}
        </p>
        <div className="mb-3.5 flex flex-wrap items-center gap-3">
          <h3 className="font-sans text-[clamp(22px,3vw,30px)] font-bold tracking-[-0.01em]">
            {project.name}
          </h3>
          {project.featured && <FeaturedBadge />}
          <StatusBadge status={project.status} />
        </div>
        <p className="mb-4 max-w-[60ch] text-[15.5px] leading-relaxed text-ink">
          {project.summary}
        </p>

        <dl className="mt-6">
          {project.blocks.map((block) => (
            <div key={block.label} className="mb-4 last:mb-0">
              <dt className="mb-1.5 font-mono text-[11.5px] uppercase tracking-[0.08em] text-faint">
                {block.label}
              </dt>
              <dd className="m-0 max-w-[60ch] text-[15px] leading-relaxed text-ink">
                {block.body}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech.name}
              className="flex items-center gap-1.5 border border-line px-2.5 py-1 font-mono text-[12px]"
            >
              {tech.icon && <tech.icon aria-hidden size={13} />}
              {tech.name}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 border-b border-fg pb-0.5 font-mono text-[13px]"
            >
              <FiGithub aria-hidden /> GitHub
              <FiArrowUpRight
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}
          {project.demo && <DemoButton href={project.demo} />}
        </div>
      </motion.div>
    </motion.article>
  );
}

/* ── Featured badge ── */
function FeaturedBadge() {
  return (
    <span className="inline-flex items-center gap-1 whitespace-nowrap bg-fg px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-bg">
      <svg
        aria-hidden
        viewBox="0 0 12 12"
        fill="currentColor"
        className="h-2.5 w-2.5"
      >
        <path d="M6 0l1.76 3.57L12 4.14 8.88 7.1l.74 4.32L6 9.27 2.38 11.42l.74-4.32L0 4.14l4.24-.57z" />
      </svg>
      Featured
    </span>
  );
}

/* ── Prominent demo button ── */
function DemoButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 bg-fg px-4 py-2 font-mono text-[13px] font-medium text-bg transition-opacity hover:opacity-80"
    >
      Live demo
      <FiArrowUpRight
        aria-hidden
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}
