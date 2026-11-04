"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import type { Dict } from "../lib/translations";

// À remplacer par tes vraies infos
const FULL_NAME = "FLAMENT-RICH Axel";
const EMAIL = "axflament@gmail.com";
const PHONE = "07 66 04 82 74";
const LINKEDIN_URL = "https://www.linkedin.com/in/axel-flament-a9b350259/";

const SECTIONS: { id: string; icon: string; key: keyof Dict["nav"] }[] = [
  { id: "about", icon: "🪪", key: "about" },
  { id: "situation", icon: "📋", key: "situation" },
  { id: "skills", icon: "⭐️", key: "skills" },
  { id: "career", icon: "🏫", key: "career" },
  { id: "projects", icon: "📜", key: "projects" },
  { id: "interests", icon: "🎯", key: "interests" },
];

export default function Header() {
  const { lang, t, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(SECTIONS[0].id);

  // Détecte la section visible pendant le scroll
  useEffect(() => {
    const onScroll = () => {
      let current = SECTIONS[0].id;

      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = id;
        }
      }

      // Tout en bas de la page : on force la dernière section
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) current = SECTIONS[SECTIONS.length - 1].id;

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const goTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false); // referme le menu sur petit écran
  };

  return (
    <>
      {/* Bouton menu : petits écrans uniquement, fixe, au premier plan */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
        aria-expanded={open}
        className="fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-lg bg-slate-700 text-xl text-white shadow-lg hover:bg-slate-600 lg:hidden"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Bandeau latéral */}
      <aside
        className={`fixed left-0 top-0 z-40 flex h-dvh w-72 max-w-[85vw] flex-col overflow-y-auto border-r border-slate-800 bg-slate-900 px-5 pb-6 pt-20 text-white shadow-xl transition-transform duration-500 ease-in-out lg:w-[max(20vw,260px)] lg:max-w-none lg:translate-x-0 lg:pt-8 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* BLOC 1 : photo + nom + contacts */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/photo_identite.jpeg"
            alt={FULL_NAME}
            width={140}
            height={140}
            priority
            className="h-35 w-35 rounded-full border-4 border-slate-700 object-cover"
          />
          <h1 className="mt-4 text-xl font-bold tracking-wide">{FULL_NAME}</h1>
        </div>

        <ul className="mt-5 space-y-2 text-sm text-slate-300">
          <li className="flex gap-2">
            <span>✉️</span>
            <a href={`mailto:${EMAIL}`} className="break-all hover:text-white">
              {EMAIL}
            </a>
          </li>
          <li className="flex gap-2">
            <span>📞</span>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="hover:text-white"
            >
              {PHONE}
            </a>
          </li>
          <li className="flex gap-2">
            <span>🔗</span>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex gap-2">
            <span>📍</span>
            <span>{t.contact.location}</span>
          </li>
          <li className="flex gap-2">
            <span>🚗</span>
            <span>{t.contact.mobility}</span>
          </li>
        </ul>

        <hr className="my-5 border-slate-700" />

        {/* BLOC 2 : onglets */}
        <nav>
          <ul className="space-y-1">
            {SECTIONS.map(({ id, icon, key }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => goTo(id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-sky-500 text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <span className="text-lg">{icon}</span>
                    <span>{t.nav[key]}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* BLOC 3 : bouton langue */}
        <div className="mt-auto pt-6">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.ui.switchLanguage}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-600 px-3 py-2 text-sm hover:bg-slate-800"
          >
            <span className="text-xl">{lang === "fr" ? "🇫🇷" : "🇬🇧"}</span>
            <span>{lang === "fr" ? "Français" : "English"}</span>
          </button>
        </div>
      </aside>
    </>
  );
}