import { Section, Eyebrow, SectionTitle } from "./primitives/Section";
import { Reveal } from "./primitives/Reveal";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardCompact } from "./ProjectCardCompact";
import { projects } from "../data/content";

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);

export function Projects() {
  return (
    <Section id="work" ariaLabel="Featured work">
      <Reveal>
        <Eyebrow>Featured work</Eyebrow>
        <SectionTitle>
          Projects I've taken from an empty repo to something that runs.
        </SectionTitle>
      </Reveal>

      {/* Hero: first featured project gets full-width layout */}
      {featured.length > 0 && (
        <ProjectCard project={featured[0]} flip={false} hero />
      )}

      {/* Remaining featured projects in alternating layout */}
      <div>
        {featured.slice(1).map((project, i) => (
          <ProjectCard key={project.id} project={project} flip={i % 2 === 1} />
        ))}
      </div>

      {/* Other projects — compact grid */}
      {others.length > 0 && (
        <div className="mt-20">
          <Reveal>
            <Eyebrow>More projects</Eyebrow>
            <h3 className="mb-10 max-w-[600px] font-sans text-[clamp(20px,3vw,28px)] font-bold leading-[1.15] tracking-[-0.01em]">
              Other things I've built along the way.
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((project) => (
              <ProjectCardCompact key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
