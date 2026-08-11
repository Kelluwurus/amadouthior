interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl mb-12 md:mb-16 ${
        align === "center" ? "mx-auto text-center" : ""
      } ${className}`}
    >
      {label && (
        <span className="text-meta text-[--color-accent] block mb-3">
          {label}
        </span>
      )}
      <h2 className="text-h2 text-[--color-fg]">{title}</h2>
      {description && (
        <p className="mt-4 text-body text-[--color-fg-muted]">{description}</p>
      )}
    </div>
  );
}
