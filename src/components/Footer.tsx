const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground section-padding">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-3xl font-bold mb-4">GRAZA</h3>
            <p className="text-sm text-secondary-foreground/70">
              Premium extra virgin olive oil for all your cooking needs.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-widest uppercase">Shop</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">The Trio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Glass Bottles</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Squeeze Bottles</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Get Refills</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-widest uppercase">About</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Olives</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-widest uppercase">Support</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>&copy; 2025 Graza. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
