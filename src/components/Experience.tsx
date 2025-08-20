import { Building2, Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Inc.",
      position: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: [
        "Led development of a microservices architecture serving 100K+ daily active users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted technical interviews",
        "Collaborated with product teams to deliver features ahead of schedule"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes", "PostgreSQL"],
      achievements: [
        "Increased application performance by 40%",
        "Reduced server costs by 25%",
        "Led team of 6 developers"
      ]
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Developer",
      location: "New York, NY",
      period: "2020 - 2022",
      type: "Full-time",
      description: [
        "Built and scaled web applications from MVP to production",
        "Developed RESTful APIs and GraphQL endpoints",
        "Implemented real-time features using WebSocket technology",
        "Collaborated with design team to create pixel-perfect UIs"
      ],
      technologies: ["Vue.js", "Express", "MongoDB", "Redis", "Socket.io", "Stripe"],
      achievements: [
        "Delivered 15+ features",
        "Improved user engagement by 35%",
        "Zero critical bugs in production"
      ]
    },
    {
      company: "Digital Agency Pro",
      position: "Frontend Developer",
      location: "Los Angeles, CA",
      period: "2019 - 2020",
      type: "Contract",
      description: [
        "Developed responsive websites for various clients",
        "Optimized applications for search engines and performance",
        "Integrated third-party APIs and payment systems",
        "Maintained and updated legacy codebases"
      ],
      technologies: ["React", "Next.js", "Gatsby", "Tailwind CSS", "WordPress", "PHP"],
      achievements: [
        "Completed 20+ client projects",
        "Achieved 95+ Lighthouse scores",
        "100% client satisfaction rate"
      ]
    },
    {
      company: "Freelance",
      position: "Web Developer",
      location: "Remote",
      period: "2018 - 2019",
      type: "Freelance",
      description: [
        "Worked with small businesses to establish online presence",
        "Created custom websites and e-commerce solutions",
        "Provided ongoing maintenance and support",
        "Built relationships with long-term clients"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "MySQL"],
      achievements: [
        "Built 30+ websites",
        "Generated $150K+ revenue",
        "Maintained 4.9/5 rating"
      ]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the impact I've made at each step
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-primary opacity-30"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className="relative mb-12 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 bg-gradient-primary rounded-full border-4 border-background shadow-glow"></div>
                
                {/* Content */}
                <div className="ml-20">
                  <div className="glass rounded-2xl p-8 border border-glass-border hover-glow transition-smooth group">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-smooth">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-4 text-muted-foreground mb-2">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col lg:items-end gap-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="font-mono">{exp.period}</span>
                        </div>
                        <span className="px-3 py-1 text-xs font-semibold bg-gradient-secondary text-secondary-foreground rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs glass rounded-full border border-glass-border font-mono hover:border-primary/50 transition-smooth"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold mb-3 text-foreground flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        Key Achievements:
                      </h4>
                      <div className="grid md:grid-cols-3 gap-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="glass rounded-xl p-3 border border-glass-border text-center group-hover:border-primary/30 transition-smooth"
                          >
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 border border-glass-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-muted-foreground mb-6">
              Ready to bring your next project to life? I'm always interested in discussing 
              new opportunities and challenges.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-xl font-semibold hover-glow transition-smooth shadow-button"
              >
                Download Resume
              </a>
              <a
                href="mailto:your.email@example.com"
                className="px-6 py-3 glass border border-glass-border rounded-xl font-semibold hover:border-primary/50 transition-smooth"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;