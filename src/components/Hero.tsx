
"use client"; // ✅ Ensure this is the first line

import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import "../app/index.css"

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const [typedText, setTypedText] = useState("");
  const fullText = " Zeeshan Zafar";
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Typing animation effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/40 to-primary/20 animate-gradient-shift"></div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl -top-20 -left-20 animate-float-slow"></div>
        <div className="absolute w-96 h-96 rounded-full bg-secondary/10 blur-3xl -bottom-20 -right-20 animate-float-medium"></div>
        <div className="absolute w-64 h-64 rounded-full bg-primary/5 blur-2xl top-1/3 left-1/4 animate-float-fast"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 py-20 z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-10 relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full blur opacity-50 group-hover:opacity-80 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="/profile.jpg"
              alt="AI Profile"
              className="w-36 h-36 rounded-full mx-auto relative ring-4 ring-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:ring-primary/40"
            />
          </div>
          

          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent h-[100px] md:h-[120px] flex items-center justify-center">
            Hi, I'm&nbsp;<span className="text-primary ml-2">{typedText}</span>
            <span className="animate-blink ml-1 text-primary">|</span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-medium mb-10 text-foreground/90 transition-all duration-500 hover:text-primary/90">
            AI Engineer Shaping the Future of Technology
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Specializing in Large Language Models, Computer Vision, and Natural Language Processing. 
            Building intelligent SaaS solutions that transform businesses and enhance human capabilities.
          </p>
          
          <div className="flex flex-wrap gap-5 justify-center">
            <Button variant="default" size="lg" className="relative overflow-hidden group transition-all duration-300 hover:pl-6 hover:pr-10"  onClick={scrollToContact}>
              <span className="relative z-10">Let's Connect</span>
              <ArrowRight className="absolute right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10" />
              <div className="absolute inset-0 w-0 bg-primary/20 group-hover:w-full transition-all duration-300"></div>
            </Button>
            
            <a href="https://github.com/Zeeshan0123" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="group gap-2 hover:bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/80 transition-all duration-300">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>GitHub</span>
              </Button>
            </a>
            
            <a href="https://www.linkedin.com/in/zeeshan-zafar-1728a324a/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="group gap-2 hover:bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/80 transition-all duration-300">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>LinkedIn</span>
              </Button>
            </a>
            
            <Button variant="outline" size="lg" className="group gap-2 hover:bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/80 transition-all duration-300">
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Resume</span>
            </Button>
            
            {/* <Button variant="outline" size="lg" className="group gap-2 hover:bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/80 transition-all duration-300">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Contact</span>
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};