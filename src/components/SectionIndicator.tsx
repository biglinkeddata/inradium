import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const SectionIndicator = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className="group relative flex items-center justify-end"
          aria-label={`Go to ${label}`}
        >
          <span className="absolute right-6 px-3 py-1.5 bg-background/95 backdrop-blur-sm text-foreground text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg border border-border/50">
            {label}
          </span>
          <div
            className={cn(
              "w-3 h-3 rounded-full border transition-all duration-300 shadow-lg",
              activeSection === id
                ? "bg-primary border-primary scale-150 shadow-primary/50"
                : "bg-muted/50 border-muted hover:scale-125 hover:border-primary hover:bg-primary/20"
            )}
          />
        </button>
      ))}
    </div>
  );
};

export default SectionIndicator;
