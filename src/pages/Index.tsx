import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-glass-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Rohan Dabas. Built with React, TypeScript, and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
