import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    image: string;
    review: string;
    rating: number;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-urbanet urbanet-card-hover">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-urbanet-gold text-urbanet-gold" />
        ))}
      </div>

      {/* Review */}
      <p className="text-muted-foreground leading-relaxed mb-6">
        "{testimonial.review}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
