import { useState } from "react";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "./AnimateOnScroll";

const BookTableSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="book" className="section-padding bg-secondary grain-overlay">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll className="text-center mb-10 md:mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">Reservation</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4 text-secondary-foreground">
            Book Your Table
          </h2>
          <p className="text-secondary-foreground/70 max-w-md mx-auto">
            Reserve your spot for a memorable dining experience with your family and loved ones.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-accent text-accent-foreground rounded-2xl p-10 text-center"
            >
              <span className="text-5xl mb-4 block">🙏</span>
              <h3 className="font-display text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-accent-foreground/80">We'll confirm your reservation shortly. See you soon!</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card/10 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl p-6 md:p-10">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-secondary-foreground/60 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    placeholder="Your Name"
                    className="w-full bg-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/40 border border-secondary-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-secondary-foreground/60 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={15}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/40 border border-secondary-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-secondary-foreground/60 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full bg-secondary-foreground/10 text-secondary-foreground border border-secondary-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-secondary-foreground/60 mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    required
                    className="w-full bg-secondary-foreground/10 text-secondary-foreground border border-secondary-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-wider text-secondary-foreground/60 mb-2">
                    Number of Guests
                  </label>
                  <select
                    required
                    className="w-full bg-secondary-foreground/10 text-secondary-foreground border border-secondary-foreground/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Select</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                    ))}
                    <option value="9+">9+ Guests</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-6 gradient-haldi text-primary-foreground py-4 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
              >
                Reserve My Table
              </button>
            </form>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default BookTableSection;
