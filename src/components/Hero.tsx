import { Card } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20 animate-fade-in">
      <Card className="max-w-4xl mx-auto p-8 bg-primary/5 shadow-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground">
              Future Network Engineer
            </h1>
            <p className="text-lg text-secondary-foreground">
              Passionate about building and securing the networks of tomorrow. Currently pursuing my education in Network Engineering with a focus on cybersecurity and infrastructure management.
            </p>
          </div>
          <div className="relative flex flex-col items-center space-y-4">
            <div className="aspect-square rounded-full bg-primary/30 p-2">
              <img
                src="public/hero.jpg"
                alt="Profile"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-secondary-foreground">Chance Page</h2>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/chance-page-985648230/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/Chanceium" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Hero;