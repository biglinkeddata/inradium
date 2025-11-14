import { Link } from "react-router-dom";
import { Mail, Linkedin, X, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Inradium</h3>
            <p className="text-muted-foreground text-sm max-w-md">
              Transforming complex data into actionable insights through AI,
              Knowledge Graphs, and Intelligent Data solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Connect</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="mailto:info@inradium.com" className="hover:text-primary transition-colors flex items-center gap-2 hover-scale">
                  <Mail size={16} />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/inradium" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 hover-scale">
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://x.com/inradium" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 hover-scale">
                  <X size={16} />
                  <span>X</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/inradium/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 hover-scale">
                  <Facebook size={16} />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
          <p>© {currentYear} Inradium. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
