import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Options = {
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
};

export function useTypewriter(
  phrases: readonly string[],
  { typeSpeed = 34, deleteSpeed = 22, holdTime = 1600 }: Options = {}
) {
  const reduced = useReducedMotion();
  const [text, setText] = useState(reduced ? phrases[0] ?? "" : "");
  const state = useRef({ phrase: 0, char: 0, deleting: false });

  useEffect(() => {
    if (reduced || phrases.length === 0) return;

    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const s = state.current;
      const full = phrases[s.phrase];

      if (!s.deleting) {
        s.char += 1;
        setText(full.slice(0, s.char));
        if (s.char === full.length) {
          s.deleting = true;
          timer = setTimeout(tick, holdTime);
          return;
        }
      } else {
        s.char -= 1;
        setText(full.slice(0, s.char));
        if (s.char === 0) {
          s.deleting = false;
          s.phrase = (s.phrase + 1) % phrases.length;
        }
      }
      timer = setTimeout(tick, s.deleting ? deleteSpeed : typeSpeed);
    };

    timer = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timer);
  }, [phrases, reduced, typeSpeed, deleteSpeed, holdTime]);

  return { text, caret: !reduced };
}
