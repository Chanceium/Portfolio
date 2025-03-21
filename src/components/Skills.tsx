import { Card } from "@/components/ui/card";
import { Network, Shield, Server } from "lucide-react";

const Skills = () => {
  const expertise = [
    {
      title: "Network Infrastructure",
      icon: Network,
      skills: ["Routing Protocols", "Infrastructure Design", "Network Virtualization"],
    },
    {
      title: "Network Automation",
      icon: Shield,
      skills: ["Ansible", "Terraform", "Git"],
    },
    {
      title: "System Administration",
      icon: Server,
      skills: ["Server Management", "Cloud Services", "Containerization"],
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary-foreground">
          Areas of Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {expertise.map((area, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in"
            >
              <area.icon className="w-12 h-12 mx-auto mb-4 text-primary-darker" />
              <h3 className="text-xl font-bold mb-4">{area.title}</h3>
              <ul className="space-y-2">
                {area.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
