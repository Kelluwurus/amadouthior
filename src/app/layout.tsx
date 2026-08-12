import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Amadou Thior — Cinéaste, Producteur-Réalisateur et Formateur",
    template: "%s | Amadou Thior",
  },
  description:
    "Site officiel d'Amadou Thior, cinéaste, producteur-réalisateur, scénariste, consultant et formateur audiovisuel sénégalais.",
  openGraph: {
    title: "Amadou Thior — Cinéaste, Producteur-Réalisateur et Formateur",
    description:
      "Plus de quatre décennies au service du cinéma et de l'audiovisuel africains.",
    type: "website",
    locale: "fr_FR",
    siteName: "Amadou Thior",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
