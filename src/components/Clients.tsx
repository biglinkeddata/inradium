import ScrollReveal from "./ScrollReveal";

const clients = [
  { name: "ELLIPTIC", url: "https://www.elliptic.co" },
  { name: "PULSAR", url: "https://www.pulsarplatform.com/" },
  { name: "VUELIO", url: "https://www.vuelio.com/uk/" },
  { name: "ISENTIA", url: "https://www.isentia.com/" },
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-section-light dark:bg-section-dark">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Trusted by Industry Leaders
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            We're proud to partner with innovative companies across the globe
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
          {clients.map((client, index) => (
            <ScrollReveal
              key={client.name}
              animation="scale-in"
              delay={index * 100}
            >
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-6 rounded-lg transition-all duration-300 hover:bg-accent/50"
              >
                <span className="text-2xl md:text-3xl font-bold text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300 tracking-wide">
                  {client.name}
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
