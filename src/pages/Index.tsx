import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";
import trioImage from "@/assets/2T5A8639.JPEG";
import glassImage from "@/assets/2T5A8595.JPEG";

// Lazy load components that aren't immediately visible
const ProductSection = lazy(() => import("@/components/ProductSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Marquee />
      <Hero />

      <Suspense fallback={<div className="h-screen" />}>
        {/* The Trio Section */}
        <ProductSection
          eyebrow="THE DO-IT-ALL SET"
          title="Get The Trio"
          description="Three oils for all your cooking, baking, frying, and dressing."
          image={trioImage}
          imageAlt="The Trio - Three olive oil squeeze bottles"
          ctaText="Shop The Trios"
          bgColor="light"
        />

        {/* Glass Bottles Section */}
        <ProductSection
          eyebrow="YOU ASKED FOR IT"
          title="Graza in Glass"
          description="Same oil you know and love. Now in glass."
          image={glassImage}
          imageAlt="Graza in Glass - Premium glass bottles"
          ctaText="Shop Now"
          reversed={true}
          bgColor="dark"
        />

        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
