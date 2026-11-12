"use client";

import { useLanguage } from "../LanguageProvider";
import type { Dict } from "../../lib/translations";

// Les noms de technos ne se traduisent pas : ils restent ici
const GROUPS: {
  key: keyof Dict["skills"]["groups"];
  icon: string;
  items: string[];
}[] = [
  {
    key: "languages",
    icon: "💻",
    items: [
      "C",
      "C++",
      "C#",
      "Python",
      "Java",
      "SQL",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "Makefile",
      "Batch / Bash / Shell",
      "Markdown"
    ],
  },
  {
    key: "frameworks",
    icon: "🧩",
    items: ["Django", "API REST", "SDL2 / SDL3", "Asio", "Bootstrap", "Requests", "FastAPI", "Pytest", "CMake"],
  },
  {
    key: "tools",
    icon: "🛠️",
    items: [
      "VS Code",
      "Git / Github / GitLab",
      "Linux",
      "Anaconda",
      "PyCharm",
      "Jupyter Notebook",
      "MySQL",
      "Excel",
    ],
  },
];

export default function Skills() {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <section
      id="skills"
      className="border-t border-slate-800 px-6 py-12 sm:px-12"
    >
      <h2 className="mb-5 text-3xl font-bold">{t.nav.skills}</h2>

      <div className="max-w-3xl space-y-6">
        {GROUPS.map(({ key, icon, items }) => (
          <div key={key}>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
              <span aria-hidden>{icon} </span>
              {s.groups[key]}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm font-medium text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Langues */}
        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
            <span aria-hidden>🌍 </span>
            {s.languagesTitle}
          </h3>
          <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-semibold text-white">
                🇬🇧 {s.english}{" "}
                <span className="font-normal text-slate-400">
                  · {s.englishLevel}
                </span>
              </p>
              <p className="text-sm text-sky-300">{s.toeic}</p>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-sky-500"
                style={{ width: `${(850 / 990) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}