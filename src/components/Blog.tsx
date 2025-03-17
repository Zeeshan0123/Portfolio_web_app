import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Blog = () => {
  const posts = [
    {
      title: "Fine-Tuning LLMs with LORA: A Practical Guide",
      excerpt: "Learn how to efficiently fine-tune large language models using LORA technique",
      date: "March 15, 2024",
      readTime: "10 min read"
    },
    {
      title: "Building RAG Systems for Enterprise Applications",
      excerpt: "A comprehensive guide to implementing Retrieval Augmented Generation",
      date: "March 10, 2024",
      readTime: "8 min read"
    },
    {
      title: "Optimizing AI Models for Production",
      excerpt: "Best practices for deploying and scaling AI models in production environments",
      date: "March 5, 2024",
      readTime: "12 min read"
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <div className="flex gap-2 text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button variant="link" className="p-0">
                  Comming Soon <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};