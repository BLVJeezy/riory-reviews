// Centrale plek om alle Riory-reviews te beheren.
// Voeg hier gewoon nieuwe entries toe aan REVIEWS — de pagina, de JSON-LD
// schema (AggregateRating + Review) en de "op basis van X reviews"-tekst
// gebruiken automatisch deze lijst.

export const REVIEW_STATS = {
  ratingValue: "4.9",
  bestRating: "5",
  worstRating: "1",
} as const;

/** Totaal aantal Google-beoordelingen op het bedrijfsprofiel (sept. 2026).
 * Werk dit bij zodra het aantal op Google wijzigt. */
export const REVIEW_COUNT = 126;

export interface Review {
  author: string;
  rating: number;
  body: string;
  /** Vrije tekst zoals Google die toont, bv. "2 maanden geleden". */
  date?: string;
}

export const REVIEWS: Review[] = [
  {
    author: "Mario Piette",
    rating: 5,
    date: "4 weken geleden",
    body: "Ik wil via deze weg Riory bedanken voor hun professionele aanpak en uitstekende service. De online afspraak verliep vlot en correct. Nadien kreeg ik een bericht wanneer ze zouden langskomen én wanneer ze onderweg waren, wat ik erg apprecieerde. De medewerkers zijn vriendelijk, toegankelijk en denken actief mee om de beste oplossing te vinden. In mijn geval hebben ze na twee uur intensief proberen beslist om de werken tijdelijk stop te zetten. Wat me daarbij enorm opviel, was hoe proper en zorgvuldig ze te werk gingen. Ze hebben vervolgens samen met hun zaakvoerder overlegd om een oplossing uit te werken zonder ingrijpende werken, zoals tegels uitbreken of leidingen openbreken. Op de afgesproken dag kwamen ze terug met een duidelijk plan en na amper 30 minuten was de afvoer volledig ontstopt. Ik kan Riory dan ook voor 100% aanbevelen. Misschien zijn ze niet de goedkoopste, maar de prijs is absoluut gerechtvaardigd door hun vakkennis, correcte aanpak en klantgerichte service. Bovendien hielden ze ook rekening met het feit dat ze twee keer moesten langskomen. Bedankt aan het hele team voor de topservice!",
  },
  {
    author: "Linda Creemers",
    rating: 5,
    date: "een maand geleden",
    body: "Bij het plaatsen van een nieuwe badkamer kwamen we erachter dat de toiletbuis serieus verstopt was. (Maar een kleine opening). Er bleek allerlei bouwpuin in te zitten wat tot steen aangekoekt was. Zo blij met de mannen van Riory. Kwamen vrij snel en ze gaven niet op. Ons probleem werd professioneel opgelost zonder breekwerk. Verdienen meer dan vijf sterren.",
  },
  {
    author: "Joran43",
    rating: 5,
    date: "2 maanden geleden",
    body: "Heel goede en vriendelijke service. Waren ze maar allemaal zo... Dikke duim en doe zo verder. Prijs/kwaliteit dik in orde",
  },
  {
    author: "Frank Vastmans",
    rating: 5,
    date: "2 maanden geleden",
    body: "Geweldige Service!!! Zeker een aanrader. Mannen weten waar ze mee bezig zijn..",
  },
  {
    author: "Stef Eggen",
    rating: 5,
    date: "2 maanden geleden",
    body: "Binnen 1,5 uur was het gefixt. Snelle en goede service!",
  },
  {
    author: "Jos Luyx",
    rating: 5,
    date: "4 maanden geleden",
    body: "Topservice van Riory! Na een hardnekkige verstopping in de afvoerbuis, kwamen zij met een vlotte en snelle service ter plaatse. De technieker wist precies wat het probleem was en loste het binnen no-time op met professioneel apparatuur. Geen gedoe, geen rotzooi, gewoon vakmanschap.",
  },
  {
    author: "Luc Nulens",
    rating: 5,
    date: "4 maanden geleden",
    body: "Perfecte service en interventie. Team met kennis van zaken en vol enthousiasme. Bedankt voor het oplossen van ons probleem bij een zeer belangrijke klant :)-",
  },
  {
    author: "Erwin Thoelen",
    rating: 5,
    date: "5 maanden geleden",
    body: "Professionele en grondige reiniging van keukenafvoer die jaarlijks terug verstopt, met daarna duidelijke uitleg bij de camera-inspectie. Om toch een minpunt te geven: de prijs staat niet op hun website, maar die is zeer redelijk voor de geleverde prestaties.",
  },
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

/** Schema.org AggregateRating + Review blok voor JSON-LD, zodat zoek- en AI-crawlers
 * de beoordelingen direct kunnen lezen zonder JavaScript uit te voeren. */
export const businessRatingSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Riory BV",
  url: "https://www.riory.be",
  image: "https://www.riory.be/riory-logo.svg",
  telephone: "+32472502814",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Natveld 47",
    addressLocality: "Bilzen-Hoeselt",
    postalCode: "3740",
    addressRegion: "Limburg",
    addressCountry: "BE",
  },
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
  })),
});
