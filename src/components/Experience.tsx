import { Section, Eyebrow } from "./primitives/Section";
import { Reveal } from "./primitives/Reveal";
import { experience } from "../data/content";

export function Experience() {
  return (
    <Section id="experience" ariaLabel="Experience">
      <Reveal>
        <Eyebrow>Experience</Eyebrow>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-[22px] font-bold">{experience.title}</h3>
          <span className="font-mono text-[13px] text-faint">
            {experience.dates}
          </span>
        </div>
        <p className="mb-7 font-mono text-[13px] text-muted">{experience.org}</p>
      </Reveal>

      <ul className="max-w-[820px] space-y-4">
        {experience.points.map((point, i) => (
          <Reveal as="li" key={i} delay={0.04 * i}>
            <span className="relative block pl-[22px] text-[15.5px] leading-relaxed text-ink before:absolute before:left-0 before:text-faint before:content-['—']">
              {point}
            </span>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
