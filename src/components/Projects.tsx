import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Antobot: Anatomy Chatbot",
      description: "AI-powered chatbot for medical students to learn anatomy through interactive conversations",
      tech: ["LlamaIndex", "LORA/QLora","LlamaCpp","Bio-Mistarl","Chainlit UI", "RAG", "FastAPI"],
      features: [
        "3D body part visualization",
        "Quiz generation system",
        "Personalized learning paths"
      ],
      image: "https://images.unsplash.com/photo-1615505368758-8a3af2a4c379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "#",
      demo: "#"
    },
    {
      title: "AI Company Lead Gen Bot",
      description: "Automated lead generation system using web scraping from Linked In, automation, and a RAG-based chat app.",
      tech: ["Ollama","Selenium", "LangChain", "Transformers", "Huggingface", "LinkedIn","Streamlit"],
      features: [
        "LinkedIn data scraping",
        "Automated outreach and follow-ups",
        "RAG-based GPT for personalized interactions",
        "Integration using Streamlit UI"
      ],
      image: "https://plus.unsplash.com/premium_photo-1677094310956-7f88ae5f5c6b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "#",
      demo: "#"
    },
    {
      title: "AI-Powered Storytelling API",
      description: "A production-ready API that generates structured stories with dynamic illustrations using advanced AI models.",
      tech: ["Gradio", "LangChain", "FLUX AI", "FastAPI", "Hugging Face Spaces", "Docker"],
      features: [
        "Custom story generation based on mood, theme, and age",
        "AI-generated illustrations for different scenes",
        "Real-time API responses with scalable backend Gradio App for UI and deployment"
      ],
      image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="bg-secondary/30 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <ul className="list-disc list-inside mb-4 text-sm text-muted-foreground">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};