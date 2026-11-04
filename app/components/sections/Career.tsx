"use client";

import { useLanguage } from "../LanguageProvider";

export default function Career() {
  const { t } = useLanguage();
  const c = t.career;

  return (
    <section
      id="career"
      className="border-t border-slate-800 px-6 py-12 sm:px-12"
    >
      <h2 className="mb-5 text-3xl font-bold">{t.nav.career}</h2>

      <div className="max-w-3xl space-y-8">
        {/* Expériences : frise verticale */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
            💼 {c.experiencesTitle}
          </h3>

          <ol className="ml-2 border-l border-slate-700">
            {c.experiences.map((exp, i) => (
              <li
                key={`${exp.company}-${exp.period}`}
                className="relative pb-7 pl-6 last:pb-0"
              >
                {/* Point de la frise */}
                <span
                  aria-hidden
                  className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 bg-slate-950 ${
                    i === 0 ? "border-sky-400" : "border-slate-500"
                  }`}
                />

                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm text-slate-400">{exp.period}</p>
                  {i === 0 && (
                    <span className="rounded-full bg-sky-500/15 px-2 py-0.5 text-xs font-medium text-sky-300 ring-1 ring-sky-500/40">
                      {c.latest}
                    </span>
                  )}
                </div>

                <h4 className="mt-1 text-lg font-semibold text-white">
                  {exp.role} <span className="text-sky-400">· {exp.company}</span>
                </h4>

                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-300 marker:text-slate-600">
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-800 px-2 py-0.5 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Formation : cartes */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
            🎓 {c.educationTitle}
          </h3>

          <div className="grid gap-3 sm:grid-cols-2">
            {c.education.map((edu, i) => (
              <div
                key={edu.title}
                className={`rounded-xl border border-slate-700 bg-slate-900 p-4 ${
                  i === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <p className="font-semibold text-white">
                  <span aria-hidden>{edu.icon} </span>
                  {edu.title}
                </p>
                <p className="text-sm text-sky-300">{edu.subtitle}</p>
                {edu.desc && (
                  <p className="mt-1 text-sm text-slate-400">{edu.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}