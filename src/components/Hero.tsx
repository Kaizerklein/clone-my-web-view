import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 leading-tight">
            SPARK MARKETING{" "}
            <span className="text-gradient">AGENCY</span>
          </h1>
          
          {/* Subheading */}
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            ELEVATE YOUR BUSINESS,<br />
            <span className="text-gradient">IGNITE TOMORROW'S INNOVATION.</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting Digital Excellence for a Future<br />
            Beyond Imagination.
          </p>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="hover-glow group text-lg px-8 py-6 animate-glow-pulse"
          >
            Schedule a free consultation
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;