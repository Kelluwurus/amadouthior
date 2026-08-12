interface CarteProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
}

export default function Carte({
  children,
  className = "",
  as: Tag = "div",
}: CarteProps) {
  return (
    <Tag
      className={`bg-[--color-surface] border border-[--color-border] p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-card)] ${className}`}
    >
      {children}
    </Tag>
  );
}
