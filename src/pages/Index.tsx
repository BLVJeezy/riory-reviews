import { useTranslation } from "react-i18next";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { REVIEWS, REVIEW_STATS, REVIEW_COUNT, businessRatingSchema } from "@/data/reviews";
import { riorySiteUrl } from "@/lib/riorySite";

const StarRow = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5" aria-label={`${rating} van 5 sterren`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
      />
    ))}
  </div>
);

const Index = () => {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessRatingSchema()) }}
      />

      <Navbar />

      <main className="flex-1 pt-24 md:pt-28">
        {/* Hero */}
        <section className="section-padding pb-10 md:pb-14 bg-background">
          <div className="section-container text-center">
            <p className="text-primary font-heading font-semibold uppercase tracking-wider text-sm mb-3">
              {t("reviews.eyebrow")}
            </p>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-5">
              {t("reviews.title")}
            </h1>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto mb-6">
              {t("reviews.subtitle")}
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-card border border-border rounded-2xl px-6 py-4">
              <span className="text-4xl font-heading font-bold text-foreground">{REVIEW_STATS.ratingValue}</span>
              <div className="flex flex-col items-center sm:items-start">
                <StarRow rating={5} />
                <span className="text-sm text-muted-foreground font-body mt-1">
                  {t("reviews.ratingSuffix", { count: REVIEW_COUNT })}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews grid */}
        <section className="section-padding pt-4 bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {REVIEWS.map((review, i) => (
                <article
                  key={`${review.author}-${i}`}
                  className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-3"
                >
                  <StarRow rating={review.rating} />
                  <p className="text-foreground/90 font-body leading-relaxed text-sm">
                    “{review.body}”
                  </p>
                  <div className="mt-auto pt-2 flex items-baseline justify-between gap-2">
                    <span className="text-sm font-heading font-semibold text-foreground">
                      {review.author}
                    </span>
                    {review.date && (
                      <span className="text-xs text-muted-foreground font-body">{review.date}</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding pt-4 bg-surface">
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
              {t("reviews.ctaTitle")}
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto mb-6">
              {t("reviews.ctaBody")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="cta" size="lg" className="rounded-full" asChild>
                <a
                  href="https://www.google.com/search?q=Riory+BV+review"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("reviews.ctaButton")}
                </a>
              </Button>
              <a
                href={riorySiteUrl("/", lang)}
                className="text-sm font-body font-semibold text-foreground hover:text-primary transition-colors underline underline-offset-4"
              >
                {t("reviews.backToSite")}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
