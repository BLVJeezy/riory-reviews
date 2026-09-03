import { Star } from "lucide-react";
import Marquee from "@/components/Marquee";
import { REVIEWS, type Review } from "@/data/reviews";

const StarRow = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5" aria-label={`${rating} van 5 sterren`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${i < rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
      />
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: Review }) => (
  <article className="flex w-[280px] sm:w-[320px] md:w-[360px] shrink-0 flex-col gap-3 rounded-2xl border border-border bg-card p-5 md:p-6">
    <StarRow rating={review.rating} />
    <p className="font-body text-sm leading-relaxed text-foreground/90 line-clamp-6">
      “{review.body}”
    </p>
    <div className="mt-auto flex items-baseline justify-between gap-2 pt-1">
      <span className="font-heading text-sm font-semibold text-foreground">{review.author}</span>
      {review.date && (
        <span className="font-body text-xs text-muted-foreground">{review.date}</span>
      )}
    </div>
  </article>
);

const ReviewWall = () => {
  // Twee rijen die tegengesteld lopen; bij een oneven aantal krijgt de bovenste
  // rij de extra review.
  const half = Math.ceil(REVIEWS.length / 2);
  const rowOne = REVIEWS.slice(0, half);
  const rowTwo = REVIEWS.slice(half);

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <Marquee duration="80s" itemClassName="gap-4 md:gap-6 pr-4 md:pr-6">
        {rowOne.map((review, i) => (
          <ReviewCard key={`${review.author}-${i}`} review={review} />
        ))}
      </Marquee>

      <Marquee duration="95s" direction="right" itemClassName="gap-4 md:gap-6 pr-4 md:pr-6">
        {rowTwo.map((review, i) => (
          <ReviewCard key={`${review.author}-${i}`} review={review} />
        ))}
      </Marquee>
    </div>
  );
};

export default ReviewWall;
