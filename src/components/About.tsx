import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => {
  return (
    <section id="about" className="py-24 bg-section-accent text-section-accent-foreground transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight text-section-accent-foreground">
            About Inradium
          </h2>
          
          <div className="space-y-6 text-lg text-section-accent-foreground/90 font-normal" style={{ lineHeight: '1.7' }}>
            <p>
              Inradium is a technology company at the forefront of artificial intelligence,
              knowledge graphs, and intelligent data solutions. We partner with organizations
              to transform their data ecosystems into strategic assets that drive decision-making
              and innovation.
            </p>
            
            <p>
              Our approach is grounded in deep technical expertise and a commitment to practical,
              scalable solutions. We don't just implement technology — we architect systems that
              evolve with your business, ensuring sustainable value creation.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-section-accent-foreground/20">
              <ScrollReveal animation="scale-in" delay={0} threshold={0.3}>
                <div className="text-center">
                  <AnimatedCounter
                    end={10}
                    suffix="+"
                    className="text-4xl font-extrabold text-primary mb-2 tracking-tight"
                  />
                  <div className="text-section-accent-foreground/70 font-medium">Years Combined Expertise</div>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="scale-in" delay={150} threshold={0.3}>
                <div className="text-center">
                  <AnimatedCounter
                    end={50}
                    suffix="+"
                    className="text-4xl font-extrabold text-primary mb-2 tracking-tight"
                  />
                  <div className="text-section-accent-foreground/70 font-medium">Projects Delivered</div>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="scale-in" delay={300} threshold={0.3}>
                <div className="text-center">
                  <AnimatedCounter
                    end={100}
                    suffix="%"
                    className="text-4xl font-extrabold text-primary mb-2 tracking-tight"
                  />
                  <div className="text-section-accent-foreground/70 font-medium">Client Satisfaction</div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal animation="slide-up" delay={100} threshold={0.3}>
            <div className="mt-16 p-8 bg-white rounded-lg border border-section-accent-foreground/10">
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-section-accent-foreground">Our Philosophy</h3>
              <ul className="space-y-4 text-section-accent-foreground/80 font-normal" style={{ lineHeight: '1.6' }}>
                <ScrollReveal animation="slide-left" delay={200} threshold={0.3}>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">→</span>
                    <span>Start with the problem, not the technology</span>
                  </li>
                </ScrollReveal>
                <ScrollReveal animation="slide-left" delay={300} threshold={0.3}>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">→</span>
                    <span>Build systems that scale with your ambition</span>
                  </li>
                </ScrollReveal>
                <ScrollReveal animation="slide-left" delay={400} threshold={0.3}>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">→</span>
                    <span>Ensure knowledge transfer and capability building</span>
                  </li>
                </ScrollReveal>
                <ScrollReveal animation="slide-left" delay={500} threshold={0.3}>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">→</span>
                    <span>Deliver measurable impact, not just implementations</span>
                  </li>
                </ScrollReveal>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
