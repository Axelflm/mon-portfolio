"use client";

import { useLanguage } from "./components/LanguageProvider";
import About from "./components/sections/About";
import Situation from "./components/sections/Situation";
import Skills from "./components/sections/Skills";
import Career from "./components/sections/Career";
import Projects from "./components/sections/Projects";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <About />
      <Situation />
      <Skills />
      <Career />
      <Projects />

      {/* Section temporaire, à remplacer */}
      <section
        id="interests"
        className="border-t border-slate-800 px-6 py-12 sm:px-12"
      >
        <h2 className="mb-5 text-3xl font-bold">{t.nav.interests}</h2>
        <p className="max-w-3xl text-slate-300">{t.lorem}</p>
      </section>
    </>
  );
}