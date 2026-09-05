import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  /** Looptijd van één volledige cyclus, bv. "60s". Langer = trager. */
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
 *
 * Mobiel-specifieke details:
 * - De looptijd staat als inline animationDuration en niet als var() in de
 *   animation-shorthand; iOS Safari start de animatie anders niet.
 * - Pauzeren op hover geldt alleen op apparaten met een echte muis, want op
 *   touch blijft een :hover-status na een tik hangen en zou de loop stoppen.
 * - De marquee blijft bewust ook doorlopen wanneer "verminder bewegingen"
 *   aanstaat: dit is decoratieve content en moet er op elk toestel hetzelfde
 *   uitzien als op desktop.
 */
const Marquee = ({
  children,
  duration = "60s",
  direction = "left",
  fade = true,
  className,
  itemClassName,
}: MarqueeProps) => (
  <div className={cn("group relative w-full overflow-hidden", className)}>
    <div
      style={{ animationDuration: duration }}
      className={cn(
        "flex w-max [transform:translateZ(0)] [backface-visibility:hidden] [will-change:transform]",
        direction === "left" ? "animate-scroll-left" : "animate-scroll-right",
        "[@media(hover:hover)]:group-hover:[animation-play-state:paused]"
      )}
    >
      <div className={cn("flex shrink-0", itemClassName)}>{children}</div>
      <div className={cn("flex shrink-0", itemClassName)} aria-hidden="true">
        {children}
      </div>
    </div>

    {fade && (
      <>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent sm:w-20" />
      </>
    )}
  </div>
);

export default Marquee;
