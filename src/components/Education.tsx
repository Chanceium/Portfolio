import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Education = () => {
  const schools = [
    {
      name: "Brock University",
      degree: "Bachelor's Degree in Computing and Network Communications",
      period: "2021-2026",
      image: "public/brock.jpg",
      semesters: [
        {
          term: "Fall 2021",
          courses: [
            { code: "COSC1P02", name: "Introduction to Computer Science", description: "This course provided a foundational understanding of computer science and computer programming using a high-level language, typically Java. Topics covered included computer fundamentals, information representation, problem-solving, software development, programming language syntax and semantics, methods, input/output, control structures, and data types." },
            { code: "MATH1P66", name: "Mathematical Reasoning", description: "This course provided an introduction to mathematical reasoning, logic, and proofs, including the use of mathematical induction. Basics of set theory were also covered." },
          ],
        },
        {
          term: "Winter 2022",
          courses: [
            { code: "COSC1P50", name: "Computer Literacy", description: "This course addressed various issues related to the use of information technology. Topics included historical and social perspectives, legal, ethical, and moral considerations, intellectual property, licensing, copyright, privacy, freedom of expression, and professional conduct. The course also emphasized information literacy, with seminars and written work, requiring a good command of written and spoken English." },
            { code: "COSC1P03", name: "Data Structures and Abstraction", description: "This course further developed programming and problem-solving skills using a high-level programming language (usually Java). The focus was on data structures such as arrays and linked lists. Students learned about modularity, abstraction, and abstract data types, including stacks, queues, and lists. Introduction to searching and sorting algorithms, recursion, algorithm analysis, and object-oriented programming was also covered." },
            { code: "MATH1P67", name: "Mathematics for Computer Science", description: "This course focused on the development and analysis of algorithms, complexity of algorithms, recursion, solving recurrence relations, and the study of relations and functions." },
            { code: "MATH1P97", name: "Calculus With Applications", description: "This calculus course covered topics such as lines, polynomials, logarithms, exponential functions, limits, derivatives, optimization, integrals, and differential equations. It emphasized applications in various disciplines and the use of computer algebra systems." },
          ],
        },
        {
          term: "Fall 2022",
          courses: [
            { code: "COSC2P03", name: "Advanced Data Structures", description: "This course delved into the implementation and usage of advanced data structures, including trees, graphs, hash tables, and advanced list structures. Further topics covered included sorting and searching algorithms, recursion, and algorithm analysis." },
            { code: "COSC2P12", name: "Introduction to Computer Architecture", description: "This course explored the evolution of digital computers and their organization, including functional units, instruction cycle, control, buses, and memory. It covered instruction types and memory access, instruction sequencing, call/return mechanisms, and basic assembly language programming." },
            { code: "MATH1P12", name: "Applied Linear Algebra", description: "This course concentrated on systems of linear equations, matrix algebra, determinants, vector geometry in R2 and R3, complex numbers, and linear transformations. It included applications of linear algebra to different sciences and integrated the use of computer algebra systems." },
            { code: "STAT1P98", name: "Practical Statistics", description: "The course covered descriptive statistics, probability, probability distributions (binomial, Poisson, and normal), Central Limit Theorem, confidence intervals, hypothesis testing, analysis of variance, and correlation and regression. The focus was on real-world applications, and statistical computer software was used." },
          ],
        },
        {
          term: "Winter 2025",
          courses: [
            { code: "COSC3P94", name: "Human Computer Interaction", description: "Interaction between Humans and User Experiences/Interfaces" },
            { code: "COSC2P05", name: "Programming Languages", description: "Introduction to different programming languages." },
            { code: "COSC4P50", name: "Introduction to Cybersecurity", description: "Basic concepts in cybersecurity." },
            { code: "COSC3P91", name: "Advanced Object-Oriented Programming", description: "Advanced concepts in object-oriented programming." },
            { code: "COSC4P78", name: "Robotics", description: "Introduction to robotics and automation." },
          ],
        },
      ],
    },
    {
      name: "Sheridan College",
      degree: "Advanced Diploma in Network Engineering Technology",
      period: "2021-2026",
      image: "public/sheridan.jpg",
      semesters: [
        {
          term: "Summer 2023",
          courses: [
            { code: "TELE20049", name: "Network Service Applications", description: "I learned about a wide range of network services and protocols, focusing on practical implementation and analysis. This course equipped me with essential skills to effectively manage network infrastructures and ensure seamless communication and security." },
            { code: "TELE20102", name: "Wi-Fi Networks", description: "In this course, I delved into the world of Wi-Fi Networks, gaining a comprehensive understanding of wireless LAN technologies, including IEEE 802.11 standards, physical layer fundamentals, radio frequency characteristics, and network security." },
            { code: "TELE28648", name: "Network Engineering 1", description: "This course covered a comprehensive range of topics related to network engineering. I learned about IP addressing, subnetting, CIDR, and explored Internet Protocol v4 and v6. I also studied static routing, router architecture basics, and dynamic routing protocol principles." },
          ],
        },
        {
          term: "Winter 2024",
          courses: [
            { code: "TELE28648", name: "Network Engineering 2", description: "I gained an in-depth understanding of IP addressing, routing protocols, and their implementation in routers and switches. I learned about OSPF and IS-IS protocols, and how to design interconnected routing areas. I also acquired skills in designing efficient IP address allocation schemes using VLSM and CIDR, implementing hierarchical routing with OSPF, and using different interface types for connectivity. Additionally, I learned to implement basic security in routing, including authentication in routing advertisements, and was equipped with the ability to install and configure network monitoring tools, analyze OSPF packets, and troubleshoot routing networks. This course significantly enhanced my ability to manage complex network infrastructures." },
            { code: "SYST35144", name: "Cloud Systems", description: "I studied various aspects of cloud computing, including AWS Elastic Cloud Compute EC2, AWS Cloud Access Control, AWS Virtual Private Cloud VPC, and AWS Elastic Load balancer and Auto Scaling Groups. I also learned about Docker Containers and Kubernetes." },
            { code: "TELE35376", name: "Carrier Networks", description: "In this course, I deep-dived into interpreting Hex Data, TCP, QoS, and other related topics. This course provided me with a comprehensive understanding of the transport layer in the OSI Model." },
            { code: "TELE36058", name: "Software Defined Networks", description: "In this course, I studied automation using ansible, netmiko, terraform, and software-defined networks. This course equipped me with practical knowledge and skills in network automation." },
            { code: "INFO34049", name: "Capstone Prototype", description: "In the first part of this two-part class, I applied my knowledge in computer science, software engineering, and network engineering to create a prototype for my capstone project, OptiDeals. This app demonstrates my proficiency in web scraping, AI, Git workflows, and self-hosting. I scraped real-time deals from Ontario grocers' websites, used AI to generate personalized meal plans, managed code versions with Git, and hosted the app on my own server. This challenging and rewarding experience allowed me to showcase my skills and creativity. I'm proud of OptiDeals and look forward to refining it in the next part of the class." },
            { code: "DBAS14444", name: "Structured Data Modelling", description: "This course introduced me to the database environment and development process. I learned about database design terminology, data modeling, and its importance. I also gained hands-on experience in SQL and its importance in database management and development." },
          ],
        },
        {
          term: "Fall 2024",
          courses: [
            { code: "INFO39014", name: "Capstone Project", description: "In the second part of my capstone project, I integrated AI image generation for recipes, self-hosting the service, and switched to SQLite for efficient data storage. Building on the first part, where I developed the OptiDeals prototype, I showcased my skills in web scraping, AI, Git workflows, and self-hosting. I scraped real-time deals from Ontario grocers, generated personalized meal plans, managed code versions, and hosted the app on my server. This experience helped me demonstrate my technical abilities and creativity, and I'm proud of the progress made with OptiDeals." },
            { code: "TELE31063", name: "Network Engineering 3", description: "In this class I dived deep into the world of Border Gateway Protocol (BGP), mastering both external (EBGP) and internal (IBGP) routing policies. I gained hands-on experience configuring BGP on Cisco and Juniper platforms, manipulating routing attributes, and analyzing real-time Internet routing tables. I also explored the complex world of interdomain routing politics and peering agreements, arming myself with the skills to tackle any network engineering challenge that came my way. This course helped me become a confident and competent network engineer, ready to solve practical routing problems and communicate effectively in any technical environment." },
            { code: "TELE33776", name: "Applied Network Security", description: "In this class I gained hands-on experience with Palo Alto firewalls by working through Palo Alto PAN VM workstation labs. This practical approach provided me with insights into real-world firewall instances and configurations. I set up High Availability between the firewalls, learned about OWASP security, and conducted penetration testing. Additionally, I created Methods of Procedure (MOPs) for firewall configurations, security policy rules, DMZ zones, NAT rules, and zone protection profiles. This course equipped me with practical skills and a thorough understanding of network security and firewall management." },
            { code: "TELE34660", name: "Internet Core Technologies", description: "In this course, I gained comprehensive knowledge in the mechanisms and applications of MPLS, EVPN VXLAN, VPLS, VLAN, and Nvidia Cumulus Linux. I learned about various Internet provisioning models, the Internet carrier perspective, and the forwarding and control planes of MPLS. I became adept at analyzing label signalling protocols like LDP and iBGP, and implementing L3VPNv4 over an MPLS core. My skills include designing and deploying Traffic Engineering, troubleshooting L2VPNs, and provisioning large-scale solutions. Additionally, I explored datacenter fundamentals, multicast, leaf and spine topology, PIM (Dense and Sparse modes), and pseudo wires. This hands-on approach equipped me to effectively manage and troubleshoot advanced Internet technologies." },
          ],
        },
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-primary/5">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary-foreground">
          Educational Journey
        </h2>
        <div className="space-y-8">
          {schools.map((school, index) => (
            <Card key={index} className="p-6 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-48 h-48 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">{school.name}</h3>
                  <h4 className="text-lg font-semibold text-primary-darker mb-2">
                    {school.degree}
                  </h4>
                  <p className="text-gray-600">{school.period}</p>
                </div>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {school.semesters.map((semester, semesterIndex) => (
                  <AccordionItem key={semesterIndex} value={`semester-${index}-${semesterIndex}`}>
                    <AccordionTrigger className="text-left">
                      {semester.term}
                    </AccordionTrigger>
                    <AccordionContent>
                      <Accordion type="single" collapsible className="w-full">
                        {semester.courses.map((course, courseIndex) => (
                          <AccordionItem key={courseIndex} value={`course-${index}-${semesterIndex}-${courseIndex}`}>
                            <AccordionTrigger className="text-left ml-4 flex justify-between items-center">
                              <span className="flex-grow">{course.name}</span>
                              <span className="text-sm text-gray-500">({course.code})</span>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="ml-8 mt-2">
                                <p className="text-gray-600">{course.description}</p>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
