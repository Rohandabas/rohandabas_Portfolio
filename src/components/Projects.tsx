import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, full-stack e-commerce solution with real-time inventory, payment processing, and advanced analytics. Built with microservices architecture for scalability.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "Docker"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      stats: { users: "10K+", performance: "98", uptime: "99.9%" }
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "An intelligent dashboard that provides real-time insights using machine learning algorithms. Features predictive analytics and automated reporting.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Recharts"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      stats: { accuracy: "94%", data: "1M+", speed: "< 100ms" }
    },
    {
      title: "Social Media App",
      description: "A cross-platform social media application with real-time messaging, content sharing, and advanced privacy controls.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "GraphQL", "AWS", "Socket.io", "TypeScript"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      stats: { downloads: "50K+", rating: "4.8", reviews: "2K+" }
    },
    {
      title: "Blockchain Voting System",
      description: "A secure, transparent voting system built on blockchain technology. Ensures vote integrity and provides real-time results.",
      image: "/api/placeholder/600/400",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      stats: { transactions: "100K+", security: "100%", votes: "25K+" }
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, featuring innovative solutions and cutting-edge technologies
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group animate-fade-in ${
                project.featured ? 'lg:grid lg:grid-cols-2 lg:gap-12' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`${project.featured ? '' : 'max-w-2xl mx-auto'}`}>
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-2xl mb-6 lg:mb-0">
                  <div className="aspect-video bg-gradient-subtle glass border border-glass-border rounded-2xl flex items-center justify-center group-hover:scale-105 transition-smooth">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary-foreground">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-muted-foreground">Project Preview</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-smooth rounded-2xl" />
                </div>
              </div>

              <div className={`${project.featured ? '' : 'text-center'} ${project.featured && index % 2 === 1 ? 'lg:order-first' : ''}`}>
                {/* Project Content */}
                <div className="space-y-6">
                  <div>
                    {project.featured && (
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-primary text-primary-foreground rounded-full mb-4">
                        Featured Project
                      </span>
                    )}
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center glass rounded-xl p-3 border border-glass-border">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm glass rounded-full border border-glass-border font-mono hover:border-primary/50 transition-smooth"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="default"
                      className="glass bg-gradient-primary text-primary-foreground hover-glow px-6 py-2 rounded-xl shadow-button group"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-smooth" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="glass border-glass-border hover:border-primary/50 px-6 py-2 rounded-xl transition-smooth group"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-smooth" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="glass border-glass-border hover:border-primary/50 px-8 py-3 rounded-2xl transition-smooth group"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;