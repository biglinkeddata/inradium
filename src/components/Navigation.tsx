import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
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
          <img 
            src={logo} 
            alt="Inradium" 
            className="h-12 w-auto"
          />

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
            <Button
              onClick={() => scrollToSection("contact")}
              variant="secondary"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground/80 hover:text-primary transition-all text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground/80 hover:text-primary transition-all text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground/80 hover:text-primary transition-all text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground/80 hover:text-primary transition-all text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="secondary"
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
