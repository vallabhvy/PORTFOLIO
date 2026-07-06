import { useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { navItems, profile } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";
import { Container } from "./primitives/Container";
import { cn } from "../lib/cn";

const sectionIds = navItems.map((n) => n.href.replace("#", ""));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="font-mono text-[15px] font-semibold tracking-[0.02em]"
            aria-label={`${profile.name} — home`}
          >
            {profile.initials}
            <span className="text-faint">.dev</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative py-1 font-mono text-[13px] tracking-[0.01em] transition-colors",
                    isActive ? "text-fg" : "text-muted hover:text-fg"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-0.5 h-px bg-fg"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center border border-fg md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-px w-4 bg-fg">
              <span
                className={cn(
                  "absolute left-0 block h-px w-4 bg-fg transition-transform duration-200",
                  open ? "top-0 rotate-45" : "-top-[5px]"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-px w-4 bg-fg transition-transform duration-200",
                  open ? "top-0 -rotate-45" : "top-[5px]"
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      <motion.div
        aria-hidden
        className="h-px origin-left bg-fg"
        style={{ scaleX: progress }}
      />

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-line bg-bg md:hidden"
          >
            <Container>
              <div className="flex flex-col py-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-line py-3 font-mono text-[13px] text-muted last:border-none hover:text-fg"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
