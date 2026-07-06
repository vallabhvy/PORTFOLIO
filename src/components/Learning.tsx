import { motion } from "framer-motion";
import { Section, Eyebrow, SectionTitle } from "./primitives/Section";
import { Reveal } from "./primitives/Reveal";
import { timeline, learning } from "../data/content";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

export function Learning() {
  return (
    <Section id="learning" ariaLabel="Education and what's next">
      <Reveal>
        <Eyebrow>Education &amp; what's next</Eyebrow>
        <SectionTitle>
          Where I've been, and what I'm currently reading up on.
        </SectionTitle>
      </Reveal>

      <Reveal>
        <ol className="mb-16 ml-1.5 list-none border-l border-line pl-8">
          {timeline.map((item) => (
            <li key={item.title} className="relative pb-9 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[35px] top-1 h-[9px] w-[9px] rounded-full border border-fg bg-bg"
              />
              <div className="mb-1.5 font-mono text-[12.5px] text-faint">
                {item.year}
              </div>
              <h3 className="mb-1.5 text-[17px] font-semibold">{item.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-muted">
                {item.desc}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal>
        <Eyebrow>Currently learning</Eyebrow>
      </Reveal>

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
      >
        {learning.map((item) => (
          <motion.li
            key={item.name}
            variants={fadeUp}
            className="flex flex-col gap-3 bg-bg p-5"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[13.5px] font-medium text-fg">
                {item.name}
              </span>
              {item.icon && (
                <item.icon aria-hidden size={16} className="text-faint" />
              )}
            </div>
            <span className="text-[13px] leading-snug text-muted">
              {item.note}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
