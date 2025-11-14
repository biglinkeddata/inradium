import { useEffect, useState, useRef } from "react";

interface UseParallaxOptions {
  speed?: number;
  direction?: "vertical" | "horizontal" | "both";
  disabled?: boolean;
}

export const useParallax = (options: UseParallaxOptions = {}) => {
  const {
    speed = 0.5,
    direction = "vertical",
    disabled = false,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (disabled) return;

    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate if element is in viewport
      const isInViewport = 
        scrolled + windowHeight > elementTop &&
        scrolled < elementTop + elementHeight;

      if (!isInViewport) return;

      // Calculate parallax offset based on scroll position relative to element
      const elementCenter = elementTop + elementHeight / 2;
      const scrollCenter = scrolled + windowHeight / 2;
      const distance = scrollCenter - elementCenter;

      const yOffset = direction !== "horizontal" ? distance * speed : 0;
      const xOffset = direction !== "vertical" ? distance * speed * 0.5 : 0;

      setOffset({ x: xOffset, y: yOffset });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction, disabled]);

  return { ref, offset };
};
