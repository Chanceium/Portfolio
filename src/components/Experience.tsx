import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LazyLoadImage } from 'react-lazy-load-image-component';

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

  return (
    <section id="experience" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary-foreground">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {jobs.map((job, index) => (
            <Card key={index} className="p-6 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <LazyLoadImage
                  src={job.image}
                  alt={`${job.company}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                  <h4 className="text-lg font-semibold text-primary-darker mb-2">
                    {job.company}
                  </h4>
                  <p className="text-muted-foreground">{job.dates}</p>
                </div>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    Job Description
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-foreground" dangerouslySetInnerHTML={{ __html: job.description }}></p>
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
