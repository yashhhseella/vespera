import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Book the Night.
          </h1>
          <p className="text-3xl md:text-5xl text-text-muted mb-12">
            VIP tables. Seamless.
          </p>
          <Button 
            size="lg" 
            className="bg-geometric-white text-background hover:bg-geometric-white/90 px-8 py-3 text-lg font-medium rounded-full"
          >
            Request Demo
          </Button>
        </div>
        
        {/* Geometric shapes at bottom */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <div className="w-8 h-8 bg-geometric-white rounded-sm"></div>
          <div className="w-8 h-8 bg-geometric-white rounded-full"></div>
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-geometric-white"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;