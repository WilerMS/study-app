/** Deterministic hue (0–360) derived from a subject id, for its coloured badge. */
export function hueFor(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) % 360;
  return h;
}

/** Two-letter initials from a subject name (fallback when there's no emoji). */
export function initialsOf(name: string): string {
  const words = name.replace(/[^\p{L}\s]/gu, "").trim().split(/\s+/);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

/** Inline styles for a subject badge tinted by its hue. */
export function badgeColors(hue: number) {
  return {
    background: `color-mix(in oklch, oklch(0.62 0.15 ${hue}) 16%, transparent)`,
    color: `oklch(0.6 0.15 ${hue})`,
  };
}
