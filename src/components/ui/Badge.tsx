interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default: "bg-[--color-sand]/30 text-[--color-fg-muted]",
    accent: "bg-[--color-accent]/10 text-[--color-accent]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium rounded-sm ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
