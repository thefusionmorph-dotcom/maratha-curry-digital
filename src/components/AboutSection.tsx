import { AnimateOnScroll } from "./AnimateOnScroll";
import interiorImg from "@/assets/restaurant-interior.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background grain-overlay">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimateOnScroll animation="animate-slide-in-left">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={interiorImg}
                  alt="Shree Krishna restaurant interior"
                  className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 gradient-haldi rounded-xl p-4 md:p-6 shadow-xl">
                <div className="text-center">
                  <span className="block font-display text-3xl md:text-4xl font-bold text-primary-foreground">4.2</span>
                  <span className="text-xs text-primary-foreground/80">★ Rating</span>
                  <span className="block text-[10px] text-primary-foreground/60 mt-0.5">106+ Reviews</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll animation="animate-slide-in-right" delay={200}>
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">Our Story</span>
              <h2 className="section-title mt-3 mb-6">
                A Taste of <span className="text-gradient-gold">Maharashtrian</span> Tradition
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to Shree Krishna Pure Veg Restaurant by Maratha Curry — where every dish is a celebration of authentic Maharashtrian and Indian vegetarian cuisine.
                </p>
                <p>
                  Located in the heart of College Road, Nashik, we offer a wide range of traditional Indian thalis, South Indian specialities, and beloved Maharashtrian dishes. From crispy dosas to rich puran poli, every item is prepared with the freshest ingredients and time-honoured recipes.
                </p>
                <p>
                  Our commitment to pure vegetarian food, warm hospitality, and family-friendly dining makes us a cherished destination for food lovers across Nashik.
                </p>
              </div>

              <div className="flex gap-8 mt-8">
                <div>
                  <span className="block font-display text-2xl font-bold text-foreground">100%</span>
                  <span className="text-xs text-muted-foreground">Pure Veg</span>
                </div>
                <div className="w-px bg-border" />
                <div>
                  <span className="block font-display text-2xl font-bold text-foreground">₹500</span>
                  <span className="text-xs text-muted-foreground">For Two</span>
                </div>
                <div className="w-px bg-border" />
                <div>
                  <span className="block font-display text-2xl font-bold text-foreground">11 PM</span>
                  <span className="text-xs text-muted-foreground">Open Till</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
