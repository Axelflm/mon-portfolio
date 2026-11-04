"use client";

import { useLanguage } from "./components/LanguageProvider";
import About from "./components/sections/About";
import Situation from "./components/sections/Situation";
import Skills from "./components/sections/Skills";
import Career from "./components/sections/Career";

export default function Home() {
  const { t } = useLanguage();

  // Sections temporaires, à remplacer une par une
  const placeholders = [
    { id: "projects", title: t.nav.projects },
    { id: "interests", title: t.nav.interests },
  ];

  return (
    <>
      <About />
      <Situation />
      <Skills />
      <Career />

      {placeholders.map(({ id, title }) => (
        <section
          key={id}
          id={id}
          className="border-t border-slate-800 px-6 py-12 sm:px-12"
        >
          <h2 className="mb-5 text-3xl font-bold">{title}</h2>
          <p className="max-w-3xl text-slate-300">{t.lorem}</p>
        </section>
      ))}
    </>
  );
}