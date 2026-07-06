import { Section, Eyebrow } from "./primitives/Section";
import { Reveal } from "./primitives/Reveal";
import { aboutFacts, aboutParagraphs } from "../data/content";

export function About() {
  return (
    <Section id="about" ariaLabel="About">
      <Reveal>
        <Eyebrow>About</Eyebrow>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <Reveal>
          <dl className="border-t border-line">
            {aboutFacts.map((fact) => (
              <div
                key={fact.k}
                className="flex justify-between gap-5 border-b border-line py-[18px] font-mono text-[13px]"
              >
                <dt className="shrink-0 text-faint">{fact.k}</dt>
                <dd className="m-0 text-right text-fg">{fact.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-5">
            {aboutParagraphs.map((p, i) => (
              <p key={i} className="max-w-[56ch] text-[17px] leading-relaxed text-ink">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
