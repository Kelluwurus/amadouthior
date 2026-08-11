// content/collaborations.ts
// Institutions et personnalités ayant marqué le parcours d'Amadou Thior.
// Données considérées comme confirmées.

import { Collaboration } from "./types";

export const collaborations: Collaboration[] = [
  {
    name: "Ousmane Sembène",
    role:
      "Amadou Thior a été assistant réalisateur d'Ousmane Sembène sur deux films majeurs du cinéma sénégalais. Ce rôle doit toujours être présenté comme celui d'assistant réalisateur, et non de réalisateur principal.",
    period: "1987 – 1992",
    relatedWorks: ["Camp de Thiaroye (1987)", "Guelwaar (1992)"],
    status: "confirmed",
    sources: [{ title: "Fiche Amadou Thior", publisher: "Africultures" }],
  },
  {
    name: "Ministère de la Culture et de la Communication du Sénégal",
    role:
      "Réalisateur, chargé des études techniques au Bureau du Cinéma.",
    period: "1981 – 1988",
    status: "confirmed",
    sources: [{ title: "Fiche Amadou Thior", publisher: "Africultures" }],
  },
  {
    name: "RTS — Radiodiffusion Télévision Sénégalaise",
    role: "Réalisateur détaché.",
    period: "1988 – 1989",
    status: "confirmed",
    sources: [{ title: "Fiche Amadou Thior", publisher: "Africultures" }],
  },
  {
    name: "Assane Diagne",
    role:
      "Cofondateur, avec Amadou Thior, du GIE Consultants & Réalisateurs Associés, dédié à l'autoproduction de projets de fiction et documentaires.",
    period: "1994 – 2004",
    relatedWorks: ["Almodou", "Nef", "Kiné", "Coumba"],
    status: "confirmed",
    sources: [{ title: "Consultants & Réalisateurs Associés", publisher: "Africultures" }],
  },
  {
    name: "Institut français / Cinémathèque Afrique",
    role: "Distribution de plusieurs œuvres, notamment Mariage précoce.",
    status: "confirmed",
    sources: [{ title: "Fiche Mariage précoce", publisher: "Images Francophones" }],
  },
  {
    name: "FESPACO",
    role:
      "Festival ayant récompensé deux œuvres majeures : Xareek Maral (1985) et Almodou (2001).",
    status: "confirmed",
    sources: [{ title: "Fiche Amadou Thior", publisher: "Africultures" }],
  },
  {
    name: "IPMICA",
    role: "Directeur des études.",
    status: "confirmed",
    sources: [{ title: "Fiche Amadou Thior", publisher: "Africultures" }],
  },
  {
    name: "URAC Sénégal",
    role:
      "Organisation, avec Martin Faye, d'une formation destinée aux correspondants de la Radio Télévision Communautaire.",
    period: "Août 2024",
    status: "confirmed",
    sources: [{ title: "Formation des correspondants RTC (août 2024)", publisher: "URAC Sénégal" }],
  },
  {
    name: "Communauté Teranga (Intelligence Artificielle)",
    role:
      "Ambassadeur, dans le prolongement de son parcours de transmission — à présenter sans suggérer une expertise technique en IA.",
    status: "confirmed",
    sources: [{ title: "Profil Amadou Thior", publisher: "Teranga AI" }],
  },
];
