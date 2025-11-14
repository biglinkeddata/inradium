import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/inradium-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOpen
          ? "bg-background backdrop-blur-md border-b border-border"
          : isScrolled 
            ? "bg-background/80 backdrop-blur-md border-b border-border" 
            : "bg-transparent border-b border-transparent"
      }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("home")}
            className="cursor-pointer"
            aria-label="Go to homepage"
          >
            <img 
              src={logo} 
              alt="Inradium" 
              className="h-12 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground/80 hover:text-primary transition-all"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-primary transition-all"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-primary transition-all"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-primary transition-all"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground relative w-6 h-6"
            aria-label="Toggle menu"
          >
            <Menu 
              size={24} 
              className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
              }`}
            />
            <X 
              size={24} 
              className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden border-t border-border transition-all duration-300 ease-in-out ${
            isOpen 
              ? "max-h-96 opacity-100" 
              : "max-h-0 opacity-0 border-transparent"
          }`}
        >
          <div className="flex flex-col gap-4 py-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground/80 hover:text-primary transition-all text-center animate-fade-in"
              style={{ animationDelay: "50ms" }}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-primary transition-all text-center animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-primary transition-all text-center animate-fade-in"
              style={{ animationDelay: "150ms" }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-primary transition-all text-center animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
