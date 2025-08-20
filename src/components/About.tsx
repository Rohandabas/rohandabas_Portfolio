import { Code2, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Frontend Development", level: 95, icon: Code2 },
    { name: "Backend Development", level: 90, icon: Rocket },
    { name: "UI/UX Design", level: 85, icon: Palette },
    { name: "Team Leadership", level: 80, icon: Users }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with 5+ years of experience creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                I started my journey in web development 5 years ago, driven by a passion for creating 
                beautiful and functional digital experiences. What began as curiosity about how websites 
                work has evolved into a deep expertise in modern web technologies.
              </p>
              <p className="leading-relaxed">
                I specialize in building scalable web applications using React, TypeScript, and Node.js. 
                My approach combines technical excellence with user-centered design, ensuring that every 
                project not only works flawlessly but also provides an exceptional user experience.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community through blogs and mentoring.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-8">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 glass rounded-xl group-hover:bg-gradient-primary transition-smooth group-hover:text-primary-foreground">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 p-6 glass rounded-2xl border border-glass-border">
              <h4 className="text-lg font-semibold mb-4">Current Focus</h4>
              <p className="text-muted-foreground">
                Currently diving deep into AI/ML integration in web applications, exploring the latest 
                in React Server Components, and contributing to open-source projects that push the 
                boundaries of web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;