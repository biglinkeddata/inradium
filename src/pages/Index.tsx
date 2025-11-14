import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SectionIndicator from "@/components/SectionIndicator";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <SectionIndicator />
      <Navigation />
      <Hero />
      <ScrollReveal animation="slide-up">
        <Services />
      </ScrollReveal>
      <ScrollReveal animation="slide-up" delay={100}>
        <About />
      </ScrollReveal>
      <ScrollReveal animation="slide-up" delay={100}>
        <Contact />
      </ScrollReveal>
      <ScrollReveal animation="fade-in">
        <Footer />
      </ScrollReveal>
    </div>
  );
};

export default Index;
