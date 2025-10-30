
interface ProductSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaText: string;
  reversed?: boolean;
  bgColor?: "light" | "dark";
}

const ProductSection = ({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  ctaText,
  reversed = false,
  bgColor = "light"
}: ProductSectionProps) => {
  const isDark = bgColor === "dark";

  return (
    <section className={`section-padding ${isDark ? 'bg-secondary text-secondary-foreground' : 'bg-background'}`}>
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
          {/* Image */}
          <div className={`${reversed ? 'md:order-2' : ''}`}>
            <div className="relative hover-lift max-w-md mx-auto">
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`${reversed ? 'md:order-1' : ''} space-y-6`}>
            {eyebrow && (
              <p className="text-sm font-bold tracking-widest uppercase text-primary">
                {eyebrow}
              </p>
            )}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {title}
            </h2>
            <p className={`text-lg md:text-xl ${isDark ? 'text-secondary-foreground/80' : 'text-muted-foreground'}`}>
              {description}
            </p>
            <button className="btn-hero">
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
