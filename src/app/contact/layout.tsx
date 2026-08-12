import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Pour une collaboration, une formation, un projet audiovisuel ou une demande d'information. Contactez Amadou Thior.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
