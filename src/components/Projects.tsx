import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "OptiDeals",
      description: "AI meals curated every week based on current sale prices of food at grocery stores.",
      tags: ["Python", "SQL", "LLM", "Docker", "Git"],
      image: "public/optideals.png",
      url: "https://optideals.chancepage.me",
    },
    {
      title: "eBookShelf",
      description: "A self-hosted platform for hosting and managing your eBook collection, built with React, TypeScript, and PocketBase.",
      tags: ["React", "Vite", "ExpressJS", "TypeScript", "Docker", "PocketBase"],
      image: "https://raw.githubusercontent.com/Chanceium/eBookShelf/refs/heads/main/public/logo.png",
      url: "https://github.com/Chanceium/eBookShelf",
    },
    {
      title: "Homelabbing",
      description: "I have 2 Proxmox servers with VMs running Docker for HA services, 2 Raspberry Pi nodes, and 2 cloud nodes, all using Docker and connected via WireGuard VPN.",
      tags: ["Proxmox","Docker","DNS","Proxy","VPN"],
      image: "public/proxmox.png",
      url: "https://chancepage.me",
    },
    {
      title: "AWS High-Availability Web Servers",
      description: "Developed multiple auto-scaling web servers with high availability on AWS, ensuring resilience to outages.",
      tags: ["AWS", "Terraform", "HTML"],
      image: "https://pixelbag.net/wp-content/uploads/2021/12/AWS-Logo-svg.jpg",
      url: "https://github.com/Chanceium/lab3CloudSystems",
    },
    {
      title: "Ansible Cisco Networking Automation",
      description: "Automated the configuration of Cisco routers using Ansible to create an OSPF network.",
      tags: ["Ansible", "Cisco", "OSPF"],
      image: "https://logowik.com/content/uploads/images/ansible3554.jpg",
      url: "https://github.com/Chanceium/lab3CloudSystems",
    },
    {
    title: "Palo Alto Firewall High-Availability",
    description: "This project enhances network reliability by incorporating High Availability (HA) features, ensuring consistent connectivity through physical redundancy and synchronized network management.",
    tags: ["PanOS", "IP", "Policies"],
    image: "public/palo.png",
    url: "https://github.com/Chanceium/Palo-Alto-High-Availability/blob/main/Palo%20Alto%20Final.pdf",
  },
  {
    title: "Virtualized Data Centers NVIDIA Cumulus EVPN VXLAN",
    description: "This project virtualizes two data centers using Ansible to automate configurations, adhering to the CLOS topology with leaf and spine architecture. This ensures both reliability and efficiency. Servers are segregated with VLANs/VNIs.",
    tags: ["Cumulus", "EVPN","VXLAN", "Ansible", "VLAN"],
    image: "public/cumulus.jpg",
    url: "https://github.com/Chanceium/Sheridan-Assignments/blob/main/VXLAN%20Lab%203.pdf",
  },
  {
    title: "Implementing BGP Policies for IPv4 and IPv6 Filtering",
    description: "I implemented BGP policies to filter and manage IPv4 and IPv6 prefixes based on AS criteria, analyzing their impact on route propagation and reception within a network of Cisco and Juniper routers. I created and tested 50 policies (25 for Cisco and 25 for Juniper)",
    tags: ["BGP", "Cisco", "Juniper", "Policies"],
    image: "public/bgp.png",
    url: "https://github.com/Chanceium/Sheridan-Assignments/blob/main/BGP%20Lab%202%20Chance.pdf",
  },
  {
    title: "VPLS L2VPN Connection with Juniper Routers",
    description: "I created a full mesh VPLS L2VPN connection between routers for VPLS IDs 1 and 2, focusing on VPLS ID 2. The classroom topology included 20 bare-metal Juniper routers, each assigned to a student, with table routers functioning as route reflectors to form a full mesh network.",
    tags: ["Juniper", "VPLS", "LDP","Route Reflection"],
    image: "public/juniper.jpg",
    url: "https://github.com/Chanceium/Sheridan-Assignments/blob/main/VPLS%20Lab%204.pdf",
  },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary-foreground">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-48 h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 text-primary-darker" />
                </a>
              </div>
              <p className="text-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );  
};

export default Projects;