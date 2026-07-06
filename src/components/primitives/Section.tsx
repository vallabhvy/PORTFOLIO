import type { ReactNode } from "react";
import { Container } from "./Container";
import { cn } from "../../lib/cn";

export function Section({
  id,
  children,
  className,
  bordered = true,
  ariaLabel,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  ariaLabel?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "py-[72px] md:py-[110px]",
        bordered && "border-b border-line",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-[18px] flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.12em] text-faint">
      <span aria-hidden className="h-px w-[22px] bg-faint" />
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "mb-11 max-w-[720px] font-sans text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-[-0.02em]",
        className
      )}
    >
      {children}
    </h2>
  );
}
