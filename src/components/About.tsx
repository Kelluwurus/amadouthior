import { Film, GraduationCap, Briefcase } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="section-py bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Biographie"
          title="À propos"
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Main bio */}
          <div className="lg:col-span-2 space-y-5 text-[#9ca3af] leading-relaxed">
            <p>
              <strong className="text-[#f5f0eb]">Amadou Thior</strong> est un
              cinéaste indépendant sénégalais avec plus de 40 ans d&apos;expérience
              dans la réalisation, la production et la formation audiovisuelle.
            </p>
            <p>
              Diplômé de l&apos;École Nationale Supérieure Louis-Lumière (Vaugirard)
              à Paris en 1977, il a forgé sa vision du cinéma au contact des
              plus grands maîtres du 7ᵉ art africain — notamment en tant
              qu&apos;assistant réalisateur d&apos;Ousmane Sembène sur{" "}
              <em>Camp de Thiaroye</em> (1987) et <em>Guelwaar</em> (1992).
            </p>
            <p>
              Sa carrière l&apos;a conduit de la RTS (Radiodiffusion Télévision du
              Sénégal) à 2S TV, en passant par le Ministère de la Culture du
              Sénégal où il a contribué à structurer les politiques
              cinématographiques nationales.
            </p>
            <p>
              En tant que réalisateur, il a signé des œuvres majeures comme{" "}
              <em>Almodou</em> (Prix PLAN International au FESPACO 2001) et{" "}
              <em>Xareek Maral</em> (Grand Prix de la CEE au FESPACO 1985),
              traitant avec humanisme des enjeux sociaux du continent.
            </p>
            <p>
              Fondateur de <strong className="text-[#f5f0eb]">TAF Productions Afrique Sarl</strong>,
              il poursuit aujourd&apos;hui son engagement à travers la production, le
              consulting audiovisuel et l&apos;enseignement en tant que vacataire à la
              Faculté des Sciences et Techniques.
            </p>
          </div>

          {/* Key facts sidebar */}
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] border border-white/5 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap size={20} className="text-[#c4723a]" />
                <h3 className="text-sm font-semibold text-[#f5f0eb]">
                  Formation
                </h3>
              </div>
              <p className="text-sm text-[#9ca3af]">
                École Nationale Louis-Lumière (Vaugirard), Paris — Promotion
                Cinéma 1977
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-white/5 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Film size={20} className="text-[#c4723a]" />
                <h3 className="text-sm font-semibold text-[#f5f0eb]">
                  Filmographie
                </h3>
              </div>
              <p className="text-sm text-[#9ca3af]">
                5+ films réalisés dont 2 primés au FESPACO. Assistant
                d&apos;Ousmane Sembène sur 2 longs-métrages.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-white/5 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase size={20} className="text-[#c4723a]" />
                <h3 className="text-sm font-semibold text-[#f5f0eb]">
                  Activité actuelle
                </h3>
              </div>
              <p className="text-sm text-[#9ca3af]">
                Fondateur de TAF Productions Afrique Sarl. Consultant et
                formateur audiovisuel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
