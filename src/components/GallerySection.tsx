import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import foodDosa from "@/assets/food-dosa.jpg";
import foodVada from "@/assets/food-vada.jpg";
import foodPaneer from "@/assets/food-paneer.jpg";
import foodMisal from "@/assets/food-misal.jpg";
import foodBiryani from "@/assets/food-biryani.jpg";
import foodDessert from "@/assets/food-dessert.jpg";
import heroThali from "@/assets/hero-thali.jpg";
import interiorImg from "@/assets/restaurant-interior.jpg";

const images = [
  { src: heroThali, alt: "Maharashtrian Thali" },
  { src: foodDosa, alt: "South Indian Dosa" },
  { src: interiorImg, alt: "Restaurant Interior" },
  { src: foodPaneer, alt: "Paneer Masala" },
  { src: foodMisal, alt: "Misal Pav" },
  { src: foodVada, alt: "Vada with Chutney" },
  { src: foodBiryani, alt: "Veg Biryani" },
  { src: foodDessert, alt: "Gulab Jamun" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-warm-bg grain-overlay">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">Gallery</span>
          <h2 className="section-title mt-3 mb-4">
            A Visual <span className="text-gradient-gold">Feast</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, index) => (
            <AnimateOnScroll key={index} delay={index * 80} animation="animate-scale-in">
              <div
                className={`overflow-hidden rounded-xl cursor-pointer group ${
                  index === 0 || index === 2 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    index === 0 || index === 2 ? "h-48 md:h-full" : "h-48 md:h-52"
                  }`}
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-cream bg-foreground/50 rounded-full p-2 hover:bg-foreground/70 transition"
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
