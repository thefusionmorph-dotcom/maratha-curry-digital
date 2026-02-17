import { motion } from "framer-motion";
import heroImg from "@/assets/hero-thali.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Traditional Maharashtrian Thali"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-4"
        >
          <span className="inline-block text-xs md:text-sm tracking-[0.3em] uppercase text-primary font-medium border border-primary/30 px-4 py-1.5 rounded-full">
            Pure Vegetarian
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-tight mb-4"
        >
          Shree Krishna
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xs md:text-sm tracking-[0.25em] uppercase text-primary/80 mb-6 font-medium"
        >
          by Maratha Curry
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base md:text-xl text-cream/80 max-w-xl mx-auto mb-10 font-light"
        >
          Authentic Maharashtrian flavours, served with love and tradition since generations. Pure veg dining in the heart of Nashik.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <a
            href="https://www.zomato.com/nashik/shree-krishna-1-college-road"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-haldi text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Order on Zomato
          </a>
          <a
            href="https://www.swiggy.com/city/nashik/shree-krishna-veg-restaurant-nas-college-road-rest1320929"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-all hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Order on Swiggy
          </a>
          <a
            href="#book"
            className="border border-cream/30 text-cream px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-cream/10 transition-all hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Book a Table
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-cream/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
