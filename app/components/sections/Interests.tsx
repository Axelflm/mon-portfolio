"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageProvider";
import { CATEGORIES, type FeedResult } from "../../lib/feeds";

type Status = "loading" | "done" | "error";

export default function Interests() {
  const { t, lang } = useLanguage();
  const i = t.interests;

  const [data, setData] = useState<Record<string, FeedResult>>({});
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/rss", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("rss");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setStatus("done");
      })
      .catch((err) => {
        if (err.name !== "AbortError") setStatus("error");
      });

    return () => controller.abort();
  }, []);

  const formatDate = (iso: string | null) =>
    iso
      ? new Date(iso).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : "";

  return (
    <section
      id="interests"
      className="border-t border-slate-800 px-6 py-12 sm:px-12"
    >
      <h2 className="mb-3 text-3xl font-bold">{t.nav.interests}</h2>
      <p className="mb-6 max-w-3xl text-slate-300">{i.intro}</p>

      <div className="max-w-6xl space-y-8">
        {CATEGORIES.map((cat) => (
          <div key={cat.id}>
            <h3 className="mb-3 text-2xl font-semibold uppercase tracking-wider text-slate-400">
              <span aria-hidden>{cat.icon} </span>
              {i.categories[cat.id]}
            </h3>

            <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
              {cat.feeds.map((feed) => {
                const text = i.feeds[feed.id];
                const result = data[feed.id];

                return (
                  <article
                    key={feed.id}
                    className="flex flex-col rounded-2xl border border-slate-700 bg-slate-900 p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-semibold text-white">{text.name}</h4>
                      <a
                        href={feed.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-xs text-sky-300 hover:text-sky-200"
                      >
                        {i.visitSite} ↗
                      </a>
                    </div>
                    <p className="mt-1 text-sm text-slate-400">{text.desc}</p>

                    <div className="mt-4 flex-1">
                      {status === "loading" && (
                        <div className="space-y-3" aria-label={i.loading}>
                          {[0, 1, 2].map((n) => (
                            <div
                              key={n}
                              className="h-9 animate-pulse rounded-md bg-slate-800"
                            />
                          ))}
                        </div>
                      )}

                      {status !== "loading" &&
                        (status === "error" ||
                          !result ||
                          result.error ||
                          result.items.length === 0) && (
                          <p className="text-sm text-slate-500">
                            {i.unavailable}
                          </p>
                        )}

                      {status === "done" && result && result.items.length > 0 && (
                        <ul className="space-y-3">
                          {result.items.map((item) => (
                            <li key={item.link}>
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="line-clamp-2 text-sm font-medium text-slate-200 hover:text-sky-300"
                              >
                                {item.title}
                              </a>
                              {item.date && (
                                <p className="text-xs text-slate-500">
                                  {formatDate(item.date)}
                                </p>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}