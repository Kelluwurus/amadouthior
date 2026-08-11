import { Check, X } from "lucide-react";
import { cineclubProject } from "@/data/cineclub-project";

export default function SponsorTable() {
  const tiers = cineclubProject.sponsorshipTiers;

  const allBenefits: string[] = [];
  tiers.forEach((tier) => {
    tier.benefits.forEach((b: string) => {
      if (!allBenefits.includes(b)) allBenefits.push(b);
    });
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px] border-collapse">
        <thead>
          <tr>
            <th className="text-left text-sm font-medium text-[#9ca3af] p-4 border-b border-white/10">Visibilité</th>
            {tiers.map((tier) => (
              <th key={tier.tier} className="text-center p-4 border-b border-white/10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold" style={{ backgroundColor: `${tier.colorHex}20`, border: `1px solid ${tier.colorHex}50`, color: tier.colorHex }}>
                  {tier.tier}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allBenefits.map((benefit, index) => (
            <tr key={benefit} className={`${index % 2 === 0 ? "bg-[#1a2e1a]/30" : ""} hover:bg-[#2E5C1E]/10 transition-colors`}>
              <td className="text-sm text-[#9ca3af] p-4 border-b border-white/5">{benefit}</td>
              {tiers.map((tier) => (
                <td key={`${tier.tier}-${benefit}`} className="text-center p-4 border-b border-white/5">
                  {(tier.benefits as readonly string[]).includes(benefit) ? (
                    <Check size={18} className="inline-block" style={{ color: tier.colorHex }} />
                  ) : (
                    <X size={18} className="inline-block text-[#4b5563]" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
