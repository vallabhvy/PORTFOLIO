import { motion } from "framer-motion";
import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { profile, heroTyping } from "../data/content";
import { useTypewriter } from "../hooks/useTypewriter";
import { Container } from "./primitives/Container";
import { ButtonLink } from "./primitives/Button";
import { fadeUp, stagger } from "../lib/motion";

export function Hero() {
  const { text, caret } = useTypewriter(heroTyping);

  return (
    <section
      className="flex min-h-[calc(100svh-4rem)] flex-col justify-center border-b border-line py-24 md:py-28"
      aria-label="Introduction"
    >
      <Container>
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.p
            variants={fadeUp}
            className="mb-7 flex items-center gap-2.5 font-mono text-[13px] text-muted"
          >
            <span className="relative flex h-[7px] w-[7px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fg opacity-40" />
              <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-fg" />
            </span>
            {profile.location} — {profile.availability}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mb-1 font-sans text-[clamp(42px,8vw,84px)] font-bold leading-[1.02] tracking-[-0.03em]"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mb-8 mt-3.5 max-w-[640px] font-mono text-[clamp(15px,2vw,19px)] leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mb-10 max-w-[640px] border border-line bg-panel px-[22px] py-5 font-mono text-[clamp(14px,1.6vw,16px)]"
          >
            <div className="text-faint">// what I've been building</div>
            <div className="min-h-[3.2em] sm:min-h-[2.6em]">
              <span>{text}</span>
              {caret && (
                <span className="ml-0.5 inline-block w-[0.5ch] animate-pulse">
                  ▌
                </span>
              )}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3.5">
            <ButtonLink href="#work" variant="solid">
              View projects
            </ButtonLink>
            <ButtonLink
              href={profile.resumeUrl}
              download={profile.resumeDownloadName}
            >
              <FiDownload aria-hidden /> Download resume
            </ButtonLink>
            <ButtonLink
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub aria-hidden /> GitHub
            </ButtonLink>
            <ButtonLink
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin aria-hidden /> LinkedIn
            </ButtonLink>
          </motion.div>
        </motion.div>
      </Container>

      <Container className="mt-16 hidden md:block">
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="inline-flex items-center gap-2 font-mono text-[12px] text-faint transition-colors hover:text-fg"
        >
          Scroll to read more <FiArrowUpRight aria-hidden className="rotate-90" />
        </motion.a>
      </Container>
    </section>
  );
}
