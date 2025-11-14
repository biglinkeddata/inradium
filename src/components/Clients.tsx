import ScrollReveal from "./ScrollReveal";

const clients = [
  { name: "Elliptic", url: "https://www.elliptic.co", logo: "/images/clients/elliptic-logo.png" },
  { name: "Pulsar", url: "https://www.pulsarplatform.com/", logo: "/images/clients/pulsar-logo.png" },
  { name: "Vuelio", url: "https://www.vuelio.com/uk/", logo: "/images/clients/vuelio-logo.png" },
  { name: "Isentia", url: "https://www.isentia.com/", logo: "/images/clients/isentia-logo.png" },
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-background">
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
                className="group flex items-center justify-center p-8 rounded-lg transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-12 md:h-16 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
