"use client";

import { useLanguage } from "../LanguageProvider";
import ProjectCarousel from "../ProjectCarousel";

// Construit la liste d'images : ex. ("dofus_arena", 7, "png")
// -> /images/dofus_arena1.png ... /images/dofus_arena7.png
const buildImages = (prefix: string, count: number, ext: string) =>
  Array.from({ length: count }, (_, i) => `/images/${prefix}${i + 1}.${ext}`);

type Download = { href: string; kind: "rar" | "zip" | "pdf" };

// Données non traduisibles. L'id doit correspondre à celui de translations.ts
const PROJECTS: {
  id: string;
  images: string[];
  tech: string[];
  ongoing?: boolean;
  download?: Download;
}[] = [
  {
    id: "dofus",
    images: buildImages("dofus_arena", 7, "png"),
    tech: ["C", "GitHub", "Travail d'équipe"],
    download: {
      href: "/project/minecraft_mobs_arena_project.rar",
      kind: "rar",
    },
  },
  {
    id: "simcity",
    images: buildImages("ece_city", 5, "png"),
    tech: ["C", "Théorie des graphes", "GitHub"],
    download: { href: "/project/ece_city_project.rar", kind: "rar" },
  },
  {
    id: "cinema",
    images: buildImages("cinema_website_java", 4, "png"),
    tech: ["Java", "GitHub"],
    download: { href: "/project/cinema_website_java_project.zip", kind: "zip" },
  },
  {
    id: "coverage",
    images: buildImages("code_coverage", 4, "png"), // passe à 5 si tu as bien 5 images
    tech: ["MATLAB", "Simulink", "DO-178"],
    download: { href: "/project/Synthese_code_coverage.pdf", kind: "pdf" },
  },
  {
    id: "abyssalcraft",
    images: buildImages("abyssalcraft", 8, "png"),
    tech: ["Java", "Minecraft", "Datapacks", "JSON"],
    ongoing: true,
  },
];

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section
      id="projects"
      className="border-t border-slate-800 px-6 py-12 sm:px-12"
    >
      <h2 className="mb-5 text-3xl font-bold">{t.nav.projects}</h2>

      <div className="grid max-w-6xl gap-6 xl:grid-cols-2">
        {PROJECTS.map((project) => {
          const text = p.items.find((item) => item.id === project.id);
          if (!text) return null;

          return (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900"
            >
              <ProjectCarousel images={project.images} alt={text.title} />

              <div className="flex flex-1 flex-col gap-3 p-5">
                {/* Tag + pastille "en cours" */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-slate-400">{text.tag}</span>
                  {project.ongoing && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/40">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      {p.ongoing}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {text.title}
                </h3>

                <p className="text-slate-300">{text.summary}</p>

                <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300 marker:text-slate-600">
                  {text.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                {/* Chiffres clés (si le projet en a) */}
                {text.stats.length > 0 && (
                  <div className="grid grid-cols-2 gap-2">
                    {text.stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-lg bg-slate-800 px-3 py-2"
                      >
                        <p className="text-lg font-bold text-sky-300">
                          {s.value}
                        </p>
                        <p className="text-xs text-slate-400">{s.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <p className="text-sm italic text-slate-400">{text.learned}</p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-800 px-2 py-0.5 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.download && (
                  <a
                    href={project.download.href}
                    download
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-400"
                  >
                    📦 {p.downloads[project.download.kind]}
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}