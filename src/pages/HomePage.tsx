import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Philosophy } from "../components/Philosophy";
import { Experience } from "../components/Experience";
import { Learning } from "../components/Learning";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-fg focus:bg-bg focus:px-4 focus:py-2 focus:font-mono focus:text-[13px]"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <div id="top" />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Philosophy />
        <Experience />
        <Learning />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
