interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

const TestimonialCard = ({ quote, name, role }: TestimonialCardProps) => {
  return (
    <div className="neon-glow-card p-8 transition-all duration-300 hover:shadow-neon-glow">
      <blockquote className="text-foreground text-lg mb-6 leading-relaxed font-inter">
        "{quote}"
      </blockquote>
      <div>
        <div className="font-semibold text-foreground font-inter">{name}</div>
        <div className="text-text-muted text-sm font-inter">{role}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;