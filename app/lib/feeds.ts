export type FeedConfig = {
  id: string; // doit correspondre à l'id dans translations.ts
  url: string; // flux RSS
  siteUrl: string; // page affichée par « Voir le site »
  limit?: number; // nombre d'articles affichés (4 par défaut)
};

export type CategoryConfig = {
  id: string;
  icon: string;
  feeds: FeedConfig[];
};

export type FeedItem = {
  title: string;
  link: string;
  date: string | null; // date ISO
};

export type FeedResult = {
  items: FeedItem[];
  error: boolean;
};

// Flux Google Actualités filtré sur une entreprise (30 derniers jours)
const googleNews = (query: string) =>
  `https://news.google.com/rss/search?q=${encodeURIComponent(
    `${query} when:30d`
  )}&hl=fr&gl=FR&ceid=FR:fr`;

export const CATEGORIES: CategoryConfig[] = [
  {
    id: "cyber",
    icon: "🔐",
    feeds: [
      {
        id: "certfr",
        url: "https://cert.cyber.gouv.fr/alerte/feed/",
        siteUrl: "https://cert.cyber.gouv.fr/alerte/",
      },
    ],
  },
  {
    id: "ai",
    icon: "🤖",
    feeds: [
      {
        id: "mistral",
        url: "https://mistral.ai/news/rss",
        siteUrl: "https://mistral.ai/news/",
      },
    ],
  },
  {
    id: "defense",
    icon: "🛡️",
    feeds: [
      {
        id: "thales",
        url: googleNews('"Thales Group"'),
        siteUrl: "https://www.thalesgroup.com/en/news-centre/press-releases",
      },
      {
        id: "dassault",
        url: googleNews('"Dassault Aviation"'),
        siteUrl: "https://www.dassault-aviation.com/fr/groupe/presse",
      },
      {
        id: "safran",
        url: googleNews("Safran aéronautique défense"),
        siteUrl: "https://www.safran-group.com/fr/espace-presse",
      },
    ],
  },
  {
    id: "dev",
    icon: "💻",
    feeds: [
      {
        id: "github",
        url: "https://github.blog/feed/",
        siteUrl: "https://github.blog/",
      },
    ],
  },
];