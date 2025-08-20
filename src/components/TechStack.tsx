import { 
  Code2, 
  Database, 
  Palette, 
  Cloud, 
  Smartphone, 
  GitBranch,
  Server,
  Zap
} from "lucide-react";

const TechStack = () => {
  const techCategories = [
    {
      category: "Frontend",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      technologies: [
        "React", "Next.js", "TypeScript", "Vue.js", 
        "Tailwind CSS", "Framer Motion", "Three.js", "Webpack"
      ]
    },
    {
      category: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      technologies: [
        "Node.js", "Express", "NestJS", "Python", 
        "Django", "FastAPI", "GraphQL", "REST APIs"
      ]
    },
    {
      category: "Database",
      icon: Database,
      color: "from-purple-500 to-violet-500",
      technologies: [
        "PostgreSQL", "MongoDB", "Redis", "Supabase", 
        "Prisma", "MySQL", "Firebase", "Elasticsearch"
      ]
    },
    {
      category: "Design",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      technologies: [
        "Figma", "Adobe XD", "Photoshop", "Illustrator", 
        "Sketch", "Principle", "After Effects", "Blender"
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      color: "from-orange-500 to-yellow-500",
      technologies: [
        "AWS", "Vercel", "Docker", "Kubernetes", 
        "GitHub Actions", "Terraform", "Netlify", "DigitalOcean"
      ]
    },
    {
      category: "Mobile",
      icon: Smartphone,
      color: "from-indigo-500 to-blue-500",
      technologies: [
        "React Native", "Flutter", "Expo", "Swift", 
        "Kotlin", "Ionic", "Cordova", "PWA"
      ]
    },
    {
      category: "Tools & Others",
      icon: GitBranch,
      color: "from-gray-500 to-slate-500",
      technologies: [
        "Git", "GitHub", "VSCode", "Postman", 
        "Jira", "Slack", "Linear", "Notion"
      ]
    },
    {
      category: "Performance",
      icon: Zap,
      color: "from-yellow-500 to-amber-500",
      technologies: [
        "Lighthouse", "WebVitals", "Bundle Analyzer", "Sentry", 
        "New Relic", "DataDog", "Performance API", "Web Workers"
      ]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.category}
                className="group animate-slide-up glass rounded-2xl p-6 border border-glass-border hover-glow transition-smooth"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-smooth`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.category}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={tech}
                      className="text-sm text-muted-foreground hover:text-foreground transition-smooth py-1 px-2 rounded-lg hover:bg-background-secondary font-mono"
                      style={{ animationDelay: `${(index * 100) + (techIndex * 50)}ms` }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-glass-border">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{category.technologies.length} technologies</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1 h-1 rounded-full ${i < 4 ? 'bg-primary' : 'bg-muted'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 border border-glass-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-muted-foreground mb-6">
              Technology evolves rapidly, and so do I. I'm constantly exploring new tools, 
              frameworks, and methodologies to stay at the forefront of web development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["AI/ML", "Web3", "Blockchain", "AR/VR", "IoT", "Quantum Computing"].map((trend) => (
                <span
                  key={trend}
                  className="px-4 py-2 glass rounded-full text-sm border border-glass-border hover:border-primary/50 transition-smooth font-mono"
                >
                  {trend}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;