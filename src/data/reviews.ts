// Centrale plek om alle Riory-reviews te beheren.
// Voeg hier gewoon nieuwe entries toe aan REVIEWS — de pagina, de JSON-LD
// schema (AggregateRating + Review) en de "op basis van X reviews"-tekst
// gebruiken automatisch deze lijst.

export const REVIEW_STATS = {
  ratingValue: "4.9",
  bestRating: "5",
  worstRating: "1",
} as const;

export interface Review {
  author: string;
  rating: number;
  body: string;
  /** Optioneel: ISO-datum (YYYY-MM-DD) van de review, voor sortering/weergave. */
  date?: string;
}

export const REVIEWS: Review[] = [
  {
    author: "Jurgen Machiels",
    rating: 5,
    body: "Super service. Eerlijke prijs. Zeer snelle reactie op contactformulier. Top gasten. En het probleem volledig opgelost. Zeker en vast aanraders 100%",
  },
  {
    author: "Arnaud Ronda",
    rating: 5,
    body: "Heel snel geholpen, vriendelijk en uitermate vakkundig! En gezien het geleverde werk zeker eerlijk en geen prijsverrassingen. Super tevreden! Een echte aanrader.",
  },
];

/** Aantal reviews dat getoond wordt in "op basis van X reviews" — override zodra
 * er meer reviews bekend zijn dan er losse teksten in REVIEWS staan. */
export const REVIEW_COUNT = Math.max(REVIEWS.length, 109);

/** Schema.org AggregateRating + Review blok voor JSON-LD, zodat zoek- en AI-crawlers
 * de beoordelingen direct kunnen lezen zonder JavaScript uit te voeren. */
export const businessRatingSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Riory BV",
  url: "https://www.riory.be",
  image: "https://www.riory.be/riory-logo.svg",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: REVIEW_STATS.ratingValue,
    reviewCount: String(REVIEW_COUNT),
    bestRating: REVIEW_STATS.bestRating,
    worstRating: REVIEW_STATS.worstRating,
  },
  review: REVIEWS.map((r) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: REVIEW_STATS.bestRating,
    },
    author: { "@type": "Person", name: r.author },
    reviewBody: r.body,
    ...(r.date ? { datePublished: r.date } : {}),
  })),
});
