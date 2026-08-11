import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amadou Thior — Réalisateur, Producteur & Consultant Cinématographique",
  description:
    "Portfolio d'Amadou Thior, réalisateur, producteur et consultant cinématographique sénégalais avec plus de 30 ans de carrière au cœur du 7ᵉ art africain.",
  openGraph: {
    title: "Amadou Thior — Réalisateur & Passeur de Mémoire",
    description:
      "Plus de trois décennies au cœur du 7ᵉ art africain, entre création, engagement et formation.",
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
      className={`${cormorant.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#121212] text-[#F8F5EF]">
        {children}
      </body>
    </html>
  );
}
