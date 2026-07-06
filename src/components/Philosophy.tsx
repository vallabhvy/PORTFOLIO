import { motion } from "framer-motion";
import { Section, Eyebrow, SectionTitle } from "./primitives/Section";
import { Reveal } from "./primitives/Reveal";
import { philosophy } from "../data/content";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

export function Philosophy() {
  return (
    <Section id="philosophy" ariaLabel="Engineering philosophy">
      <Reveal>
        <Eyebrow>Engineering philosophy</Eyebrow>
        <SectionTitle>How I actually think about building software.</SectionTitle>
      </Reveal>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-4"
      >
        {philosophy.map((item, i) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className="border-t border-fg pt-5"
          >
            <span className="mb-4 block font-mono text-[12px] text-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mb-2.5 text-[18px] font-semibold leading-snug">
              {item.title}
            </h3>
            <p className="text-[14.5px] leading-relaxed text-muted">{item.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
