# Riory Reviews

Losstaande, publiek indexeerbare reviews-pagina voor Riory BV, bedoeld om onder een
eigen domein (`riory-reviews.be`) te draaien zodat zoekmachines en AI-crawlers
(ChatGPT, Perplexity, Claude, ...) rechtstreeks naar de klantbeoordelingen kunnen
verwijzen.

De pagina deelt de visuele identiteit van [riory.be](https://www.riory.be): dezelfde
header (Navbar), footer, kleuren, typografie en logo. Het logo en alle overige
header-/footerlinks (diensten, regio's, afspraak, ...) verwijzen terug naar
`riory.be`, aangezien deze site zelf enkel de reviews-pagina bevat.

## Reviews toevoegen

Alle reviews staan in [`src/data/reviews.ts`](src/data/reviews.ts) in de `REVIEWS`
array. Voeg een object toe met `author`, `rating` (1-5) en `body` om een nieuwe review
te tonen — de pagina, de sterrenweergave en de `AggregateRating`/`Review` JSON-LD
(voor SEO en AI-crawlers) worden automatisch bijgewerkt.

```ts
{
  author: "Naam klant",
  rating: 5,
  body: "Tekst van de review.",
}
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Domein

Dit project is bedoeld om te draaien op `riory-reviews.be`. Voeg dat domein toe aan
het hosting-project (bv. Vercel) en wijs de DNS van `riory-reviews.be` ernaar.
