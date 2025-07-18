import { Button } from "@/components/ui/button";
import { Phone, Mail, Star } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Star className="h-8 w-8 text-primary fill-primary" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              RepairYourStars
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>07398243131</span>
              </div>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@repairyourstars.com</span>
              </div>
            </div>
            <Button variant="professional" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};