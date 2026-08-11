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
    default: "bg-[--color-surface-2] border-[--color-border] text-[--color-fg-muted]",
    accent: "bg-[--color-accent]/10 border-[--color-accent]/20 text-[--color-accent]",
    muted: "bg-[--color-surface] border-[--color-border] text-[--color-fg-subtle]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium border rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
