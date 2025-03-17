
import { LayoutGrid, Brain, Database, FileCode, Network, ChartBar, Layers, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "Natural Language Processing",
      description: "Building intelligent systems that understand, interpret, and generate human language using state-of-the-art language models and techniques."
    },
    {
      icon: <ChartBar className="w-12 h-12 text-primary" />,
      title: "Machine Learning Solutions",
      description: "Creating custom machine learning models to solve complex business problems with high accuracy and performance."
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "Data Engineering",
      description: "Designing robust data pipelines and architectures to handle large-scale data processing for AI applications."
    },
    {
      icon: <FileCode className="w-12 h-12 text-primary" />,
      title: "Model Fine-tuning",
      description: "Optimizing pre-trained models for specific tasks and domains to achieve superior performance and efficiency."
    },
    {
      icon: <Network className="w-12 h-12 text-primary" />,
      title: "AI Infrastructure Setup",
      description: "Deploying and managing scalable AI infrastructure on cloud platforms for reliable and cost-effective operations."
    },
    {
      icon: <Layers className="w-12 h-12 text-primary" />,
      title: "AI-Powered SaaS Solutions",
      description: "Building customized Software-as-a-Service platforms that integrate AI capabilities to streamline operations and drive business growth."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized AI engineering services to help businesses leverage the power of artificial intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border border-border/40 bg-card/90 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-foreground/70">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
