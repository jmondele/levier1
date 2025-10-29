const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/2T5A8620.JPEG)',
          filter: 'brightness(0.7)'
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
          More
          <br />
          <span className="opacity-90">Snackers</span>
          <br />
          <span className="opacity-90">Please!!</span>
          
        </h1>
        <button className="btn-hero font-serif mt-8">
          SHOP NOW
        </button>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-muted/95 backdrop-blur-sm py-4 px-4">
        <div className="container mx-auto flex items-center justify-center gap-8 text-sm">
          <span className="font-serif font-medium"></span>
          <span className="font-serif font-medium">" El Mercado Ni sabe "</span>
          <span className="font-serif text-muted-foreground">/</span>
          <span className="font-serif text-muted-foreground"> " El Mercado Ni sabe "</span>
          <span className="font-serif font-medium"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
