import { Container } from "./primitives/Container";
import { profile } from "../data/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-9">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[12.5px] text-faint">
          <span>
            © {year} {profile.name}. Built by hand, no template.
          </span>
          <a href="#top" className="transition-colors hover:text-fg">
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
