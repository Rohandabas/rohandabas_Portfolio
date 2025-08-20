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
        "React.js", "JavaScript", "HTML", "CSS", 
        "Tailwind CSS", "TypeScript", "Responsive Design", "SPA"
      ]
    },
    {
      category: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      technologies: [
        "Node.js", "Express.js", "REST APIs", "MySQL", 
        "Supabase", "Database Design", "Server Architecture", "Authentication"
      ]
    },
    {
      category: "Programming",
      icon: Database,
      color: "from-purple-500 to-violet-500",
      technologies: [
        "C++", "Java", "JavaScript", "Data Structures", 
        "Algorithms", "OOP", "Problem Solving", "Competitive Programming"
      ]
    },
    {
      category: "AI Integration",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      technologies: [
        "Gemini AI API", "YouTube API", "AI-Powered Features", "Machine Learning", 
        "Natural Language Processing", "API Integration", "Smart Recommendations", "Data Processing"
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      color: "from-orange-500 to-yellow-500",
      technologies: [
        "AWS EC2", "AWS S3", "AWS Lambda", "AWS IAM", 
        "Docker", "Cloud Deployment", "Infrastructure", "AWS VPC"
      ]
    },
    {
      category: "Authentication",
      icon: Smartphone,
      color: "from-indigo-500 to-blue-500",
      technologies: [
        "ClerkAuth", "Supabase Auth", "Row-Level Security", "JWT", 
        "OAuth", "User Management", "Session Handling", "Security"
      ]
    },
    {
      category: "Tools & Version Control",
      icon: GitBranch,
      color: "from-gray-500 to-slate-500",
      technologies: [
        "Git", "GitHub", "VSCode", "Project Management", 
        "Collaboration", "Code Review", "Version Control", "Documentation"
      ]
    },
    {
      category: "Deployment",
      icon: Zap,
      color: "from-yellow-500 to-amber-500",
      technologies: [
        "Netlify", "Vercel", "AWS EC2", "Domain Management", 
        "CI/CD", "Production Deployment", "Performance Optimization", "Monitoring"
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
              {["AWS Certifications", "Cisco Technologies", "Competitive Programming", "Open Source", "Leadership", "AI Innovation"].map((trend) => (
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