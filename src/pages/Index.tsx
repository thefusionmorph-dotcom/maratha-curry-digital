import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import OrderSection from "@/components/OrderSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import BookTableSection from "@/components/BookTableSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <OrderSection />
      <ReviewsSection />
      <GallerySection />
      <BookTableSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
