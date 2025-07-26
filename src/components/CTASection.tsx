import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 font-inter">
            Bring Your Club to Life
          </h2>
          <p className="text-xl text-text-muted mb-8 font-inter font-medium">
            Request access. Make glow.
          </p>
          <Button 
            size="lg" 
            className="bg-geometric-white text-background hover:bg-geometric-white/90 px-8 py-3 text-lg font-semibold rounded-full font-inter shadow-neon-glow hover:shadow-neon-glow transition-all duration-300"
          >
            Request Demo
          </Button>
        </div>
        
        {/* Geometric shapes */}
        <div className="flex items-center justify-center space-x-4 mt-16">
          <div className="w-8 h-8 bg-geometric-white rounded-sm"></div>
          <div className="w-8 h-8 bg-geometric-white rounded-full"></div>
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-geometric-white"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;