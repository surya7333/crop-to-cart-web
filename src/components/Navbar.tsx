import { Button } from "@/components/ui/button";
import { Sprout, Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-soft">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-primary">
              <Sprout className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">AgriConnect</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-muted-foreground hover:text-primary transition-smooth">
              Products
            </a>
            <a href="#farmers" className="text-muted-foreground hover:text-primary transition-smooth">
              For Farmers
            </a>
            <a href="#buyers" className="text-muted-foreground hover:text-primary transition-smooth">
              For Buyers
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
              About
            </a>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button variant="default" className="hidden md:inline-flex">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};