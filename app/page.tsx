import About from "./components/sections/About";
import Situation from "./components/sections/Situation";
import Skills from "./components/sections/Skills";
import Career from "./components/sections/Career";
import Projects from "./components/sections/Projects";
import Interests from "./components/sections/Interests";

export default function Home() {
  return (
    <>
      <About />
      <Situation />
      <Skills />
      <Career />
      <Projects />
      <Interests />
    </>
  );
}