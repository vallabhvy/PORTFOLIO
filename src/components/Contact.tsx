import { FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";
import { Section, Eyebrow } from "./primitives/Section";
import { Reveal } from "./primitives/Reveal";
import { ButtonLink } from "./primitives/Button";
import { profile } from "../data/content";

export function Contact() {
  return (
    <Section id="contact" ariaLabel="Contact" bordered={false}>
      <div className="flex flex-col items-start">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mb-10 max-w-[820px] font-sans text-[clamp(32px,6vw,58px)] font-bold leading-[1.1] tracking-[-0.02em]">
            Building something worth talking about?{" "}
            <a
              href={`mailto:${profile.email}`}
              className="underline decoration-fg decoration-1 underline-offset-[8px] transition-colors hover:decoration-transparent"
            >
              Email me
            </a>{" "}
            — I read everything myself.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-3.5">
            <ButtonLink href={`mailto:${profile.email}`} variant="solid">
              {profile.email}
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
            <ButtonLink
              href={profile.resumeUrl}
              download={profile.resumeDownloadName}
            >
              <FiFileText aria-hidden /> Resume
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
