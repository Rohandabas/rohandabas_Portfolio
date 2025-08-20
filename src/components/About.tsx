import { Code2, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const skills = [
    { name: "React.js/Frontend", level: 90, icon: Code2 },
    { name: "Node.js/Backend", level: 85, icon: Rocket },
    { name: "AI Integration", level: 82, icon: Palette },
    { name: "Cloud & DevOps", level: 80, icon: Users }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate Computer Science Engineering student with a 9.25 GPA, building innovative AI-powered solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                I'm a passionate Computer Science Engineering student at Bennett University with a 9.25 GPA, 
                specializing in full-stack development and AI integration. My journey started with curiosity 
                about technology and evolved into building innovative solutions that solve real-world problems.
              </p>
              <p className="leading-relaxed">
                As a Campus Ambassador for Cisco and Co Tech-Head at CodeChef-BU, I've led technical workshops 
                for 200+ participants and organized outreach campaigns. I'm AWS Certified and passionate about 
                cloud technologies, AI integration, and creating impactful applications.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you'll find me exploring new AI technologies, working on competitive 
                programming challenges, or contributing to open-source projects that push the boundaries 
                of what's possible with modern web development.
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
                Currently pursuing B.Tech in Computer Science at Bennett University, diving deep into 
                AI/ML integration in web applications, exploring cloud technologies with AWS certifications, 
                and building full-stack solutions that make a real impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;