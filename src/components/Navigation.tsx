import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useSheetContext } from "@/components/ui/sheet";

interface NavigationProps {
  orientation?: "horizontal" | "vertical";
}

export function Navigation({ orientation = "horizontal" }: NavigationProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  // Only try to use sheet context in vertical (mobile) orientation
  const sheetContext = orientation === "vertical" ? useSheetContext() : null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      // Close sheet if we're in vertical orientation
      if (orientation === "vertical" && sheetContext?.onOpenChange) {
        sheetContext.onOpenChange(false);
      }
    }
  };

  const navItems = [
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#education", label: "Education", id: "education" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#certifications", label: "Certifications", id: "certifications" },
    { href: "#projects", label: "Projects", id: "projects" },
  ];

  return (
    <NavigationMenu onValueChange={() => setActiveSection(null)}>
      <NavigationMenuList className={cn(
        orientation === "vertical" ? "flex-col items-stretch" : "flex-row items-center space-x-4" // Adjusting for horizontal orientation
      )}>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.id} className="w-full">
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.id)}
              className={cn(
                navigationMenuTriggerStyle(),
                "w-full transition-all duration-200 ease-in-out flex items-center justify-between py-2", // Added consistent padding
                orientation === "vertical" ? "justify-between px-4" : "",
                activeSection === item.id ? "bg-accent" : "hover:bg-accent/50",
              )}
            >
              <span>{item.label}</span>
              {orientation === "vertical" && (
                activeSection === item.id ? 
                <ChevronUp className="h-4 w-4 ml-2" /> : 
                <ChevronDown className="h-4 w-4 ml-2" />
              )}
            </a>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
