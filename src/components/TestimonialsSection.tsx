import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Booking VIPs is smooth now - guests love the glow.",
      name: "J. Lee",
      role: "Owner"
    },
    {
      quote: "Beautiful interface, booking is easy.",
      name: "Nina R.",
      role: "Experience"
    },
    {
      quote: "We doubled sales and cut calls a ton.",
      name: "Anders G.",
      role: "GM, NightShift"
    },
    {
      quote: "All reservations are digital and fast.",
      name: "Sam P.",
      role: "Host"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Clubs Love Vespera
          </h2>
          <p className="text-2xl text-text-muted">
            What they say
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;