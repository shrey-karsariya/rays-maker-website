import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

/**
 * Counts a number from 0 up to `end` when the referenced element scrolls into view.
 * @param end  - target number (e.g. 25 for "25+")
 * @param duration - animation duration in ms (default 1800)
 */
export function useCountUp(end: number, duration = 1800) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return { ref, count };
}
