import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rohandabas1027@gmail.com",
      href: "mailto:rohandabas1027@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-766-813-0244",
      href: "tel:+917668130244"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Noida, Uttar Pradesh",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Rohandabas",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rohan-dabas1/",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      label: "Portfolio",
      href: "https://rohan11.vercel.app/",
      color: "hover:text-purple-400"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a friendly conversation about technology and development. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 glass rounded-xl border border-glass-border hover-glow transition-smooth group"
                  >
                    <div className="p-3 bg-gradient-primary text-primary-foreground rounded-xl group-hover:scale-110 transition-smooth">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium group-hover:text-primary transition-smooth">
                        {info.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 glass rounded-xl border border-glass-border hover-glow transition-smooth group ${social.color}`}
                    >
                      <IconComponent className="w-6 h-6 group-hover:scale-110 transition-smooth" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="glass rounded-xl p-6 border border-glass-border">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Currently Available
              </h4>
              <p className="text-sm text-muted-foreground">
                Open to freelance projects and full-time opportunities. 
                Typical response time: 24-48 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="glass rounded-2xl p-8 border border-glass-border">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="glass border-glass-border focus:border-primary/50 rounded-xl"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass border-glass-border focus:border-primary/50 rounded-xl"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="glass border-glass-border focus:border-primary/50 rounded-xl"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="glass border-glass-border focus:border-primary/50 rounded-xl resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full glass bg-gradient-primary text-primary-foreground hover-glow px-6 py-3 rounded-xl shadow-button group font-semibold"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-smooth" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-glass-border text-center">
                <p className="text-sm text-muted-foreground">
                  I'll get back to you within 24-48 hours. Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;