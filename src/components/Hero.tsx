import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax values
  const videoParallax = scrollY * 0.6; // Video moves faster
  const contentParallax = scrollY * 0.3; // Content moves slower
  const opacity = Math.max(1 - scrollY / 600, 0); // Fade out content

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
          style={{
            transform: `translateY(${videoParallax}px) scale(${1 + scrollY / 2000})`,
            willChange: "transform",
          }}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-dark opacity-0"></div>
      </div>

      {/* Content with Parallax */}
      <div
        className="relative z-10 container mx-auto px-6 text-left"
        style={{
          transform: `translateY(-${contentParallax}px)`,
          opacity: opacity,
          willChange: "transform, opacity",
        }}
      >
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight animate-fade-in-left">
            From Data to{" "}
            <span className="text-primary">Intelligence</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-12 font-normal tracking-wide animate-fade-in-left" style={{ lineHeight: '1.6', animationDelay: '0.2s', animationFillMode: 'both' }}>
            Transforming complex data into actionable insights through AI, Knowledge Graphs, and Intelligent Data solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start animate-fade-in-left" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <Button
              onClick={() => scrollToSection("services")}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
            >
              Explore Our Solutions
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline-secondary"
              className="text-lg px-8 py-6"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
      >
        <ChevronDown size={32} className="text-primary" />
      </button>
    </section>
  );
};

export default Hero;
