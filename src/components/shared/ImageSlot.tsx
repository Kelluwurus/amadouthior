interface ImageSlotProps {
  alt: string;
  aspect?: "portrait" | "landscape" | "square" | "cinema";
  className?: string;
  src?: string;
}

/**
 * Emplacement image élégant.
 * Si src est fourni → affiche l'image.
 * Sinon → fond sable subtil, prêt à recevoir la vraie image.
 * Jamais de gros placeholder gris.
 */
export default function ImageSlot({
  alt,
  aspect = "landscape",
  className = "",
  src,
}: ImageSlotProps) {
  const aspects = {
    portrait: "aspect-[3/4]",
    landscape: "aspect-[3/2]",
    square: "aspect-square",
    cinema: "aspect-[16/9]",
  };

  if (src) {
    return (
      <div className={`${aspects[aspect]} overflow-hidden ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`${aspects[aspect]} bg-[--color-surface] border border-[--color-border] flex items-center justify-center ${className}`}
    >
      <span className="text-[0.6rem] text-[--color-fg-subtle] tracking-wide uppercase">
        Image à fournir
      </span>
    </div>
  );
}
