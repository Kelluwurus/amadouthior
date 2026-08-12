interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "muted";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default: "bg-[--color-surface] text-[--color-fg-muted]",
    accent: "text-[--color-accent]",
    muted: "text-[--color-fg-subtle]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
