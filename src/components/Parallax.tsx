import { ReactNode, CSSProperties } from "react";
import { useParallax } from "@/hooks/use-parallax";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  direction?: "vertical" | "horizontal" | "both";
  className?: string;
  disabled?: boolean;
  scale?: boolean;
  opacity?: boolean;
}

const Parallax = ({
  children,
  speed = 0.5,
  direction = "vertical",
  className,
  disabled = false,
  scale = false,
  opacity = false,
}: ParallaxProps) => {
  const { ref, offset } = useParallax({ speed, direction, disabled });

  const style: CSSProperties = {
    transform: `translate3d(${offset.x}px, ${offset.y}px, 0)${
      scale ? ` scale(${1 + Math.abs(offset.y) / 1000})` : ""
    }`,
    opacity: opacity ? Math.max(1 - Math.abs(offset.y) / 500, 0.3) : 1,
    willChange: "transform, opacity",
    transition: "transform 0.1s ease-out",
  };

  return (
    <div ref={ref} className={cn(className)} style={style}>
      {children}
    </div>
  );
};

export default Parallax;
