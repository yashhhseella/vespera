import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold text-foreground font-inter">
            Vespera<span className="text-primary">®</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#why" className="text-text-muted hover:text-foreground transition-colors font-inter">
              Why Vespera
            </a>
            <a href="#how" className="text-text-muted hover:text-foreground transition-colors font-inter">
              How It Works
            </a>
            <a href="#testimonials" className="text-text-muted hover:text-foreground transition-colors font-inter">
              Testimonials
            </a>
          </div>
        </div>
        <Button variant="outline" className="bg-background border-border-subtle text-foreground hover:bg-card-hover font-inter font-medium">
          Request Demo
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;