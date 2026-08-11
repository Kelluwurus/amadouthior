import { Check, X } from "lucide-react";
import { sponsorTiers, sponsorFeatureLabels } from "@/data/cineclub";

export default function SponsorTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px] border-collapse">
        <thead>
          <tr>
            <th className="text-left text-sm font-medium text-[#9ca3af] p-4 border-b border-white/10">
              Visibilité
            </th>
            {sponsorTiers.map((tier) => (
              <th
                key={tier.name}
                className="text-center p-4 border-b border-white/10"
              >
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold"
                  style={{
                    backgroundColor: `${tier.color}20`,
                    border: `1px solid ${tier.color}50`,
                    color: tier.color,
                  }}
                >
                  {tier.name}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sponsorFeatureLabels.map((feature, index) => (
            <tr
              key={feature}
              className={`${
                index % 2 === 0 ? "bg-[#1a2e1a]/30" : "bg-transparent"
              } hover:bg-[#2E5C1E]/10 transition-colors`}
            >
              <td className="text-sm text-[#9ca3af] p-4 border-b border-white/5">
                {feature}
              </td>
              {sponsorTiers.map((tier) => (
                <td
                  key={`${tier.name}-${feature}`}
                  className="text-center p-4 border-b border-white/5"
                >
                  {tier.features[feature] ? (
                    <Check
                      size={18}
                      className="inline-block"
                      style={{ color: tier.color }}
                    />
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
