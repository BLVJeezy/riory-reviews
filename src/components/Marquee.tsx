import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  /** Looptijd van één volledige cyclus. Langer = trager. */
  duration?: string;
  direction?: "left" | "right";
  /** Fade-randen links/rechts zodat items zacht in- en uitlopen. */
  fade?: boolean;
  className?: string;
  itemClassName?: string;
}

/**
 * Naadloze infinite loop: de inhoud wordt tweemaal gerenderd en de track
 * schuift exact 50% op, zodat de tweede kopie precies overneemt waar de
 * eerste eindigt. De duplicaten zijn aria-hidden zodat screenreaders en
 * crawlers de content maar één keer zien.
 */
const Marquee = ({
  children,
  duration = "60s",
  direction = "left",
  fade = true,
  className,
  itemClassName,
}: MarqueeProps) => {
  const style = { "--marquee-duration": duration } as CSSProperties;

  return (
    <div
      className={cn("group relative w-full overflow-hidden", className)}
      style={style}
    >
      <div
        className={cn(
          "flex w-max motion-reduce:animate-none group-hover:[animation-play-state:paused]",
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        )}
      >
        <div className={cn("flex shrink-0", itemClassName)}>{children}</div>
        <div className={cn("flex shrink-0", itemClassName)} aria-hidden="true">
          {children}
        </div>
      </div>

      {fade && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-20 bg-gradient-to-l from-background to-transparent" />
        </>
      )}
    </div>
  );
};

export default Marquee;
