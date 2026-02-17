const Footer = () => {
  return (
    <footer className="bg-foreground text-cream grain-overlay">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-cream mb-1">Shree Krishna</h3>
            <p className="text-xs tracking-[0.2em] uppercase text-cream/50 mb-4">Pure Veg Restaurant by Maratha Curry</p>
            <p className="text-cream/60 text-sm leading-relaxed">
              Savour the warmth of Maharashtrian tradition in every bite. Pure vegetarian, always.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-cream mb-4 uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {["About", "Menu", "Gallery", "Book a Table", "Visit Us"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, "").replace("bookatable", "book").replace("visitus", "location").replace("about", "about")}`}
                  className="text-cream/50 hover:text-primary text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Order */}
          <div>
            <h4 className="font-display text-sm font-semibold text-cream mb-4 uppercase tracking-wider">Order Online</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.zomato.com/nashik/shree-krishna-1-college-road"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-primary text-sm transition-colors"
              >
                Order on Zomato →
              </a>
              <a
                href="https://www.swiggy.com/city/nashik/shree-krishna-veg-restaurant-nas-college-road-rest1320929"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-primary text-sm transition-colors"
              >
                Order on Swiggy →
              </a>
              <a href="tel:+919822148358" className="text-cream/50 hover:text-primary text-sm transition-colors">
                Call: +91 98221 48358
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-10 pt-8 text-center">
          <p className="text-cream/30 text-xs">
            © {new Date().getFullYear()} Shree Krishna Pure Veg Restaurant by Maratha Curry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
