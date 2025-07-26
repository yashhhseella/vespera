interface FeatureCardProps {
  icon: 'square' | 'circle' | 'triangle';
  title: string;
  subtitle: string;
}

const FeatureCard = ({ icon, title, subtitle }: FeatureCardProps) => {
  const renderIcon = () => {
    switch (icon) {
      case 'square':
        return <div className="w-16 h-16 bg-text-muted rounded-lg"></div>;
      case 'circle':
        return <div className="w-16 h-16 bg-text-muted rounded-full"></div>;
      case 'triangle':
        return (
          <div className="w-0 h-0 border-l-8 border-r-8 border-b-14 border-l-transparent border-r-transparent border-b-text-muted"></div>
        );
    }
  };

  return (
    <div className="neon-glow-card p-8 text-center group cursor-pointer transition-all duration-300 hover:shadow-neon-glow">
      <div className="flex justify-center mb-6">
        {renderIcon()}
      </div>
      <h3 className="text-sm text-text-muted mb-2 uppercase tracking-wider font-medium">
        {subtitle}
      </h3>
      <h2 className="text-2xl font-bold text-foreground font-inter">
        {title}
      </h2>
    </div>
  );
};

export default FeatureCard;