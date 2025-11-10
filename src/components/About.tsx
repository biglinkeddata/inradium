const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About Inradium
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
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

            <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years Combined Expertise</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 bg-card rounded-lg border border-border">
            <h3 className="text-2xl font-semibold mb-4">Our Philosophy</h3>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">→</span>
                <span>Start with the problem, not the technology</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">→</span>
                <span>Build systems that scale with your ambition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">→</span>
                <span>Ensure knowledge transfer and capability building</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">→</span>
                <span>Deliver measurable impact, not just implementations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
