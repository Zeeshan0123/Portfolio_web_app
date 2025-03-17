import Image from "next/image";
import "./globals.css";
import { Hero } from "@/components/Hero"; // ✅ Correct import path
import { About } from "@/components/about";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Services } from "@/components/Services";
import { Achievements } from "@/components/Achiements";

export default function Home() {
  return (
    <div className="min-h-screen">
        <Hero /> 
        <About />
        <Services />
        <Projects />
        <Experience />
        <Blog />
        <Achievements />
        <Contact />
    </div>
  );
}

