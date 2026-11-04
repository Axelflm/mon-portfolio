"use client";

import { useLanguage } from "../LanguageProvider";

export default function Situation() {
  const { t } = useLanguage();
  const s = t.situation;

  return (
    <section
      id="situation"
      className="border-t border-slate-800 px-6 py-12 sm:px-12"
    >
      <h2 className="mb-5 text-3xl font-bold">{t.nav.situation}</h2>

      <div className="max-w-3xl space-y-5">
        {/* Statut */}
        <div>
          <p className="text-xl font-semibold text-white">{s.status}</p>
          <p className="mt-1 text-emerald-400">
            <span aria-hidden>● </span>
            {s.availability}
          </p>
        </div>

        {/* Domaines visés */}
        <div>
          <p className="mb-2 text-sm uppercase tracking-wider text-slate-400">
            {s.domainsLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {s.domains.map((d) => (
              <span
                key={d}
                className="rounded-full bg-sky-500/15 px-3 py-1 text-sm font-medium text-sky-300 ring-1 ring-sky-500/40"
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Expérience */}
        <p className="text-lg text-slate-300">{s.experience}</p>

        {/* Boutons de téléchargement */}
        <div className="flex flex-col gap-3 pt-1 sm:flex-row">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-sky-400"
          >
            📄 {s.downloadCv}
          </a>
          <a
            href="/lettre_recommandation.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-5 py-3 font-semibold text-slate-100 transition-colors hover:bg-slate-800"
          >
            ✉️ {s.downloadLetter}
          </a>
        </div>
      </div>
    </section>
  );
}