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
      className={`max-w-3xl mb-10 md:mb-14 ${
        align === "center" ? "mx-auto text-center" : ""
      } ${className}`}
    >
      {label && (
        <span className="text-meta text-[--color-accent] block mb-2">
          {label}
        </span>
      )}
      <h2 className="text-h2">{title}</h2>
      {description && (
        <p className="mt-3 text-body text-[--color-fg-muted]">{description}</p>
      )}
    </div>
  );
}
