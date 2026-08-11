import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amadou Thior — Réalisateur · Producteur · Formateur Audiovisuel",
  description:
    "Portfolio d'Amadou Thior, réalisateur et producteur audiovisuel sénégalais. Plus de 40 ans d'expérience au service du cinéma africain. Fondateur de TAF Productions Afrique.",
  keywords: [
    "Amadou Thior",
    "réalisateur sénégalais",
    "producteur audiovisuel",
    "cinéma africain",
    "TAF Productions",
    "FESPACO",
    "Ousmane Sembène",
  ],
  openGraph: {
    title: "Amadou Thior — Réalisateur · Producteur · Formateur Audiovisuel",
    description:
      "Plus de 40 ans au service du cinéma africain. Du compagnonnage avec Ousmane Sembène à la formation des nouvelles générations.",
    type: "website",
    locale: "fr_FR",
    siteName: "Amadou Thior",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#0f0f0f] text-[#f5f0eb]">
        {children}
      </body>
    </html>
  );
}
