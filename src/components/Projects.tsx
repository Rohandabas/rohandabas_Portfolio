import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "StudyMate - AI Learning Platform",
      description: "Built a full-stack application with React.js frontend and Supabase backend, implementing secure user authentication and real-time data synchronization. Integrated Gemini AI API to generate personalized SMART study plans and fetch YouTube video data for enhanced learning content.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Tailwind CSS", "Supabase", "ClerkAuth", "Gemini API", "YouTube API"],
      github: "https://github.com/Rohandabas/studymate",
      live: "https://yrstudymate.netlify.app/",
      featured: true,
      stats: { period: "Jan 2025", features: "AI Plans", security: "RLS" }
    },
    {
      title: "GoalMind AI - Goal Management System",
      description: "Built a full-stack application with React.js frontend and Express.js backend, implementing a goal tracking system for 500+ users. Integrated Gemini AI API to generate personalized SMART goal recommendations and weekly planning schedules.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Tailwind CSS", "Express.js", "ClerkAuth", "Gemini API"],
      github: "https://github.com/Rohandabas/GOALMIND-AI",
      live: "https://goalmindai.netlify.app/",
      featured: true,
      stats: { users: "500+", period: "Dec 2024", ai: "SMART Goals" }
    },
    {
      title: "Code-Edi - Web Development IDE",
      description: "Built an interactive web-based IDE for practicing HTML, CSS, and JavaScript fundamentals with real-time code execution, file management, note-taking, and coding quizzes. Containerized using Docker and deployed on AWS EC2.",
      image: "/api/placeholder/600/400",
      technologies: ["HTML", "CSS", "JavaScript", "Docker", "AWS EC2"],
      github: "https://github.com/Rohandabas/CODE-EDI-",
      live: "https://code-edi.netlify.app/",
      featured: false,
      stats: { period: "May 2024", deployment: "AWS EC2", features: "Real-time" }
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