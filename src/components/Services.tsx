import { Card, CardContent } from "@/components/ui/card";
import { Brain, Network, Database, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Leverage cutting-edge AI models to automate processes, predict outcomes, and unlock insights hidden in your data.",
    features: [
      "Machine Learning & Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
    ],
  },
  {
    icon: Network,
    title: "Knowledge Graphs",
    description:
      "Build interconnected data structures that reveal relationships, patterns, and context across your enterprise.",
    features: [
      "Semantic Data Modeling",
      "Ontology Design",
      "Graph Database Solutions",
      "Entity Relationship Mapping",
    ],
  },
  {
    icon: Database,
    title: "Intelligent Data",
    description:
      "Transform raw data into strategic assets with advanced data engineering and intelligent processing pipelines.",
    features: [
      "Data Integration & ETL",
      "Real-time Data Processing",
      "Data Quality & Governance",
      "Analytics & Visualization",
    ],
  },
  {
    icon: TrendingUp,
    title: "Strategic Implementation",
    description:
      "End-to-end support from concept to deployment, ensuring your AI and data solutions drive measurable business value.",
    features: [
      "Architecture Design",
      "System Integration",
      "Scalable Deployment",
      "Performance Optimization",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal" style={{ lineHeight: '1.6' }}>
            Comprehensive technology solutions designed to transform your data ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-background border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 font-normal" style={{ lineHeight: '1.7' }}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/80 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
