import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Award, Check } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      title: "Certifications",
      items: [
        "Deep Learning Specialization - Coursera",
        "Advanced Machine Learning - Google",
        "Natural Language Processing - Stanford Online"
      ]
    },
    {
      title: "Technical Achievements",
      items: [
        "90% accuracy on MMLU Anatomy dataset of my own model Antobot",
        "Publish my Own Models on HuggingFace Hub",
        "Built production-ready RAG systems"
      ]
    },
    {
      title: "Recognition",
      items: [
        "Best AI Innovation Award 2023",
        "Top contributor in open source AI projects",
        "Speaker at AI Tech Conference 2023"
      ]
    }
  ];

  return (
    <div className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Achievements & Certifications</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {achievement.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-1" />
                      <span>{item}</span>
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