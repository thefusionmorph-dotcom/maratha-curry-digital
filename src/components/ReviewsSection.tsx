import { Star } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const reviews = [
  {
    name: "Food Lover",
    rating: 5,
    text: "Amazing pure veg food! The thali is a must-try. Authentic Maharashtrian taste with great service.",
    source: "Zomato",
  },
  {
    name: "Regular Customer",
    rating: 4,
    text: "Great variety of dishes including South Indian with varieties of Dosa and excellent North Indian options. Value for money!",
    source: "Google",
  },
  {
    name: "Family Diner",
    rating: 5,
    text: "Perfect family restaurant. Traditional Indian thalis and plant-based dishes with a wide range of options. Highly recommended!",
    source: "Zomato",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-padding bg-background grain-overlay">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">Testimonials</span>
          <h2 className="section-title mt-3 mb-4">
            What Our <span className="text-gradient-gold">Guests</span> Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={20}
                className={i <= 4 ? "fill-primary text-primary" : "fill-primary/40 text-primary/40"}
              />
            ))}
            <span className="text-muted-foreground ml-2 text-sm">4.2 / 5 from 106+ reviews</span>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <AnimateOnScroll key={index} delay={index * 150} animation="animate-fade-up">
              <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-500">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < review.rating ? "fill-primary text-primary" : "text-border"}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-sm font-semibold text-foreground">{review.name}</span>
                  </div>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-primary font-semibold bg-primary/10 px-2.5 py-1 rounded-full">
                    {review.source}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
