"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

const DELAY_MS = 5000;

export default function ProjectCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = images.length;
  const go = (i: number) => setIndex((i + count) % count);

  // Passe à l'image suivante après 5 s. Le timer repart à zéro
  // à chaque changement d'image (y compris manuel) et se met en pause au survol.
  useEffect(() => {
    if (paused || count < 2) return;
    const timer = setTimeout(() => setIndex((i) => (i + 1) % count), DELAY_MS);
    return () => clearTimeout(timer);
  }, [index, paused, count]);

  return (
    <div
      className="group relative aspect-video overflow-hidden bg-slate-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} (${i + 1}/${count})`}
          fill
          sizes="(min-width: 1280px) 40vw, 100vw"
          className={`object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label={t.projects.prev}
            className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-100 transition hover:bg-black/70 lg:opacity-0 lg:group-hover:opacity-100"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label={t.projects.next}
            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-100 transition hover:bg-black/70 lg:opacity-0 lg:group-hover:opacity-100"
          >
            ›
          </button>

          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`${t.projects.goTo} ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-5 bg-sky-400" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}