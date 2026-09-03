export interface NavService {
  slug: string;
  shortTitle: string;
}

/** Diensten zoals ze op riory.be staan — hier enkel gebruikt om de header-navigatie
 * er identiek te laten uitzien. Alle links wijzen terug naar riory.be. */
export const allServices: NavService[] = [
  { slug: "camera-inspectie", shortTitle: "Camera inspectie riool" },
  { slug: "ontstoppingen-en-geurdetectie", shortTitle: "Ontstoppingen & Geurdetectie" },
  { slug: "septische-put-ledigen", shortTitle: "Septische put ledigen" },
  { slug: "leegpompen-en-reinigen", shortTitle: "Leegpompen & Reinigen" },
  { slug: "wc-verstopt", shortTitle: "WC Verstopt" },
  { slug: "keukenafvoer-verstopt", shortTitle: "Keukenafvoer Verstopt" },
  { slug: "doucheputje-verstopt", shortTitle: "Doucheputje Verstopt" },
  { slug: "riool-verstopt", shortTitle: "Riool Verstopt" },
  { slug: "gootsteen-verstopt", shortTitle: "Gootsteen Verstopt" },
  { slug: "lekkende-kraan", shortTitle: "Lekkende Kraan" },
  { slug: "lekkage-opsporen", shortTitle: "Lekkage Opsporen" },
  { slug: "dakgootreiniging", shortTitle: "Dakgootreiniging" },
  { slug: "rioolreparatie", shortTitle: "Rioolreparatie" },
  { slug: "rioolvliegjes", shortTitle: "Rioolvliegjes" },
];

export const SYMPTOM_SERVICE_SLUGS = [
  "wc-verstopt",
  "keukenafvoer-verstopt",
  "doucheputje-verstopt",
  "riool-verstopt",
  "gootsteen-verstopt",
  "lekkende-kraan",
  "lekkage-opsporen",
  "dakgootreiniging",
  "rioolreparatie",
  "rioolvliegjes",
] as const;
