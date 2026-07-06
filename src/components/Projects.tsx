import { Section, Eyebrow, SectionTitle } from "./primitives/Section";
import { Reveal } from "./primitives/Reveal";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/content";

export function Projects() {
  return (
    <Section id="work" ariaLabel="Featured work">
      <Reveal>
        <Eyebrow>Featured work</Eyebrow>
        <SectionTitle>
          Projects I've taken from an empty repo to something that runs.
        </SectionTitle>
      </Reveal>

      <div>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} flip={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}
