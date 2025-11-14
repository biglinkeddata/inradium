import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SectionIndicator from "@/components/SectionIndicator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <SectionIndicator />
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
