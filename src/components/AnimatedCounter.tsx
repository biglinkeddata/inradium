import { useEffect, useRef, useState } from "react";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({
  end,
  suffix = "",
  duration = 2000,
  className = "",
}: AnimatedCounterProps) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const count = useCounterAnimation({ end, duration, isInView });

  return (
    <div ref={ref} className={className}>
      {count}
      {suffix}
    </div>
  );
};

export default AnimatedCounter;
