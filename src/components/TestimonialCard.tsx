interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

const TestimonialCard = ({ quote, name, role }: TestimonialCardProps) => {
  return (
    <div className="bg-card hover:bg-card-hover transition-colors duration-300 rounded-2xl p-8">
      <blockquote className="text-foreground text-lg mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      <div>
        <div className="font-semibold text-foreground">{name}</div>
        <div className="text-text-muted text-sm">{role}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;