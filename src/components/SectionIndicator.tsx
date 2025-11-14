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
          <span className="absolute right-6 px-2 py-1 bg-card text-foreground text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {label}
          </span>
          <div
            className={cn(
              "w-2 h-2 rounded-full border-2 border-foreground/40 transition-all duration-300",
              activeSection === id
                ? "bg-primary border-primary scale-150"
                : "bg-transparent hover:scale-125 hover:border-foreground/60"
            )}
          />
        </button>
      ))}
    </div>
  );
};

export default SectionIndicator;
