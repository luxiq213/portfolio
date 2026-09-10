import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <InteractiveTerminal />
      <Timeline />
      <Contact />
    </div>
  );
}
