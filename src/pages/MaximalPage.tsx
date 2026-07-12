import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/MaximalPage.css";

const STORY = {
  hook: "I've spent most of my life thinking I was just average.",
  paragraphs: [
    "What changed wasn't my ability—it was my mindset. I realized that staying average was a choice, and so was becoming something more..",
    "Since then, I've been obsessed with understanding how software really works. I build systems, break them on purpose, fix them, and repeat until I understand not just what works, but why it works. That's the standard I hold myself to now.",
    "I'm looking for a startup where I can take ownership of real problems, whether that's a feature, a service, or an entire product. The chaos doesn't scare me—it excites me. I want to grow alongside the people I work with and the company we're building together.",
  ],
  promiseLead: "If you're hiring, here's what I can promise:",
  promise:
    "I'm 22. I am young and I have nothing tying me down and every reason to bet on myself. I may not know everything yet, but I'll bring curiosity, ownership, and relentless consistency. Talent grows with time; showing up is a choice—and that's a choice I'll make every single day.",
} as const;

const SATELLITES = [
  { word: "curious", x: "8%", y: "18%", delay: 0 },
  { word: "obsessed", x: "78%", y: "14%", delay: 0.4 },
  { word: "ownership", x: "86%", y: "48%", delay: 0.8 },
  { word: "relentless", x: "6%", y: "58%", delay: 1.1 },
  { word: "exceptional", x: "72%", y: "78%", delay: 0.2 },
  { word: "why > what", x: "14%", y: "82%", delay: 1.5 },
] as const;

export function MaximalPage() {
  const navigate = useNavigate();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      root.style.setProperty("--mx", `${x}%`);
      root.style.setProperty("--my", `${y}%`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={rootRef}
      className="mx"
      role="main"
      aria-label="Behind the facade"
      style={{ ["--mx" as string]: "50%", ["--my" as string]: "40%" }}
    >
      <div className="mx__stage" aria-hidden>
        <div className="mx__void" />
        <div className="mx__prism mx__prism--a" />
        <div className="mx__prism mx__prism--b" />
        <div className="mx__prism mx__prism--c" />
        <div className="mx__grid" />
        <div className="mx__spotlight" />
        <p className="mx__watermark">EXCEPTIONAL</p>
        <div className="mx__orbit">
          <span className="mx__node mx__node--1" />
          <span className="mx__node mx__node--2" />
          <span className="mx__node mx__node--3" />
          <span className="mx__ring" />
        </div>
      </div>

      <aside className="mx__rail" aria-hidden>
        <div className="mx__rail-track">
          <span>BUILD · BREAK · LEARN · SHIP · OWN · REPEAT · </span>
          <span>BUILD · BREAK · LEARN · SHIP · OWN · REPEAT · </span>
        </div>
      </aside>

      <div className="mx__exit">
        <p className="mx__exit-hint">
          You still need to know about my projects and work experience — please
          check my portfolio.
        </p>
        <button
          type="button"
          className="mx__close"
          onClick={() => navigate("/")}
          aria-label="Close and return to homepage"
        >
          Return →
        </button>
      </div>

      {SATELLITES.map((item) => (
        <motion.span
          key={item.word}
          className="mx__sat"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.9, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: 0.5 + item.delay, duration: 0.6 },
            scale: { delay: 0.5 + item.delay, duration: 0.6 },
            y: {
              delay: 1 + item.delay,
              duration: 4 + item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          aria-hidden
        >
          {item.word}
        </motion.span>
      ))}

      <article className="mx__center">
        <motion.div
          className="mx__story"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mx__kicker">behind the facade</p>
          <h1 className="mx__hook">{STORY.hook}</h1>

          <div className="mx__body">
            {STORY.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mx__promise">
            <p className="mx__promise-lead">{STORY.promiseLead}</p>
            <p className="mx__promise-copy">{STORY.promise}</p>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
