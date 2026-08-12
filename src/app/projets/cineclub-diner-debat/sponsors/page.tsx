import type { Metadata } from "next";
import { Check, X, Mail, Phone, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CTAButton from "@/components/ui/CTAButton";
import { cineclubProject, sponsorTiers, sponsorBenefits, sponsorReasons, cineclubContact } from "@/data/cineclub-project";

export const metadata: Metadata = {
  title: `Devenir sponsor — ${cineclubProject.title}`,
  description: `Associez votre marque à ${cineclubProject.title}, une initiative culturelle, citoyenne et engagée.`,
};

export default function SponsorsPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <Container narrow>
          <Reveal>
            <div className="text-center">
              <span className="text-meta text-[--color-accent] block mb-4">Partenariat</span>
              <h1 className="text-h1 text-[--color-fg] mb-4">Devenez partenaire</h1>
              <p className="text-body text-[--color-fg-muted] max-w-xl mx-auto">
                Associez votre marque à une initiative culturelle, citoyenne et engagée.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* POURQUOI */}
      <section className="pb-16 border-t border-[--color-border] pt-12">
        <Container>
          <Reveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-h2 text-[--color-fg] mb-8 text-center">Pourquoi devenir sponsor ?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sponsorReasons.map((reason) => (
                  <div key={reason} className="flex items-start gap-3 p-4 bg-[--color-surface] border border-[--color-border] rounded-lg">
                    <Check size={16} className="text-[--color-accent] shrink-0 mt-0.5" />
                    <span className="text-caption text-[--color-fg-muted]">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FORMULES */}
      <section className="section-py bg-[--color-surface] border-t border-[--color-border]">
        <Container>
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-h2 text-[--color-fg] mb-3">Les formules</h2>
              <p className="text-caption text-[--color-fg-muted]">
                Trois niveaux de partenariat adaptés à votre engagement.
              </p>
            </div>
          </Reveal>

          {/* Mobile: Cards */}
          <div className="md:hidden space-y-6">
            {sponsorTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 100}>
                <div className="bg-[--color-bg] border rounded-xl p-6" style={{ borderColor: `${tier.colorHex}40` }}>
                  <div
                    className="inline-flex px-4 py-1.5 rounded-full text-sm font-bold mb-4"
                    style={{ backgroundColor: `${tier.colorHex}15`, color: tier.colorHex, border: `1px solid ${tier.colorHex}40` }}
                  >
                    {tier.name}
                  </div>
                  <p className="text-caption text-[--color-fg-muted] mb-4">{tier.description}</p>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-[--color-fg-muted]">
                        <Check size={14} style={{ color: tier.colorHex }} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Desktop: Table */}
          <Reveal>
            <div className="hidden md:block bg-[--color-bg] border border-[--color-border] rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[--color-border]">
                      <th className="text-left text-sm font-medium text-[--color-fg-muted] p-5 w-2/5">Avantage</th>
                      {sponsorTiers.map((tier) => (
                        <th key={tier.name} className="text-center p-5">
                          <div
                            className="inline-flex px-4 py-1.5 rounded-full text-sm font-bold"
                            style={{ backgroundColor: `${tier.colorHex}15`, color: tier.colorHex, border: `1px solid ${tier.colorHex}40` }}
                          >
                            {tier.name}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sponsorBenefits.map((row, index) => (
                      <tr key={row.label} className={`border-b border-[--color-border]/50 ${index % 2 === 0 ? "bg-[--color-surface]/30" : ""}`}>
                        <td className="text-sm text-[--color-fg-muted] p-5">{row.label}</td>
                        <td className="text-center p-5">
                          {row.bronze ? <Check size={18} className="inline-block" style={{ color: sponsorTiers[0].colorHex }} /> : <X size={18} className="inline-block text-[--color-fg-subtle]" />}
                        </td>
                        <td className="text-center p-5">
                          {row.silver ? <Check size={18} className="inline-block" style={{ color: sponsorTiers[1].colorHex }} /> : <X size={18} className="inline-block text-[--color-fg-subtle]" />}
                        </td>
                        <td className="text-center p-5">
                          {row.gold ? <Check size={18} className="inline-block" style={{ color: sponsorTiers[2].colorHex }} /> : <X size={18} className="inline-block text-[--color-fg-subtle]" />}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CONTACT */}
      <section className="section-py border-t border-[--color-border]">
        <Container narrow>
          <Reveal>
            <div className="text-center mb-10">
              <h2 className="text-h2 text-[--color-fg] mb-4">Contactez-nous</h2>
              <p className="text-body text-[--color-fg-muted] max-w-lg mx-auto mb-8">
                Pour discuter d&apos;un partenariat ou obtenir le dossier complet.
              </p>
            </div>

            <div className="bg-[--color-surface] border border-[--color-border] rounded-xl p-8">
              <h3 className="text-h3 text-[--color-fg] mb-2">{cineclubContact.structure}</h3>
              <p className="text-caption text-[--color-fg-muted] mb-6">{cineclubContact.manager}</p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-sm text-[--color-fg-muted]">
                  <MapPin size={16} className="text-[--color-accent] shrink-0 mt-0.5" />
                  {cineclubContact.address}
                </div>
                {cineclubContact.phones.map((phone) => (
                  <div key={phone} className="flex items-center gap-3 text-sm text-[--color-fg-muted]">
                    <Phone size={16} className="text-[--color-accent] shrink-0" />
                    <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="hover:text-[--color-accent] transition-colors">
                      {phone}
                    </a>
                  </div>
                ))}
                <div className="flex items-center gap-3 text-sm text-[--color-fg-muted]">
                  <Mail size={16} className="text-[--color-accent] shrink-0" />
                  <a href={`mailto:${cineclubContact.email}`} className="hover:text-[--color-accent] transition-colors">
                    {cineclubContact.email}
                  </a>
                </div>
              </div>

              <CTAButton
                href={`mailto:${cineclubContact.email}?subject=Partenariat ${cineclubProject.title}`}
                external
              >
                <Mail size={16} />
                Devenir sponsor
              </CTAButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
