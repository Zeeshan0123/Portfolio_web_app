import { Brain, Code, Database, Laptop, Rocket } from "lucide-react";

export const About = () => {
  const skills = [
    {
      category: "AI/ML",
      items: [
        "TensorFlow",
        "PyTorch",
        "Hugging Face",
        "Scikit-learn",
        "OpenAI GPT",
        "LangChain",
        "Llamaindex",
        "Stable Diffusion",
        "Transformers",
        "OpenCV",
        "MLflow",
      ],
    },
    {
      category: "Programming",
      items: ["Python", "JavaScript", "TypeScript", "SQL", "Next js", "React","Dart"],
    },
    {
      category: "Tools & Platforms",
      items: [
        "AWS (SageMaker, Lambda, Bedrock, EC2)",
        "Azure (ML Services, virtual machine)",
        "GCP (Vertex AI)",
        "Docker",
        "Git",
        "FastAPI",
        "Flask",
        "Pinecone",
        "Qdrant",
        "CrewAI",
        "LangGraph"
      ],
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card-hover p-6 bg-white rounded-lg shadow-lg">
            <Brain className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Expertise</h3>
            <p className="text-muted-foreground">
              Specialized in machine learning, deep learning, and neural networks with focus on practical applications
            </p>
          </div>
          <div className="card-hover p-6 bg-white rounded-lg shadow-lg">
            <Rocket className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-muted-foreground">
              Building cutting-edge AI solutions that solve real-world problems and drive business growth
            </p>
          </div>
          <div className="card-hover p-6 bg-white rounded-lg shadow-lg">
            <Laptop className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Full Stack AI</h3>
            <p className="text-muted-foreground">
              Experienced in end-to-end AI development, from data preparation to production deployment
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillSet, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{skillSet.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};