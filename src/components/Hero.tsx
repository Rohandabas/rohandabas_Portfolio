import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Code2 } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text animate-gradient-shift bg-[length:200%_200%]">
              Rohan Dabas
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Full Stack Developer & AI Enthusiast
          </p>
          
          <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Computer Science Engineering student passionate about building innovative AI-powered solutions and full-stack applications
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              variant="default" 
              size="lg"
              className="glass hover-glow bg-gradient-primary text-primary-foreground font-semibold px-8 py-3 rounded-2xl shadow-button"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-glass-border hover:border-primary/50 px-8 py-3 rounded-2xl transition-smooth"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="https://github.com/Rohandabas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-2xl hover-glow transition-smooth hover:bg-gradient-primary group"
            >
              <Github className="w-6 h-6 group-hover:text-primary-foreground transition-smooth" />
            </a>
            <a 
              href="https://www.linkedin.com/in/rohan-dabas1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-2xl hover-glow transition-smooth hover:bg-gradient-primary group"
            >
              <Linkedin className="w-6 h-6 group-hover:text-primary-foreground transition-smooth" />
            </a>
            <a 
              href="mailto:rohandabas1027@gmail.com" 
              className="p-3 glass rounded-2xl hover-glow transition-smooth hover:bg-gradient-primary group"
            >
              <Mail className="w-6 h-6 group-hover:text-primary-foreground transition-smooth" />
            </a>
            <a 
              href="https://leetcode.com/u/RohanDabas/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-2xl hover-glow transition-smooth hover:bg-gradient-primary group"
            >
              <Code2 className="w-6 h-6 group-hover:text-primary-foreground transition-smooth" />
            </a>
          </div>
        </div>
        
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce p-3 glass rounded-full hover-glow transition-smooth group"
        >
          <ArrowDown className="w-6 h-6 group-hover:text-primary transition-smooth" />
        </button>
      </div>
    </section>
  );
};

export default Hero;