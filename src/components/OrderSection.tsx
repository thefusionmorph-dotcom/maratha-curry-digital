import { AnimateOnScroll } from "./AnimateOnScroll";

const OrderSection = () => {
  return (
    <section id="order" className="section-padding bg-secondary text-secondary-foreground grain-overlay">
      <div className="max-w-4xl mx-auto text-center">
        <AnimateOnScroll>
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">Delivery</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4 text-secondary-foreground">
            Order Online, Enjoy at Home
          </h2>
          <p className="text-secondary-foreground/70 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Can't visit us? Get your favourite Maharashtrian dishes delivered straight to your doorstep through Zomato or Swiggy.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.zomato.com/nashik/shree-krishna-1-college-road"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-haldi text-primary-foreground px-10 py-4 rounded-xl font-bold text-base hover:shadow-2xl hover:shadow-primary/40 transition-all hover:-translate-y-1 inline-flex items-center justify-center gap-3"
          >
            <span className="text-2xl">🍽️</span>
            Order on Zomato
          </a>
          <a
            href="https://www.swiggy.com/city/nashik/shree-krishna-veg-restaurant-nas-college-road-rest1320929"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cream text-foreground px-10 py-4 rounded-xl font-bold text-base hover:shadow-2xl transition-all hover:-translate-y-1 inline-flex items-center justify-center gap-3"
          >
            <span className="text-2xl">🛵</span>
            Order on Swiggy
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default OrderSection;
