/**
 * Layout CINECLUB — applique le thème événementiel (fond terre cuite foncée)
 * via data-theme="cineclub" qui surcharge les CSS custom properties.
 * Isolé aux routes /cineclub/**.
 */
export default function CineclubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div data-theme="cineclub">{children}</div>;
}
