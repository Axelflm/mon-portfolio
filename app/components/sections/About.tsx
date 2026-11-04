"use client";

import { useLanguage } from "../LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="px-6 py-12 sm:px-12">
      <h2 className="mb-5 text-3xl font-bold">{t.nav.about}</h2>

      <div className="max-w-3xl space-y-4">
        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {t.about.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Présentation courte */}
        {t.about.paragraphs.map((p) => (
          <p key={p} className="text-lg leading-relaxed text-slate-300">
            {p}
          </p>
        ))}
        <p className="text-lg font-medium text-white">{t.about.punchline}</p>

        {/* Valeur ajoutée */}
        <div className="rounded-xl border-l-4 border-sky-500 bg-slate-900 p-4">
          <p className="text-slate-200">
            <span className="font-bold text-sky-400">{t.about.valueLabel}</span>{" "}
            {t.about.value}
          </p>
        </div>
      </div>
    </section>
  );
}