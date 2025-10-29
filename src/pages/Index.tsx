import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";

import productTrio from "@/assets/2T5A8639.JPEG";
import productGlass from "@/assets/2T5A8595.JPEG";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Marquee />
      <Hero />
      
      {/* The Trio Section */}
      <ProductSection
        eyebrow="THE DO-IT-ALL SET"
        title="Get The Trio"
        description="Three oils for all your cooking, baking, frying, and dressing."
        image={productTrio}
        imageAlt="The Trio - Three olive oil squeeze bottles"
        ctaText="Shop The Trios"
        bgColor="light"
      />

      {/* Glass Bottles Section */}
      <ProductSection
        eyebrow="YOU ASKED FOR IT"
        title="Graza in Glass"
        description="Same oil you know and love. Now in glass."
        image={productGlass}
        imageAlt="Graza in Glass - Premium glass bottles"
        ctaText="Shop Now"
        reversed={true}
        bgColor="dark"
      />

      <Footer />
    </div>
  );
};

export default Index;
