import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  return (
    <section id="how" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon="square"
            title="Booking."
            subtitle="Fast"
          />
          <FeatureCard
            icon="circle"
            title="First."
            subtitle="Mobile"
          />
          <FeatureCard
            icon="triangle"
            title="Control."
            subtitle="Owners"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;