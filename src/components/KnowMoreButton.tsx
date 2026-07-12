import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

type Props = {
  name: ReactNode;
  status?: ReactNode;
};

export function KnowMoreButton({ name, status }: Props) {
  const navigate = useNavigate();

  return (
    <motion.div variants={fadeUp} className="hero-flow know-more mb-1">
      {status ? <div className="hero-flow__status">{status}</div> : null}

      <div className="hero-flow__name">{name}</div>

      <div className="hero-flow__portal">
        <p className="know-more__teaser">
          If you're here to check my profile, this page has all my projects and
          work experience. But if you're here to know more about me…
        </p>

        <button
          type="button"
          className="signal-btn group relative w-full overflow-visible rounded-[999px] text-left outline-none sm:w-full"
          aria-label="Click here to know more"
          onClick={() => navigate("/behind-the-facade")}
        >
          <span className="signal-btn__void" aria-hidden />
          <span className="signal-btn__prism signal-btn__prism--a" aria-hidden />
          <span className="signal-btn__prism signal-btn__prism--b" aria-hidden />
          <span className="signal-btn__orbit" aria-hidden>
            <span className="signal-btn__node signal-btn__node--1" />
            <span className="signal-btn__node signal-btn__node--2" />
            <span className="signal-btn__node signal-btn__node--3" />
            <span className="signal-btn__ring" />
          </span>
          <span className="signal-btn__label relative z-10 block">
            click here to know
          </span>
        </button>
      </div>
    </motion.div>
  );
}
