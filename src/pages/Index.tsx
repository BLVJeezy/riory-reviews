import { useTranslation } from "react-i18next";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Star, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoStrip from "@/components/PhotoStrip";
import ReviewWall from "@/components/ReviewWall";
import { Button } from "@/components/ui/button";
import { REVIEW_STATS, REVIEW_COUNT, businessRatingSchema } from "@/data/reviews";
import { riorySiteUrl } from "@/lib/riorySite";

const PHONE_NUMBER = "+32 472 50 28 14";
const PHONE_HREF = "tel:+32472502814";

const Index = () => {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessRatingSchema()) }}
      />

      <Navbar />

      <main className="flex-1 pt-16 md:pt-20">
        {/* Foto's van Riory aan het werk — infinite loop, direct onder de header */}
        <PhotoStrip />

        {/* Hero */}
        <section className="px-6 pb-8 pt-8 md:px-8 md:pb-12 md:pt-12">
          <div className="section-container text-center">
            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-primary">
              {t("reviews.eyebrow")}
            </p>
            <h1 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-5xl">
              {t("reviews.title")}
            </h1>
            <p className="mx-auto mb-6 max-w-2xl font-body text-muted-foreground">
              {t("reviews.subtitle")}
            </p>

            <div className="inline-flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 sm:flex-row">
              <span className="font-heading text-4xl font-bold text-foreground">
                {REVIEW_STATS.ratingValue}
              </span>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex gap-0.5" aria-label="5 van 5 sterren">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="mt-1 font-body text-sm text-muted-foreground">
                  {t("reviews.ratingSuffix", { count: REVIEW_COUNT })}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Review wall — infinite loop */}
        <section className="overflow-hidden py-6 md:py-10">
          <ReviewWall />
        </section>

        {/* CTA */}
        <section className="bg-surface px-6 py-14 md:px-8 md:py-20">
          <div className="section-container text-center">
            <h2 className="mb-3 font-heading text-2xl font-bold text-foreground md:text-3xl">
              {t("reviews.ctaTitle")}
            </h2>
            <p className="mx-auto mb-7 max-w-xl font-body text-muted-foreground">
              {t("reviews.ctaBody")}
            </p>

            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button variant="cta" size="lg" className="rounded-full" asChild>
                <a href={riorySiteUrl("/afspraak", lang)}>{t("reviews.ctaAppointment")}</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-2 font-heading font-bold uppercase tracking-wider"
                asChild
              >
                <a href={PHONE_HREF}>
                  <Phone className="mr-2 h-4 w-4" />
                  {t("reviews.ctaCall")} {PHONE_NUMBER}
                </a>
              </Button>
            </div>

            <a
              href={riorySiteUrl("/", lang)}
              className="mt-6 inline-block font-body text-sm font-semibold text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              {t("reviews.backToSite")}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
