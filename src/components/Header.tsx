import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ESTIMATE</h1>
              <p className="text-xs text-muted-foreground -mt-1">MARKETING</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              HOME
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              ABOUT
            </Link>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              SERVICES
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              PROJECTS
            </a>
            <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              BLOG
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="default" className="hover-glow group">
            Free consultation
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;