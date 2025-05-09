export const projectsSection = {
  subtitle: "Showcasing my notable works and technical implementations"
};
export const projects = [
  
  {
    title: "OptiDeals",
    description: "AI meals curated every week based on current sale prices of food at grocery stores.",
    image: "https://github.com/OptiDeals/OptiDeals-HTML/blob/main/public/optidealslogocropped.png?raw=true",
    tags: ["Python", "SQL", "LLM", "Docker", "Git"],
    links: {
      github: "",
      live: "https://optideals.chancepage.me"
    },
    highlights: [
      "Developed AI algorithm to analyze grocery store sales",
      "Implemented meal planning system based on current prices",
      "Created user dashboard for viewing weekly meal recommendations",
      "Built scalable backend infrastructure with Docker"
    ],
    icon: "ri-shopping-basket-line",
    color: "text-green-600"
  },
  {
    title: "eBookShelf",
    description: "A self-hosted platform for hosting and managing your eBook collection, built with React, TypeScript, and PocketBase.",
    image: "https://raw.githubusercontent.com/Chanceium/eBookShelf/refs/heads/main/public/logo.png",
    tags: ["React", "Vite", "ExpressJS", "TypeScript", "Docker", "PocketBase"],
    links: {
      github: "https://github.com/Chanceium/eBookShelf",
      live: ""
    },
    highlights: [
      "Created responsive UI with React and TypeScript",
      "Implemented book metadata management system",
      "Built containerized deployment with Docker",
      "Developed RESTful API for book organization and access"
    ],
    icon: "ri-book-line",
    color: "text-blue-600"
  },
  {
    title: "ESP32 Robotics Platform",
    description: "A dual-core ESP32 robotics platform featuring wall-following capabilities and WiFi signal seeking based on RSSI. Built with ROS and C++ for efficient multi-core operation.",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wcy8M4E1CI-jYqkWi_7cPgHaHa%26cb%3Diwp1%26pid%3DApi&f=1&ipt=72f8aceecfd929f2df0257b2b2d9482a68a8dc3626191ceecb6f361e992d18f5",
    tags: ["C++", "ESP32", "ROS", "WiFi", "RSSI", "Embedded Systems"],
    links: {
      github: "https://github.com",
      live: ""
    },
    highlights: [
      "Implemented wall-following algorithm using ultrasonic sensors",
      "Developed WiFi signal strength detection for autonomous navigation",
      "Utilized ROS on ESP32's dual cores for parallel processing",
      "Created web server interface for remote monitoring and control"
    ],
    icon: "ri-robot-line",
    color: "text-blue-600"
  },
  {
    title: "Homelabbing",
    description: "I have 2 Proxmox servers with VMs running Docker for HA services, 2 Raspberry Pi nodes, and 2 cloud nodes, all using Docker and connected via WireGuard VPN.",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fforum.proxmox.com%2Fstyles%2Fuix%2Fimages%2FProxmox-logo-stacked-white-background-1200.png&f=1&nofb=1&ipt=1fa18789d4321e09a16886cb11d02d64e0df1a23071fbdf70d711fde128e22ad",
    tags: ["Proxmox", "Docker", "DNS", "Proxy", "VPN"],
    links: {
      github: "",
      live: "https://chancepage.me"
    },
    highlights: [
      "Architected high-availability homelab infrastructure",
      "Implemented WireGuard VPN for secure cross-node communication",
      "Built multi-node Docker swarm for service orchestration",
      "Configured automated backups and disaster recovery systems"
    ],
    icon: "ri-server-line",
    color: "text-red-600"
  },
  {
    title: "AWS High-Availability Web Servers",
    description: "Developed multiple auto-scaling web servers with high availability on AWS, ensuring resilience to outages.",
    image: "https://pixelbag.net/wp-content/uploads/2021/12/AWS-Logo-svg.jpg",
    tags: ["AWS", "Terraform", "HTML"],
    links: {
      github: "https://github.com/Chanceium/lab3CloudSystems",
      live: ""
    },
    highlights: [
      "Implemented auto-scaling groups for dynamic capacity management",
      "Configured load balancers for high-availability",
      "Used Terraform for infrastructure as code deployment",
      "Set up CloudWatch monitoring and alerting"
    ],
    icon: "ri-cloud-line",
    color: "text-yellow-600"
  },
  {
    title: "Ansible Cisco Networking Automation",
    description: "Automated the configuration of Cisco routers using Ansible to create an OSPF network.",
    image: "https://logowik.com/content/uploads/images/ansible3554.jpg",
    tags: ["Ansible", "Cisco", "OSPF"],
    links: {
      github: "https://github.com/Chanceium/lab3CloudSystems",
      live: ""
    },
    highlights: [
      "Created reusable Ansible playbooks for network configuration",
      "Implemented OSPF routing protocols across multiple devices",
      "Developed validation and testing procedures for configurations",
      "Documented automation process for team knowledge sharing"
    ],
    icon: "ri-router-line",
    color: "text-gray-600"
  },
  {
    title: "Palo Alto Firewall High-Availability",
    description: "This project enhances network reliability by incorporating High Availability (HA) features, ensuring consistent connectivity through physical redundancy and synchronized network management.",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcompanieslogo.com%2Fimg%2Forig%2FPANW-4618d203.png%3Ft%3D1647840523&f=1&nofb=1&ipt=b7a772982a53c6e0bae2d67a2f110bb1cbfd259c3770bfa8ac77106630ccafb6",
    tags: ["PanOS", "IP", "Policies"],
    links: {
      github: "https://github.com/Chanceium/Palo-Alto-High-Availability/blob/main/Palo%20Alto%20Final.pdf",
      live: ""
    },
    highlights: [
      "Configured active/passive HA pair for Palo Alto firewalls",
      "Implemented synchronized state tables and configuration",
      "Created failover testing and validation procedures",
      "Designed network policies for secure traffic management"
    ],
    icon: "ri-shield-line",
    color: "text-indigo-600"
  },
  {
    title: "Virtualized Data Centers NVIDIA Cumulus EVPN VXLAN",
    description: "This project virtualizes two data centers using Ansible to automate configurations, adhering to the CLOS topology with leaf and spine architecture. This ensures both reliability and efficiency. Servers are segregated with VLANs/VNIs.",
    image: "https://www.nvidia.com/content/dam/en-zz/Solutions/networking/Ethernet/ethernet-switches/cumulus-linux/nvidia-cumulus-linux-diagram-1cc-d@2x.png",
    tags: ["Cumulus", "EVPN", "VXLAN", "Ansible", "VLAN"],
    links: {
      github: "https://github.com/Chanceium/Sheridan-Assignments/blob/main/VXLAN%20Lab%203.pdf",
      live: ""
    },
    highlights: [
      "Designed CLOS network topology with leaf-spine architecture",
      "Implemented EVPN VXLAN overlay for data center interconnection",
      "Automated configuration deployment using Ansible",
      "Created VLAN segmentation for server isolation"
    ],
    icon: "ri-database-2-line",
    color: "text-green-500"
  },
  {
    title: "Implementing BGP Policies for IPv4 and IPv6 Filtering",
    description: "I implemented BGP policies to filter and manage IPv4 and IPv6 prefixes based on AS criteria, analyzing their impact on route propagation and reception within a network of Cisco and Juniper routers. I created and tested 50 policies (25 for Cisco and 25 for Juniper)",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2016%2F11%2FCisco-logo.png&f=1&nofb=1&ipt=342be17fe6c05d527d08ab71d4eddabd6acb8a24a11a21d043cafcacc982fae9",
    tags: ["BGP", "Cisco", "Juniper", "Policies"],
    links: {
      github: "https://github.com/Chanceium/Sheridan-Assignments/blob/main/BGP%20Lab%202%20Chance.pdf",
      live: ""
    },
    highlights: [
      "Created and tested 50 BGP routing policies across different platforms",
      "Implemented prefix filtering based on AS path attributes",
      "Analyzed route propagation patterns in mixed-vendor environments",
      "Documented best practices for BGP policy implementation"
    ],
    icon: "ri-route-line",
    color: "text-orange-600"
  },
  {
    title: "VPLS L2VPN Connection with Juniper Routers",
    description: "I created a full mesh VPLS L2VPN connection between routers for VPLS IDs 1 and 2, focusing on VPLS ID 2. The classroom topology included 20 bare-metal Juniper routers, each assigned to a student, with table routers functioning as route reflectors to form a full mesh network.",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdownload.logo.wine%2Flogo%2FJuniper_Networks%2FJuniper_Networks-Logo.wine.png&f=1&nofb=1&ipt=96f1a118711db7226e3c746fd59d388ce2e408770cb3b6fdf619d52bb0b527a2",
    tags: ["Juniper", "VPLS", "LDP", "Route Reflection"],
    links: {
      github: "https://github.com/Chanceium/Sheridan-Assignments/blob/main/VPLS%20Lab%204.pdf",
      live: ""
    },
    highlights: [
      "Implemented full-mesh VPLS L2VPN connections across multiple routers",
      "Configured route reflectors to optimize network scalability",
      "Set up LDP signaling for VPLS pseudowires",
      "Tested and validated end-to-end connectivity across the mesh"
    ],
    icon: "ri-links-line",
    color: "text-teal-600"
  }
];