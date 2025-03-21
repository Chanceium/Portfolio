import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certifications = () => {
  const certs = [
    {
      name: "AWS Academy Cloud Developing",
      issuer: "AWS Academy",
      date: "2024",
      image: "https://images.credly.com/images/119182cf-ca68-495a-a415-bff62dfdcc7e/image.png",
    },
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary-foreground">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center space-x-4">
                <Award className="w-8 h-8 text-primary-darker" />
                <div>
                  <h3 className="font-bold">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;