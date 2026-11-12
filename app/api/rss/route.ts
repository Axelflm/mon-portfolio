import { NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";
import { CATEGORIES, type FeedItem, type FeedResult } from "../../lib/feeds";

// Les résultats sont mis en cache 1 heure côté serveur
// export const revalidate = 3600; -> incompatible avec cacheComponents:true
import { cacheLife } from "next/cache";
async function getRSSFeeds() {
  "use cache";
  cacheLife({
    stale: 3600,
    revalidate: 3600,
    expire: 86400,
  });

  // code actuel de récupération et d'analyse des flux RSS
}

type Node = Record<string, unknown>;

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
});

function text(v: unknown): string {
  if (v == null) return "";
  if (typeof v === "string" || typeof v === "number") return String(v).trim();
  if (typeof v === "object") return text((v as Node)["#text"]);
  return "";
}

// Gère les liens RSS (texte) et Atom (attribut href, parfois en liste)
function pickLink(v: unknown): string {
  if (Array.isArray(v)) {
    const alt = (v as Node[]).find((l) => l["@_rel"] === "alternate") ?? v[0];
    return pickLink(alt);
  }
  if (v && typeof v === "object") {
    const n = v as Node;
    return typeof n["@_href"] === "string" ? n["@_href"] : text(n);
  }
  return text(v);
}

// N'accepte que des liens http(s) : on ne fait jamais confiance à un flux externe
function safeUrl(u: string): string | null {
  try {
    const url = new URL(u);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}

function parseFeed(xml: string, limit: number): FeedItem[] {
  const doc = parser.parse(xml) as Node;
  const channel = (doc.rss as Node | undefined)?.channel as Node | undefined;
  const atom = doc.feed as Node | undefined;

  const raw = channel?.item ?? atom?.entry ?? [];
  const list = (Array.isArray(raw) ? raw : [raw]) as Node[];

  return list
    .map((entry): FeedItem | null => {
      const link = safeUrl(pickLink(entry.link));
      const title = text(entry.title);
      if (!link || !title) return null;

      const dateStr = text(
        entry.pubDate ?? entry.updated ?? entry.published ?? entry["dc:date"]
      );
      const d = dateStr ? new Date(dateStr) : null;

      return {
        title,
        link,
        date: d && !isNaN(d.getTime()) ? d.toISOString() : null,
      };
    })
    .filter((x): x is FeedItem => x !== null)
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
    .slice(0, limit);
}

async function loadFeed(url: string, limit: number): Promise<FeedResult> {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; PortfolioRSS/1.0)",
        Accept:
          "application/rss+xml, application/atom+xml, application/xml, text/xml;q=0.9, */*;q=0.8",
      },
      signal: AbortSignal.timeout(8000),
      next: { revalidate: 3600 },
    });
    if (!res.ok) return { items: [], error: true };

    const items = parseFeed(await res.text(), limit);
    return { items, error: items.length === 0 };
  } catch {
    // Un flux en panne ne doit jamais casser les autres
    return { items: [], error: true };
  }
}

export async function GET() {
  const feeds = CATEGORIES.flatMap((c) => c.feeds);
  const results = await Promise.all(
    feeds.map((f) => loadFeed(f.url, f.limit ?? 4))
  );

  const body: Record<string, FeedResult> = {};
  feeds.forEach((f, i) => {
    body[f.id] = results[i];
  });

  return NextResponse.json(body);
}