import { AnimateOnScroll } from "./AnimateOnScroll";
import foodDosa from "@/assets/food-dosa.jpg";
import foodVada from "@/assets/food-vada.jpg";
import foodPaneer from "@/assets/food-paneer.jpg";
import foodMisal from "@/assets/food-misal.jpg";
import foodBiryani from "@/assets/food-biryani.jpg";
import foodDessert from "@/assets/food-dessert.jpg";

const menuItems = [
  { name: "South Indian Dosa", category: "South Indian", image: foodDosa, desc: "Crispy golden dosa served with sambar & chutneys" },
  { name: "Vada with Chutney", category: "South Indian", image: foodVada, desc: "Crispy medu vada served with coconut chutney & sambar" },
  { name: "Paneer Masala", category: "North Indian", image: foodPaneer, desc: "Rich and creamy paneer in aromatic gravy" },
  { name: "Misal Pav", category: "Maharashtrian", image: foodMisal, desc: "Spicy sprouted moth curry topped with farsan" },
  { name: "Veg Biryani", category: "Rice", image: foodBiryani, desc: "Fragrant rice cooked with vegetables and spices" },
  { name: "Gulab Jamun", category: "Dessert", image: foodDessert, desc: "Soft milk dumplings in rose-scented sugar syrup" },
];

const MenuSection = () => {
  return (
    <section id="menu" className="section-padding bg-warm-bg grain-overlay">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">Our Specialities</span>
          <h2 className="section-title mt-3 mb-4">
            Flavours That <span className="text-gradient-gold">Speak</span> Tradition
          </h2>
          <p className="section-subtitle mx-auto">
            From traditional Maharashtrian thalis to South Indian classics — every dish is crafted with love and served with warmth.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <AnimateOnScroll key={item.name} delay={index * 100} animation="animate-fade-up">
              <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50">
                <div className="overflow-hidden h-52">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary font-semibold">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-1.5">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
