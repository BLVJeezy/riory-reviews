import Marquee from "@/components/Marquee";
import { PHOTOS } from "@/data/photos";

const PhotoStrip = () => (
  <section className="bg-background py-4 md:py-6" aria-label="Foto's van Riory aan het werk">
    <Marquee duration="70s" itemClassName="gap-3 md:gap-4 pr-3 md:pr-4">
      {PHOTOS.map((photo) => (
        <div
          key={photo.src}
          className="h-28 w-40 sm:h-36 sm:w-52 md:h-44 md:w-64 shrink-0 overflow-hidden rounded-xl bg-muted"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </Marquee>
  </section>
);

export default PhotoStrip;
