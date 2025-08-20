import { Award, ExternalLink, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "Amazon Web Services",
      date: "April 2024",
      credentialId: "CLF-C02",
      verifyLink: "https://www.credly.com/badges/e1e1b829-7312-4967-8547-0b47d8b8c2e6/linked_in_profile",
      description: "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
      featured: true,
      skills: ["Cloud Computing", "AWS Services", "Security", "Cost Management"]
    },
    {
      title: "Oracle Cloud Infrastructure Foundations Associate",
      issuer: "Oracle",
      date: "September 2023",
      credentialId: "OCI-FA",
      verifyLink: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=CD207B10FC8D15DA619FB3AAF542223EF2BE526E1F60AB91981951A495A843C8",
      description: "Comprehensive knowledge of Oracle Cloud Infrastructure core services and foundational concepts.",
      featured: true,
      skills: ["Oracle Cloud", "Infrastructure", "Networking", "Database Services"]
    },
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "Coursera",
      date: "July 2023",
      credentialId: "V6XYY4HYD3M4",
      verifyLink: "https://www.coursera.org/account/accomplishments/certificate/V6XYY4HYD3M4",
      description: "Essential AWS cloud computing concepts, services, and basic architectural best practices.",
      featured: false,
      skills: ["AWS Basics", "Cloud Architecture", "EC2", "S3", "RDS"]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications that validate my expertise in cloud technologies and development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`group animate-slide-up ${cert.featured ? 'scale-105' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="glass rounded-2xl p-8 border border-glass-border hover-glow transition-smooth">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${cert.featured ? 'bg-gradient-primary' : 'bg-gradient-secondary'} text-primary-foreground group-hover:scale-110 transition-smooth`}>
                        <Award className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                            {cert.title}
                          </h3>
                          {cert.featured && (
                            <span className="px-2 py-1 text-xs font-semibold bg-gradient-primary text-primary-foreground rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-3">
                          <span className="font-medium">{cert.issuer}</span>
                          <span className="hidden sm:block">•</span>
                          <span className="font-mono text-sm">{cert.date}</span>
                          <span className="hidden sm:block">•</span>
                          <div className="flex items-center gap-1 text-green-500">
                            <CheckCircle className="w-4 h-4" />
                            <span className="text-xs">Verified</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {cert.description}
                        </p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs glass rounded-full border border-glass-border font-mono hover:border-primary/50 transition-smooth"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex-shrink-0">
                    <a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 glass border border-glass-border rounded-xl hover:border-primary/50 transition-smooth group/btn text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-smooth" />
                      Verify Credential
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 border border-glass-border max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Continuous Learning</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              I'm committed to staying current with industry standards and emerging technologies. 
              Currently working towards additional AWS certifications and exploring new domains in AI/ML.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Next: AWS Solutions Architect", "AI/ML Specialization", "DevOps Professional"].map((goal) => (
                <span
                  key={goal}
                  className="px-4 py-2 glass rounded-full text-sm border border-glass-border hover:border-primary/50 transition-smooth font-mono"
                >
                  {goal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;