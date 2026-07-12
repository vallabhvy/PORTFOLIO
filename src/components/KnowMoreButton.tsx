import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

export function KnowMoreButton() {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={fadeUp}
      className="know-more relative z-10 flex w-full max-w-[340px] flex-col gap-3"
    >
      <p className="know-more__teaser">
        If you're here to check my profile, this page has all my projects and work experience. But if you're here to know more
        about me…
      </p>

      <button
        type="button"
        className="signal-btn group relative w-full overflow-visible rounded-[999px] px-8 py-[1.05rem] text-left outline-none"
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
    </motion.div>
  );
}
