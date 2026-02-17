import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const LocationSection = () => {
  return (
    <section id="location" className="section-padding bg-background grain-overlay">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">Find Us</span>
          <h2 className="section-title mt-3 mb-4">
            Visit <span className="text-gradient-gold">Us</span> Today
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <AnimateOnScroll animation="animate-slide-in-left">
            <div className="rounded-2xl overflow-hidden h-[300px] md:h-[400px] border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.3!2d73.7562!3d20.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAwJzI5LjciTiA3M8KwNDUnMjIuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Krishna Restaurant Location"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-slide-in-right" delay={200}>
            <div className="flex flex-col justify-center gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl gradient-haldi flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Shop 1-2, Jubilee Park, Near Bhosla Military School Gate, College Road, Nashik, Maharashtra
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl gradient-haldi flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Hours</h3>
                  <p className="text-muted-foreground text-sm">Open Daily · Closes at 11:00 PM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl gradient-haldi flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Phone</h3>
                  <a href="tel:+919822148358" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    +91 98221 48358
                  </a>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=20.0082385838,73.7562430522"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-haldi text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm inline-flex items-center gap-2 w-fit hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
