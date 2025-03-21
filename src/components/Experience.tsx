import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Badge } from "@/components/ui/badge";
import { Calendar, Building, ChevronRight, FileText, HardDrive, Tool, BookOpen, ClipboardCheck, Lightbulb, Zap, CheckCircle, Users, MapPin, Star } from "lucide-react";

const Experience = () => {
  const jobs = [
    {
      title: "LAN Systems Administrator",
      company: "Execulink Telecom",
      dates: "April 2024 - Sept 2024",
      description: `
        As a LAN Systems Administrator, I led the development of innovative solutions and provided top-notch IT support.<br><br>

        Key highlights of my role include:<br><br>

        <strong>Innovative Development:</strong> Developed a Power Apps application for the warehouse team, revolutionizing the process of receiving orders from outside tech teams. This app managed 800 items ordered within two months, boosting efficiency by 90%.<br><br>

        <strong>Automation and Data Security:</strong> Utilized Power Automate to streamline tasks across departments, integrating it with data archiving and routing data requests through Power Apps. This improved data manipulation security and enhanced overall efficiency.<br><br>

        <strong>Resolving IT Requests:</strong> Swiftly addressed and fixed a variety of technical problems to ensure seamless office operations.<br><br>

        <strong>Leadership in Projects:</strong> Independently led and executed complex projects from start to finish, demonstrating project leadership and development skills.<br><br>

        My contributions significantly improved operational efficiency and productivity, showcasing my ability to lead and innovate in a technical environment.
      `,
      image: "public/exec.jpg",
    },
    {
      title: "Network Operations",
      company: "Execulink Telecom",
      dates: "Aug 2023 - Jan 2024",
      description: `
        In my role in Network Operations, I conducted comprehensive audits and documentation for four data centers, encompassing all devices, Ethernet/cabling standards, and inputs into switches, routers, firewalls, servers, and other infrastructure devices.<br><br>

        Key responsibilities included:<br><br>

        <strong>Documentation:</strong> Utilized Nautobot, a source of truth documentation application, to maintain accurate and up-to-date records.<br><br>

        <strong>Hardware Testing:</strong> Tested and wiped over 200 hardware devices from various manufacturers including Juniper, Cisco, Adtran, Ubiquiti, and Mikrotik, ensuring optimal performance and security.<br><br>

        <strong>Standard Operating Procedures:</:</strong> Followed MOP/SOP documentation to service Juniper and Mikrotik devices for businesses, ensuring adherence to industry standards and best practices.<br><br>

        <strong>Knowledge Base Contribution:</strong> Created comprehensive documentation for Nautobot, contributing to the knowledge base and facilitating efficient operations.<br><br>

        <strong>Technical Proficiency:</strong> Built data center racks and ran power and Ethernet/fiber to data centers, demonstrating technical proficiency and attention to detail.
      `,
      image: "public/exec.jpg",
    },
    {
      title: "Geographic Information Systems Data Technician",
      company: "Execulink Telecom",
      dates: "Jan 2023 - May 2023",
      description: "As a GIS Data Technician, I operated across Southern Ontario, leveraging Trimble devices to accurately locate coordinates for network infrastructure.<br><br>Key responsibilities included:<br><br><strong>GPS Coordination:</strong> Utilized CAD and ArcGIS to pin GPS coordinates, providing precise locations of our infrastructure.<br><br><strong>Documentation:</strong> Contributed to obtaining government approval and maintaining comprehensive documentation by accurately mapping our infrastructure.",
      image: "public/exec.jpg",
    },
  ];

  // Skills associated with each job for visual badges
  const jobSkills = [
    ["PowerApps", "Power Automate", "IT Support", "Project Management", "Innovation"],
    ["Network Infrastructure", "Documentation", "Hardware", "Data Centers", "Security"],
    ["GIS", "GPS", "CAD", "ArcGIS", "Technical Documentation"]
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary-foreground">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {jobs.map((job, index) => (
            <Card key={index} className="p-6 animate-fade-in overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="relative overflow-hidden rounded-lg">
                  <LazyLoadImage
                    src={job.image}
                    alt={`${job.company}`}
                    className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <h4 className="text-white font-semibold">{job.company}</h4>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="mr-2">{job.title}</span>
                  </h3>
                  
                  <div className="flex items-center mb-3 text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{job.dates}</span>
                  </div>
                  
                  <div className="flex items-center mb-4 text-muted-foreground">
                    <Building className="h-4 w-4 mr-2" />
                    <span>{job.company}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {jobSkills[index].map((skill, i) => (
                      <Badge key={i} variant="secondary" className="font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`item-${index}`} className="border border-border rounded-md">
                  <AccordionTrigger className="text-left px-4 py-3 hover:bg-secondary/50 transition-colors">
                    <span className="font-medium">View Details</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-4 bg-secondary/20">
                    <div className="space-y-6 text-foreground">
                      {/* Introduction */}
                      <p className="text-foreground">{job.description.split('<br><br>')[0]}</p>
                      
                      {/* Key Responsibilities Section */}
                      <div>
                        <h4 className="font-semibold text-lg mb-4 border-b pb-2">Key Responsibilities</h4>
                        <div className="grid gap-4 md:grid-cols-2">
                          {/* Extract and display responsibilities with icons */}
                          {job.description.includes('<strong>') && 
                            job.description
                              .split('<br><br>')
                              .slice(2)
                              .map((point, i) => {
                                if (!point.includes('<strong>')) return null;
                                const title = point.split('<strong>')[1].split('</strong>')[0];
                                const content = point.split('</strong>:')[1];
                                
                                return (
                                  <div key={i} className="flex bg-white dark:bg-secondary p-3 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="mr-3 p-2 bg-primary/10 rounded-full flex-shrink-0">
                                      {/* Icon based on title keywords */}
                                      {title.includes('Documentation') && <FileText className="h-5 w-5 text-primary" />}
                                      {title.includes('Hardware') && <HardDrive className="h-5 w-5 text-primary" />}
                                      {title.includes('Technical') && <Tool className="h-5 w-5 text-primary" />}
                                      {title.includes('Knowledge') && <BookOpen className="h-5 w-5 text-primary" />}
                                      {title.includes('Standard') && <ClipboardCheck className="h-5 w-5 text-primary" />}
                                      {title.includes('Innovative') && <Lightbulb className="h-5 w-5 text-primary" />}
                                      {title.includes('Automation') && <Zap className="h-5 w-5 text-primary" />}
                                      {title.includes('Resolving') && <CheckCircle className="h-5 w-5 text-primary" />}
                                      {title.includes('Leadership') && <Users className="h-5 w-5 text-primary" />}
                                      {title.includes('GPS') && <MapPin className="h-5 w-5 text-primary" />}
                                      {/* Default icon */}
                                      {!title.match(/Documentation|Hardware|Technical|Knowledge|Standard|Innovative|Automation|Resolving|Leadership|GPS/) && 
                                        <Star className="h-5 w-5 text-primary" />
                                      }
                                    </div>
                                    <div>
                                      <h5 className="font-medium mb-1">{title}</h5>
                                      <p className="text-sm">{content}</p>
                                    </div>
                                  </div>
                                );
                              })
                          }
                        </div>
                      </div>
                      
                      {/* Skills Used Section */}
                      <div>
                        <h4 className="font-semibold text-md mb-3">Skills Applied</h4>
                        <div className="flex flex-wrap gap-2">
                          {jobSkills[index].map((skill, i) => (
                            <Badge key={i} variant="outline" className="px-3 py-1 bg-primary/5">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
