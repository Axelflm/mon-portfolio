import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { LanguageProvider } from "./components/LanguageProvider";

export const metadata: Metadata = {
  title: "Portfolio | NOM Prénom",
  description: "Site-CV et portfolio de NOM Prénom",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <LanguageProvider>
          <Header />
          {/* Marge gauche = largeur du bandeau sur grand écran */}
          <main className="lg:ml-[max(20vw,260px)]">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}