import { Building2, Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Cisco",
      position: "Campus Ambassador",
      location: "Remote",
      period: "May 2023 - December 2024",
      type: "Part-time",
      description: [
        "Served as a liaison for Cisco, organizing outreach campaigns and increasing student participation by 40%",
        "Promoted Cisco technologies and certifications among university students",
        "Organized technical workshops and networking events",
        "Built strong relationships between Cisco and the student community"
      ],
      technologies: ["Networking", "Cloud Technologies", "Cisco Platforms", "Event Management"],
      achievements: [
        "Increased participation by 40%",
        "Organized 10+ events",
        "Built strong network"
      ]
    },
    {
      company: "CodeChef-BU",
      position: "Co Tech-Head",
      location: "Bennett University, Noida",
      period: "September 2023 - August 2024",
      type: "Leadership Role",
      description: [
        "Led technical events and workshops for 200+ participants to enhance coding skills",
        "Organized competitive programming contests and hackathons",
        "Mentored junior students in algorithmic problem solving",
        "Coordinated with industry professionals for guest lectures"
      ],
      technologies: ["C++", "Java", "JavaScript", "Problem Solving", "Event Management"],
      achievements: [
        "Led 200+ participants",
        "Organized 15+ workshops",
        "Improved coding proficiency"
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

      </div>
    </section>
  );
};

export default Experience;