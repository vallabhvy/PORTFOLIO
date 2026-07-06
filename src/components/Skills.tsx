import { motion } from "framer-motion";
import { Section, Eyebrow, SectionTitle } from "./primitives/Section";
import { Reveal } from "./primitives/Reveal";
import { skillGroups } from "../data/content";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

export function Skills() {
  return (
    <Section id="skills" ariaLabel="Skills">
      <Reveal>
        <Eyebrow>Skills</Eyebrow>
        <SectionTitle>What I actually use, day to day.</SectionTitle>
      </Reveal>

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 border-l border-t border-line xs:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <motion.li
            key={group.title}
            variants={fadeUp}
            className="border-b border-r border-line p-7"
          >
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-faint">
              {group.title}
            </h3>
            <ul className="flex flex-col gap-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-[14px] text-fg">
                  {item}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
