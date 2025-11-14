import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in" | "slide-up" | "slide-left" | "slide-right" | "scale-in";
  delay?: number;
  threshold?: number;
}

const animationClasses = {
  "fade-in": "opacity-0 animate-fade-in",
  "slide-up": "opacity-0 translate-y-10 transition-all duration-700",
  "slide-left": "opacity-0 translate-x-10 transition-all duration-700",
  "slide-right": "opacity-0 -translate-x-10 transition-all duration-700",
  "scale-in": "opacity-0 scale-95 animate-scale-in",
};

const visibleClasses = {
  "fade-in": "",
  "slide-up": "opacity-100 translate-y-0",
  "slide-left": "opacity-100 translate-x-0",
  "slide-right": "opacity-100 translate-x-0",
  "scale-in": "",
};

const ScrollReveal = ({
  children,
  className,
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={cn(
        animationClasses[animation],
        isVisible && visibleClasses[animation],
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
