import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

type Variant = "solid" | "ghost";

const base =
  "inline-flex items-center gap-2 border border-fg px-[22px] py-[13px] font-mono text-[13px] tracking-[0.02em] transition-colors duration-150";

const variants: Record<Variant, string> = {
  solid: "bg-fg text-bg hover:bg-[#2a2a2a]",
  ghost: "bg-transparent text-fg hover:bg-fg hover:text-bg",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
};

export function ButtonLink({
  variant = "ghost",
  className,
  children,
  ...rest
}: Props) {
  return (
    <a className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}
