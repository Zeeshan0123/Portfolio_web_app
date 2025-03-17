import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Brain, Code, Database } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
        title: "AI Engineer",
        company: "CafeVista Pvt Ltd",
        period: "2024 - Past",
        description: "Worked on multiple AI projects for a service-based company, developing and deploying AI-driven solutions across various domains.",
        achievements: [
          "Fine-tuned diffusion models for text-to-image and image-to-text applications, enhancing model accuracy and output quality.",
          "Designed and implemented FastAPI backends for mobile and web applications, ensuring seamless integration and high performance.",
          "Built interactive AI-powered user interfaces using Next JS,  Gradio, Chainlit, and Streamlit, enhancing user engagement.",
          "Created and deployed Retrieval-Augmented Generation (RAG) pipelines with LangChain and LlamaIndex, leveraging AWS and Hugging Face for scalability.",
          "Deployed APIs and applications on Hugging Face cloud, ensuring robust and scalable AI solutions.",
          "Implemented scalable AI workflows on AWS, optimizing performance and integration in production environments.",
          "Collaborated cross-functionally to deliver AI-driven solutions, improving operational efficiency and user engagement."
        ]
      },
      {
        title: "AI Engineer",
        company: "MACAAN AI | Resoucex.io",
        period: "2025 - Present",
        description: "Developing AI-powered solutions for an appliance troubleshooting and repair ecosystem, making home equipment repair more efficient and accessible.",
        achievements: [
          "Built an end-to-end AI pipeline, including fine-tuning a Large Language Model (LLM) tailored for the repair industry using an in-house 1.6 million record dataset.",
          "Designed an advanced RAG pipeline leveraging Qdrant for vector storage, an advanced reranker for improved retrieval accuracy, and web search agents for real-time data integration.",
          "Deployed AI pipelines and solutions on Azure Virtual Machines, ensuring scalability and reliability in production environments.",
          "Managed large datasets across multiple collections, ensuring high performance and efficient processing.",
          "Optimized workflows using Hugging Face embeddings tailored to specific use cases and integrated Open and Close Source LLMs where appropriate.",
          "Generated synthetic datasets from unstructured data to enhance model training and accuracy.",
          "Developed and deployed AI-driven features seamlessly integrated into the company’s customer-facing portal.",
          "Collaborated with 4+ AI engineers to improve the performance of AI pipelines."
        ]
      }
  ];

  return (
    <div className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-6 h-6 text-primary" />
                  {exp.title} at {exp.company}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{exp.description}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};