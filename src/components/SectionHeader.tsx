interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl mb-12 md:mb-16 ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#c4723a] mb-3">
        {label}
      </span>
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-[2.75rem] text-[#f5f0eb] leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-[#9ca3af] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
